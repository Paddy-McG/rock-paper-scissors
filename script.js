
function getComputerChoice() {
    let comNum = (Math.floor(Math.random() * 3));
    comPic = choices[comNum];
}
function playRound() {
    //if(comPic === playPic) {
        //return (`Yous have both selected the same object which is: ${playPic}`);
    if(comPic === rock && playPic === scissors) {
        comWins ++;
        totWins ++;
        return "You Lose! Rock beats Scissors";
    } else if(comPic === rock && playPic === paper) {
        playWins ++;
        totWins ++;
        return "You Win! Paper beats Rock";
    } else if(comPic === paper && playPic === scissors) {
        playWins ++;
        totWins ++;
        return "You Win! Scissors beats Paper";
    } else if(comPic === paper && playPic === rock) {
        comWins ++;
        totWins ++;
        return "You Lose! Paper beats Rock";
    } else if(comPic === scissors && playPic === paper) {
        comWins ++;
        totWins ++;
        return "You Lose! Scissors beats Paper";
    } else if(comPic === scissors && playPic === rock) {
        playWins ++;
        totWins ++;
        return "You Win! Rock beats Scissors";
    } else {
        return `Its a draw! Yous both choose ${comPic}! so noone wins`;
    }
}
function checkWin() {
    if(playWins > comWins) {
        return `Player wins the best of 5 rounds against the computer with a score of ${playWins}/5`;
    } else if (playWins < comWins) {
        return `Computer wins the best of 5 rounds against the Player with a score of ${comWins}/5`;
    }
}
const choices = ["rock", "paper", "scissors"];

let comPic = "";
let paper = "paper";
let rock = "rock";
let scissors = "scissors"
let playWins = 0;
let comWins = 0;
let totWins = 0;

while(totWins < 5) {
    getComputerChoice();
    playPic = (prompt("Please enter your choice")).toLowerCase();
    console.log(playRound());
}
alert(checkWin());