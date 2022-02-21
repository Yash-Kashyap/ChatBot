function getBotResponse(input) {
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