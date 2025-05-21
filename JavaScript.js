let getComputerChoice = Math.random();

if (getComputerChoice <= 0.33) {
  getComputerChoice = "Rock";
} else if (getComputerChoice >= 0.33 && getComputerChoice <= 0.66) {
  getComputerChoice = "Paper";
} else {
  getComputerChoice = "Sicssors";
}

let humanScore = 0,
  computerScore = 0;

function getHumanChoice() {
  humanChoice = prompt("Inserte aquí su juagada");
  console.log(getComputerChoice);

  if (humanChoice.toLowerCase() == "rock" && getComputerChoice == "Rock") {
    result = "Draw";
    console.log(
      `You choose ${humanChoice.toLowerCase()}, Computer chose ${getComputerChoice}, the result is: ${result}`
    );
  } else if (
    humanChoice.toLowerCase() == "rock" &&
    getComputerChoice == "Paper"
  ) {
    result = "You lose";
    console.log(
      `You choose ${humanChoice.toLowerCase()}, Computer chose ${getComputerChoice}, the result is: ${result}`
    );
  } else if (
    humanChoice.toLowerCase() == "rock" &&
    getComputerChoice == "Sicssors"
  ) {
    result = "You Win";
    console.log(
      `You choose ${humanChoice.toLowerCase()}, Computer chose ${getComputerChoice}, the result is: ${result}`
    );
  } else if (
    humanChoice.toLowerCase() == "paper" &&
    getComputerChoice == "Rock"
  ) {
    result = "You Win";
    console.log(
      `You choose ${humanChoice.toLowerCase()}, Computer chose ${getComputerChoice}, the result is: ${result}`
    );
  } else if (
    humanChoice.toLowerCase() == "paper" &&
    getComputerChoice == "Paper"
  ) {
    result = "Draw";
    console.log(
      `You choose ${humanChoice.toLowerCase()}, Computer chose ${getComputerChoice}, the result is: ${result}`
    );
  } else if (
    humanChoice.toLowerCase() == "paper" &&
    getComputerChoice == "Sicssors"
  ) {
    result = "You lose";
    console.log(
      `You choose ${humanChoice.toLowerCase()}, Computer chose ${getComputerChoice}, the result is: ${result}`
    );
  } else if (
    humanChoice.toLowerCase() == "sicssors" &&
    getComputerChoice == "Rock"
  ) {
    result = "You lose";
    console.log(
      `You choose ${humanChoice.toLowerCase()}, Computer chose ${getComputerChoice}, the result is: ${result}`
    );
  } else if (
    humanChoice.toLowerCase() == "sicssors" &&
    getComputerChoice == "Paper"
  ) {
    result = "You Win";
    console.log(
      `You choose ${humanChoice.toLowerCase()}, Computer chose ${getComputerChoice}, the result is: ${result}`
    );
  } else if (
    humanChoice.toLowerCase() == "sicssors" &&
    getComputerChoice == "Sicssors"
  ) {
    result = "Draw";
    console.log(
      `You choose ${humanChoice.toLowerCase()}, Computer chose ${getComputerChoice}, the result is: ${result}`
    );
  }

  if (result == "You Win") {
    humanScore++;
    console.log(`Player: ${humanScore}, computer: ${computerScore}`);
  } else if (result == "You lose") {
    computerScore++;
    console.log(`Player: ${humanScore}, computer: ${computerScore}`);
  }
}

for (let i = 1; i <= 5; i++) {
  getHumanChoice();
}
