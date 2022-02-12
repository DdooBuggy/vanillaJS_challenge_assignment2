const purple = "color-purple";
const yello = "color-yello";
const blue = "color-blue";
const body = document.body;

function changeColor() {
    if (window.innerWidth < 1000) {
        body.className = "";
        body.classList.add(blue);
    } else if (window.innerWidth > 1500) {
        body.className = "";
        body.classList.add(yello);
    } else {
        body.className = "";
        body.classList.add(purple);
    }
}
window.addEventListener("resize", changeColor);