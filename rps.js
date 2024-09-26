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



function playGame(humanChoice, computerChoice) {
    let humanScore = 0;
    let computerScore = 0;

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
        console.log(result);
      }
      for (i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice())
      }
      const winner = (humanScore > computerScore) ? "You are the winner." : "Computer is the winner."
      return (
        "You vs Computer: " + humanScore + " | " + computerScore + "\n"
        + winner
      )
}

console.log(playGame());


