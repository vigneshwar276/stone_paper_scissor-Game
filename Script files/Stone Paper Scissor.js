/*            *************************************************************
              *  Name of the challenge  : Stone Paper Scissor               *
              *  Developed for          : VHITECH Training Program          *
              *               Maintenance History                           *
              *  Developer              :                                   *
              *  Creation date           :                 Ticket No:       *
              ************************************************************* */

// Declaration
// Screen date and time declaration.
let displayDate = new Date();
document.getElementById("dateOutput").innerHTML = displayDate.toLocaleDateString();
document.getElementById("timeOutput").innerHTML = displayDate.toLocaleTimeString();



// Declare the variables using classes and ids
let movesLeftDisplay = document.querySelector(".movesLeft");
let resultUpdate = document.getElementById("resultUpdate");
let ourScoreDisplay = document.getElementById("ourScore");
let cpuScoreDisplay = document.getElementById("cpuScores");
let userImage = document.getElementById("userImage");
let cpuImage = document.getElementById("cpuImage");
let buttondiv = document.getElementById("ourChoices");
let gameover=document.getElementById("gameOver");
let whoWin=document.getElementById("whoWins")
let Myscores =document.querySelector(".myScore");
let Cpuscores=document.querySelector(".cpuScore");

// Set the styles for the scores
Myscores.style.width="180px"
Cpuscores.style.width="180px"
Myscores.style.height="150px"
Cpuscores.style.height="150px"


// Create the variables for storing the moves left and scores
let movesLeft = 10;
ourScoreDisplay.innerText = "Your score: 0";
cpuScoreDisplay.innerText = "CPU score: 0";
let ourScore = 0;
let cpuScore = 0;

// Create the rock, paper, and scissors buttons using createElement
let stoneButton = document.createElement("button");
let stoneImage = document.createElement("img");
stoneImage.setAttribute("src", "./images/stone.jpg");
stoneImage.setAttribute("alt", "stone");
stoneButton.appendChild(stoneImage);
buttondiv.appendChild(stoneButton);

let paperButton = document.createElement("button");
let paperImage = document.createElement("img");
paperImage.setAttribute("src", "./images/paper.jpg");
paperImage.setAttribute("alt", "paper");
paperButton.appendChild(paperImage);
buttondiv.appendChild(paperButton);

let scissorButton = document.createElement("button");
let scissorImage = document.createElement("img");
scissorImage.setAttribute("src", "./images/scissors.jpg");
scissorImage.setAttribute("alt", "scissors");
scissorButton.appendChild(scissorImage);
buttondiv.appendChild(scissorButton);

// Event Listeners for Buttons
stoneButton.addEventListener("click", function () {
  selectPlayerChoice("stone");
});
paperButton.addEventListener("click", function () {
  selectPlayerChoice("paper");
});
scissorButton.addEventListener("click", function () {
  selectPlayerChoice("scissors");
});

// Function for player selection and start the game
function selectPlayerChoice(playerSelection) {
  if (movesLeft === 0) {
    return;
  }
  playGame(playerSelection);
}

