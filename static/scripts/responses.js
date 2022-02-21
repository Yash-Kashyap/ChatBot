function getBotResponse(input) {
    var studentsData = JSON.parse(localStorage.getItem("studentsData"));
    input = String(input).toLowerCase();
    var student = studentsData.find(student => 
        String(student.branch).toLowerCase() == input ||
         String(student.email).toLowerCase() == input || 
         String(student.fatherName).toLowerCase() == input ||
        String(student.fatherNumber).toLowerCase() == input ||
         String(student.studentName).toLowerCase() == input ||
          String(student.section).toLowerCase() == input ||
           String(student.studentNumber).toLowerCase() == input
    )
    if(student){
        return ("\nName: " + student.studentName  +
                ", Email: " + student.email  +
                ", Branch: " + student.branch  +
                ", Section: " + student.section  +
                ", Contact Number: " + student.studentNumber  +
                ", Father's Name: " + student.fatherName  +
                ", Father's Number: " + student.fatherNumber 
        );
    }
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    }
    else if (input == "good morning")
    {
        return "Good morning!";
    }
    else if (input == "what is current time?")
    {
        return getTime();
    }
    else if(input == "what can you do?")
    {
        return "I can gather information about students if you will enter their credentials";
    }
    else if(input == "how are you?")
    {
        return "I am fine, whats going on with you?";
    }
    else if (input == "are you part of the Matrix?")
    {
        return "Unfortunately! no i am not the part of Matrix";
    }
    else if (input== "are you human?")
    {
        return "No, I am a bot, ChatBot";
    }
    else {
        return "Try asking something else!";
    }
}