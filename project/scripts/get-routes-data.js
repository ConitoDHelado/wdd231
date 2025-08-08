import {createCards} from "./create-cards.mjs"

const url = 'https://conitodhelado.github.io/wdd231/project/data/routes.json'
const section = document.getElementById('routes')




async function getRoutesData() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            createCards(data, section);
        } else {
            throw Error(await response.text());
        }

    }
    catch(error) {
        console.log(error);
    }
    
}

getRoutesData();

