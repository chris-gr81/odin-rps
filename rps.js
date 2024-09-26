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
      "Type [1] for Rock, [2] for Paper or [3] for Scissor: "
    );
    userNumber == 1 || userNumber == 2 || userNumber == 3
      ? (correct = false)
      : (correct = true);
  } while (correct);

  switch (userNumber) {
    case "1":
      return "Rock";
    case "2":
      return "Paper";
    case "3":
      return "Scissor";
  }
}

console.log(getComputerChoice());
console.log(getHumanChoice());
