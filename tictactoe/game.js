const gameBoard = (() => {
    let board =  new Array(3);
    for(let j = 0; j<board.length; j++){
        board[j] = new Array(3);
    };

    const show = () => {
        const maindiv = document.querySelector('#gameboard')
        for(let i=0; i<9; i++){
            const sqdiv = document.createElement('div');
            sqdiv.classList.add("square");
            const idName = "square"+i;
            sqdiv.id = idName;
            maindiv.appendChild(sqdiv);
        }
        };
    
    const update = (e) => {
        const elId = e.target.id;
        const idx = parseInt(elId[6]);
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
        game().win(board);
    };

    const togglep = (p) => {
        console.log("in toggle");
        if(p.name === "player1"){
            const player1 = document.querySelector('#player1');
            const player2 = document.querySelector('#player2');
            player1.classList.remove("active");
            player2.classList.add("active");
            return p2;}
        else{
            const player1 = document.querySelector('#player1');
            const player2 = document.querySelector('#player2');
            player2.classList.remove("active");
            player1.classList.add("active");
        return p1;
        }
    }

    return {show: show, board: board, update: update, togglep: togglep};

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
    board = gameBoard.board;

    const win = (board) =>{
        let p1won;
        let p2won;
        //check win for player1
        for(let i = 0; i<3; i++){
            p1won = true;
        
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
            window.alert("PLAYER-1 won!!");
            location.reload();
        }else{
    //check win for player2
    for(let i = 0; i<3; i++){
        p2won = true;
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
        window.alert("PLAYER-2 won!!");
        location.reload();
    }
    }
    if(full(board) === true){
        window.alert("Tie!!");
        location.reload();
    }

    function full(){
        let overFlag=1;
        for(let i=0; i<3; i++){
            for(let j=0; j<3; j++){
                if(board[i][j] === 1 || board[i][j] === -1){
                    continue;
                }
                else{
                    overFlag=0;
                    break;
                }
            }
        }
        if(overFlag === 1){
           return true; 
        }else return false;
    };
    };

    return {win: win};
}

function play(){
    gb = document.querySelectorAll('.square');
    for(let i = 0; i<gb.length; i++){
        gb[i].addEventListener("click", function(e){
            gameBoard.update(e);
            p = gameBoard.togglep(p);
            });
    }
}

gameBoard.show();
const p1 = Player("player1");
const p2 = Player("player2");
const g = game();
let p = p1;
play();