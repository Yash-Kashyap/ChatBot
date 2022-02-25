function addStudent(){
    var branch = document.getElementById('branch').value;
    var email = document.getElementById('email').value;
    var fname = document.getElementById('fname').value;
    var fnum = document.getElementById('fnum').value;
    var name = document.getElementById('name').value;
    var num = document.getElementById('num').value;
    var section = document.getElementById('section').value;
    var studentsData = JSON.parse(localStorage.getItem("studentsData"));
    var snumber = studentsData[studentsData.length-1].SerialNumber + 1;
    studentsData.push({
        branch: branch,
        email: email,
        fatherName: fname,
        fatherNumber: fnum,
        studentName: name,
        studentNumber:num,
        section: section,
        SerialNumber:snumber
    })

    alert("Student Added Successfully!!");
    localStorage.setItem("studentsData", JSON.stringify(studentsData));
    window.location.href = "adminHome.html";

}
function deleteStudent(){
    var serialId = document.getElementById('serialId').value;
    var studentsData = JSON.parse(localStorage.getItem("studentsData"));
    var latestStudentData = studentsData.filter(student => student.SerialNumber != serialId);
    alert("Student deleted Successfully!!");
    localStorage.setItem("studentsData", JSON.stringify(latestStudentData));
    window.location.href = "displayInfo.html";
}
function viewStudent(){
  var table = document.getElementById("studentTable");
  var studentsData = JSON.parse(localStorage.getItem("studentsData"));
  studentsData.forEach((student,index) => {
      console.log(index);
    var row = table.insertRow(index+1);
    var cell0 = row.insertCell(0);
    cell0.innerHTML = student.SerialNumber;
    var cell1 = row.insertCell(1);
    cell1.innerHTML = student.studentName;
    var cell2 = row.insertCell(2);
    cell2.innerHTML = student.email;
    var cell3 = row.insertCell(3);
    cell3.innerHTML = student.studentNumber;
    var cell4 = row.insertCell(4);
    cell4.innerHTML = student.section;
    var cell5 = row.insertCell(5); 
    cell5.innerHTML = student.branch;
    var cell6 = row.insertCell(6);
    cell6.innerHTML = student.fatherName;
    var cell7 = row.insertCell(7);
    cell7.innerHTML = student.fatherNumber;
    document.getElementById("displayBtn").disabled = true;
  });
}

function clickme(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if(username == "admin" && password == "yashkhushi")
    {
        document.location.href = "adminHome.html";
        alert("login succesful :)");

    }
    else
    {
        alert("login failed :(");
        return;

    }

}


