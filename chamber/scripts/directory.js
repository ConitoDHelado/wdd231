import { displayMemberCards } from "./display-member-cards.mjs";
const url = "https://conitodhelado.github.io/wdd231/chamber/data/members.json"
const directoryContainer = document.getElementById('directory');

async function getDirectoryData() {
    const response = await fetch(url);
    const data = await response.json();
    displayMemberCards(data, directoryContainer);
}

getDirectoryData();