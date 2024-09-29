const data = [
    { name: 'Rahul', age: 25, city: 'New Delhi' },
    { name: 'Vijay', age: 30, city: 'Muzaffarpur' },
    { name: 'Gaurav', age: 22, city: 'Noida' },
];

const userData = {
    userName : "Medhinisri",
    history : [
        {"BOOKING ID" : 1234, DESTINATION:"Florida",STATUS:"Completed"},
        {"BOOKING ID" : 2345, DESTINATION:"Smoky Mountains",STATUS:"Completed"},
        {"BOOKING ID" : 1234, DESTINATION:"New York",STATUS:"Scheduled"}
    ]
};

function createTableWithForEach() {
    let h1 = document.getElementById("userName");
    h1.innerHTML += userData.userName;
    let tableHTML = '<table><tr>';

            Object.keys(userData.history[0]).forEach(key => {
                tableHTML += `<th>${key}</th>`;
            });

            tableHTML += '</tr>';

            userData.history.forEach(item => {
                tableHTML += '<tr>';
                Object.values(item).forEach(value => {
                    tableHTML += `<td>${value}</td>`;
                });
                tableHTML += '</tr>';
            });

            tableHTML += '</table>';


    //document.body.appendChild(table);
    document.getElementById("tableDiv").innerHTML += tableHTML;
}

createTableWithForEach();