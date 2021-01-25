import makeTab from "./tabs";

const pageLoad = () => {
    const maindiv = document.querySelector("#content");
    while (maindiv.firstChild){
        maindiv.removeChild(maindiv.lastChild);
    }
    makeTab("Home", "");
    makeTab("Menu", "");
    makeTab("Contact", " ");
    const heading = document.createElement("h1");
    heading.textContent = "Wendy's";
    const pageDiv = document.createElement('div');
    pageDiv.classList.add("main-page");
    pageDiv.appendChild(heading);
    const image = document.createElement("img");
    image.src = "https://upload.wikimedia.org/wikipedia/en/thumb/3/32/Wendy%27s_full_logo_2012.svg/1200px-Wendy%27s_full_logo_2012.svg.png";
    pageDiv.appendChild(image);
    const about = document.createElement("p");
    about.textContent = "The best buergers in town. Fries and Shakes are on us!!";
    pageDiv.appendChild(about);
    maindiv.appendChild(pageDiv);
};

const pageTabs = () => {
    return document.querySelectorAll(".tab");
}


export {pageLoad, pageTabs};