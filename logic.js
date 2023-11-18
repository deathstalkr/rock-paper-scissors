function randomNum() {
    // get random numbers between 1 to 3
    return Math.floor(Math.random() * 3);
  }
  
  function getComputerChoice() {
    let i = randomNum();

    // get computer's choice from array of choices
    // let arr = ["rock", "paper", "scissors"];
    // return arr[i];

    // return computer's choice using switch statement
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
  
  //   function playRound(playerSelection, computerSelection) {
  //     const player = playerSelection.toLowerCase();

         // using if else for all possible combination
  //     if (player == "rock" && computerSelection == "paper") {
  //       return `You lose! Paper beats Rock`;
  //     } else if (player == "paper" && computerSelection == "rock") {
  //       return `You Win! Paper beats Rock`;
  //     } else if (player == "rock" && computerSelection == "scissors") {
  //       return `You Win! Rock beats Scissors`;
  //     } else if (player == "scissors" && computerSelection == "rock") {
  //       return `You loose! Rock beats Scissors`;
  //     } else if (player == "paper" && computerSelection == "scissors") {
  //       return `You Loose! Scissors beats Paper`;
  //     } else if (player == "scissors" && computerSelection == "paper") {
  //       return `You Win! Scissors beats Paper`;
  //     } else if (player == "rock" && computerSelection == "rock") {
  //       return `Draw! play again`;
  //     } else if (player == "paper" && computerSelection == "paper") {
  //       return `Draw! play again`;
  //     } else if (player == "scissors" && computerSelection == "scissors") {
  //       return `Draw! play again`;
  //     } else {
  //       return `Please enter a valid option`;
  //     }
  //   }
  
  function playRound(playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase();

    // modified if - else statement by checking multiple combinations at once 
    if (player === computerSelection) {
      return `Draw! Taking re-match`;
    } else if (player == "rock" && computerSelection == "paper" || player == "scissors" && computerSelection == "rock" || player == "paper" && computerSelection == "scissors") {
      return `You loose! ${computerSelection} beats ${player}`;
    } else if (player == "paper" && computerSelection == "rock" || player == "rock" && computerSelection == "scissors" || player == "scissors" && computerSelection == "paper") {
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
    
    // for 5 match series calling the playRound function 5 times using loop
    for (let i = 0; i < 5; i++) {
  
      playerSelection = prompt(`Please choose any one:\nrock, paper or scissors`, '');
      computerSelection = getComputerChoice();
  
      let match = playRound(playerSelection, computerSelection)
      alert(match);
      console.log(match);
      
      // Updating player score and also calling for a re-match if draw or invalid input is obtained.
      if (match.includes("win!")) {
        count += 1;
      } else if (match.includes("Please enter a valid option") || match.includes("Draw!")) {
        i--;
      }
    }

    // Showing the series results 
    if (count <= Math.floor(5 / 2)) {
      console.log(`You lost the series against the computer!! ${count} - ${5-count}`)
      return alert(`You lost the series against the computer!!\n${count} - ${5-count}`)
    } else {
      console.log(`You won the series against the computer!! Congratulations. ${count} - ${5-count}`)
      return alert(`You won the series against the computer!! Congratulations.\n${count} - ${5-count}`)
    }
  }
  
  game()