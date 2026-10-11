document.getElementById("toggle-nav").onclick = () => {
    document.getElementById("main-nav-list").classList.toggle("hide-small");
};

const btnChooseHero = document.getElementById("btn-choose-hero");

if(btnChooseHero != null) {
    const heroes = ["Ironclad", "Silent", "Defect", "Watcher"];

    const heroPages = [];
    heroPages["Ironclad"] = "ironclad.html";
    heroPages["Silent"] = "silent.html";
    heroPages["Defect"] = "defect.html";
    heroPages["Watcher"] = "watcher.html";

    btnChooseHero.onclick = () => {
        const heroNum = Math.floor(Math.random() * heroes.length);
        const chosenHero = heroes[heroNum];

        document.getElementById("hero-choice").innerHTML = `You got: The ${chosenHero}!`;
        btnChooseHero.disabled = true;

        setTimeout(() => {
            location.href = heroPages[chosenHero];
        }, 1200);
    };
}