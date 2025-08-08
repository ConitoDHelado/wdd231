const formInfo = new URLSearchParams(window.location.search);
const section = document.getElementById('thankyou');

const confirmation = document.createElement('p');
const list = document.createElement('ul');
const fname = document.createElement('li');
const email = document.createElement('li');
const phone = document.createElement('li');
const infop = document.createElement('p');


confirmation.innerHTML = `Congratulations on your new ${formInfo.get('tier')} membership in the club!`
fname.innerHTML= `Name: ${formInfo.get('fname')} ${formInfo.get('lname')}`
email.innerHTML = `Email: ${formInfo.get('email')}`
phone.innerHTML = `Phone: ${formInfo.get('phone')}`
infop.textContent = `You will soon recieve an email with your billing info. Thank you for trusting Tenerife Bikers' Club`


section.appendChild(confirmation);
section.appendChild(list);

list.appendChild(fname);
list.appendChild(email);
list.appendChild(phone);

section.appendChild(infop)


