const button = document.querySelector("#btn");
const body = document.querySelector("body");
const hexValue = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const valueColor = document.querySelector("#hex-value");

button.addEventListener("click", function(){
    // function changeColor(){
        let hexColor = "#";

        for(let i = 0; i < 6; i++){
            const value = Math.floor(Math.random() * hexValue.length);
            hexColor += hexValue[value];
        }
        valueColor.textContent = hexColor;
        body.style.backgroundColor = hexColor;
    // }
});