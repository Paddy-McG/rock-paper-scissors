const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    let comPic = (Math.floor(Math.random() * 3));
    return choices[comPic];
}
console.log(getComputerChoice());