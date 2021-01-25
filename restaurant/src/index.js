import {pageLoad, pageTabs} from "./pageLoad";
import makeTab from "./tabs";
import makeMenu from "./menu";


console.log("in main file");

makeTab("Home", "");
makeTab("Menu", "");
makeTab("Contact", " ");
//makeMenu();

//pageLoad();



function changeTo(e){
    console.log(e.target);
    if(e.target.textContent === "Menu"){
        console.log("in change");
        console.log("el");
        const pageDiv = document.querySelector(".main-page");
    console.log(pageDiv);
    console.log(pageDiv.style);
    pageDiv.style.display = "none";
    
        //const el1ToHide = pageLoad();
        //console.log(el1ToHide);
        //el1ToHide.style.display = "none";
    makeMenu();
    }
    if (e.target.textContent === "Home"){
        console.log("in home");
        pageLoad();
    }
};

const tabs = pageTabs();
console.log(tabs);
tabs.forEach(tab => tab.addEventListener('click', changeTo));
console.log("after event");
