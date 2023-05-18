var loader = document.querySelector(".loader")

window.addEventListener("load", vanish);

function vanish() {
    loader.classList.add("disppear");
    window.addEventListener("transitioned", removeCode);
} 

function removeCode() {
    while (loader.hasChildNodes()) {
      loader.removeChild(loader.firstChild);
    }
}