let xScore = 0;
let oScore = 0;
let turn = 0;

const scoreKeep = () => {
  document.getElementById("xScore").innerHTML = xScore;
  document.getElementById("oScore").innerHTML = oScore;
}


const checkBoard = () =>{
  let x = document.querySelectorAll('td');
  let board = []
  for(let i = 0; i < x.length; i++){
    board.push(x[i].innerHTML);
  }
  //row counters
  let topRow = [board[0], board[1], board[2]];
  let midRow = [board[3], board[4], board[5]];
  let botRow = [board[6], board[7], board[8]];
  //column counters
  let leftCol  = [board[0], board[3], board[6]];
  let midCol   = [board[1], board[4], board[7]];
  let rightCol = [board[2], board[5], board[8]];
  //diag counters
  let topLtoBotR = [board[0], board[4], board[8]];
  let topRToBotL = [board[2], board[4], board[6]];
  //horizontal X counters
  let topRowXCount = 0;
  let midRowXCount = 0;
  let botRowXCount = 0;
  //horizontal O counters
  let topRowOCount = 0;
  let midRowOCount = 0;
  let botRowOCount = 0;
  //vertical X counters
  let leftColXCount = 0;
  let midColXCount = 0;
  let rightColXCount = 0;
  //vertical O counters
  let leftColOCount = 0;
  let midColOCount = 0;
  let rightColOCount = 0;
  //diagonal Counters
  let topLBotRX = 0;
  let topLBotRO = 0;
  let topRBotLX = 0;
  let topRBotLO = 0;
  //row winner check
  for(let i = 0; i < topRow.length; i++){
    if(topRow[i] === ('[X]')){
      topRowXCount++
    } else if(topRow[i] === ('[O]')){
      topRowOCount++
    }

    if(midRow[i] === ('[X]')){
      midRowXCount++
    } else if(midRow[i] === ('[O]')){
      midRowOCount++
    }

    if(botRow[i] === ('[X]')){
      botRowXCount++
    } else if(botRow[i] === ('[O]')){
      botRowOCount++
    }
  }

  //column winner check
  for(let i = 0; i < leftCol.length; i++){
    if(leftCol[i] === ('[X]')){
      leftColXCount++
    } else if(leftCol[i] === ('[O]')){
      leftColOCount++
    }

    if(midCol[i] === ('[X]')){
      midColXCount++
    } else if(midCol[i] === ('[O]')){
      midColOCount++
    }

    if(rightCol[i] === ('[X]')){
      rightColXCount++
    } else if(rightCol[i] === ('[O]')){
      rightColOCount++
    }
  }
    //diagonal winner check
    for(let i = 0; i < 3; i++){
      if(topRToBotL[i] === ('[X]')){
        topRBotLX++;
      } else if(topRToBotL[i] === ('[O]')){
        topRBotLO++;
      }

      if(topLtoBotR[i] === ('[X]')){
        topLBotRX++;
      } else if(topLtoBotR[i] === ('[O]')){
        topLBotRO++;
      }

    }


  if(topRowXCount === 3 || midRowXCount === 3 || botRowXCount === 3){
    alert('X wins by across!');
    xScore++;
    resetBoard();
    turn = 0;
  } else if(topRowOCount === 3 || midRowOCount === 3 || botRowOCount === 3){
    alert('O wins by across!');
    oScore++;
    resetBoard();
    turn = 0;
  } else if(leftColXCount === 3 || midColXCount === 3 || rightColXCount === 3){
    alert('X wins by vertical!');
    xScore++;
    resetBoard();
    turn = 0;
  } else if(leftColOCount === 3 || midColOCount === 3 || rightColOCount === 3){
    alert('O wins by vertical!');
    oScore++;
    resetBoard();
    turn = 0;
  } else if(topLBotRX === 3 || topRBotLX === 3){
      alert('X wins by Diagonal!');
      xScore++;
      resetBoard();
      turn = 0;
  } else if(topLBotRO === 3 || topRBotLO === 3 ){
      alert('O wins by Diagonal!');
      oScore++;
      resetBoard();
      turn = 0;
  } else if(!topRow.includes('[ ]') && !midRow.includes('[ ]') && !botRow.includes('[ ]')) {
      resetBoard();
      turn = 0;
      alert('Draw! No one wins.');
    }

  scoreKeep();
};

const clickFill = (event) => {
  if(event.target.innerHTML.indexOf('[ ]') !== -1 && turn === 0) {
    event.target.innerHTML = '[X]';
    turn++;
    checkBoard();
  } else if(event.target.innerHTML.indexOf('[ ]') !== -1 && turn == 1) {
    event.target.innerHTML = '[O]';
    turn--;
    checkBoard();
  }
};

const resetBoard = () => {
  let x = document.querySelectorAll('td');
  for(let i = 0; i < x.length; i++){
    x[i].innerHTML = '[ ]';
  }
};

const resetGame = () => {
  let x = document.querySelectorAll('td');
  for(let i = 0; i < x.length; i++){
    x[i].innerHTML = '[ ]';
  };
  oScore = 0;
  xScore = 0;
  turn = 0;
  scoreKeep();
};

document.getElementById("resetGame").addEventListener("click", resetGame);
document.getElementById("reset").addEventListener("click", resetBoard);
document.querySelectorAll('td')
.forEach(e => e.addEventListener("click", clickFill));