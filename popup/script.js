let container = document.getElementById("container");

let popup1 = document.getElementsByClassName("popup")[0];
container.addEventListener("click", (event) => {
    if (event.target !== popup1) {
        popup1.remove();
    }
}, true);

let popup2 = document.getElementsByClassName("popup")[1];
container.addEventListener("click", () => {
    popup2.remove()
});
popup2.addEventListener("click", (event) => {
    event.stopPropagation();
}, true);