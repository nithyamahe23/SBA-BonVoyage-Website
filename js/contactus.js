document.getElementById("home").addEventListener("click", function(){
    window.location = "../pages/home.html";
});

//To change color to blue on mouse over of a list item
const listItems = document.querySelectorAll("li");
listItems.forEach(listItem => 
    {
        listItem.style.color = 'black';
        listItem.style.textDecoration = 'none';
    }
    );
listItems.forEach(listItem => listItem.addEventListener('mouseover',()=> 
    {
        listItem.style.color = 'blue';
        listItem.style.textDecoration = 'underline';
        listItem.style.cursor = 'pointer';
    }));

listItems.forEach(listItem => listItem.addEventListener('mouseout',()=> 
{
    listItem.style.color = 'black';
    listItem.style.textDecoration = 'none';
}));
