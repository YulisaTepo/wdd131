document.querySelector("#currentyear").textContent = new Date().getFullYear();
/* This display the last modification*/
document.querySelector("#lastModified").textContent = document.lastModified;
const products = [
    {
        id: "fc - 1888",
        name: "flux capacitor",
        avg_rating: 4.5
    },
    {
        id: "fc - 2050",
        name: "power laces",
        average_rating: 4.7
    },
    {
        id: "fs - 1987",
        name: "time circuits",
        average_rating: 3.5
    },
    {
        id: "ac - 2000",
        name: "low voltage reactor",
        average_rating: 3.9
    },
    {
        id: "jj - 1969",
        name: "warp equalizer",
        average_rating: 5.0
    }
];

createProducts(products);


function createProducts(products) {
    products.forEach(product => {
        let option1 = document.createElement("option")
        option1.innerHTML = product.name;
        option1.setAttribute("value", product.id);
        document.querySelector("#products").appendChild(option1);
    });
}
