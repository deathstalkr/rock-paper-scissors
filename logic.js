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
        break;
      case 1:
        return "paper";
        break;
      case 2:
        return "scissors";
        break;
    }
  }
  
  function playRound(playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase();

    // return results based on the choices of both player and computer
    if (player === computerSelection) {
      return `Draw! Taking re-match`;
    } else if (player == "rock" && computerSelection == "paper" ||
    player == "scissors" && computerSelection == "rock" ||
    player == "paper" && computerSelection == "scissors") {
      return `You loose! ${computerSelection} beats ${player}`;
    } else if (player == "paper" && computerSelection == "rock" ||
    player == "rock" && computerSelection == "scissors" ||
    player == "scissors" && computerSelection == "paper") {
      return `You win! ${player} beats ${computerSelection}`;
    } else {
      return `Please enter a valid option. Taking re-match`;
    }
  }
  
  function game() {
    let playerSelection = '';
    let computerSelection = '';
    let count = 0;
    alert(`You Vs Computer\n5 match series\n0 - 0`)
    
    // create a 5 match series
    for (let i = 0; i < 5; i++) {
  
      playerSelection = prompt(`Please choose any one:\nrock, paper or scissors`, '');
      computerSelection = getComputerChoice();
  
      let match = playRound(playerSelection, computerSelection)
      alert(match);
      console.log(match);
      
      // update player score and do a re-match if draw or invalid input is obtained.
      if (match.includes("win!")) {
        count += 1;
      } else if (match.includes("Please enter a valid option") || match.includes("Draw!")) {
        i--;
      }
    }

    // return the series results 
    if (count <= Math.floor(5 / 2)) {
      console.log(`You lost the series against the computer!! 
      ${count} - ${5-count}`)
      return alert(`You lost the series against the computer!!\n
      ${count} - ${5-count}`)
    } else {
      console.log(`You won the series against the computer!! Congratulations. ${count} - ${5-count}`)
      return alert(`You won the series against the computer!! Congratulations.\n
      ${count} - ${5-count}`)
    }
  }
  
  game()