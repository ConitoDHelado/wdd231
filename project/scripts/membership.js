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

const monthlyCost = document.createElement('p');
const yearlyCost = document.createElement('p');
const description = document.createElement('p');
const benefits = document.createElement('ul');

div.appendChild(membershipLvl);
div.appendChild(closeButton);
modal.appendChild(div);
modal.appendChild(monthlyCost);
modal.appendChild(yearlyCost);
modal.appendChild(description);
modal.appendChild(benefits);



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
        header.textContent = membership.membership_tier;

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
    membershipLvl.textContent = membership.membership_tier;
    
    monthlyCost.innerHTML = `Monthly cost: $${membership.monthly_cost}`
    
    yearlyCost.innerHTML = `Yearly cost: $${membership.yearly_cost}`;
    
    description.textContent = membership.short_description;
    
    benefits.innerHTML = `<strong>Benefits:</strong><ul><li>${membership.benefits.join('</li><li>')}</li></ul>`;

    modal.showModal();
    

}

        




