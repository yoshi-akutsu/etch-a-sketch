function createGrid(side) {
    //creates the columns
    for (let i = 0; i < side; i++){
        const bigSquare = document.createElement("div");
        bigSquare.classList.add("bigSquare")
        //creates the rows
        for (let j = 0; j < side; j++){
            const littleSquare = document.createElement("div");
            littleSquare.classList.add("littleSquare");
            littleSquare.classList.remove("drawn");
            bigSquare.appendChild(littleSquare);
        }
        container.appendChild(bigSquare);
        //adds event listener for littleSquares each time
        let lilSquares = document.querySelectorAll("div.littleSquare");

        lilSquares.forEach((lilSquare) => {
        lilSquare.addEventListener('mouseover', (e) => {
            colorChange(event.target);
            });
        });
    }
}

function killTheKids(div){
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
    return
}

function colorChange(square) {
    let color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    square.style.backgroundColor = color;
}

function checkSides(side){
    if(side === null){
        return;
    }
    else if (side == '') {
        killTheKids(container);
        createGrid(16)
    }
    else {
        killTheKids(container);
        createGrid(side);
    }
}


//button at the top to "shake the etch-a-sketch"
const button = document.querySelector("#reset");
button.addEventListener("click", (e) => {
    let side = prompt("Please enter the side-density:");
    checkSides(side);
});

//Creates initial grid
const container = document.querySelector("#container");
createGrid(16);
