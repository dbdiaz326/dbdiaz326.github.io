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

//missing class points
document.getElementById("txt-days-missed").onkeyup = (e) => {
    const daysMissed = parseInt(e.target.value);
    const pointsLost = daysMissed / 25 * 7;

    document.getElementById("deduction-message").innerHTML =
        `You will lose ${pointsLost.toFixed(1)}% for skipping ${daysMissed} days.`;
    if(daysMissed == 0) {
        document.getElementById("attendance-message").innerHTML =
            "Perfect attendance! Keep it up.";
    } else if(daysMissed <= 2) {
        document.getElementById("attendance-message").innerHTML =
            "A couple missed classes should be manageable.";
    } else if(daysMissed <= 5) {
        document.getElementById("attendance-message").innerHTML =
            "You are starting to miss a noticeable amount of class.";
    } else if(daysMissed <= 7) {
        document.getElementById("attendance-message").innerHTML =
            "Try not to miss any more classes.";
    } else {
        document.getElementById("attendance-message").innerHTML =
            "You are missing valuable learning opportunities.";
    }
};

//end of semester counter
const today = new Date();
const lastDay = new Date(today.getFullYear(), 11, 4);
const daysLeft = parseInt((lastDay - today) / (1000 * 60 * 60 * 24));
document.getElementById("days-left").innerHTML = `You have ${daysLeft} days left in the semester`;
if(daysLeft > 60) {
    document.getElementById("semester-message").innerHTML = "Plenty of time left in the semester.";
} else if(daysLeft > 30) {
    document.getElementById("semester-message").innerHTML = "The semester is moving along.";
} else if(daysLeft > 7) {
    document.getElementById("semester-message").innerHTML = "You are in the final stretch.";
} else {
    document.getElementById("semester-message").innerHTML = "Almost there!";
}