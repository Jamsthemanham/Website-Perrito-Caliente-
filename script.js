
let ArrProducts=[
    {
        id:1,
        name: "Classic",
        image:"hotdog.jpg",
        price:"6",
        rating: 5,
    },
    {
        id:2,
        name: "The-Veggie-Fiesta",
        image:"vegan-hot-dog-1024x1024.jpg",
        price:"6",
        rating: 5,
    },
    {
        id:3,
        name: "The-Mountain-of-Meat",
        image:"8fa7fcf1fc7e094449833748a0352e89.jpg",
        price:"8",
        rating: 5,
    },
    {
        id:4,
        name: "The-Hot Dog's-Special",
        image:"hot-dog-2.webp",
        price:"10",
        rating: 5,
    },
    {
        id:5,
        name: "Fries",
        image:"R.jpg",
        price:"3",
        rating: 5,
    },
    {
        id:6,
        name: "Classic-Poutine",
        image:"R (1).jpg",
        price:"5",
        rating: 5,
    },
    {
        id:7,
        name: "Mashed-Potatoes",
        image:"Brown-Butter-Mashed-Potatoes-4.webp",
        price:"4",
        rating: 5,
    },
    {
        id:8,
        name: "Potato-Fiesta",
        image:"bacon-and-cheese-potatoes-3-copy.webp",
        price:"5",
        rating: 5,
    },
]


const body = document.querySelector("body"),

products = document.querySelector(".products");

let checkOurList = [];

function onInIt(){
    ArrProducts.forEach((item, key) => {
        let div = document.createElement("div");
        div.classList.add("item");

        div.innerHTML = `
        <img src="images/${item.image}" />
        <div class="name">${item.name}</div>
        <div class="price"><small>$</small> ${item.price}</div>
        <button onclick="addToCart(${key})"> Add to Cart</button>
        ` ;

        products.appendChild(div);
    });

}
onInIt();

function addToCart(Id) {

    console.log(Id);
}