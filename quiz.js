const questions = [
    { question: "What does HTML stand for?", options: ["Hyperlinks and Text Markup Language", "Hyper Text Markup Language", "Home Tool Markup Language", "Hyper Text Manipulation Language"], answer: 1 },
    { question: "What does CSS stand for?", options: ["Creative Style Sheets", "Colorful Style Sheets", "Computer Style Sheets", "Cascading Style Sheets"], answer: 3 },
    { question: "Which property is used to change the background color?", options: ["bgcolor", "background-color", "color", "background"], answer: 1 },
    { question: "What is the correct syntax to write a function in JavaScript?", options: ["function myFunction()", "function:myFunction()", "function = myFunction()", "function => myFunction()"], answer: 0 },
    { question: "What does the 'console.log()' method do?", options: ["Logs a message to the console", "Clears the console", "Stops the script", "Starts debugging"], answer: 0 },
    { question: "Which operator is used to assign a value to a variable?", options: ["=", "==", "===", "=>"], answer: 0 },
    { question: "How do you write an 'if' statement in JavaScript?", options: ["if i == 5 then", "if (i == 5)", "if i = 5", "if i = 5 then"], answer: 1 },
    { question: "What is the correct way to write an array in JavaScript?", options: ["var colors = 'red', 'green', 'blue'", "var colors = ['red', 'green', 'blue']", "var colors = (1:'red', 2:'green', 3:'blue')", "var colors = {red, green, blue}"], answer: 1 },
];

let currentQuestion = 0;
let score = 0;
let username = "";

function startQuiz() {
    username = document.getElementById("username").value.trim();
    if (!username) {
        alert("Please enter your name to start the quiz.");
        return;
    }
    document.getElementById("start-section").style.display = "none";
    document.getElementById("quiz-section").style.display = "block";
    loadQuestion();
}

function loadQuestion() {
    const questionContainer = document.getElementById("question-container");
    const question = questions[currentQuestion];
    questionContainer.innerHTML = `
      <div class="question">
        <h3>${question.question}</h3>
        ${question.options
          .map(
            (option, index) => `
            <div class="option">
              <input type="radio" name="answer" id="option${index}" value="${index}">
              <label for="option${index}">${option}</label>
            </div>`
          )
          .join("")}
      </div>`;
  }

  function submitAnswer() {
    const selectedOption = document.querySelector("input[name='answer']:checked");
    if (!selectedOption) {
      alert("Please select an answer.");
      return;
    }
    if (parseInt(selectedOption.value) === questions[currentQuestion].answer) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      alert(`Quiz finished! ${username}, you scored ${score}/${questions.length}.`);
      location.reload(); 
    }
  }