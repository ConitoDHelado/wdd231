const url = "https://conitodhelado.github.io/wdd231/chamber/data/members.json"
const directoryElement = document.getElementById('directory');

async function getDirectoryData() {
    const response = await fetch(url);
    const data = await response.json();
    displayDirectory(data);
}

getDirectoryData();

const displayDirectory = (directory) => {
    directory.forEach((member) => {
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let img = document.createElement("img");
        let description = document.createElement("p");        
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let url = document.createElement("a");
        let membership = document.createElement("p");
        let owner = document.createElement("p");


        card.classList.add("member-card")
        name.textContent = `${member.name}`;
        img.setAttribute('src', `images/${member.image}`);
        img.setAttribute('alt', `${member.name}'s logo`);
        img.setAttribute('loading', 'lazy');
        img.setAttribute('width', '200');
        img.setAttribute('height', '200');

        address.textContent = member.address;
        phone.textContent = member.phone;
        url.setAttribute('href', member.website);
        url.textContent = member.website;
        if (member.membershipLevel == 1) {
            membership.textContent = `Member`
        } else if (member.membershipLevel == 2) {
            membership.textContent = `Silver Member`
        } else {
            membership.textContent = `Gold Member`
        }

        owner.textContent = `Owner: ${member.owner}`;
        description.textContent = member.description;
        description.style.fontStyle = "italic";

        directoryElement.appendChild(card);
        card.appendChild(name);
        card.appendChild(img);
        card.appendChild(description);
        card.appendChild(phone);
        card.appendChild(address);
        card.appendChild(url);
        card.appendChild(membership);
        card.appendChild(owner);


    });
}