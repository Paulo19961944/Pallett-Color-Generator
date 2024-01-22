document.addEventListener("DOMContentLoaded", function () {
    let button = document.querySelector("#select-btn");
    button.addEventListener("click", createPalettes);
});

function createPalettes() {
    let colorQuantity = Number.parseInt(document.querySelector("#color-quantity").value);
    let colorPalette = document.getElementById("color-palette");
    colorPalette.innerHTML = "";

    for (let i = 0; i < colorQuantity; i++) {
        let colorBox = document.createElement("input");
        colorBox.type = "color";
        colorBox.className = "color-box";
        colorBox.addEventListener("change", function (event) {
            changeColor(event.target);
        });

        colorPalette.appendChild(colorBox);
    }
}

function changeColor(colorBox) {
    let selectedColor = colorBox.value;
    colorBox.style.border = `2px solid ${selectedColor}`;
    
}
