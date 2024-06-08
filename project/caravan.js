document.querySelector("#currentyear").textContent = new Date().getFullYear();
/* This display the last modification*/
document.querySelector("#lastModified").textContent = document.lastModified;


const nav = document.querySelector("#nav")
const open = document.querySelector("#open")
const close = document.querySelector("#close")

open.addEventListener("click", () => {
    nav.classList.add("visible");
})

close.addEventListener("click", () => {
    nav.classList.remove("visible");
})
const products = [
    {
        productName: "Gorro Channel",
        category: "Gorros",
        colors: "Varios",
        minor: "3.500",
        mayor: "1.600",
        imageUrl:
            "https://http2.mlstatic.com/D_NQ_NP_976786-MLC50275648449_062022-O.webp"
    },
    {
        productName: "Gorro Osito",
        category: "Gorros",
        colors: "Blanco, Negro, Rosa, Plomo, Beige",
        minor: "4.500",
        mayor: "2.000",
        imageUrl:
            "https://http2.mlstatic.com/D_NQ_NP_993502-MLC75826302115_042024-O.webp"
    },
    {
        productName: "Gorro Panda y Estrella",
        category: "Gorros",
        colors: "Rojo, Celeste, Morado, Plomo",
        minor: "3.500",
        mayor: "1.700",
        imageUrl:
            "https://http2.mlstatic.com/D_NQ_NP_991938-MLM73124148622_122023-O.webp"
    },
    {
        productName: "Cuellos Lana Delgada",
        category: "Cuellos",
        colors: "Lizo y Jaspeado",
        minor: "1.500",
        mayor: "700",
        imageUrl:
            "https://http2.mlstatic.com/D_NQ_NP_761935-MLC49274226885_032022-O.webp"
    },
    {
        productName: "Cuellos Lana Gruesa",
        category: "Cuellos",
        colors: "Plomo y Rojo",
        minor: "2.000",
        mayor: "1.000",
        imageUrl:
            "https://http2.mlstatic.com/D_NQ_NP_652501-MLC75659233524_042024-O.webp"
    },
    {
        productName: "Cuellos Tres Colores (Paq. 10 uni.)",
        category: "Cuellos",
        colors: "Varios",
        minor: "-----",
        mayor: "12.000",
        imageUrl:
            "https://www.barriomeiggs.cl/9189/-cuello-de-lana.jpg"
    },
    {
        productName: "Cuellos Channel",
        category: "Cuellos",
        colors: "Lizos",
        minor: "1.600",
        mayor: "3.500",
        imageUrl:
            "https://http2.mlstatic.com/D_NQ_NP_611083-MLA52558906694_112022-O.webp"
    },
    {
        productName: "Charpe",
        category: "Bufandas",
        colors: "Terracota y Burdeo",
        minor: "4.500",
        mayor: "2.500",
        imageUrl: "https://http2.mlstatic.com/D_NQ_NP_943690-MLC70095960337_062023-O.webp"
    },
    {
        productName: "Cashmere",
        category: "Bufandas",
        colors: "Varios",
        minor: "4.500",
        mayor: "2.500",
        imageUrl: "https://kaspi.cl/wp-content/uploads/2023/01/sb-011cashmere_lisa_200g_sin_pelo.psd_menta.jpg"
    },
    
    {
        productName: "Guantes sin dedos de Niño (Paq. 12 uni.)",
        category: "Guantes",
        colors: "Tonos claros y oscuros",
        minor: "2.000",
        mayor: "6.000",
        imageUrl: "https://lh3.googleusercontent.com/proxy/ZXu44d8F5MZMuIMQVofw48qiqG8i4NJggRNxtcF4zVLbgv-lriyxJjNDYLDrZZAmibNFbD4IlS1Um3PQBs648ZkPXgm2-QgT3f03-BgxLA5_gyxpJ5Qru7qDVu0i8SiLb7e8EH3FAPC7vWiodP-tK4nACQ9M-fGMc2Gdr9JuV70LmpFaNGOU"
    },
    {
        productName: "Guantes con dedos de Niño (Paq. 12 uni.)",
        category: "Guantes",
        colors: "Tonos claros y oscuros",
        minor: "2.000",
        mayor: "6.000",
        imageUrl: "https://http2.mlstatic.com/D_NQ_NP_685298-MLC49748375378_042022-O.webp"
    },
    {
        productName: "Guantes Táctiles (Paq. 12 uni.)",
        category: "Guantes",
        colors: "Tonos claros y oscuros",
        minor: "2.000",
        mayor: "12.000",
        imageUrl: "https://www.proaccesorios.com.uy/wp-content/uploads/2019/01/601368-MLU27253954691_042018-O.jpg"
    }
];
createProductCard(products);

const gorro = document.querySelector("#gorros");
gorro.addEventListener("click", () => {
    createProductCard(products.filter(product => product.category.includes("Gorros")));
});
const bufanda = document.querySelector("#bufandas");
bufanda.addEventListener("click", () => {
    createProductCard(products.filter(product => product.category.includes("Bufandas")));
});
const guantes = document.querySelector("#guantes");
guantes.addEventListener("click", () => {
    createProductCard(products.filter(product => product.category.includes("Guantes")));
});
const cuellos = document.querySelector("#cuellos");
cuellos.addEventListener("click", () => {
    createProductCard(products.filter(product => product.category.includes("Cuellos")));
});
const home = document.querySelector("#todos");
home.addEventListener("click", () => {
    createProductCard(products);
});


function createProductCard(filterProducts) {
/*     This line clean the div and display the filter output
 */    document.querySelector(".grid").innerHTML = "";
    filterProducts.forEach(product => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let category = document.createElement("p");
        let colors = document.createElement("p");
        let minor = document.createElement("p");
        let mayor = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = product.productName;
        category.innerHTML = `<span class="label"><strong>Categoría:</strong></span> ${product.category}`;
        colors.innerHTML = `<span class="label"><strong>Colores:</strong></span> ${product.colors}`;
        minor.innerHTML = `<span class="label"><strong>Menor:</strong></span> ${product.minor}`;
        mayor.innerHTML = `<span class="label"><strong>Mayor:</strong></span> ${product.mayor}`;
        img.setAttribute("src", product.imageUrl);
        img.setAttribute("alt", `${product.productName}`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(category);
        card.appendChild(colors);
        card.appendChild(minor);
        card.appendChild(mayor);
        card.appendChild(img);

        document.querySelector(".grid").appendChild(card);
    });
}