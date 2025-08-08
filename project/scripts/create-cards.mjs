export function createCards(data, section) {
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
        
        const routeName = document.createElement('h2')
        routeName.className = 'route-name'
        routeName.textContent = x.name
        
        const description = document.createElement('p')
        description.className = 'route-description'
        description.innerHTML = x.description
        
        const distance = document.createElement('p')
        distance.className = 'distance-info'
        distance.innerHTML = `Distance: ${x.distance}`
       
        const difficulty = document.createElement('p')
        difficulty.className = 'difficulty-info'
        difficulty.innerHTML = `Difficulty: ${x.technicalDifficulty}`
        
        const type = document.createElement('p')
        type.className = 'route-type'
        type.innerHTML = `Type: ${x.typeOfRoute}`
       
        const terrain = document.createElement('p')
        terrain.className = 'terrain-info'
        terrain.innerHTML = `Terrain: ${x.terrain}`
        
        const minElevation = document.createElement('p')
        minElevation.className = 'min-elevation'
        minElevation.innerHTML = `Min Elevation: ${x.minElevation}`
        
        const maxElevation = document.createElement('p')
        maxElevation.className = 'max-elevation'
        maxElevation.innerHTML = `Max Elevation: ${x.maxElevation}`

        card.appendChild(img)
        card.appendChild(routeName)
        card.appendChild(description)
        card.appendChild(distance)
        card.appendChild(difficulty)
        card.appendChild(type)
        card.appendChild(terrain)
        card.appendChild(minElevation)
        card.appendChild(maxElevation)
        
        section.appendChild(card)

    });
}
