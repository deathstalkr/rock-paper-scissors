const container = document.querySelectorAll("button");
let id = "";
let playerCount = 0;
let computerCount = 0;
const para = document.querySelector("#para");

container.forEach((button) => {
	button.addEventListener("click", () => {
		id = button.id;
		game();
	});
});

function randomNum() {
	// return a random number between 1 and 3 to choose an option for the computer
	return Math.floor(Math.random() * 3);
}

function getComputerChoice() {
	// return computer's choice based on the random number obtained above
	let i = randomNum();
	switch (i) {
		case 0:
			return "rock";
		case 1:
			return "paper";
		case 2:
			return "scissors";
	}
}

function game() {
	let computerSelection = "";
	computerSelection = getComputerChoice();

	switch (id) {
		case "rock":
			playRound("rock", computerSelection);
			break;
		case "paper":
			playRound("paper", computerSelection);
			break;
		case "scissors":
			playRound("scissors", computerSelection);
			break;
	}
	// game of 5 matches
	if (playerCount == 5 || computerCount == 5) {
		if (playerCount > computerCount) {
			alert(
				`You Won the series against the computer\n${playerCount} - ${computerCount}`
			);
			playerCount = 0;
			computerCount = 0;
			para.textContent = ``;
		}
		if (computerCount > playerCount) {
			alert(
				`You Lost the series against the computer\n${playerCount} - ${computerCount}`
			);
			playerCount = 0;
			computerCount = 0;
			para.textContent = ``;
		}
	}
}

function playRound(playerSelection, computerSelection) {
	// return results based on the choices of both player and computer
	if (playerSelection === computerSelection) {
		para.textContent = `Draw! Taking re-match\n ${playerCount} - ${computerCount}`;
	} else if (
		(playerSelection == "rock" && computerSelection == "paper") ||
		(playerSelection == "scissors" &&
			computerSelection == "rock") ||
		(playerSelection == "paper" && computerSelection == "scissors")
	) {
		computerCount += 1;
		para.textContent = `You loose! ${computerSelection} beats ${playerSelection}\n ${playerCount} - ${computerCount}`;
	} else if (
		(playerSelection == "paper" && computerSelection == "rock") ||
		(playerSelection == "rock" &&
			computerSelection == "scissors") ||
		(playerSelection == "scissors" && computerSelection == "paper")
	) {
		playerCount += 1;
		para.textContent = `You win! ${playerSelection} beats ${computerSelection}\n ${playerCount} - ${computerCount}`;
	}
}
