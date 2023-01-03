let weaponChoice = document.getElementById('weapon-choice')
let gameText = document.getElementById('gameText');
let botWeap = document.getElementById('botWeap');
let cpuChoice = document.getElementById('cpu-choice')

let choiceVar = '';
let CPUScore = 3;
let PLAYERScore = 3;
let randomChoice = '';
let resultEl = document.getElementById('result-el');
let playAgainBtn = document.getElementById('playAgainBtn')
let yourChoice = '';
const rock = document.getElementById('rock');
const  paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

const playerScoreMSG = document.getElementById('player-score')
const cpuScoreMSG = document.getElementById('cpu-score');
const againDiv = document.getElementById('again-div');

playAgainBtn.style.display = 'none';

let fff = document.getElementById('flex-box-rps-div');

renderGame();














    
    

//CPU TURN******************************************************
function botRandomChoice() {
    randomChoice = Math.floor( Math.random() * 3)
    
    if ( randomChoice === 0 ) {
        cpuChoice.innerHTML += `<img id='rock' src="rock.png" height=150 width=150 alt="rock">`
        botWeap.innerHTML = `<p>the computer chose rock<p>`
        //snd
        var audio = new Audio('sounds/stone.wav');
        audio.volume = 0.3;
        audio.play();

        setTimeout(result, 1000);
           
    } else if ( randomChoice === 1 ) {
        cpuChoice.innerHTML += `<img id='paper' src="papier.png" height=150 width=150 alt="paper">`
        botWeap.innerHTML = `<p>the computer chose paper<p>`
        //snd
        var audio = new Audio('sounds/paper.wav');
        audio.volume = 0.9;
        audio.play();


        setTimeout(result, 1000);
           
    } else {
        cpuChoice.innerHTML += `<img id='scissors' src="schaar.png" height=150 width=150 alt="scissors">`
        botWeap.innerHTML = `<p>the computer chose scissors<p>`

        //snd
        var audio = new Audio('sounds/scissor-cut.wav');
        audio.volume = 0.9;
        audio.play();

        setTimeout(result, 1000);
         
    }
}



//RESULT**********************************************************
function result() {
    
        if ( choiceVar ===  randomChoice ) {
        setTimeout(() => {
            resultEl.innerHTML = `<h3>IT IS A DRAW !<h3>`;
            
                       
        }, 200);
        setTimeout(playAgainYo, 1000);
        
        
        
    } else if ( choiceVar === 0 && randomChoice === 1) {
        setTimeout(() => {
            resultEl.innerHTML = `<h3>YOU LOST !<h3>`;
            
            PLAYERScore -= 1;
            playerScoreMSG.innerHTML = PLAYERScore;
            
        }, 200);
        setTimeout(playAgainYo, 1000);
        
    } else if ( choiceVar === 0 && randomChoice === 2 ) {
        setTimeout(() => {
            resultEl.innerHTML = `<h3>YOU WON !<h3>`;
            
            CPUScore -= 1;
            cpuScoreMSG.innerHTML = CPUScore;
            
        }, 200);
        setTimeout(playAgainYo, 1000);
        
    } else if ( choiceVar === 1 && randomChoice === 0 ) {
        setTimeout(() => {
            resultEl.innerHTML = `<h3>YOU WON !<h3>`;
            
            CPUScore -= 1;
            cpuScoreMSG.innerHTML = CPUScore;
            
            
        }, 200);
        setTimeout(playAgainYo, 1000);
        
    } else if ( choiceVar === 1 && randomChoice === 2 ) {
        setTimeout(() => {
            resultEl.innerHTML = `<h3>YOU LOST !<h3>`;
            
            PLAYERScore -= 1;
            playerScoreMSG.innerHTML = PLAYERScore;
            
            
        }, 200);
        setTimeout(playAgainYo, 1000);
        
    } else if ( choiceVar === 2 && randomChoice === 0 ) {
        setTimeout(() => {
            resultEl.innerHTML = `<h3>YOU LOST !<h3>`;
            
            PLAYERScore -= 1;
            playerScoreMSG.innerHTML = PLAYERScore;
            
            
        }, 200);
        setTimeout(playAgainYo, 1000);
        
    } else if ( choiceVar === 2 && randomChoice === 1 ) {
        setTimeout(() => {
            resultEl.innerHTML = `<h3>YOU WON !<h3>`;
            
            CPUScore -= 1;
            cpuScoreMSG.innerHTML = CPUScore;
            

        }, 200);
        setTimeout(playAgainYo, 1000);
        
    }
}

