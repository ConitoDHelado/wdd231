const url = 'https://conitodhelado.github.io/wdd231/project/data/routes.json'
const section = document.getElementById('routes')



async function getRoutesData() {
    const response = await fetch(url);
    const data = await response.json();
    createCards(data);
}

getRoutesData();

function createCards(data) {
    data.forEach((x) => {

        const card = document.createElement('article')
        const img = document.createElement('img')
        const info = document.createElement('article')
        const routeName = document.createElement('p')
        routeName.textContent = x.name
        const description = document.createElement('p')
        description.innerHTML = x.description
        const distance = document.createElement('p')
        distance.textContent = x.distance
        const difficulty = document.createElement('p')
        difficulty.textContent = x.technicalDifficulty
        const type = document.createElement('p')
        type.textContent = x.typeOfRoute
        const terrain = document.createElement('p')
        terrain.innerHTML = `Terrain: ${x.terrain}`

        const minElevation = document.createElement('p')
        const maxElevation = document.createElement('p')

        info.appendChild(routeName)
        info.appendChild(description)
        info.appendChild(distance)
        info.appendChild(difficulty)
        info.appendChild(type)
        info.appendChild(terrain)
        info.appendChild(minElevation)
        info.appendChild(maxElevation)
        card.appendChild(img)
        card.appendChild(info)
        section.appendChild(card)

    });
}