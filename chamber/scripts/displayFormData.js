const formInfo = new URLSearchParams(window.location.search);
const section = document.getElementById('thankyou');

const confirmation = document.createElement('p');
const list = document.createElement('ul');
const fname = document.createElement('li');
const email = document.createElement('li');
const phone = document.createElement('li');
const business = document.createElement('li');
const time = document.createElement('li');


confirmation.innerHTML = `Congratulations on your new ${formInfo.get('lvl')} membership at the Shire Chamber of Commerce`
fname.innerHTML= `Name: ${formInfo.get('fname')} ${formInfo.get('lname')}`
email.innerHTML = `Email: ${formInfo.get('email')}`
phone.innerHTML = `Phone: ${formInfo.get('phone')}`
business.innerHTML = `Business: ${formInfo.get('org-name')}`

section.appendChild(confirmation);
section.appendChild(list);

list.appendChild(fname);
list.appendChild(email);
list.appendChild(phone);
list.appendChild(business);
list.appendChild(time);

