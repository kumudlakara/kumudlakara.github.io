const container = document.querySelector('#container');

for(let i = 0; i<256; i++){
    const sqdiv = document.createElement('div');
    sqdiv.classList.add('square');
    container.appendChild(sqdiv);
}

sqdivs = container.childNodes;

sqdivs = Array.from(sqdivs);
//console.log(sqdivs.slice(3,259));
sqdivs = sqdivs.slice(3,259);

function changeState(e){
    //e.target.classList.remove('square');
    //e.target.classList.add('newsq');
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    e.target.style.backgroundColor = "#" + randomColor;

};

function cleargrid(){
    sqdivs.forEach(sqdiv => {
        //sqdiv.classList.remove('newsq');
        //sqdiv.classList.add('square');
        sqdiv.style.backgroundColor = '#FFFFFF';
    });
}



sqdivs.forEach(sqdiv => sqdiv.addEventListener('mouseover', changeState));
const clearbtn = document.querySelector('#clear-btn');
clearbtn.addEventListener('click', cleargrid);