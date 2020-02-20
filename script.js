var timeEl = document.querySelector(".time");
const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
var buttonOne = document.getElementById("btn0");
var buttonTwo = document.getElementById("btn1");
var buttonThree = document.getElementById("btn2");
var buttonFour = document.getElementById("btn3");
var forms = document.querySelector(".forms");
var InitialInput = document.querySelector("#initials");
var ScoredInput = document.querySelector("#scored");
var Submitbutton = document.getElementById("Submit");

var clicks = 0
var score = 0
var secondsLeft = 60;
forms.style.visibility = "hidden";
answerButtonsElement.style.visibility = "hidden";
 
function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = " Time left: " + secondsLeft;
  
  if(secondsLeft === 0 || clicks === 2) {
        clearInterval(timerInterval);
        questionContainerElement.style.display = "none"
        forms.style.visibility = "visible";
        alert("Hey your score is: " + score);

        
        
      }
  
    }, 1000);}


  startButton.addEventListener("click", startgame)
  function startgame(){
    setTime();
    startButton.style.display = "none";
    answerButtonsElement.style.visibility = "visible";
    

    answerSet();

  }


  buttonOne.addEventListener("click", function () {
      secondsLeft -= 20;
      replace();
      clicks++;
  });
  buttonTwo.addEventListener("click", function () {
      secondsLeft -= 20;
      replace();
      clicks ++;
  });
  buttonThree.addEventListener("click", function () {
      score ++;
      replace();
      clicks ++;
  });
  buttonFour.addEventListener("click", function () {
      secondsLeft -= 20;
      replace();
      clicks ++;

  });
  function answerSet(){
      questionElement.textContent = "Which of the following type of variable is visible everywhere in your JavaScript code?"
      buttonOne.textContent ="Formula";
      buttonTwo.textContent ="local variable";
      buttonThree.textContent ="global variable";
      buttonFour.textContent ="Both of the above.";
  }
  
  function replace(){
    questionElement.textContent = "Which of the following is true about variable naming conventions in JavaScript?"
    buttonOne.textContent ="You should not use any of the JavaScript reserved keyword as variable name.";
    buttonTwo.textContent ="JavaScript variable names should not start with a numeral (0-9)";
    buttonThree.textContent ="Both of the above.";
    buttonFour.textContent ="Bert()";
}




Submitbutton.addEventListener("click", function(event) {
  event.preventDefault();

  var InitialsValue = document.querySelector("#initials").value;
  var ScoreValue = document.querySelector("#scored").value;

  localStorage.setItem("InitialsValue", InitialsValue);
  localStorage.setItem("ScoreValue", ScoreValue);
  
  
});


    