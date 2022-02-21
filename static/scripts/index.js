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
   /* var studentsData = [
        {branch: "B.Tech (CSE)", email: "bishtdeepika028@gmail.com", fatherName: "BHAGWAN SINGH BISHT",fatherNumber:"8859132706", studentName: "DEEPIKA BISHT", section:"C", studentNumber:"8859132706", SerialNumber:1},
        {branch: "B.Tech (CSE)", email: "Sgurminder982@gmail.com", fatherName: "GURMINDER SINGH",fatherNumber:"7017898470", studentName: "PAWANDEEP KAUR", section:"A", studentNumber:"7017898470", SerialNumber:2},
        {branch: "B.Tech (CSE)", email: "joshiankit2002@gmail.com", fatherName: "GIRISH CHANDRA JOSHI",fatherNumber:"9410740227", studentName: "ANKIT JOSHI", section:"B", studentNumber:"8923219746", SerialNumber:3},
        {branch: "B.Tech (CSE)", email: "RITISHRISH181@gmail.com", fatherName: "DALIP SINGH",fatherNumber:"9891640333", studentName: "RITISH", section:"J", studentNumber:"9027576619", SerialNumber:4},
        {branch: "B.Tech (CSE)", email: "niharikadhyani121@gmail.com", fatherName: "DEEPAK CHANDRA DHYANI",fatherNumber:"9412348343", studentName: "NIHARIKA DHYANI", section:"C", studentNumber:"7535050768", SerialNumber:5},
        {branch: "B.Tech (CSE)", email: "anshi17505@gmail.com", fatherName: "TARUN MAHESHWARI",fatherNumber:"9997013046", studentName: "ANSHIKA MAHESHWARI", section:"A", studentNumber:"7983512700", SerialNumber:6},
        {branch: "B.Tech (CSE)", email: "KALPANAKATHAIT11@gmail.com", fatherName: "YASHPAL SINGH",fatherNumber:"9456353997", studentName: "KM KALPANA", section:"A", studentNumber:"9389509742", SerialNumber:7},
        {branch: "B.Tech (CSE)", email: "pranjalikothari0305@gmail.com", fatherName: "PL KOTHARI",fatherNumber:"8423578986", studentName: "PRANJALI KOTHARI", section:"B", studentNumber:"7499398528", SerialNumber:8},
        {branch: "B.Tech (CSE)", email: "ADITIDOBRIYAL111@gmail.com", fatherName: "BHUWAN CHANDRA DOBRIYAL",fatherNumber:"8126677884", studentName: "ADITI DOBRIYAL", section:"G", studentNumber:"9953072837", SerialNumber:9},
        {branch: "B.Tech (CSE)", email: "anuragsemwal001@gmail.com", fatherName: "SHASHI DHAR SEMWAL",fatherNumber:"8171518406", studentName: "ANURAG SEMWAL", section:"B", studentNumber:"9958281300", SerialNumber:10},
        {branch: "B.Tech (CSE)", email: "PRAKHARDHYANI1000@gmail.com", fatherName: "DHIRENDER DHYANI",fatherNumber:"8006561634", studentName: "PRAKHAR DHYANI", section:"B", studentNumber:"9528089067", SerialNumber:11},
        {branch: "B.Tech (CSE)", email: "KORANGARAMA3@gmail.com", fatherName: "KHARAK SINGH KORANGA",fatherNumber:"9713834887", studentName: "RAMA KORANGA", section:"E", studentNumber:"7060157792", SerialNumber:12},
        {branch: "B.Tech (CSE)", email: "KHUSHISINGH5716@gmail.com", fatherName: "RAJESH KUMAR",fatherNumber:"8937044844", studentName: "KHUSHI SINGH", section:"C", studentNumber:"9548430311", SerialNumber:13},
        {branch: "B.Tech (CSE)", email: "yashkashyap1110@gmail.com", fatherName: "AJAY KUMAR KASHYAP",fatherNumber:"7018279665", studentName: "YASH KASHYAP", section:"D", studentNumber:"7876331526", SerialNumber:14},
        {branch: "B.Tech (CSE)", email: "soumili1818@gmail.com", fatherName: "SANJAY KUMAR TAPADAR",fatherNumber:"6201358106", studentName: "SOUMILI TAPADAR", section:"C", studentNumber:"7992339875", SerialNumber:15},
        {branch: "B.Tech (CSE)", email: "TRIPATHIRITIK3535@gmail.com", fatherName: "ATMDEO TRIPATHI",fatherNumber:"9451724980", studentName: "RITIK TRIPATHI", section:"B", studentNumber:"9721509781", SerialNumber:16},
              
    
    ];
    localStorage.setItem("studentsData", JSON.stringify(studentsData));
    */
}


