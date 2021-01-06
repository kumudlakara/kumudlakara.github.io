let b1;

function Book(title, author, npages, read){
    //constructor for Books
    this.title = title;
    this.author = author;
    this.npages = npages;
    this.read = read;    
};

function addToStorage(b1){
    //function to add new books to storage
    console.log("add to storage");
    console.log(b1);
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
    if(document.querySelector('#read').checked === true){
        b1['read'] = 5;
        storage.setItem('completedBooks', parseInt(storage.getItem("completedBooks"))+1);
    }}
    storage.setItem(b1.title, JSON.stringify(b1));
    storage.setItem('totalBooks', parseInt(storage.getItem("totalBooks"))+1);
    storage.setItem('totalPages', parseInt(storage.getItem("totalPages"))+parseInt(b1.npages));
    
};

function cardData(k){
    //function to add card data to display on main page
    console.log("in card data");
    const b = storage[k];
    console.log(b);
    if(b.includes("title")){
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
    removebtn.innerHTML = "Remove";
    removebtn.classList.add("cardRem");
    removebtn.setAttribute("id", title);
    cardDiv.append(btitle, bauthor, bpages, removebtn);
    mainDiv.appendChild(cardDiv);
    }
};

function addBookToLibrary() {
    //function to add a book to library using details given by user
    console.log("add to lib");
    if(document.querySelector('#title').value !== "" && document.querySelector('#author').value !== ""
    && document.querySelector('#npages').value !== ""){
    b1 = new Book(document.querySelector('#title').value,
    document.querySelector('#author').value,
    document.querySelector('#npages').value,
    document.querySelector('#read').value
    );
    addToStorage(b1);
    }   
};

function updateMain(stat){
    //function to update main side bar stats 
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

function removeBook(e){
    //function to remove a book added previously
    const remKey = e.target.id;
    const b = JSON.parse(storage.getItem(remKey));
    if(b['read'] === 5){
        storage.setItem('completedBooks', parseInt(storage.getItem("completedBooks"))-1);
    }
    storage.setItem('totalBooks', parseInt(storage.getItem("totalBooks"))-1);
    storage.setItem('totalPages', parseInt(storage.getItem("totalPages"))-parseInt(b['npages']));
    storage.removeItem(remKey);
    //console.log(storage);
    location.reload();
};

function addCard(){
    //function to add a new card to the page
    const sidebar = document.querySelector("#sidebar");
    const form = document.querySelector('#form-popup');
    const cards = document.querySelectorAll('.card');
    cards.forEach(c => c.style.display = "none");
    sidebar.style.display = "none";
    form.style.display = "block";
    const addbtn = document.querySelector('#add-btn');
    addbtn.addEventListener('click', addBookToLibrary);
    console.log("after add card");
};


const storage = window.sessionStorage;
const stats = document.querySelectorAll('.stat');
stats.forEach(stat => updateMain(stat));
const showForm = document.querySelector('#show-form-btn');
const sidebar = document.querySelector("#sidebar");
showForm.addEventListener('click', addCard);
const keys = Object.keys(storage);
console.log(storage);
console.log(keys);
function showCards(keys){
    keys.forEach(key => cardData(key));
}
showCards(keys);
const removebtns = document.querySelectorAll('.cardRem');
removebtns.forEach(rbtn => rbtn.addEventListener('click', removeBook));



