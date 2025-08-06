document.addEventListener('DOMContentLoaded', function () {
    const now = new Date();
    currentyear.innerHTML = now.getFullYear();

    const lastModified = document.getElementById('lastModified');
    lastModified.innerHTML = now.toLocaleString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    });

    }
);