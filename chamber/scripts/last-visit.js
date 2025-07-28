function trackVisit() {
    const lastVisit = localStorage.getItem('lastVisit');
    const currentVisit = new Date().toISOString();
    const message = document.querySelector('p');
    
    if (lastVisit) {
        // User has visited before
        const lastVisitDate = new Date(lastVisit);
        const timeDifference = Date.now() - lastVisitDate.getTime();
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if (daysDifference < 1) {
            message.textContent = `Back so soon! Awesome!`;
        }
        else if (daysDifference === 1) {
            message.textContent = `Welcome back! You last visited ${daysDifference} day ago.`;          
        }

    } else {
        // First-time visitor
        message.textContent = `Welcome! Let us know if you have any questions.`;
        
    }
    
    // Store current visit time
    localStorage.setItem('lastVisit', currentVisit);
}

trackVisit();