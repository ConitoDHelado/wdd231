import { places } from "../data/places.mjs";
//console.log(places)

const showHere = document.getElementById("allplaces")

function displayItems() {
    places.forEach(place => {
        
        //Create card
        const card = document.createElement("div");

        //Create Title
        const title = document.createElement("h2");
        title.textContent = place.name;
        card.appendChild(title);

        //Create figure
        const figure = document.createElement("figure");
        
        const img = document.createElement("img");
        img.src = `images/places/${place.photo_url}`;
        img.alt = place.name;
        figure.appendChild(img);

        const figcaption = document.createElement("figcaption");
        figcaption.textContent = place.caption;
        figure.appendChild(figcaption);
        card.appendChild(figure)
        
        //Create Address
        const address = document.createElement("address");
        address.textContent = place.address;
        card.appendChild(address);

        //Create description
        const description = document.createElement("p");
        description.textContent = place.description;
        card.appendChild(description)
        
        //Create button
        const button = document.createElement("button");
        button.textContent = "Learn more";
        button.classList.add("btn");
        card.appendChild(button);

        showHere.appendChild(card);
    })
}

displayItems();