const url = "https://conitodhelado.github.io/wdd231/project/data/membership.json";
const modal = document.getElementById("membership-details");

const section = document.getElementById('membership-lvls');

// Create dialog elements

const div = document.createElement('div');

const membershipLvl = document.createElement('h4');

const closeButton = document.createElement('button');
closeButton.textContent = "x";
closeButton.classList.add('btn');
closeButton.addEventListener("click", () => {
    modal.close();
})

const cost = document.createElement('p');
const costPeriod = document.createElement('p');
const description = document.createElement('p');
const benefits = document.createElement('ul');
const specialEvents = document.createElement('ul');
const exclusivePerks = document.createElement('ul');

div.appendChild(membershipLvl);
div.appendChild(closeButton);
modal.appendChild(div);
modal.appendChild(cost);
modal.appendChild(costPeriod);
modal.appendChild(description);
modal.appendChild(benefits);
modal.appendChild(specialEvents);
modal.appendChild(exclusivePerks);

// Set up buttons



// Get Data and Display it

async function getMembershipData() {
    const response = await fetch(url);
    const data = await response.json();
    populateModal(data);
}

getMembershipData();

function populateModal(data) {
    data.forEach((membership) => {
        const article = document.createElement('article')
        article.classList.add('lvl')

        const header = document.createElement('h3');
        header.textContent = membership.membershipLevel;

        const button = document.createElement('button')
        button.classList.add('btn');
        button.textContent = 'Learn more'
        button.addEventListener('click', () => displayModal(membership));

        article.appendChild(header);
        article.appendChild(button);
        section.appendChild(article);
    }
)};

function displayModal(membership) {
    membershipLvl.textContent = membership.membershipLevel;
    
    cost.innerHTML = `Cost: $${membership.cost}`
    
    costPeriod.innerHTML = `Billing period: ${membership.costPeriod}`;
    
    description.textContent = membership.description;
    
    benefits.innerHTML = `<strong>Benefits:</strong><ul><li>${membership.benefits.join('</li><li>')}</li></ul>`;
    
    specialEvents.innerHTML = `<strong>Special Events:</strong><ul><li>${membership.specialEvents.join('</li><li>')}</li></ul>`;
    
    if (membership.exclusivePerks) {
        exclusivePerks.innerHTML = `<strong>Exclusive Perks:</strong><ul><li>${membership.exclusivePerks.join('</li><li>')}</li></ul>`;
    }

    modal.showModal();
    

}

        




