class Vacation {
    constructor(title, type, description, thingsToDo, pic, mapSrc) {
        this.title = title;
        this.type = type;
        this.description = description;
        this.thingsToDo = thingsToDo;
        this.pic = pic;
        this.mapSrc = mapSrc;
    }

    get card() {
        const section = document.createElement("section");
        section.classList.add("vacation-card");

        section.append(this.vacationName());
        section.append(this.vacationType());
        section.append(this.vacationImage());

        section.onclick = () => {
            this.showModal();
        };

        return section;
    }

    vacationName() {
        const h3 = document.createElement("h3");
        h3.innerHTML = this.title;
        return h3;
    }

    vacationType() {
        const h4 = document.createElement("h4");
        h4.innerHTML = `${this.type} Vacation`;
        return h4;
    }

    vacationImage() {
        const img = document.createElement("img");
        img.src = `images/${this.pic}`;
        img.alt = `Picture of ${this.title}`;
        return img;
    }

    showModal() {
        document.getElementById("modal-title").innerHTML = this.title;
        document.getElementById("modal-type").innerHTML = this.type;
        document.getElementById("modal-description").innerHTML = this.description;
        document.getElementById("modal-things-to-do").innerHTML = this.thingsToDo;

        document.getElementById("vacation-map").innerHTML =
            `<iframe src="${this.mapSrc}"></iframe>`;

        document.getElementById("vacation-modal").style.display = "block";
    }
}

const vacations = [];

vacations.push(new Vacation(
    "Asheville",
    "Mountain",
    "A fun mountain city with great food, art, and beautiful views.",
    "Visit the Biltmore Estate, hike, and explore downtown.",
    "asheville.jpg",
    "https://www.google.com/maps?q=Asheville,NC&output=embed"
));

vacations.push(new Vacation(
    "Boone",
    "Mountain",
    "A scenic college town in the Blue Ridge Mountains.",
    "Go skiing, visit Appalachian State University, and hike Grandfather Mountain.",
    "boone.jpg",
    "https://www.google.com/maps?q=Boone,NC&output=embed"
));

vacations.push(new Vacation(
    "Hot Springs",
    "Mountain",
    "A quiet mountain town known for its natural hot mineral springs.",
    "Relax in the hot springs, hike the Appalachian Trail, and go rafting.",
    "hot-springs.jpg",
    "https://www.google.com/maps?q=Hot+Springs,NC&output=embed"
));

vacations.push(new Vacation(
    "Table Rock",
    "Mountain",
    "A beautiful state park with trails, lakes, and mountain scenery.",
    "Hike to the summit, go fishing, and have a picnic by the lake.",
    "table-rock.jpg",
    "https://www.google.com/maps?q=Table+Rock+State+Park,SC&output=embed"
));

vacations.push(new Vacation(
    "Myrtle Beach",
    "Beach",
    "A popular beach destination with plenty of activities and restaurants.",
    "Go to the beach, visit the boardwalk, and play mini golf.",
    "myrtle-beach.jpg",
    "https://www.google.com/maps?q=Myrtle+Beach,SC&output=embed"
));

vacations.push(new Vacation(
    "Folly Beach",
    "Beach",
    "A relaxed beach near Charleston with surfing and local shops.",
    "Go surfing, walk on the pier, and visit nearby Charleston.",
    "folly-beach.jpg",
    "https://www.google.com/maps?q=Folly+Beach,SC&output=embed"
));

const vacationGallery = document.getElementById("vacation-gallery");

vacations.forEach((vacation) => {
    vacationGallery.append(vacation.card);
});

document.getElementById("btn-close").onclick = () => {
    document.getElementById("vacation-modal").style.display = "none";
};