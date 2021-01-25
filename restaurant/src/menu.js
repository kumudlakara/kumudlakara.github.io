import pageLoad from "./pageLoad";

function makeMenu(){
    console.log("in menu");
    //const pageDiv = document.querySelector(".main-page");
    //console.log(pageDiv);
    //console.log(pageDiv.style);
    //pageDiv.style.display = "none";
    const maindiv = document.querySelector("#content");
   
    const heading  = document.createElement('h1');
    heading.textContent = "Menu";
    
    maindiv.appendChild(heading);
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('menu-els');
    const card = document.createElement('div');
    card.classList.add('menu-card');
    const cardText = document.createElement('p');
    cardText.textContent = "Food-1";
    const cardImg = document.createElement('img');
    cardImg.src=" ";
    card.appendChild(cardImg);
    card.appendChild(cardText);
    cardDiv.appendChild(card);
    maindiv.appendChild(cardDiv);

    const card2 = document.createElement('div');
    card2.classList.add('menu-card');
    const cardText2 = document.createElement('p');
    cardText2.textContent = "Food-2";
    const cardImg2 = document.createElement('img');
    cardImg2.src=" ";
    card2.appendChild(cardImg2);
    card2.appendChild(cardText2);
    cardDiv.appendChild(card2);
    maindiv.appendChild(cardDiv);

    const card3 = document.createElement('div');
    card3.classList.add('menu-card');
    const cardText3 = document.createElement('p');
    cardText3.textContent = "Food-2";
    const cardImg3 = document.createElement('img');
    cardImg3.src=" ";
    card3.appendChild(cardImg3);
    card3.appendChild(cardText3);
    cardDiv.appendChild(card3);
    maindiv.appendChild(cardDiv);

    const card4 = document.createElement('div');
    card4.classList.add('menu-card');
    const cardText4 = document.createElement('p');
    cardText4.textContent = "Food-2";
    const cardImg4 = document.createElement('img');
    cardImg4.src=" ";
    card4.appendChild(cardImg4);
    card4.appendChild(cardText4);
    cardDiv.appendChild(card4);
    maindiv.appendChild(cardDiv);

    const card5 = document.createElement('div');
    card5.classList.add('menu-card');
    const cardText5 = document.createElement('p');
    cardText5.textContent = "Food-2";
    const cardImg5 = document.createElement('img');
    cardImg5.src=" ";
    card5.appendChild(cardImg5);
    card5.appendChild(cardText5);
    cardDiv.appendChild(card5);
    maindiv.appendChild(cardDiv);

    const card6 = document.createElement('div');
    card6.classList.add('menu-card');
    const cardText6 = document.createElement('p');
    cardText6.textContent = "Food-2";
    const cardImg6 = document.createElement('img');
    cardImg6.src=" ";
    card6.appendChild(cardImg6);
    card6.appendChild(cardText6);
    cardDiv.appendChild(card6);
    maindiv.appendChild(cardDiv);
}

export default makeMenu;