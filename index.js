const purple = "color-purple";
const yello = "color-yello";
const blue = "color-blue";
const body = document.body;

function changeColor() {
    const width = window.innerWidth;
    if (width < 1000) {
        body.className = "";
        body.classList.add(blue);
    } else if (width > 1500) {
        body.className = "";
        body.classList.add(yello);
    } else {
        body.className = "";
        body.classList.add(purple);
    }
}
window.addEventListener("resize", changeColor);