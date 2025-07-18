import { displayMemberCards } from "./displayMemberCards.mjs";
const url = "https://conitodhelado.github.io/wdd231/chamber/data/members.json"
const spotlightContainer = document.getElementById("spotlight");

async function displayGoldSilverMembers() {
    const response = await fetch(url);
    const data = await response.json();
    const goldSilverMembers = data.filter(member => member.membershipLevel > 1);
    for (let i = goldSilverMembers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [goldSilverMembers[i], goldSilverMembers[j]] = [goldSilverMembers[j], goldSilverMembers[i]];
    }

    // Return the first three
    displayMemberCards (goldSilverMembers.slice(0, 3), spotlightContainer);
}

displayGoldSilverMembers();