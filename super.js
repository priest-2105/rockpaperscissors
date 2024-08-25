const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.scoreBoard');
const result_div = document.querySelector('.result');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');


rock_div.addEventListener('click', function() {
    console.log('Hey you clicked on rock'); 
})

paper_div.addEventListener('click', function() {
    console.log('Hey you clicked on paper');  
})

scissors_div.addEventListener('click', function() {
    console.log('Hey you clicked on scissors');
})