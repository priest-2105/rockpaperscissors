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

function convertToWord(letter){
    if (letter === 'r') return 'Rock';
    if (letter === 'p') return 'Paper';
    if (letter ==='s') return 'Scissors';
}



function win(userChoice, computerChoice){
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore++
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore; 
    result_p.innerHTML = ` ${convertToWord(userChoice)}${smallUserWord}  Beats  ${convertToWord(computerChoice)}${smallCompWord}.  You win 🔥`
    userChoice_div.classList.add('success-glow')
    setTimeout(function() {
        userChoice_div.classList.remove('success-glow')
    }, 300)
}


function lose(userChoice, computerChoice){
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    computerScore++
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore; 
    result_p.innerHTML = ` ${convertToWord(userChoice)}${smallUserWord}  Loses to ${convertToWord(computerChoice)}${smallCompWord}.  You Lost 💩`
    userChoice_div.classList.add('lose-glow')
    setTimeout(function() {
        userChoice_div.classList.remove('lose-glow')
    }, 300)
    
}

function draw(userChoice, computerChoice){
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = ` ${convertToWord(userChoice)}${smallUserWord} Equals ${convertToWord(computerChoice)}${smallCompWord}.  Its a draw`
    userChoice_div.classList.add('draw-glow')
    setTimeout(function() {
        userChoice_div.classList.remove('draw-glow')
    }, 300)
    
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