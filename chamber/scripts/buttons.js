const gridButton = document.getElementById("grid-btn");
const listButton = document.getElementById("list-btn");
const memberList = document.getElementById("members-list")

gridButton.addEventListener('click', () => {
    memberList.classList.add("grid")
    memberList.classList.remove("list");
})

listButton.addEventListener('click', () => {
    memberList.classList.add("list")
    memberList.classList.remove("grid");
} )