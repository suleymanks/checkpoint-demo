const app = document.querySelector("#addApp");
const brand = document.querySelector("#name");
const countInput = document.querySelector("#count");
const addButton = document.querySelector("#add");


function renderAdded() {
    
}

function handleAdd(e) {
    const name = brand.value;
    const count = countInput.value;

    if(!name || !count) return;

    let cards = JSON.parse(localStorage.getItem("cards") || []);

    data = {
        name: name,
        count: count,
    };

    cards.push(data);

    localStorage.setItem("cards", JSON.stringify(cards))


  e.preventDefault();
}

addButton.addEventListener("click", handleAdd);
