function makeTab(text, link){
const tab = document.createElement('a');
tab.href = link;
tab.textContent = text;
tab.classList.add("tab");
const maindiv = document.querySelector("#content");
maindiv.appendChild(tab);
}

export default makeTab;