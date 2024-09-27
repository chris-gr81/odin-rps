function getComputerChoice() {
  let number = Math.floor(Math.random() * 3);
  switch (number) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissor";
  }
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  let result = "";
  if (humanChoice === "Rock") {
    switch (computerChoice) {
      case "Rock":
        result = "Rock tie!";
        break;
      case "Scissor":
        result = "You win! Rock beats scissor.";
        humanScore++;
        break;
      case "Paper":
        result = "You loose! Paper beats rock.";
        computerScore++;
        break;
    }
  } else if (humanChoice === "Paper") {
    switch (computerChoice) {
      case "Paper":
        result = "Paper tie!";
        break;
      case "Rock":
        result = "You win! Paper beats rock.";
        humanScore++;
        break;
      case "Scissor":
        result = "You loose! Scissor beats paper.";
        computerScore++;
        break;
    }
  } else {
    switch (computerChoice) {
      case "Scissor":
        result = "Scissor tie!";
        break;
      case "Paper":
        result = "You win! Scissor beats paper.";
        humanScore++;
        break;
      case "Rock":
        result = "You loose! Rock beats scissor.";
        computerScore++;
        break;
    }
  }
  return result;
}

function refreshDisplay(result) {
  message.textContent = result;
  player.textContent = "Player: " + humanScore;
  computer.textContent = "Computer: " + computerScore;
}

function winningMessage(winner) {
    const oldContent = message.textContent;
  if (winner === 1) {
    message.textContent = oldContent + " You are the winner! Refresh to play again!"
    message.style.color = "green";
  } else {
    message.textContent = oldContent + " Computer is the winner! Refresh to play again!"
    message.style.color = "red";
  }
}

function playGame(playerTakes) {
  
  if (gameover === 0) {
    const result = playRound(playerTakes);
    refreshDisplay(result);
    if (humanScore === 5) {
      gameover = 1;
      winningMessage(gameover);
    } else if (computerScore === 5) {
      gameover = 2;
      winningMessage(gameover);
    }
  }
  
}

let humanScore = 0;
let computerScore = 0;
let gameover = 0;

const showcase = document.querySelector("#showcase");
showcase.style.marginTop = "10px";
showcase.style.border = "1px solid black";
showcase.style.height = "150px";
showcase.style.width = "400px";
showcase.style.paddingLeft = "20px";

const message = document.createElement("p");
message.setAttribute("id", "messageP");
message.style.color = "blue";
message.textContent = "Choose one option to start!";
showcase.appendChild(message);

const player = document.createElement("p");
player.setAttribute("id", "playerP");
player.textContent = "Player: " + humanScore;
showcase.appendChild(player);

const computer = document.createElement("p");
computer.setAttribute("id", "computerP");
computer.textContent = "Computer: " + computerScore;
showcase.appendChild(computer);

const btnRock = document.querySelector("#btnRock");
const btnPaper = document.querySelector("#btnPaper");
const btnScissor = document.querySelector("#btnScissor");

btnRock.addEventListener("click", () => {
  playGame("Rock");
});

btnPaper.addEventListener("click", () => {
  playGame("Paper");
});

btnScissor.addEventListener("click", () => {
  playGame("Scissor");
});
