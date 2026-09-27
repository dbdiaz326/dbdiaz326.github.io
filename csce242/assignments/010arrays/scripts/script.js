//destination arrays
const mountains = [];
mountains["Asheville"] = "https://www.google.com/maps?q=Asheville,NC&output=embed";
mountains["Boone"] = "https://www.google.com/maps?q=Boone,NC&output=embed";
mountains["Hot Springs"] = "https://www.google.com/maps?q=Hot+Springs,NC&output=embed";
mountains["Table Rock"] = "https://www.google.com/maps?q=Table+Rock,SC&output=embed";

const beaches = [];
beaches["Myrtle Beach"] = "https://www.google.com/maps?q=Myrtle+Beach,SC&output=embed";
beaches["Folly Beach"] = "https://www.google.com/maps?q=Folly+Beach,SC&output=embed";
beaches["Hilton Head Island"] = "https://www.google.com/maps?q=Hilton+Head+Island,SC&output=embed";
beaches["Isle of Palms"] = "https://www.google.com/maps?q=Isle+of+Palms,SC&output=embed";

//show destination links
document.getElementById("select-destination").onchange = (e) => {
    const destinationLinks = document.getElementById("destination-links");
    const map = document.getElementById("map");

    destinationLinks.innerHTML = "";
    map.innerHTML = "";
    map.classList.add("hidden");

    if(e.target.value == "mountains"){
        for(let destination in mountains){
            const p = document.createElement("p");
            const link = document.createElement("a");

            link.href = "#";
            link.innerHTML = destination;
            p.append(link);
            destinationLinks.append(p);

            link.onclick = (e) => {
                e.preventDefault();

                const iframe = document.createElement("iframe");
                iframe.src = mountains[destination];

                map.innerHTML = "";
                map.append(iframe);
                map.classList.remove("hidden");
            };
        }
    }

    if(e.target.value == "beaches"){
        for(let destination in beaches){
            const p = document.createElement("p");
            const link = document.createElement("a");

            link.href = "#";
            link.innerHTML = destination;
            p.append(link);
            destinationLinks.append(p);

            link.onclick = (e) => {
                e.preventDefault();

                const iframe = document.createElement("iframe");
                iframe.src = beaches[destination];

                map.innerHTML = "";
                map.append(iframe);
                map.classList.remove("hidden");
            };
        }
    }
};