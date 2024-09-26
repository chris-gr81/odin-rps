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

function getHumanChoice() {
  let userNumber = 0;
  let correct = false;
  do {
    userNumber = prompt(
      "Type in: \n[Rock] \n[Paper] \nor [Scissor]"
    ).toLowerCase();
    userNumber == "rock" || userNumber == "paper" || userNumber == "scissor"
      ? (correct = false)
      : (correct = true);
  } while (correct);

  return userNumber.substring(0, 1).toUpperCase() + userNumber.substring(1);
}

function playRound(humanChoice, computerChoice) {
  let result = "";
  if (humanChoice == "Rock") {
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
  } else if (humanChoice == "Paper") {
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

  console.log("hm: " + humanChoice);
  console.log("pc: " + computerChoice);
  console.log(result);
}

let humanScore = 0;
let computerScore = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log("hm-score: " + humanScore);
console.log("pc-score: " + computerScore);
