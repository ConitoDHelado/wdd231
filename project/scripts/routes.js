const url = "https://conitodhelado.github.io/wdd231/project/data/routes.json"

async function getRoutesData() {
    const response = await fetch(url);
    const data = await response.json();
    
}