const nav = document.querySelector("#nav")
const open = document.querySelector("#open")
const close = document.querySelector("#close")

open.addEventListener("click", () => {
    nav.classList.add("visible");
})

close.addEventListener("click", () => {
    nav.classList.remove("visible");
})
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: ["2005", " August", " 7"],
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: ["1888", " May", " 21"],
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: ["2015", " June", " 7"],
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: ["2020"," May", " 2"],
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: ["1974", " November", " 19"],
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: ["1986", " January", " 10"],
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: ["1983", " December", " 2"],
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Trujillo, Perú",
        location: "Trujillo, Perú",
        dedicated: ["2015", " June", " 21"],
        area: 28200,
        imageUrl: "https://churchofjesuschrist.org/imgs/9943a99ff243f011c0533e3633cf9ecee0829628/full/320%2C/0/default"
    },
    {
        templeName: "Santiago, Chile",
        location: "Santiago, Chile",
        dedicated: ["1983", " September", " 15"],
        area: 20831,
        imageUrl: "https://churchofjesuschrist.org/imgs/b6becb4ca0c60a52ad5dc57a90ec69fe5fe7ec63/full/320%2C/0/default"
    },
    {
        templeName: "Buenos Aires, Argentina",
        location: "Buenos Aires, Argentina",
        dedicated: ["1986", " January", " 17"],
        area: 30659,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/buenos-aires-argentina-temple/buenos-aires-argentina-temple-4087-main.jpg"
    },
];
createTempleCard(temples);

const small = document.querySelector("#smaller");
small.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area < 10000));
});
const large = document.querySelector("#larger");
large.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area > 90000));
});
const newer = document.querySelector("#newer");
newer.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => parseInt(temple.dedicated[0]) > 2000));
});
const older = document.querySelector("#older");
older.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => parseInt(temple.dedicated[0]) < 1900));
});
const home = document.querySelector("#home");
home.addEventListener("click", () => {
    createTempleCard(temples);
});


function createTempleCard(filterTemples) {
/*     This line clean the div and display the filter output
 */    document.querySelector(".grid").innerHTML = "";
    filterTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label"><strong>Location:</strong></span> ${temple.location}`;
        dedication.innerHTML = `<span class="label"><strong>Dedicated:</strong></span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label"><strong>Size:</strong></span> ${temple.area} square feet`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".grid").appendChild(card);
    });
}

/* const reset = () => {
    templesDiv.innerHTML = " ";
}; */