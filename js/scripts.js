let pos1 = document.getElementById('b1');
let pos2 = document.getElementById('b2');
let pos3 = document.getElementById('b3');
let pos4 = document.getElementById('b4');
let pos5 = document.getElementById('b5');
let pos6 = document.getElementById('b6');
let pos7 = document.getElementById('b7');
let pos8 = document.getElementById('b8');
let pos9 = document.getElementById('b9');

let btnStart = document.getElementById('btn-start');
let btnRestart = document.getElementById('btn-restart');
let mainContainer = document.getElementById('main-container');

let turn = document.getElementById('vez-jogar');


btnStart.addEventListener('click', startClick);
btnRestart.addEventListener('click', restartClick);
pos1.addEventListener('click', item1);
pos2.addEventListener('click', item2);
pos3.addEventListener('click', item3);
pos4.addEventListener('click', item4);
pos5.addEventListener('click', item5);
pos6.addEventListener('click', item6);
pos7.addEventListener('click', item7);
pos8.addEventListener('click', item8);
pos9.addEventListener('click', item9);

pos1.addEventListener('click', results);
pos2.addEventListener('click', results);
pos3.addEventListener('click', results);
pos4.addEventListener('click', results);
pos5.addEventListener('click', results);
pos6.addEventListener('click', results);
pos7.addEventListener('click', results);
pos8.addEventListener('click', results);
pos9.addEventListener('click', results);

function startClick() {
    btnStart.style.display = 'none';
    mainContainer.style.display = 'flex';
}

function restartClick() {
    location.reload();
}

function item1() {
    if (turn.innerText == 'X') {
        pos1.value = 'X'
        pos1.disabled = true;
        pos1.style.color = 'blue'
        turn.innerText = 'O'
    } else if (turn.innerHTML == 'O') {
        pos1.value = 'O'
        pos1.disabled = true;
        pos1.style.color = 'red'
        turn.innerText = 'X'
    }
}

function item2() {
    if (turn.innerText == 'X') {
        pos2.value = 'X'
        pos2.disabled = true;
        pos2.style.color = 'blue'
        turn.innerText = 'O'
    } else if (turn.innerHTML == 'O') {
        pos2.value = 'O'
        pos2.disabled = true;
        pos2.style.color = 'red'
        turn.innerText = 'X'
    }
}


function item3() {
    if (turn.innerText == 'X') {
        pos3.value = 'X'
        pos3.disabled = true;
        pos3.style.color = 'blue'
        turn.innerText = 'O'
    } else if (turn.innerHTML == 'O') {
        pos3.value = 'O'
        pos3.disabled = true;
        pos3.style.color = 'red'
        turn.innerText = 'X'
    }
}

function item4() {
    if (turn.innerText == 'X') {
        pos4.value = 'X'
        pos4.disabled = true;
        pos4.style.color = 'blue'
        turn.innerText = 'O'
    } else if (turn.innerHTML == 'O') {
        pos4.value = 'O'
        pos4.disabled = true;
        pos4.style.color = 'red'
        turn.innerText = 'X'
    }
}

function item5() {
    if (turn.innerText == 'X') {
        pos5.value = 'X'
        pos5.disabled = true;
        pos5.style.color = 'blue'
        turn.innerText = 'O'
    } else if (turn.innerHTML == 'O') {
        pos5.value = 'O'
        pos5.disabled = true;
        pos5.style.color = 'red'
        turn.innerText = 'X'
    }
}

function item6() {
    if (turn.innerText == 'X') {
        pos6.value = 'X'
        pos6.disabled = true;
        pos6.style.color = 'blue'
        turn.innerText = 'O'
    } else if (turn.innerHTML == 'O') {
        pos6.value = 'O'
        pos6.disabled = true;
        pos6.style.color = 'red'
        turn.innerText = 'X'
    }
}

function item7() {
    if (turn.innerText == 'X') {
        pos7.value = 'X'
        pos7.disabled = true;
        pos7.style.color = 'blue'
        turn.innerText = 'O'
    } else if (turn.innerHTML == 'O') {
        pos7.value = 'O'
        pos7.disabled = true;
        pos7.style.color = 'red'
        turn.innerText = 'X'
    }
}

