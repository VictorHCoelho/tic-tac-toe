let btnStart = document.getElementById('btn-start');
btnStart.addEventListener('click', startClick);
let btnRestart = document.getElementById('btn-restart');
btnRestart.addEventListener('click', restartClick)

let turn = document.getElementById('vez-jogar');

function startClick() {
    let mainContainer = document.getElementById('main-container');
    mainContainer.style.display = 'flex'
    btnStart.style.display = 'none'
}

function restartClick() {
    let mainContainer = document.getElementById('main-container');
    mainContainer.style.display = 'none'
    btnStart.style.display = 'block'
    pos1.innerHTML = '<p> </p>' 
    pos2.innerHTML = '<p> </p>' 
    pos3.innerHTML = '<p> </p>' 
    pos4.innerHTML = '<p> </p>' 
    pos5.innerHTML = '<p> </p>' 
    pos6.innerHTML = '<p> </p>' 
    pos7.innerHTML = '<p> </p>' 
    pos8.innerHTML = '<p> </p>' 
    pos9.innerHTML = '<p> </p>' 
}


let pos1 = document.getElementById('pos1')
pos1.addEventListener('click', item1Click)
function item1Click() {  
    if(turn.innerText == 'X') {
        pos1.innerHTML = '<p>X</p>' 
        pos1.style.color = 'blue' 
        turn.innerText = 'O'   
    } else if (turn.innerText == 'O') {
        pos1.innerHTML = '<p>O</p>'
        pos1.style.color = 'red'  
        turn.innerText = 'X'   
    }
    
}

let pos2 = document.getElementById('pos2')
pos2.addEventListener('click', item2Click)
function item2Click() {   
    if(turn.innerText == 'X') {
        pos2.innerHTML = '<p>X</p>' 
        pos2.style.color = 'blue'  
        turn.innerText = 'O'     
    } else if (turn.innerText == 'O') {
        pos2.innerHTML = '<p>O</p>'
        pos2.style.color = 'red'  
        turn.innerText = 'X'   
    }
}

let pos3 = document.getElementById('pos3')
pos3.addEventListener('click', item3Click)
function item3Click() {   
    if(turn.innerText == 'X') {
        pos3.innerHTML = '<p>X</p>' 
        pos3.style.color = 'blue' 
        turn.innerText = 'O'      
    } else if (turn.innerText == 'O') {
        pos3.innerHTML = '<p>O</p>'
        pos3.style.color = 'red' 
        turn.innerText = 'X'    
    }
}

let pos4 = document.getElementById('pos4')
pos4.addEventListener('click', item4Click)
function item4Click() {   
    if(turn.innerText == 'X') {
        pos4.innerHTML = '<p>X</p>' 
        pos4.style.color = 'blue' 
        turn.innerText = 'O'      
    } else if (turn.innerText == 'O') {
        pos4.innerHTML = '<p>O</p>'
        pos4.style.color = 'red'  
        turn.innerText = 'X'   
    }
}

let pos5 = document.getElementById('pos5')
pos5.addEventListener('click', item5Click)
function item5Click() {   
    if(turn.innerText == 'X') {
        pos5.innerHTML = '<p>X</p>' 
        pos5.style.color = 'blue' 
        turn.innerText = 'O'      
    } else if (turn.innerText == 'O') {
        pos5.innerHTML = '<p>O</p>'
        pos5.style.color = 'red'
        turn.innerText = 'X'     
    } 
}

let pos6 = document.getElementById('pos6')
pos6.addEventListener('click', item6Click)
function item6Click() {   
    if(turn.innerText == 'X') {
        pos6.innerHTML = '<p>X</p>' 
        pos6.style.color = 'blue'  
        turn.innerText = 'O'     
    } else if (turn.innerText == 'O') {
        pos6.innerHTML = '<p>O</p>'
        pos6.style.color = 'red'  
        turn.innerText = 'X'   
    }
}

let pos7 = document.getElementById('pos7')
pos7.addEventListener('click', item7Click)
function item7Click() {   
    if(turn.innerText == 'X') {
        pos7.innerHTML = '<p>X</p>' 
        pos7.style.color = 'blue' 
        turn.innerText = 'O'      
    } else if (turn.innerText == 'O') {
        pos7.innerHTML = '<p>O</p>'
        pos7.style.color = 'red' 
        turn.innerText = 'X'    
    }
}

let pos8 = document.getElementById('pos8')
pos8.addEventListener('click', item8Click)
function item8Click() {   
    if(turn.innerText == 'X') {
        pos8.innerHTML = '<p>X</p>' 
        pos8.style.color = 'blue' 
        turn.innerText = 'O'      
    } else if (turn.innerText == 'O') {
        pos8.innerHTML = '<p>O</p>'
        pos8.style.color = 'red'  
        turn.innerText = 'X'   
    }
}

let pos9 = document.getElementById('pos9')
pos9.addEventListener('click', item9Click)
function item9Click() {   
    if(turn.innerText == 'X') {
        pos9.innerHTML = '<p>X</p>' 
        pos9.style.color = 'blue'  
        turn.innerText = 'O'     
    } else if (turn.innerText == 'O') {
        pos9.innerHTML = '<p>O</p>'
        pos9.style.color = 'red'  
        turn.innerText = 'X'   
    } 
}

