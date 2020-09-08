//The site picks a random number between 1-100
//The user sees a prompt asking to guess and input a number 1-100
const numberGame = () => {
    const ranNum = Math.ceil(Math.random() * 100);
    var userGuess = prompt("Guess a number between 1 to 100!");
    var txt = "";
    //User sees if guess is too high or too low
    if(typeof userGuess !== "number" || userGuess < 1 || userGuess > 100) {
        txt = "Please enter a number between 1 and 100";
    } else if(userGuess > ranNum) {
        txt = `${userGuess} is too high. Try again.`
    } else if(userGuess < ranNum) {
        txt = `${userGuess} is too low. Try again.`
    } else {
        txt = `${userGuess} is correct! You won!`
    }
    document.getElementById("demo").innerHTML = txt;
};

//Allow user to continue to guess
//Notify user if they guesses correctly
/*User only gets seven guess or they are notified they lose */