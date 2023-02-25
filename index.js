// function addstudent() {
//     // alert('Working');

//     var StudentName = document.getElementById("addingstudents").value;
//     console.log(StudentName, "StudentName");

//     var StudentList = JSON.parse(localStorage.getItem("StudentList")) || [];
//     StudentList.push(StudentName);
//     localStorage.setItem("StudentList", JSON.stringify(StudentList));
//     markingAttendance();
    
// }

function addstudent() {
    // alert('Working');

    var StudentName = document.getElementById("addingstudents").value;
    console.log(StudentName, "StudentName");

    var StudentList = JSON.parse(localStorage.getItem("StudentList")) || [];

    // to store in key and value pair (object)
    StudentList.push({nameOfStudent : StudentName, Attendance :[]}); 
    localStorage.setItem("StudentList", JSON.stringify(StudentList));

    
    document.getElementById("addingstudents").value = "";
    markingAttendance();
    displayingstudentlist();
    
}

function gerRealTime(){

    // to print the data and Time
    var dateAndtime = new Date();  
    // console.log(dateAndtime);

 
    // to print the data in date month and year format
    var date = dateAndtime.toJSON().slice(0,10);
    console.log(date);

    // add data in the datahere
    var Adddate = document.getElementById("dateHere");
    Adddate.innerText = date;
    
}
gerRealTime()

// function markingAttendance(){

//     // Taking data from Storage
//     var StudentList = JSON.parse(localStorage.getItem("StudentList"));
//     console.log(StudentList, "StudentList");

    
//     // taking tags from html
//     var divFromHTML = document.getElementById("markingAttendance");
//     console.log(divFromHTML, "divFromHTML");

//     var students = []

//     for (var i=0; i <StudentList.length; i++){
//         students += `<div><p>${StudentList[i]}</p></div>`
//     }

//     console.log(students, "students")
//     divFromHTML.innerHTML = students;
// }
// markingAttendance()

function markingAttendance(){

    // Taking data from Storage
    var StudentList = JSON.parse(localStorage.getItem("StudentList"));
    console.log(StudentList, "StudentList");

    
    // taking tags from html
    var divFromHTML = document.getElementById("markingAttendance");
    console.log(divFromHTML, "divFromHTML");

    var students = []

    for (var i=0; i <StudentList.length; i++){
        students += `<div id = "content"><p>${StudentList[i].nameOfStudent}</p>
        <p><i onclick="present(${i})" class="fa-solid fa-check"></i></p>
        <p><i onclick ="absent(${i})" class="fa-solid fa-xmark"></i></p></div>`
    }
 
    console.log(students, "students")
    divFromHTML.innerHTML = students;
}
markingAttendance()

function present(index){
    // alert('working'); 
    console.log("index", index)
    var dateAndtime = new Date();
    var date = dateAndtime.toJSON().slice(0,10);
    console.log(date, "date heree")

    var studentlistFromLS = JSON.parse(localStorage.getItem("StudentList"));
    var user = studentlistFromLS[index];
    // console.log(user, "user here");
    // console.log(user.Attendance.length, "array");

    var falg = false;
 
    for (var i=0; i < user.Attendance.length; i++ ){
        console.log(user.Attendance[i])
        if(user.Attendance[i][date]){
            console.log(user.Attendance[i][date], "user.Attendance[i][date]")
            falg = true;
        }
    }
    
    if(falg===false){
        var obj = {};
        obj [date] = "present";
        user.Attendance.push(obj);
        // console.lo(studentlistFromLS)
        localStorage.setItem("StudentList", JSON.stringify(studentlistFromLS));
    }else{
        alert("already Marked !")
    }
    
}

function absent(index){
    // alert('working');
    console.log("index", index)
    var dateAndtime = new Date();
    var date = dateAndtime.toJSON().slice(0,10);

    // to get the dat from localStorage
    var studentlistFromLS = JSON.parse(localStorage.getItem("StudentList"));
    var user = studentlistFromLS[index];

    // console.log(user, "user here");
    // console.log(user.Attendance.length, "array");

    var falg = false;

    for (var i=0; i < user.Attendance.length; i++ ){
        console.log(user.Attendance[i])
        if(user.Attendance[i][date]){
            console.log(user.Attendance[i][date], "user.Attendance[i][date]")
            falg = true;
        }
    }
    
    if(falg===false){
        var obj = {};
        obj [date] = "absent";
        user.Attendance.push(obj);
        // console.lo(studentlistFromLS)
        localStorage.setItem("StudentList", JSON.stringify(studentlistFromLS));
    }else{
        alert("already Marked !")
    }
}


function displayingstudentlist(){

    // Taking data from Storage
    var StudentList = JSON.parse(localStorage.getItem("StudentList"));
    console.log(StudentList, "StudentList");


    // taking tags from html
    var divFromHTML = document.getElementById("displayingstudentlist");
    console.log(divFromHTML, "divFromHTML");

    var students = []

    for (var i=0; i <StudentList.length; i++){
        students += `<div><p>${StudentList[i].nameOfStudent}</p></div>`;
    }

    console.log(students, "students")
    divFromHTML.innerHTML = students;
}
displayingstudentlist()


// function displayingstudentlist(){

//     // Taking data from Storage
//     var StudentList = JSON.parse(localStorage.getItem("StudentList"));
//     console.log(StudentList, "StudentList");


//     // taking tags from html
//     var divFromHTML = document.getElementById("displayingstudentlist");
//     console.log(divFromHTML, "divFromHTML");

//     var students = []

//     for (var i=0; i <StudentList.length; i++){
//         students += `<div><p>${StudentList[i]}</p></div>`;
//     }

//     console.log(students, "students")
//     divFromHTML.innerHTML = students;
// }
// displayingstudentlist()