function item8() {
    if (turn.innerText == 'X') {
        pos8.value = 'X'
        pos8.disabled = true;
        pos8.style.color = 'blue'
        turn.innerText = 'O'
    } else if (turn.innerHTML == 'O') {
        pos8.value = 'O'
        pos8.disabled = true;
        pos8.style.color = 'red'
        turn.innerText = 'X'
    }
}

function item9() {
    if (turn.innerText == 'X') {
        pos9.value = 'X'
        pos9.disabled = true;
        pos9.style.color = 'blue'
        turn.innerText = 'O'
    } else if (turn.innerHTML == 'O') {
        pos9.value = 'O'
        pos9.disabled = true;
        pos9.style.color = 'red'
        turn.innerText = 'X'
    }
}

function results() {

    // Horizontal
    if ((pos1.value == 'x' || pos1.value == 'X') && (pos2.value == 'x' || pos2.value == 'X') && (pos3.value == 'x' || pos3.value == 'X')) {
        pos4.disabled = true;
        pos5.disabled = true;
        pos6.disabled = true;
        pos7.disabled = true;
        pos8.disabled = true;
        pos9.disabled = true;
        window.alert('X venceu');
    } else if ((pos4.value == 'x' || pos4.value == 'X') && (pos5.value == 'x' || pos5.value == 'X') && (pos6.value == 'x' || pos6.value == 'X')) {
        pos1.disabled = true;
        pos2.disabled = true;
        pos3.disabled = true;
        pos7.disabled = true;
        pos8.disabled = true;
        pos9.disabled = true;
        window.alert('X venceu');
    } else if ((pos7.value == 'x' || pos7.value == 'X') && (pos8.value == 'x' || pos8.value == 'X') && (pos9.value == 'x' || pos9.value == 'X')) {
        pos1.disabled = true;
        pos2.disabled = true;
        pos3.disabled = true;
        pos4.disabled = true;
        pos5.disabled = true;
        pos6.disabled = true;
        window.alert('X venceu');

    // Diagonal
    } else if ((pos1.value == 'x' || pos1.value == 'X') && (pos4.value == 'x' || pos4.value == 'X') && (pos7.value == 'x' || pos7.value == 'X')) {
        pos2.disabled = true;
        pos3.disabled = true;
        pos5.disabled = true;
        pos6.disabled = true;
        pos8.disabled = true;
        pos9.disabled = true;
        window.alert('X venceu');
    } else if ((pos3.value == 'x' || pos3.value == 'X') && (pos5.value == 'x' || pos5.value == 'X') && (pos7.value == 'x' || pos7.value == 'X')) {
        pos1.disabled = true;
        pos2.disabled = true;
        pos4.disabled = true;
        pos6.disabled = true;
        pos8.disabled = true;
        pos9.disabled = true;
        window.alert('X venceu');

    // Vertical
    } else if ((pos1.value == 'x' || pos1.value == 'X') && (pos5.value == 'x' || pos5.value == 'X') && (pos9.value == 'x' || pos9.value == 'X')) {
        pos2.disabled = true;
        pos3.disabled = true;
        pos4.disabled = true;
        pos6.disabled = true;
        pos7.disabled = true;
        pos8.disabled = true;
        window.alert('X venceu');
    } else if ((pos2.value == 'x' || pos2.value == 'X') && (pos5.value == 'x' || pos5.value == 'X') && (pos8.value == 'x' || pos8.value == 'X')) {
        pos1.disabled = true;
        pos3.disabled = true;
        pos4.disabled = true;
        pos6.disabled = true;
        pos7.disabled = true;
        pos9.disabled = true;
        window.alert('X venceu');
    } else if ((pos3.value == 'x' || pos3.value == 'X') && (pos6.value == 'x' || pos6.value == 'X') && (pos9.value == 'x' || pos9.value == 'X')) {
        pos1.disabled = true;
        pos2.disabled = true;
        pos4.disabled = true;
        pos5.disabled = true;
        pos7.disabled = true;
        pos8.disabled = true;
        window.alert('X venceu');
    } 
    

    // Horizontal
    if ((pos1.value == 'o' || pos1.value == 'O') && (pos2.value == 'o' || pos2.value == 'O') && (pos3.value == 'o' || pos3.value == 'O')) {
        pos4.disabled = true;
        pos5.disabled = true;
        pos6.disabled = true;
        pos7.disabled = true;
        pos8.disabled = true;
        pos9.disabled = true;
        window.alert('O venceu');
    } else if ((pos4.value == 'o' || pos4.value == 'O') && (pos5.value == 'o' || pos5.value == 'O') && (pos6.value == 'o' || pos6.value == 'O')) {
        pos1.disabled = true;
        pos2.disabled = true;
        pos3.disabled = true;
        pos7.disabled = true;
        pos8.disabled = true;
        pos9.disabled = true;
        window.alert('O venceu');
    } else if ((pos7.value == 'o' || pos7.value == 'O') && (pos8.value == 'o' || pos8.value == 'O') && (pos9.value == 'o' || pos9.value == 'O')) {
        pos1.disabled = true;
        pos2.disabled = true;
        pos3.disabled = true;
        pos4.disabled = true;
        pos5.disabled = true;
        pos6.disabled = true;
        window.alert('O venceu');

    // Diagonal
    } else if ((pos1.value == 'o' || pos1.value == 'O') && (pos4.value == 'o' || pos4.value == 'O') && (pos7.value == 'o' || pos7.value == 'O')) {
        pos2.disabled = true;
        pos3.disabled = true;
        pos5.disabled = true;
        pos6.disabled = true;
        pos8.disabled = true;
        pos9.disabled = true;
        window.alert('O venceu');
    } else if ((pos3.value == 'o' || pos3.value == 'O') && (pos5.value == 'o' || pos5.value == 'O') && (pos7.value == 'o' || pos7.value == 'O')) {
        pos1.disabled = true;
        pos2.disabled = true;
        pos4.disabled = true;
        pos6.disabled = true;
        pos8.disabled = true;
        pos9.disabled = true;
        window.alert('O venceu');

    // Vertical
    } else if ((pos1.value == 'o' || pos1.value == 'O') && (pos5.value == 'o' || pos5.value == 'O') && (pos9.value == 'o' || pos9.value == 'O')) {
        pos2.disabled = true;
        pos3.disabled = true;
        pos4.disabled = true;
        pos6.disabled = true;
        pos7.disabled = true;
        pos8.disabled = true;
        window.alert('O venceu');
    } else if ((pos2.value == 'o' || pos2.value == 'O') && (pos5.value == 'o' || pos5.value == 'O') && (pos8.value == 'o' || pos8.value == 'O')) {
        pos1.disabled = true;
        pos3.disabled = true;
        pos4.disabled = true;
        pos6.disabled = true;
        pos7.disabled = true;
        pos9.disabled = true;
        window.alert('O venceu');
    } else if ((pos3.value == 'o' || pos3.value == 'O') && (pos6.value == 'o' || pos6.value == 'O') && (pos9.value == 'o' || pos9.value == 'O')) {
        pos1.disabled = true;
        pos2.disabled = true;
        pos4.disabled = true;
        pos5.disabled = true;
        pos7.disabled = true;
        pos8.disabled = true;
        window.alert('O venceu');
    } else if ((pos1.value == 'O' || pos1.value == 'X') && (pos2.value == 'O' || pos2.value == 'X') && (pos3.value == 'O' || pos3.value == 'X') &&
              (pos4.value == 'O' || pos4.value == 'X') && (pos5.value == 'O' || pos5.value == 'X') && (pos6.value == 'O' || pos6.value == 'X') &&
              (pos7.value == 'O' || pos7.value == 'X') && (pos8.value == 'O' || pos8.value == 'X') && (pos9.value == 'O' || pos9.value == 'X')) {                  
        window.alert('Deu velha');
    }

}
