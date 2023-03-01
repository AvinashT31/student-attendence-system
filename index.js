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
    StudentList.push({ nameOfStudent: StudentName, Attendance: [] });
    localStorage.setItem("StudentList", JSON.stringify(StudentList));


    document.getElementById("addingstudents").value = "";
    markingAttendance();
    Name();
    
    // studentAttendance();
    // displayingstudentlist();

}

function gerRealTime() {

    // to print the data and Time
    var dateAndtime = new Date();
    // console.log(dateAndtime);


    // to print the data in date month and year format
    var date = dateAndtime.toJSON().slice(0, 10);
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

function markingAttendance() {

    // Taking data from Storage
    var StudentList = JSON.parse(localStorage.getItem("StudentList"));
    console.log(StudentList, "StudentList");


    // taking tags from html
    var divFromHTML = document.getElementById("markingAttendance");
    console.log(divFromHTML, "divFromHTML");

    var students = []

    for (var i = 0; i < StudentList.length; i++) {
        students += `<div id = "content"><p>${StudentList[i].nameOfStudent}</p><p><i onclick="present(${i})"class="fa-solid fa-check"></i></p><p><i onclick ="absent(${i})" class="fa-solid fa-xmark"></i></p></div>`
    }

    console.log(students, "students")
    divFromHTML.innerHTML = students;
}
markingAttendance()

function present(index) {
    // alert('working'); 
    console.log("index", index)
    var dateAndtime = new Date();
    var date = dateAndtime.toJSON().slice(0, 10);
    console.log(date, "date heree")

    var studentlistFromLS = JSON.parse(localStorage.getItem("StudentList"));
    var user = studentlistFromLS[index];
    // console.log(user, "user here");
    // console.log(user.Attendance.length, "array");

    var falg = false;

    for (var i = 0; i < user.Attendance.length; i++) {
        console.log(user.Attendance[i])
        if (user.Attendance[i][date]) {
            console.log(user.Attendance[i][date], "user.Attendance[i][date]")
            falg = true;
        }
    }

    if (falg === false) {
        var obj = {};
        obj[date] = "present";
        user.Attendance.push(obj);
        // console.lo(studentlistFromLS)
        localStorage.setItem("StudentList", JSON.stringify(studentlistFromLS));
    } else {
        alert("already Marked !")
    }

}

function absent(index) {
    // alert('working');
    console.log("index", index)
    var dateAndtime = new Date();
    var date = dateAndtime.toJSON().slice(0, 10);

    // to get the dat from localStorage
    var studentlistFromLS = JSON.parse(localStorage.getItem("StudentList"));
    var user = studentlistFromLS[index];

    // console.log(user, "user here");
    // console.log(user.Attendance.length, "array");

    var falg = false;

    for (var i = 0; i < user.Attendance.length; i++) {
        console.log(user.Attendance[i])
        if (user.Attendance[i][date]) {
            console.log(user.Attendance[i][date], "user.Attendance[i][date]")
            falg = true;
        }
    }

    if (falg === false) {
        var obj = {};
        obj[date] = "absent";
        user.Attendance.push(obj);
        // console.lo(studentlistFromLS)
        localStorage.setItem("StudentList", JSON.stringify(studentlistFromLS));
    } else {
        alert("already Marked !")
    }
}

function studentAttendance(index) {

    var StudentDataFrom = JSON.parse(localStorage.getItem("StudentList"));
    //  var user = StudentDataFrom[index];
    // console.log(user,"user");

    var studentData = document.getElementById("StudentInfo");
    console.log(studentData, "studentData");

    var Student = []

    for (var i = 0; i < StudentDataFrom.length; i++) {

        Student += `<div><p>${StudentDataFrom[i].nameOfStudent}</p>`

    }
    console.log(Student, "Student");
    studentData.innerHTML = Student;

}
studentAttendance()


function Name(index) {

    var GetStudentData = JSON.parse(localStorage.getItem("StudentList"));

    // var StudentData = GetStudentData[index];
    console.log(GetStudentData, "GetStudentData");

    // var result = StudentData.flatmap(Object.keys);

    var StudentDate = document.getElementById("StudentInfo");
    console.log(StudentDate, "StudentDate");

    var Students = [];

    for (var i = 0; i < GetStudentData.length; i++) {
        Students += `<div><p>${GetStudentData[i].nameOfStudent}</p></div>`
        // DisplayDate(i);

    }
    console.log(Students);
    StudentDate.innerHTML = Students;
}
Name()


function displayingStudentAttendance() {
    var for25 = document.getElementById("displayDate");
    var dataFromLS = JSON.parse(localStorage.getItem("StudentList"));

    var dates = []
    for (var k = 0; k < dataFromLS.length; k++) {

        for (var l = 0; l < dataFromLS[k].Attendance.length; l++) {

            // console .log(dataFromLS[k].Attendance[l]);
            // console.log((Object.keys(dataFromLS[k].Attendance[l])[0]));


            if (!dates.includes((Object.keys(dataFromLS[k].Attendance[l])[0]))) {
                // console.log("got");
                dates.push((Object.keys(dataFromLS[k].Attendance[l])[0]))
            }

        }
    }

    var finalArrayWithAtt = [[],[],,[],[]];
    var settingDates = ['2023-02-27', '2023-02-28']
    for (var i = 0; i < dataFromLS.length; i++) {
        // console.log(dataFromLS[i].Attendance,"heree");
        if (dataFromLS[i].Attendance.length) {
            for (var j = 0; j < dataFromLS[i].Attendance.length; j++) {
                for (var k = 0; k < settingDates.length; k++) {
                    if (dataFromLS[i].Attendance[j][settingDates[k]]) {
                        console.log((dataFromLS[i].Attendance[j][settingDates[k]]), settingDates[k], i, j , k, "checking here")
                        finalArrayWithAtt[k][settingDates[k]] += `<div>${dataFromLS[i].Attendance[j][settingDates[k]]}</div>`;
                    }
                }
            }
        // } else {
        //     finalArrayWithAtt += `<div>No data</div>`;
        // }
    }
    
    console.log(dates, "dates")
    for25.innerHTML = dates;
}

displayingStudentAttendance()

// function displaystatus(){

//     var displayingStatus = document.getElementById("DisplayStatus");
//     var dataFromLS = JSON.parse(localStorage.getItem("StudentList"));


//     var finalArrayWithAtt = [[],[],,[],[]];
//     var settingDates = ['2023-02-27', '2023-02-28']
//     for (var i = 0; i < dataFromLS.length; i++) {
//         // console.log(dataFromLS[i].Attendance,"heree");
//         if (dataFromLS[i].Attendance.length) {
//             for (var j = 0; j < dataFromLS[i].Attendance.length; j++) {
//                 for (var k = 0; k < settingDates.length; k++) {
//                     if (dataFromLS[i].Attendance[j][settingDates[k]]) {
//                         console.log((dataFromLS[i].Attendance[j][settingDates[k]]), settingDates[k], i, j , k, "checking here")
//                         finalArrayWithAtt[k][settingDates[k]] += `<div>${dataFromLS[i].Attendance[j][settingDates[k]]}</div>`;
//                     }
//                 }
//             }
//         // } else {
//         //     finalArrayWithAtt += `<div>No data</div>`;
//         // }
//     }
//     // console.log(check, 'check')
//     displayingStatus.innerHTML = finalArrayWithAtt;


// }

// displaystatus()


// var finalArrayWithAtt = [];
//     var settingDates = ['2023-02-27']
//     for (var i = 0; i < dataFromLS.length; i++) {
//         // console.log(dataFromLS[i].Attendance,"heree");
//         if (dataFromLS[i].Attendance.length) {
//             for (var j = 0; j < dataFromLS[i].Attendance.length; j++) {
//                 for (var k = 0; k < settingDates.length; k++) {
//                     if (dataFromLS[i].Attendance[j][settingDates[k]]) {
//                         // console.log((dataFromLS[i].Attendance[j][settingDates[k]]), dataFromLS[i].nameOfStudent, dd[k])
//                         finalArrayWithAtt += `<div>${dataFromLS[i].Attendance[j][settingDates[k]]}</div>`;
//                     }
//                 }
//             }
//         } else {
//             finalArrayWithAtt += `<div>No data</div>`;
//         }
//     }
//     // console.log(check, 'check')
//     displayingStatus.innerHTML = finalArrayWithAtt;



// to practise

// function DisplayDate(index) {

//     var myvar = JSON.parse (localStorage.getItem("StudentList"));
//     var DisplayDateFromLS = myvar[index].Attendance;
//     console.log(DisplayDateFromLS, "DisplayDateFromLS");

//     var GetDisplayDate = document.getElementById("displayDate")
//     console.log(GetDisplayDate, "GetDisplayDate");

//     var students = []

//     for (var i=0; i <DisplayDateFromLS.length; i++ ){
//         // console.log(myvar, "myvar");
//         students += `<div><p>${DisplayDateFromLS[i].Attendance}</p></div>`
//     }
// console.log(students);
// GetDisplayDate.innerHTML = students;
// }
// DisplayDate()

// function displayingstudentlist(){

//     // Taking data from Storage
//     var StudentList = JSON.parse(localStorage.getItem("StudentList"));
//     console.log(StudentList, "StudentList");


//     // taking tags from html
//     var divFromHTML = document.getElementById("displayingstudentlist");
//     console.log(divFromHTML, "divFromHTML");

//     var students = []

//     for (var i=0; i <StudentList.length; i++){
//         students += `<div id=studentInfo><p>${StudentList[i].nameOfStudent}</p></div>`;
//     }

//     console.log(students, "students")
//     divFromHTML.innerHTML = students;
// }
// displayingstudentlist()


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