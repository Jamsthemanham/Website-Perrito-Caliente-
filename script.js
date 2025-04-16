
let ArrProducts=[
    {
        id:1,
        name: "Classic",
        image:"hotdog.jpg",
        price:"6",
    },
    {
        id:2,
        name: "The-Veggie-Fiesta",
        image:"vegan-hot-dog-1024x1024.jpg",
        price:"6",
    },
    {
        id:3,
        name: "The-Mountain-of-Meat",
        image:"8fa7fcf1fc7e094449833748a0352e89.jpg",
        price:"8",
    },
    {
        id:4,
        name: "The-Hot Dog's-Special",
        image:"hot-dog-2.webp",
        price:"10",
    },
    {
        id:5,
        name: "Fries",
        image:"R.jpg",
        price:"3",
    },
    {
        id:6,
        name: "Classic-Poutine",
        image:"R (1).jpg",
        price:"5",
    },
    {
        id:7,
        name: "Mashed-Potatoes",
        image:"Brown-Butter-Mashed-Potatoes-4.webp",
        price:"4",
    },
    {
        id:8,
        name: "Potato-Fiesta",
        image:"bacon-and-cheese-potatoes-3-copy.webp",
        price:"5",
    },
    {
        id:9,
        name: "Chocolate Hot Dog",
        image:"Chocolate Hot Dog.jpg",
        price:"6",
    },
]


const body = document.querySelector("body"),

products = document.querySelector(".products"),
shoppingBasket = document.querySelector(".shoppingBasket"),
closeCart = document.querySelector(".close"),
productList = document.querySelector(".productList"),
quantity = document.querySelector(".quantity"),
total = document.querySelector(".totalPrice");

let checkOutList = [];

shoppingBasket.onclick=()=>{
    body.classList.add("active");

}
closeCart.onclick=()=>{
    body.classList.remove("active");

}
/* would be stars rating but depracated now is adding images, price and name to the total */
function onInIt(){
    ArrProducts.forEach((item, key) => {
        let div = document.createElement("div");
        div.classList.add("item");

        let star = "";
        for(i =1; i < item.rating; i++) {
            star += `<i class="fa fa-star"></i>`;
        }
           

        div.innerHTML = `
        <img src="images/${item.image}" />
        <div class="name">${item.name}</div>
        <div>${star}</div>
        <div class="price"><small>$</small> ${item.price}</div>
        <button onclick="addToCart(${key})"> Add to Cart</button>
        ` ;
            
        products.appendChild(div);
    });

}
onInIt();

function addToCart(Id) {
    if (!checkOutList[Id]) {
        checkOutList[Id] = { ...ArrProducts[Id], quantity: 1 };
    } else {
        checkOutList[Id].quantity += 1;
    }
    reloadCart();
}
/* checks to see if the cart is being updated or not */
function reloadCart() {
    productList.innerHTML = "";
    let count = 0;
    let totalPrice = 0;

        checkOutList.forEach((item, key) => {
          if (item) {
                totalPrice += parseInt(item.price) * item.quantity;
                count += item.quantity;
                let li = document.createElement("li");
                li.innerHTML = `
                 <img src="images/${item.image}">
                  <div>${item.name}</div>
                  <div>${item.price}</div>
                  <div>
                  <button onclick="changeQuantity(${key}, ${item.quantity - 1})">-</button>
                  <div class="count">${item.quantity}</div>
                  `;
                  productList.appendChild(li);
         }
      });



       const total = document.querySelector(".totalPrice");
      if (total) {
         total.innerHTML = `<small class="total"> Subtotal (${count} items)</small> $` + totalPrice.toFixed(2);
        } else { console.log(totalPrice)
        }

      const quantityElement = document.querySelector(".quantity");
       if (quantityElement) {
          quantityElement.innerHTML = count;
       } else { console.log(totalPrice)
      }


  }



// Remove Item or Change Quantity
function changeQuantity(key, quantity) {
    if (quantity <= 0) {
        delete checkOutList[key];
    } else {
        checkOutList[key].quantity = quantity;
    }
    reloadCart();
}
