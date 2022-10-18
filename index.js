const player1 = document.getElementById('nameInput1');
const player2 = document.getElementById('nameInput2');
const playerOfTime = document.getElementById('playerOfTime');
const op = document.querySelectorAll('.op');
let isTimeOfPlayer1;

for (let i = 0; i < op.length; i++) {


    op[i].addEventListener('click', (ev) => {
        if (playerOfTime.value === "") {
            let randomPlayer = Math.floor(Math.random()*2) + 1;
            let firstPlayer;
            if(randomPlayer === 1) {
                firstPlayer = player1.value
                isTimeOfPlayer1 = true;
            } else {
                firstPlayer = player2.value
                isTimeOfPlayer1 = false;
            }
            playerOfTime.value = firstPlayer;                   
        }
        let blockClicked = ev.target.dataset.value;
        writeXorO(isTimeOfPlayer1,blockClicked);
        isTimeOfPlayer1 = exchangeIsTimeOfPlayer1(isTimeOfPlayer1)
        winner(op);
    });
}

function exchangeIsTimeOfPlayer1(play1) {    
        if(play1 === true) {
            play1 = false;
            playerOfTime.value = player2.value;
        } else if(play1 === false) {
            play1 = true;
            playerOfTime.value = player1.value;
        }    
        return play1;   
}

function writeXorO(play1,clicked) {
    if(play1 === true) {
        op[clicked-1].innerHTML = 'x';
    } else if(play1 === false) {
        op[clicked-1].innerHTML = 'o';
    }

    return play1;
}

