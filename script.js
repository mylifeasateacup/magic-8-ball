$(document).ready(function(){
  
  //create objext
    var magic8Ball = {};
    $("#answer").hide();

    
//initialize array of answers
    magic8Ball.listOfAnswers = ["No", "Yes", "I don't think so...", "Of course!", "Indubitably", "In your dreams."];

  
//ask question function - generate a random number that generates a random answer from answer array
    magic8Ball.askQuestion = function(question){
        var randomNumber = Math.random();
        var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
        var randomIndex = Math.floor(randomNumberForListOfAnswers);
        var answer = this.listOfAnswers[randomIndex];

//update HTML ID of answer with the text from the random answer array
        $("#answer").text( answer );
        $("#answer").hide();
        $("#answer").fadeIn(4000);  
        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");


//not quite sure why we're logging these right yet...
        console.log(question);
        console.log(answer);
    };

//defines what happens when the button is clicked
    var onClick = function() { 
        var question = prompt("ASK A YES/NO QUESTION!");
        //passes the user-entered "question" into the method askQuestion
        magic8Ball.askQuestion(question);
          setTimeout(function() {
            $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
        }, 0500);
        $("#8ball").effect("shake");
    };

    $("#questionButton").click( onClick );

});