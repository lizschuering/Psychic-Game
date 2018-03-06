let letterChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z'];

// Creates a variable for each item on the page for which the count will increase or decrease depending on whether the user presses a letter on the keypad
let wins = 0;
let losses = 0;
let guessLeft = 9;

// Create a variable that stores a randomly generated letter from the array letterChoices. This is the computer's choice that the user has to guess.
let computerChoice = letterChoices[Math.floor(Math.random() * letterChoices.length)];

// Create empty array to hold and display the user's letter choices
let lettersGuessed = [];

// Turn on the event listener
document.onkeyup = function(event) {
    //let userChoice = event.key;
    //let userGuess = userChoice.toLowerCase();
    // Create a single variable that stores the user's key press
    let userGuess = String.fromCharCode(event.which).toLowerCase();

    // Runs the game logic but only if the user selects a valid (ie letter) key
    if (letterChoices.indexOf(userGuess) !== -1 && lettersGuessed.indexOf(userGuess) === -1) {
        // If user's guess matches the computer's random selection, the win count goes up by 1 and guessLeft goes back to 9
        if (userGuess === computerChoice) {
            wins++;
            resetGame();
        } else { // User's remaining guesses will decrease if the correct answer is not chosen
            guessLeft--;
            lettersGuessed.push(userGuess);
            console.log(lettersGuessed);  
        }
        // If the user runs out of guesses, the loss count goes up by 1 and guessLeft goes back to 9
        if (guessLeft === 0) {
            losses++;
            resetGame();
        }
        
    document.getElementById('wins').innerHTML = wins; //updates the user's win count in the HTML
    document.getElementById('losses').innerHTML = losses; //updates the user's loss count in the HTML
    document.getElementById('guessLeft').innerHTML = guessLeft; //updates the user's guesses left count in the HTML
    document.getElementById('userChoice').innerHTML = lettersGuessed; //updates the user's guesses so far in the empty array
    }

    function resetGame() {
        guessLeft = 9; //Reset the guesses left to 9
        lettersGuessed = []; //Empty the variable that holds the letter guesses
        computerChoice = letterChoices[Math.floor(Math.random() * letterChoices.length)]; //Generate a new random number
        console.log("New letter to guess: " + computerChoice); //Must log a new letter to the console so the user can keep guessing
        }
    }