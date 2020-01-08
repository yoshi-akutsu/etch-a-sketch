function createGrid(side) {
    //creates the columns
    for (let i = 0; i < side; i++){
        const bigSquare = document.createElement("div");
        bigSquare.classList.add("bigSquare", "flex-container")
        //creates the rows
        for (let j = 0; j < side; j++){
            const littleSquare = document.createElement("div");
            littleSquare.classList.add("littleSquare")
            littleSquare.textContent = "box";
            bigSquare.appendChild(littleSquare);

        }
        container.appendChild(bigSquare);

    }
    
}

function killTheKids(div){
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
    return
}

const container = document.querySelector("#container");

createGrid(16);



//button at the top to "shake the etch-a-sketch"
const button = document.querySelector("#reset");
button.addEventListener("click", (e) => {
    killTheKids(container);
    let side = prompt("Please enter the side-density:");
    createGrid(side);
});