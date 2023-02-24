function addstudent() {
    // alert('Working');

    var StudentName = document.getElementById("addingstudents").value;
    console.log(StudentName, "StudentName");

    var StudentList = JSON.parse(localStorage.getItem("StudentList")) || [];
    StudentList.push(StudentName);
    localStorage.setItem("StudentList", JSON.stringify(StudentList));
    markingAttendance();
    
}

function markingAttendance(){

    var StudentList = JSON.parse(localStorage.getItem("StudentList"));
    console.log(StudentList, "StudentList");

    var divFromHTML = document.getElementById("markingAttendance");
    console.log(divFromHTML, "divFromHTML");

    var students = []

    for (var i=0; i <StudentList.length; i++){
        students += `<div><p>${StudentList[i]}</p></div>`
    }

    console.log(students, "students")
    divFromHTML.innerHTML = students;
}
markingAttendance()



function displayingstudentlist(){

    var StudentList = JSON.parse(localStorage.getItem("StudentList"));
    console.log(StudentList, "StudentList");

    var divFromHTML = document.getElementById("displayingstudentlist");
    console.log(divFromHTML, "divFromHTML");

    var students = []

    for (var i=0; i <StudentList.length; i++){
        students += `<div><p>${StudentList[i]}</p></div>`;
    }

    console.log(students, "students")
    divFromHTML.innerHTML = students;
}
displayingstudentlist()