function winner(op) {    

    //jogador 1 ganhou
    if(op[0].textContent == 'x' && op[1].textContent == 'x' && op[2].textContent == 'x') {
        op[0].classList.add('sucess');
        op[1].classList.add('sucess');
        op[2].classList.add('sucess');        
        setTimeout(() => {
            alert(`O jogador ${player1.value} ganhou!!!`);
        },1000);
        setTimeout(()=>{
            resetGame();
        },3000);            
    } else if(op[3].textContent == 'x' && op[4].textContent == 'x' && op[5].textContent == 'x') {
        op[3].classList.add('sucess');
        op[4].classList.add('sucess');
        op[5].classList.add('sucess');
        setTimeout(() => {
            alert(`O jogador ${player1.value} ganhou!!!`);
        },1000);
        setTimeout(()=>{
            resetGame();
        },3000);
    } else if(op[6].textContent == 'x' && op[7].textContent == 'x' && op[8].textContent == 'x') {
        op[6].classList.add('sucess');
        op[7].classList.add('sucess');
        op[8].classList.add('sucess');
        setTimeout(() => {
            alert(`O jogador ${player1.value} ganhou!!!`);
        },1000);
        setTimeout(()=>{
            resetGame();
        },3000);
    } else if(op[0].textContent == 'x' && op[3].textContent == 'x' && op[6].textContent == 'x') {
        op[0].classList.add('sucess');
        op[3].classList.add('sucess');
        op[6].classList.add('sucess');
        setTimeout(() => {
            alert(`O jogador ${player1.value} ganhou!!!`);
        },1000);
        setTimeout(()=>{
            resetGame();
        },3000);
    } else if(op[1].textContent == 'x' && op[4].textContent == 'x' && op[7].textContent == 'x') {
        op[1].classList.add('sucess');
        op[4].classList.add('sucess');
        op[7].classList.add('sucess');
        setTimeout(() => {
            alert(`O jogador ${player1.value} ganhou!!!`);
        },1000);
        setTimeout(()=>{
            resetGame();
        },3000);
    } else if(op[2].textContent == 'x' && op[5].textContent == 'x' && op[8].textContent == 'x') {
        op[2].classList.add('sucess');
        op[5].classList.add('sucess');
        op[8].classList.add('sucess');
        setTimeout(() => {
            alert(`O jogador ${player1.value} ganhou!!!`);
        },1000);
        setTimeout(()=>{
            resetGame();
        },3000);
    } else if(op[0].textContent == 'x' && op[4].textContent == 'x' && op[8].textContent == 'x') {
        op[0].classList.add('sucess');
        op[4].classList.add('sucess');
        op[8].classList.add('sucess');
        setTimeout(() => {
            alert(`O jogador ${player1.value} ganhou!!!`);
        },1000);
        setTimeout(()=>{
            resetGame();
        },3000);
    } else if(op[2].textContent == 'x' && op[4].textContent == 'x' && op[6].textContent == 'x') {
        op[2].classList.add('sucess');
        op[4].classList.add('sucess');
        op[6].classList.add('sucess');
        setTimeout(() => {
            alert(`O jogador ${player1.value} ganhou!!!`);
        },1000);
        setTimeout(()=>{
            resetGame();
        },3000);
    }

    //jogador 2 ganhou
    if(op[0].textContent == 'o' && op[1].textContent == 'o' && op[2].textContent == 'o') {
        op[0].classList.add('sucess');
        op[1].classList.add('sucess');
        op[2].classList.add('sucess');
        setTimeout(() => {
            alert(`O jogador ${player2.value} ganhou!!!`);
        },1000);
        setTimeout(()=>{
            resetGame();
        },3000);
    } else if(op[3].textContent == 'o' && op[4].textContent == 'o' && op[5].textContent == 'o') {
        op[3].classList.add('sucess');
        op[4].classList.add('sucess');
        op[5].classList.add('sucess');
        setTimeout(() => {
            alert(`O jogador ${player2.value} ganhou!!!`);
        },1000);
        setTimeout(()=>{
            resetGame();
        },3000);
    } else if(op[6].textContent == 'o' && op[7].textContent == 'o' && op[8].textContent == 'o') {
        op[6].classList.add('sucess');
        op[7].classList.add('sucess');
        op[8].classList.add('sucess');
        setTimeout(() => {
            alert(`O jogador ${player2.value} ganhou!!!`);
        },1000);
        setTimeout(()=>{
            resetGame();
        },3000);
    } else if(op[0].textContent == 'o' && op[3].textContent == 'o' && op[6].textContent == 'o') {
        op[0].classList.add('sucess');
        op[3].classList.add('sucess');
        op[6].classList.add('sucess');
        setTimeout(() => {
            alert(`O jogador ${player2.value} ganhou!!!`);
        },1000);
        setTimeout(()=>{
            resetGame();
        },3000);
    } else if(op[1].textContent == 'o' && op[4].textContent == 'o' && op[7].textContent == 'o') {
        op[1].classList.add('sucess');
        op[4].classList.add('sucess');
        op[7].classList.add('sucess');
        setTimeout(() => {
            alert(`O jogador ${player2.value} ganhou!!!`);
        },1000);
        setTimeout(()=>{
            resetGame();
        },3000);
    } else if(op[2].textContent == 'o' && op[5].textContent == 'o' && op[8].textContent == 'o') {
        op[2].classList.add('sucess');
        op[5].classList.add('sucess');
        op[8].classList.add('sucess');
        setTimeout(() => {
            alert(`O jogador ${player2.value} ganhou!!!`);
        },1000);
        setTimeout(()=>{
            resetGame();
        },3000);
    } else if(op[0].textContent == 'o' && op[4].textContent == 'o' && op[8].textContent == 'o') {
        op[0].classList.add('sucess');
        op[4].classList.add('sucess');
        op[8].classList.add('sucess');
        setTimeout(() => {
            alert(`O jogador ${player2.value} ganhou!!!`);
        },1000);
        setTimeout(()=>{
            resetGame();
        },3000);
    } else if(op[2].textContent == 'o' && op[4].textContent == 'o' && op[6].textContent == 'o') {
        op[2].classList.add('sucess');
        op[4].classList.add('sucess');
        op[6].classList.add('sucess');
        setTimeout(() => {
            alert(`O jogador ${player2.value} ganhou!!!`);
        },1000);
        setTimeout(()=>{
            resetGame();
        },3000);
    }

    if(op[0].textContent !=='' && op[1].textContent !=='' && op[2].textContent !=='' && op[3].textContent !=='' && op[4].textContent !=='' && op[5].textContent !=='' && op[6].textContent !=='' && op[7].textContent !=='' && op[8].textContent !=='') {
        setTimeout(() => {
            alert(`Ninguem ganhou, deu velha :(, tentem novamente`);
        },500);
        setTimeout(()=>{
            resetGame();
        },2000);
    }
}

function resetGame() {
    for (let i = 0; i < op.length; i++) {
        op[i].innerText = ''; 
        op[i].classList.remove('sucess');   
    }
    player1.value = '';
    player2.value = '';
    playerOfTime.value = '';
}