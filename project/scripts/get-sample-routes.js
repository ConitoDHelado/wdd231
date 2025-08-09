import {createCards} from "./create-cards.mjs"

const url = 'https://conitodhelado.github.io/wdd231/project/data/routes.json'
const section = document.querySelector('.routes')




async function getRoutesData() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            const randomRoutes = data.sort(() => 0.5 - Math.random()).slice(0, 3);
            createCards(randomRoutes, section);
        } else {
            throw Error(await response.text());
        }

    }
    catch(error) {
        //console.log(error);
        return
    }
    
}

getRoutesData();

