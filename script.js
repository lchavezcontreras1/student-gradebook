$(document).ready(function () {
    $("#form-button").click(addObject);
    $("#by-name").click(sortByName);
    $("#by-grade").click(sortByGrade);
    addRow();
});
let student = [
    {name: "Sally", grade: 56},
    {name: "Jill", grade: 80},
    {name: "Ted", grade: 62},
    {name: "Jim", grade: 82},
    {name: "Sue", grade: 74},
]

function sortByName() {
    function byName(a, b) {
        if (a.name < b.name)
            return -1;
        else if (a.name > b.name)
            return 1;
        else
            return 0;
    }

    student.sort(byName);
}

function sortByGrade() {
    function byGrade(a, b) {
        if (a.grade < b.grade)
            return -1;
        else if (a.grade > b.grade)
            return 1;
        else
            return 0;
    }

    student.sort(byGrade);
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

        let nameCell = $("<td>");
        tr.append(nameCell);
        nameCell.text(anItem.name);

        let gradeCell = $("<td>");
        tr.append(gradeCell);
        gradeCell.text(`${anItem.grade}%`);
    }
}

function addObject(e) {
    e.preventDefault();
    let name = $("select#fullname").val();
    let grade = parseFloat($("input#grade").val());
    let newObject = {
        name: name,
        grade: grade
    };
    student.push(newObject);
    addRow();
}






