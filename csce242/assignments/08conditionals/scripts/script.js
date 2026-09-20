//toggle the navigation
const toggleNav = document.querySelector("#toggle-nav");

toggleNav.onclick = () => {
    document.querySelector("#exercise-nav ul").classList.toggle("hide-small");

    if(toggleNav.innerHTML == "▼") {
        toggleNav.innerHTML = "▲";
    } else {
        toggleNav.innerHTML = "▼";
    }
}