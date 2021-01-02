let myLibrary = []

function Book(title, author, npages, read){
    this.title = title;
    this.author = author;
    this.npages = npages;
    this.read = read;
    
};

function addToStorage(b1){
    //console.log(storage.getItem("totalBooks"));
    if(storage.getItem("totalBooks") === null){
        console.log("Set");
        storage.setItem('totalBooks', 1);
    }
    if(storage.getItem("totalPages") === null){
        storage.setItem('totalPages', b1.npages);
    }
    if(storage.getItem("completedBooks") === null){
        storage.setItem('completedBooks', 1);
    }
    else{
    console.log(document.querySelector('#read').checked);
    if(document.querySelector('#read').checked === true){
        storage.setItem('completedBooks', parseInt(storage.getItem("completedBooks"))+1);
    }
    //console.log(document.querySelector('#title'));
    storage.setItem(b1.title, JSON.stringify(b1));
    storage.setItem('totalBooks', parseInt(storage.getItem("totalBooks"))+1);
    storage.setItem('totalPages', parseInt(storage.getItem("totalPages"))+parseInt(b1.npages));
    }
};

function addBookToLibrary() {
    if(document.querySelector('#title').value !== "" && document.querySelector('#author').value !== ""
    && document.querySelector('#npages').value !== ""){
    const b1 = new Book(document.querySelector('#title').value,
    document.querySelector('#author').value,
    document.querySelector('#npages').value,
    document.querySelector('#read').value
    );
    console.log("start");
    console.log(b1.read);
    addToStorage(b1);  
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
    
}

function addCard(){
    
    const mainDiv = document.querySelector('#cards');
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('.card');
    const btitle = document.createElement('p');
    const pages = document.createElement('p');
    const complete = document.createElement('p');
    const removebtn = document.createElement('button');
    btitle.textContent = "Book: "+b.title;
    pages.textContent = "Pages: "+b.npages;
    complete.textContent = "Complete: "+b.read;
    removebtn.textContent = "Remove";
    removebtn.classList.add("title");
    cardDiv.appendChild(btitle, pages, complete, removebtn);
    mainDiv.appendChild(cardDiv);
}

console.log(document.querySelector('#cards'));
const storage = window.sessionStorage;
const stats = document.querySelectorAll('.stat');
stats.forEach(stat => updateMain(stat));
const form = document.querySelector('#form');
const addbtn = document.querySelector('#add-btn');
addbtn.addEventListener('click', addBookToLibrary);
const addCardBtn = document.querySelector('#show-form-btn');
addCardBtn.addEventListener('click', addCard())