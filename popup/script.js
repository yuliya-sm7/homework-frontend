let container = document.getElementById("container");

let popup1 = document.getElementsByClassName("popup")[0];
container.addEventListener("click", (event) => {
    if (!popup1.contains(event.target)) {
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