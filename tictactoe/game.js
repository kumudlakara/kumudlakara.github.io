
const gameBoard = (() => {
    let board =  new Array(3);
    for(let j = 0; j<board.length; j++){
        board[j] = new Array(3);
    }



    const show = () => {
        const maindiv = document.querySelector('#gameboard')
        for(let i=0; i<9; i++){
            //console.log("in  for");
            const sqdiv = document.createElement('div');
            sqdiv.classList.add("square");
            const idName = "square"+i;
            sqdiv.id = idName;
            maindiv.appendChild(sqdiv);
        }
        };
    
    const update = (e,p) => {
        console.log(p);
        const elId = e.target.id;
        const idx = parseInt(elId[6]);
        console.log("index"+idx);
        if(p.name === "player1"){
            if(idx >= 0 && idx <= 2)
            board[0][idx] = 1;
            else if(idx >= 3 && idx <= 5)
            board[1][idx-3] = 1;
            else
            board[2][idx-6] = 1;
            
        }else{
            if(idx >= 0 && idx <= 2)
            board[0][idx] = -1;
            else if(idx >= 3 && idx <= 5)
            board[1][idx-3] = -1;
            else
            board[2][idx-6] = -1;
        }
        e.target.textContent = p.marker;
        console.log(board);
        play(togglep(p));
        game().win(board);
    };

    const togglep = (p) => {
        if(p.name === "player1")
        return p2;
        else
        return p1;
    }

    const reset = () => {
        const sqdivs = document.querySelectorAll('.square');
        sqdivs.forEach(sq => function(e){
            const elId = e.target.id;
            const idx = parseInt(elId[6]);

            sq.textContent = "";
            board[idx] = 0;
        });
    };
    return {show: show, board: board, update: update, reset: reset};

})();


const Player = (name) => {
    let marker;
    if(name==="player1"){
        marker = "x";
    }
    else{
        marker="o";
    }
    return {name, marker};
};


const game = () => {
    let gameOver = false;
    board = gameBoard.board;
    const round = (p1,p2) => {
    for(let i=0; i<5; i++){
        win(board);
    if(win(board)){
        console.log("in win true");
        gameOver = true;
        window.alert("gameover");
    }
    console.log("win false");
    play(p1);
    let t = p1;
    p1 = p2;
    p2 = t;
    gameOver=true;
    }
    };


    const win = (board) =>{
        console.log(board);
        p1won = true;
        p2won = true;
        //check win for player1
        for(let i = 0; i<3; i++){
            for(let j = 0; j<3; j++){
                if(board[i][j] === 1){
                    if(j===2 && p1won===true)
                    break;
                }else{
                    p1won = false;
                }
            }
            if(p1won === true){
                break;
            }
            if(p1won===false){
                p1won = true;
            for(let j = 0; j<3; j++){
                if(board[j][i] === 1){
                    if(j===2 && p1won===true)
                    break;
                }else{
                    p1won = false;
                }
            }
            if(p1won === true){
                break;
            }
            }
            
        }
        if(p1won===false){
            p1won = true;
        for(let j = 0; j<3; j++){
            if(board[j][j] === 1){
                continue;
            }else{
                p1won = false;
            }
        }
        }
        if(p1won===false){
            p1won = true;
        for(let j = 0, i=2; j<3 && i>=0; j++, i--){
            if(board[j][i] === 1){
                continue;
            }else{
                p1won = false;
            }
        }
        }
        if(p1won === true ){
            window.alert("p1 won!");
            location.reload();
        }else{
    //check win for player2
    for(let i = 0; i<3; i++){
        for(let j = 0; j<3; j++){
            if(board[i][j] === -1){
                if(j===2 && p2won===true)
                break;
            }else{
                p2won = false;
            }
        }
        if(p2won === true){
            break;
        }
        if(p2won===false){
            p2won = true;
        for(let j = 0; j<3; j++){
            if(board[j][i] === -1){
                if(j===2 && p2won===true)
                break;
            }else{
                p2won = false;
            }
        }
        if(p2won === true){
            break;
        }
        }
        
    }
    if(p2won===false){
        p2won = true;
    for(let j = 0; j<3; j++){
        if(board[j][j] === -1){
            continue;
        }else{
            p2won = false;
        }
    }
    }
    if(p2won===false){
        p2won = true;
    for(let j = 0, i=2; j<3 && i>=0; j++, i--){
        if(board[j][i] === -1){
            continue;
        }else{
            p2won = false;
        }
    }
    }
    if(p2won === true){
        window.alert("p2 won!!");
        location.reload();
    }
    }

    };

    return {round: round, win: win};
}

function play(p){
    console.log("in play");
    gb = document.querySelectorAll('.square');
    gb.forEach(sq => sq.addEventListener("click", function(e){
        gameBoard.update(e,p);
        }));
    
}

gameBoard.show();
const p1 = Player("player1");
const p2 = Player("player2");
const g = game();
play(p1);
//play(p2);
//g.round(p1, p2);