// Computer selection function
function computerPlay() {
  let choices = ["stone", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

// Function to compare player and computer selections
function compareSelections(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) return "draw";
  if (
    (playerSelection === "stone" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "stone") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "win";
  }
  return "lose";
}

// Play Game
function playGame(playerSelection) {
  let computerSelection = computerPlay();
  let result = compareSelections(playerSelection, computerSelection);

  displayChoices(playerSelection, computerSelection);
  displayResult(result);
  updateScore(result);
  updateMovesLeft();
}

// Display Choices
function displayChoices(playerSelection, computerSelection) {
  userImage.innerHTML = `<img src="./images/${playerSelection}.jpg" alt="${playerSelection}">`;
  cpuImage.innerHTML = `<img src="./images/${computerSelection}.jpg" alt="${computerSelection}">`;
}

// Update Score and Display Score
function updateScore(result) {
  if (result === "win") {
    ourScore++;
  } else if (result === "lose") {
    cpuScore++;
  }
  displayScore();
}

// Display Score
function displayScore() {
  ourScoreDisplay.textContent = `Your score: ${ourScore}`;
  cpuScoreDisplay.textContent = `CPU score: ${cpuScore}`;
}


// Function to display the result
function displayResult(result) {
  if (result === "win") {
    resultUpdate.textContent = "You win!";
  } else if (result === "lose") {
    resultUpdate.textContent = "You lose!";
  } else {
    resultUpdate.textContent = "It's a draw!";
  }
}

// Function to update moves left and check for game over
function updateMovesLeft() {
  movesLeft--;
  movesLeftDisplay.textContent = `Moves left: ${movesLeft}`;
  if (movesLeft === 0) {
    displayFinalResult();
    final();
  }
}

//display gameover and whowin function
function final(){ 
  gameOver1.textContent = "Game Over!";
    // Set the result message
    if (ourScore > cpuScore) {
      whoWin.textContent = "You win!";
    } else if (ourScore < cpuScore) {
      whoWin.textContent = "CPU wins!";
    } else {
      whoWin.textContent = "It's a draw!";
    }
  }

// Create the result popup dynamically
let resultpopup = document.createElement("div");
resultpopup.setAttribute("id", "resultpopup");
resultpopup.style.display = "none";
resultpopup.style.position = "fixed";
resultpopup.style.left = "0";
resultpopup.style.top = "0";
resultpopup.style.width = "100%";
resultpopup.style.height = "100%";
resultpopup.style.overflow = "auto";
resultpopup.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
resultpopup.style.zIndex = "1000";

let resultContent = document.createElement("div");
resultContent.setAttribute("class", "resultContent");
resultContent.style.backgroundColor = "white";
resultContent.style.margin = "15% auto";
resultContent.style.padding = "20px";
resultContent.style.border = "1px solid #888";
resultContent.style.width = "30%";
resultContent.style.textAlign = "center";
resultContent.style.borderRadius = "10px";

let gameOver1 = document.createElement("h2");
gameOver1.setAttribute("id", "gameOver");
gameOver1.style.fontSize = "40px";
resultContent.appendChild(gameOver1);

let whoWins = document.createElement("p");
whoWins.setAttribute("id", "whoWins");
whoWins.style.fontSize = "30px";
whoWins.style.marginBottom="-100px"
resultContent.appendChild(whoWins);

let scoreDisplay = document.createElement("p");
scoreDisplay.setAttribute("id", "scoreDisplay");
scoreDisplay.style.fontSize = "30px";
resultContent.appendChild(scoreDisplay);

let restartButton = document.createElement("button");
restartButton.textContent = "Restart";
restartButton.style.marginTop = "10px";
restartButton.style.padding = "10px 20px";
restartButton.style.fontSize = "16px";
restartButton.style.backgroundColor = "#4CAF50";
restartButton.style.color = "#fff";
restartButton.style.border = "none";
restartButton.style.borderRadius = "5px";
restartButton.style.cursor = "pointer";
restartButton.addEventListener("click", function () {
  movesLeft = 10;
  ourScore = 0;
  cpuScore = 0;
  userImage.innerHTML = "";
  cpuImage.innerHTML = "";
  gameOver1.textContent = "";
  whoWin.textContent = "";
  resultUpdate.textContent = "";
  resultpopup.style.display = "none";
  displayScore();
  movesLeftDisplay.textContent = `Moves left: ${movesLeft}`;
});
resultContent.appendChild(restartButton);

resultpopup.appendChild(resultContent);
document.body.appendChild(resultpopup);



// Display Final Result
function displayFinalResult() {
  gameOver1.textContent = "Game Over!";

  // Set the result message
  if (ourScore > cpuScore) {
    whoWins.textContent = "You win!";
  } else if (ourScore < cpuScore) {
    whoWins.textContent = "CPU wins!";
  } else {
    whoWins.textContent = "It's a draw!";
  }



  // Update the score display (directly below the result message)
  scoreDisplay.innerHTML = `
    Your Score: ${ourScore}<br>
    CPU Score: ${cpuScore}
  `;

  // Show the popup
  resultpopup.style.display = "block";
}
