const url = "https://conitodhelado.github.io/wdd231/chamber/data/members.json"
const directory = document.getElementById('directory');

async function getDirectoryData() {
    const responde = await fetch(url);
    const data = await response.json();
    displayDirectory(data.directory);
}

getDirectoryData();

const displayDirectory = (directory) => {
    directory.forEach((member) => {
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let 
    })
}