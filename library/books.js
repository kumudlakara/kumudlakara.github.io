let titles = []
let b1;
let update = false;

function Book(title, author, npages, read){
    this.title = title;
    this.author = author;
    this.npages = npages;
    this.read = read;    
};

function addToStorage(b1){
    //console.log(storage.getItem("totalBooks"));
    if(storage.getItem("totalBooks") === null){
        storage.setItem('totalBooks', 1);
    }
    if(storage.getItem("totalPages") === null){
        storage.setItem('totalPages', b1.npages);
    }
    if(storage.getItem("completedBooks") === null){
    if(document.querySelector('#read').checked === true){
        storage.setItem('completedBooks', 1);
    }}
    else{
    console.log(document.querySelector('#read').checked);
    if(document.querySelector('#read').checked === true){
        storage.setItem('completedBooks', parseInt(storage.getItem("completedBooks"))+1);
    }
    //console.log(document.querySelector('#title'));
    storage.setItem(b1.title, JSON.stringify(b1));
    //titles.push(b1.title);
    storage.setItem('totalBooks', parseInt(storage.getItem("totalBooks"))+1);
    storage.setItem('totalPages', parseInt(storage.getItem("totalPages"))+parseInt(b1.npages));
    }
    console.log(b1);
    
    console.log("addtostroage complete");
    
    //cardData(b1);
    //return b1;
};

async function cardData(k){
    console.log("in carddata");
    const b = storage[k];

    let title = b.substring(10, b.indexOf('"author"'));;
    title = title.substring(0, title.indexOf('"'));
    let author = b.substring(b.indexOf('"author"') + 10, b.indexOf('"npages"'));
    author = author.substring(0, author.indexOf('"'));
    let npages = b.substring(b.indexOf('"npages"') + 10, b.indexOf('"read"'));
    npages = npages.substring(0, npages.indexOf('"'));
    let read = b.substring(b.indexOf('"read"') + 8, b.indexOf('"}'));
    read = read.substring(0, read.indexOf('"'));
    
    const mainDiv = document.querySelector('#cards');
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    const btitle = document.createElement('p');
    const bauthor = document.createElement('p');
    const bpages = document.createElement('p');
    const complete = document.createElement('p');
    const removebtn = document.createElement('button');

    const titlenode = document.createTextNode("Book: "+title);
    btitle.appendChild(titlenode);
    const authornode = document.createTextNode("Author: "+author);
    bauthor.appendChild(authornode);
    const pagesnode = document.createTextNode("Pages: "+npages);
    bpages.appendChild(pagesnode);
    //complete.innerHTML = "Complete: "+b['read'];
    removebtn.innerHTML = "Remove";
    removebtn.classList.add("title");
    
    cardDiv.append(btitle, bauthor, bpages, removebtn);
    console.log(cardDiv);
    mainDiv.appendChild(cardDiv);
    console.log(mainDiv);
    console.log("card data complete");
    /*
    const mainDiv = document.querySelector('#sidebar');
    const title = document.createElement('p');
    title.textContent = "Book: ";
    title.style.visibility = "visible !important";
    mainDiv.appendChild(title);
    */  
}


function addBookToLibrary() {
    if(document.querySelector('#title').value !== "" && document.querySelector('#author').value !== ""
    && document.querySelector('#npages').value !== ""){
    b1 = new Book(document.querySelector('#title').value,
    document.querySelector('#author').value,
    document.querySelector('#npages').value,
    document.querySelector('#read').value
    );
    //cardData();
    addToStorage(b1);
    /*
    
    */
   console.log("add to lib complete");
    }   
};

function updateMain(stat){
    if(stat.getAttribute('id') === "totalbooks"){
        stat.textContent = 'Total Books: ' + storage.getItem('totalBooks');
    } 
    else if(stat.getAttribute('id') === "totalpages"){
        stat.textContent = 'Total Pages: ' + storage.getItem('totalPages');
    }
    else if(stat.getAttribute('id') === "completed"){
        stat.textContent = 'Books Completed: ' + storage.getItem('completedBooks');
    }
};

function removeBook(){
    
};

function addCard(){
    console.log("in addcard");
    const sidebar = document.querySelector("#sidebar");
    const form = document.querySelector('#form-popup');
    sidebar.style.visibility = "hidden";
    form.style.visibility = "visible";
    console.log("after form");
    const addbtn = document.querySelector('#add-btn');
    addbtn.addEventListener('click', addBookToLibrary);
    console.log("add card complete");
};


const storage = window.sessionStorage;
const stats = document.querySelectorAll('.stat');
stats.forEach(stat => updateMain(stat));
const showForm = document.querySelector('#show-form-btn');
const sidebar = document.querySelector("#sidebar");
console.log(storage);
showForm.addEventListener('click', addCard);
const keys = Object.keys(storage);
console.log(keys);
function showCards(keys){
    keys.forEach(key => cardData(key));
}
showCards(keys);

/*
const mainDiv = document.querySelector('#cards');
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    const btitle = document.createElement('p');
    const pages = document.createElement('p');
    const complete = document.createElement('p');
    const removebtn = document.createElement('button');
    const titlenode = document.createTextNode("Book: ");
    btitle.appendChild(titlenode);
    pages.innerHTML = "Pages: ";
    complete.innerHTML = "Complete: ";
    removebtn.innerHTML = "Remove";
    removebtn.classList.add("title");
    
    cardDiv.appendChild(btitle, pages, complete, removebtn);
    console.log(cardDiv);
    mainDiv.appendChild(cardDiv);
    console.log(mainDiv);
*/