//play again button functie
function playAgainYo() {
    if ( PLAYERScore === 0 ) {
        
        
        var audio = new Audio('sounds/gameover.wav');
        audio.volume = 0.1;
        audio.play();
        
        playAgainBtn.addEventListener('click', playAgain);
        setTimeout(() => {
            endGame()

        }, 4000);
        
    } else if ( CPUScore === 0 ) {
        
        var audio = new Audio('sounds/win.wav');
        audio.volume = 0.2;
        audio.play();
        
        
        playAgainBtn.addEventListener('click', playAgain);
        setTimeout(() => {
            endGame()

        }, 4000);
    } else {
        setTimeout(() => {
            continueGame();
        }, 1000);
        
       

    }
    
    



    
}

function continueGame() {
    weaponChoice.innerHTML = '';
    cpuChoice.innerHTML = '';
    resultEl.innerHTML = '';
    gameText.innerHTML = '';
    botWeap.innerHTML = '';
    
    playAgainBtn.style.display = 'none';
    
    renderGame();

}

function playAgain() {
    
    
    weaponChoice.innerHTML = '';
    cpuChoice.innerHTML = '';
    resultEl.innerHTML = '';
    gameText.innerHTML = '';
    botWeap.innerHTML = '';
    CPUScore = 3;
    PLAYERScore = 3;
    cpuScoreMSG.innerHTML = CPUScore;
    playerScoreMSG.innerHTML = PLAYERScore;
    
    playAgainBtn.style.display = 'none';
    
    renderGame();
    

}




function papersnd() {
    paper.play();
    
}



    
    
     



function rockStartGame() {
    yourChoice = 'rock';
    startGame();
}

function paperStartGame() {
    yourChoice = 'paper';
    
    startGame();

}

function scissorsStartGame() {
    yourChoice = 'scissors';
    startGame();

}

function startGame() {
    
    
    
    if ( yourChoice === 'rock') {
        choiceVar= 0;
        resultEl.innerHTML = '';
        
        weaponChoice.innerHTML += `<img id='rock' src="rock.png" height=150 width=150 alt="rock">`//******************************************************************** */
        document.getElementById('rock').remove();
        document.getElementById('paper').remove();
        document.getElementById('scissors').remove();
        
        gameText.innerHTML = `<p>you chose rock<p>`;
                
        var audio = new Audio('sounds/stone.wav');
        audio.volume = 0.3;
        audio.play();
        
        
        setTimeout(botRandomChoice, 1000);
    } else if ( yourChoice === 'paper') {
        choiceVar = 1;
        resultEl.innerHTML = '';
        var audio = new Audio('sounds/paper.wav');
        audio.volume = 0.9;
        audio.play();
        weaponChoice.innerHTML += `<img id='paper' src="papier.png" height=150 width=150 alt="paper">`
        document.getElementById('rock').remove();
        document.getElementById('paper').remove();
        document.getElementById('scissors').remove();
        
        gameText.innerHTML = `<p>you chose paper<p>`;
        
        setTimeout(botRandomChoice, 1000);
    } else {
        choiceVar = 2;
        resultEl.innerHTML = '';
        weaponChoice.innerHTML += `<img id='scissors' src="schaar.png" height=150 width=150 alt="scissors">`
        document.getElementById('rock').remove();
        document.getElementById('paper').remove();
        document.getElementById('scissors').remove();
        gameText.innerHTML = `<p>you chose scissors<p>`
        var audio = new Audio('sounds/scissor-cut.wav');
        audio.volume = 0.9;
        audio.play();
        
        setTimeout(botRandomChoice, 1000);
    }

}

function renderGame() {

    

   
    
    resultEl.innerHTML = 'Choose your weapon';
    
    

    playAgainBtn.style.display = 'none';// weg?
    let stoneStart = document.createElement('img');
    fff.appendChild(stoneStart);
    stoneStart.src = 'rock.png';
    stoneStart.id = 'rock';
    
    stoneStart.addEventListener('click', rockStartGame);

    let paperStart = document.createElement('img');
    fff.appendChild(paperStart);
    paperStart.src = 'papier.png';
    paperStart.id = 'paper';
    
    paperStart.addEventListener('click', paperStartGame);

    let scissorsStart = document.createElement('img');
    fff.appendChild(scissorsStart);
    scissorsStart.src = 'schaar.png';
    scissorsStart.id = 'scissors';
    scissorsStart.addEventListener('click', scissorsStartGame)
    cpuScoreMSG.innerHTML = CPUScore;
    playerScoreMSG.innerHTML = PLAYERScore;

}

function endGame() {   
    
    playAgainBtn.style.display = 'inline-block';
    

}