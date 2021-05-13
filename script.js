
$(document).ready(function () {
    addRow();
    $("#form-button").click(addObject);
    $("button#by-name").click(sortByFirstName,sortByLastName).toggle(display);
    $("button#by-grade").click(sortByGrade);

});
let student = [
    {firstName: "Sally", lastName: "Johnson", grade: 56},
    {firstName: "Jill", lastName: "Brown" , grade: 80},
    {firstName: "Ted", lastName: "Miller", grade: 62},
    {firstName: "Jim", lastName: "Garcia", grade: 82},
    {firstName: "Sue", lastName: "Williams", grade: 74},
]
//sorts array by lastName
function byFirstName(a , b) {
    if (a.firstName < b.firstName)
        return -1;
    else if (a.firstName > b.firstName)
        return 1;
    else
        return 0;
}
function byLastName(a , b) {
    if (a.lastName < b.lastName)
        return -1;
    else if (a.lastName > b.lastName)
        return 1;
    else
        return 0;
}
//sorts array by grade
function byGrade(a , b) {
    if(a.grade < b.grade)
        return -1
    else if (a.grade > b.grade)
        return 1;
    else
        return 0;
}

// clear and prints sort by name
function sortByFirstName(){
    $("tbody").empty();
    student.sort(byFirstName);
    addRow();
}
function sortByLastName(){
    $("tbody").empty();
    student.sort(byFirstName);
    addRow();
}

//clear and prints sort by grade
function sortByGrade(){
    $("tbody").empty();
    student.sort(byGrade);
    addRow();
}

function addRow() {
    let theTable = $("tbody");
    theTable.empty();
    const start = 0;
    const stop = student.length;
    for (let i = start; i < stop; i++) {
        let anItem = student[i];
        let tr = $("<tr>");
        theTable.append(tr);

        let firstCell = $("<td>")
        tr.append(firstCell);
        firstCell.text(anItem.firstName);

        let lastCell = $("<td>");
        tr.append(lastCell);
        lastCell.text(anItem.lastName);

        let gradeCell = $("<td>");
        tr.append(gradeCell);
        gradeCell.text(`${anItem.grade}%`);
    }
}

function addObject(e) {
    e.preventDefault();
    let iFirstName = $("select#firstname").val();
    let iLastName= $("select#lastname").val();
    let iGrade = parseFloat($("input#grade").val());
    let newObject = {
        firstName: iFirstName,
        lastName: iLastName,
        grade: iGrade
    };
    // for (let anItem of student) {
    //     let className = "." + anItem.name;
    //     let td = $(className);
    //     if (iName === anItem.name) {
    //         anItem.grade.push(iGrade);
    //         //create a td
    //         let gradeCell = $("<td>");
    //         td.append(gradeCell);
    //         gradeCell.text(`${anItem.grade}%`);
    //         break;
    //         //append td after td#anItem.name
    //     } else {
            student.push(newObject);
            addRow();
    //         break;
    //     }
    // }
}






