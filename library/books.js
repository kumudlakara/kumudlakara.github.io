let myLibrary = []
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
    storage.setItem('totalBooks', parseInt(storage.getItem("totalBooks"))+1);
    storage.setItem('totalPages', parseInt(storage.getItem("totalPages"))+parseInt(b1.npages));
    }
    console.log(b1);
    cardData(b1);
};

function cardData(b1){
    console.log("in carddata");
    const mainDiv = document.querySelector('#cards');
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('.card');
    const btitle = document.createElement('p');
    const pages = document.createElement('p');
    const complete = document.createElement('p');
    const removebtn = document.createElement('button');
    const titlenode = document.createTextNode("Book: "+b1.title);
    btitle.appendChild(titlenode);
    pages.innerHTML = "Pages: "+b1.npages;
    complete.innerHTML = "Complete: "+b1.read;
    removebtn.innerHTML = "Remove";
    removebtn.classList.add("title");
    
    cardDiv.appendChild(btitle, pages, complete, removebtn);
    console.log(cardDiv);
    mainDiv.appendChild(cardDiv);
    console.log(mainDiv);
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
    addToStorage(b1);
    
    /*
    
    */
   update = true;
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
    console.log("in addcard");
    const sidebar = document.querySelector("#sidebar");
    const form = document.querySelector('#form-popup');
    sidebar.style.visibility = "hidden";
    form.style.visibility = "visible";
    console.log("after form");
    const addbtn = document.querySelector('#add-btn');
    addbtn.addEventListener('click', addBookToLibrary);
}


const storage = window.sessionStorage;
const stats = document.querySelectorAll('.stat');
stats.forEach(stat => updateMain(stat));
const showForm = document.querySelector('#show-form-btn');
const sidebar = document.querySelector("#sidebar");
showForm.addEventListener('click', addCard);




