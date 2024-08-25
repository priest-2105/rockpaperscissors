let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.scoreBoard');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');



function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}


function win(userChoice, computerChoice){
    userScore++
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    console.log(userChoice);
    console.log(computerChoice);
    result_p.innerHTML = userChoice + 'Beats' + computerChoice + 'You win 🔥'
}


function lose(){
    computerScore++
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
}

function draw(){
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
}
    



function game (userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
          win(userChoice, computerChoice);
        break;
        case "rp":
        case "pa":
        case "ar":
          lose(userChoice, computerChoice);
        break;  
        case "rr":
        case "pp":
        case "ss":
          draw(userChoice, computerChoice);
        break;
    }
    
}

function main() {
    
    rock_div.addEventListener('click', function() {
        game("r");
    })

    paper_div.addEventListener('click', function() {
        game("p");
    })

    scissors_div.addEventListener('click', function() {
        game("s");
    })

};

main();