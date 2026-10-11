const base_url = "https://dbdiaz326.github.io/csce242/projects/part7/";

const getRelics = async() => {
    const url = `${base_url}json/ironclad-relics.json`;
    const response = await fetch(url);
    return response.json();
};

const showRelics = async() => {
    const relics = await getRelics();

    relics.forEach((relic)=>{
        document.querySelector("#ironclad-relic-list").append(displayRelic(relic));
    });
};

const displayRelic = (relic) => {
    const article = document.createElement("article");
    article.classList.add("character-screen-relic-card");
    article.classList.add("ironclad-relic-card");

    const img = document.createElement("img");
    img.classList.add("character-screen-relic-image");
    img.src = base_url + relic.img_name;
    img.alt = relic.name;
    article.append(img);

    const h3 = document.createElement("h3");
    h3.classList.add("character-screen-relic-name");
    h3.innerHTML = relic.name;
    article.append(h3);

    const pType = document.createElement("p");
    pType.classList.add("character-screen-relic-description");
    pType.innerHTML = `${relic.type} / ${relic.rarity}`;
    article.append(pType);

    const pEffect = document.createElement("p");
    pEffect.classList.add("character-screen-relic-description");
    pEffect.innerHTML = relic.effect;
    article.append(pEffect);

    return article;
};

showRelics();