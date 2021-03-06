$(document).ready(function () {
    addRow();
    $("#form-button").click(addObject);
    $("button#by-name").click(sortByName);
    $("button#by-grade").click(sortByGrade);

});
let student = [
    {firstName: "Sally",lastName: "Johnson", grade: [56]},
    {firstName: "Jill", lastName: "Brown" , grade:[80]},
    {firstName: "Ted", lastName: "Miller", grade: [62]},
    {firstName: "Jim", lastName: "Garcia", grade: [82]},
    {firstName: "Sue", lastName: "Williams", grade: [74]},
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
function byLowestToHighGrade(a , b) {
    if(a.grade < b.grade)
        return -1
    else if (a.grade > b.grade)
        return 1;
    else
        return 0;
}
function byHighestToLowestGrade(a , b) {
    if(a.grade > b.grade)
        return -1
    else if (a.grade < b.grade)
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
    student.sort(byLastName);
    addRow();
}
let nameCount = 0;
function isEven (someNumber){
    return (someNumber % 2 === 0);
}
function sortByName(){
    nameCount++;
    if (isEven(nameCount) === false){
        sortByFirstName();
        console.log(nameCount);
        console.log(0);
    }else if (isEven(nameCount) === true){
        sortByLastName();
        console.log(nameCount);
        console.log(1);
    }
}
//clear and prints sort by grade
function sortByHTLGrade(){
    $("tbody").empty();
    student.sort(byHighestToLowestGrade);
    addRow();
}
function sortByLTHGrade(){
    $("tbody").empty();
    student.sort(byLowestToHighGrade);
    addRow();
}
let gradeCount = 0;
function sortByGrade(){
    gradeCount++;
    if (isEven(gradeCount) === false){
        sortByLTHGrade();
        console.log(gradeCount);
        console.log(0);
    }else if (isEven(gradeCount) === true){
        sortByHTLGrade();
        console.log(gradeCount);
        console.log(1);
    }
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
    for (let anItem of student) {
        if (iFirstName === anItem.firstName) {
            if(iLastName === anItem.lastName){
                anItem.grade.push(iGrade);
                addRow();
                console.log(student);
                console.log(iGrade);
            }else{
                console.log("broke");
                break;
            }
        } else {
            student.push(newObject);
            addRow();
            console.log(newObject);
            break;
        }
    }
}






