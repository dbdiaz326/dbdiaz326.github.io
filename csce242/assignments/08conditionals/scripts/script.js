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

//show exercise one
document.getElementById("exercise-one-link").onclick = (e) => {
    e.preventDefault();
    document.getElementById("exercise-one").classList.remove("hidden");
    document.getElementById("exercise-two").classList.add("hidden");
};

//show exercise two
document.getElementById("exercise-two-link").onclick = (e) => {
    e.preventDefault();
    document.getElementById("exercise-one").classList.add("hidden");
    document.getElementById("exercise-two").classList.remove("hidden");
};

//end of semester counter
const today = new Date();
const lastDay = new Date(today.getFullYear(), 11, 4);
const daysLeft = parseInt((lastDay - today) / (1000 * 60 * 60 * 24));
document.getElementById("days-left").innerHTML = `You have ${daysLeft} days left in the semester`;