const today = new Date();

currentyear.innerHTML = ` <span>${today.getFullYear()}</span>`;

document.getElementById("lastModified").innerHTML = `<span>${document.lastModified}</span>`;

document.addEventListener('DOMContentLoaded', function() {
    const timestampField = document.getElementById('timestamp');
    if (timestampField) {
        const now = new Date();
        timestampField.value = now.toLocaleString();
    }
});