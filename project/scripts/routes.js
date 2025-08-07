const url = 'https://conitodhelado.github.io/wdd231/project/data/routes.json'
const section = document.getElementById('routes')



async function getRoutesData() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            createCards(data);
        } else {
            throw Error(await response.text());
        }

    }
    catch(error) {
        console.log(error);
    }
    
}

getRoutesData();

function createCards(data) {
    data.forEach((x, index) => {

        const card = document.createElement('article')
        const img = document.createElement('img')
        img.setAttribute('src', x.map) 
        img.setAttribute('alt', x.name) 
        img.setAttribute('width', '300')
        img.setAttribute('height', '200')
        if (index > 5) {
            img.setAttribute('loading', 'lazy')
        }
        
        const info = document.createElement('article')
        const routeName = document.createElement('h2')
        routeName.textContent = x.name
        
        const description = document.createElement('p')
        description.innerHTML = x.description
        
        const distance = document.createElement('p')
        distance.innerHTML = `Distance: ${x.distance}`
       
        const difficulty = document.createElement('p')
        difficulty.innerHTML = `Difficulty: ${x.technicalDifficulty}`
        
        const type = document.createElement('p')
        type.innerHTML = `Type: ${x.typeOfRoute}`
       
        const terrain = document.createElement('p')
        terrain.innerHTML = `Terrain: ${x.terrain}`
        
        const minElevation = document.createElement('p')
        minElevation.innerHTML = `Min Elevation: ${x.minElevation}`
        
        const maxElevation = document.createElement('p')
        maxElevation.innerHTML = `Max Elevation: ${x.maxElevation}`

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