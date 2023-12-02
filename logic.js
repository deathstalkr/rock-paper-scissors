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
		default:
			break;
	}

  if (playerCount == 5 || computerCount == 5){
    if (playerCount > computerCount){
      alert(`You Won the series against the computer\n${playerCount} - ${computerCount}`);
      playerCount = 0;
      computerCount = 0;
      para.textContent = ``;
    } if (computerCount > playerCount){
      alert(`You Lost the series against the computer\n${playerCount} - ${computerCount}`);
      playerCount = 0;
      computerCount = 0;
      para.textContent = ``;
    }
  }

	// create a 5 match series
	//alert(`You Vs Computer\n5 match series\n0 - 0`);
	/*	for (let i = 0; i < 5; i++) {
		playerSelection = prompt(
			`Please choose any one:\nrock, paper or scissors`,
			""
		);
		computerSelection = getComputerChoice();

		let match = playRound(playerSelection, computerSelection);
		alert(match);
		console.log(match);

		// update player score and do a re-match if draw or invalid input is obtained.
		if (match.includes("win!")) {
			count += 1;
		} else if (
			match.includes("Please enter a valid option") ||
			match.includes("Draw!")
		) {
			i--;
		}
	} */

	// return the series results
	/* if (count <= Math.floor(5 / 2)) {
      console.log(`You lost the series against the computer!! 
      ${count} - ${5-count}`)
      return alert(`You lost the series against the computer!!\n
      ${count} - ${5-count}`)
    } else {
      console.log(`You won the series against the computer!! Congratulations. ${count} - ${5-count}`)
      return alert(`You won the series against the computer!! Congratulations.\n
      ${count} - ${5-count}`)
    } */
}

function playRound(playerSelection, computerSelection) {
	const player = playerSelection.toLowerCase();

	// return results based on the choices of both player and computer
	if (player === computerSelection) {
		para.textContent = `Draw! Taking re-match\n ${playerCount} - ${computerCount}`;
	} else if (
		(player == "rock" && computerSelection == "paper") ||
		(player == "scissors" && computerSelection == "rock") ||
		(player == "paper" && computerSelection == "scissors")
	) {
    computerCount += 1;
		para.textContent = `You loose! ${computerSelection} beats ${player}\n ${playerCount} - ${computerCount}`;
		
	} else if (
		(player == "paper" && computerSelection == "rock") ||
		(player == "rock" && computerSelection == "scissors") ||
		(player == "scissors" && computerSelection == "paper")
	) {
    playerCount += 1;
		para.textContent = `You win! ${player} beats ${computerSelection}\n ${playerCount} - ${computerCount}`;
		
	} else {
		para.textContent = `Please enter a valid option. Taking re-match\n ${playerCount} - ${computerCount}`;
	}
}
