function add(a,b){
    disp.textContent = a+b;
}

function subtract(a,b){
    disp.textContent = a-b;
}

function multiply(a,b){
    disp.textContent = a*b;
}

function divide(a,b){
    if(b===0){
        disp.textContent = "ERROR";
    }
    else{
    disp.textContent = Math.round((a/b)*100)/100;
    }
}


function operate(a,b,op){
    if(op === '+'){
        add(a,b);
    }
    else if(op === '-'){
        subtract(a,b);
    }
    else if(op === 'x'){
        multiply(a,b);
    }
    else if(op === '/'){
        divide(a,b);
    }
    else {
        return "ERROR";
    }
}

function display(e){
    disp.textContent += e.target.textContent;
    //currnum = e.target.textContent;
    exprdisp.textContent += e.target.textContent;
}

function cleardisp(){
    disp.textContent = "";
    exprdisp.textContent = "";
}

function backspace(){
    disp.textContent = (disp.textContent).slice(0, -1);
    exprdisp.textContent = (exprdisp.textContent).slice(0, -1);
}

function saveVal(e){
    n = parseInt(disp.textContent);
    currop = e.target.textContent;
    exprdisp.textContent += e.target.textContent;
    disp.textContent = "";
}

function dispresult(){
    n1 = n;
    n2 = parseInt(disp.textContent);

    if(n === "" ){
        disp.textContent = disp.textContent;
    }
    else{
    operate(n1, n2, currop);
    }
    n = "";
}


const nums = Array.from(document.querySelectorAll('.number'));
const disp = document.querySelector("#display-label");
const exprdisp = document.querySelector('#expr-label');
//console.log(disp);
//console.log(nums);
nums.forEach( num => num.addEventListener('click', display));
//keep track of current number entered
let currnum;

//clear and equals
const clear = document.querySelector("#clear");
const equals = document.querySelector("#equals");
const bkspce = document.querySelector('#bkspce');
bkspce.addEventListener('click', backspace);
clear.addEventListener('click', cleardisp);
equals.addEventListener('click', dispresult);

//math operations
const mathops = Array.from(document.querySelectorAll('.numop'));
//console.log(mathop)
mathops.forEach(mathop => mathop.addEventListener('click', saveVal));
//to keep track of the current operation
let currop;

//to save number for computation
let n;
let n1;
let n2;