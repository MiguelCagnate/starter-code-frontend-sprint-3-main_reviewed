// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
  {
    id: 1,
    name: "cooking oil",
    price: 10.5,
    type: "grocery",
    offer: {
      number: 3,
      percent: 20,
    },
  },
  {
    id: 2,
    name: "Pasta",
    price: 6.25,
    type: "grocery",
  },
  {
    id: 3,
    name: "Instant cupcake mixture",
    price: 5,
    type: "grocery",
    offer: {
      number: 10,
      percent: 30,
    },
  },
  {
    id: 4,
    name: "All-in-one",
    price: 260,
    type: "beauty",
  },
  {
    id: 5,
    name: "Zero Make-up Kit",
    price: 20.5,
    type: "beauty",
  },
  {
    id: 6,
    name: "Lip Tints",
    price: 12.75,
    type: "beauty",
  },
  {
    id: 7,
    name: "Lawn Dress",
    price: 15,
    type: "clothes",
  },
  {
    id: 8,
    name: "Lawn-Chiffon Combo",
    price: 19.99,
    type: "clothes",
  },
  {
    id: 9,
    name: "Toddler Frock",
    price: 9.99,
    type: "clothes",
  },
];
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];
// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
  // 1. Loop for to the array products to get the item to add to cart
  const getItem = products.find((element) => element.id === id);
  // 2. Add found product to the cartList array
  if (getItem != undefined) {
    let itemIndex = products.indexOf(getItem);
    cartList.push(products[itemIndex]);
  }
  console.log(cartList);
}
// Exercise 2
function cleanCart() {
  let tBody = document.getElementById("cart_list");
  let totalPrice = document.getElementById("total_price");
  cart.length = 0;
  tBody.innerHTML = "";
  totalPrice.innerHTML = "0";
}
// Exercise 3
function calculateTotal() {
  // Calculate total price of the cart using the "cartList" array
  let priceFound = cartList.reduce((sum, item) => sum + item.price, 0);
  return priceFound.toFixed(2);
}
// Exercise 4
function generateCart() {
  // Using the "cartlist" array that contains all the items in the shopping cart,
  // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
  for (let i = 0; i < cartList.length; i++) {
    const productFound = cart.find((product) => product.id === cartList[i].id);
    if (productFound != undefined) {
      var productPlace = cart.indexOf(productFound);
      cart[productPlace].quantity++;
    } else {
      let product = cartList[i];
      product.quantity = 1;
      cart.push(product);
      console.log(cart);
    }
  }
}
// Exercise 5
function applyPromotionsCart() {
  // Apply promotions to each item in the array "cart"
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === 1 && cart[i].quantity >= 3) {
      let priceTotalid1 = Number(cart[i].quantity * cart[i].price);
      let applyDiscount1 = Number((priceTotalid1 * 20) / 100);
      cart[i].subtotal = applyDiscount1;
      cart[i].total = Number(priceTotalid1 - applyDiscount1);
    }
    if (cart[i].id === 3 && cart[i].quantity >= 10) {
      let priceTotalid3 = Number(cart[i].quantity * cart[i].price);
      let applyDiscount3 = Number((priceTotalid3 * 30) / 100);
      cart[i].subtotal = applyDiscount3;
      cart[i].total = Number(priceTotalid3 - applyDiscount3);
    }
    if (cart[i].id === 1 && cart[i].quantity < 3) {
      let priceTotalid1 = Number(cart[i].quantity * cart[i].price);
      cart[i].total = priceTotalid1;
      cart[i].subtotal = 0;
    }
    if (cart[i].id === 3 && cart[i].quantity < 10) {
      let priceTotalid3 = Number(cart[i].quantity * cart[i].price);
      cart[i].total = priceTotalid3;
      cart[i].subtotal = 0;
    }
    if (cart[i].id !== 1 && cart[i].id !== 3) {
      let priceTotalid4 = Number(cart[i].quantity * cart[i].price);
      cart[i].total = priceTotalid4;
      cart[i].subtotal = 0;
      console.log(cart);
    }
  }
  var finalTotalSum = cart.reduce((sum, item) => sum + item.total, 0);
  console.log(finalTotalSum);
  return finalTotalSum.toFixed(2);
}
// Exercise 6
// Fill the shopping cart modal manipulating the shopping cart dom
function removeDefault() {
  var clearTbody = () => {
    var tBody = document.getElementById("cart_list");
    while (tBody.lastElementChild) {
      tBody.removeChild(tBody.lastElementChild);
    }
  };
}
function printCart() {
  clearTbody();
  const shoppingList = document.getElementById("cart_list");
  for (let i = 0; i < cart.length; i++) {
    const tr = document.createElement("tr");
    const th = document.createElement("th");
    const td = document.createElement("td");
    const td1 = document.createElement("td1");
    const td2 = document.createElement("td2");
    const td3 = document.createElement("td3");
    th.textContent = cart[i].name;
    td.textContent = "$" + cart[i].price;
    td1.textContent = cart[i].quantity;
    td2.textContent = "$" + cart[i].subtotal;
    td3.textContent = "$" + cart[i].total;
    tr.appendChild(th);
    tr.appendChild(td);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    shoppingList.appendChild(tr);

    cart.forEach(function () {
      if (cart[i].id === 1 && cart[i].quantity < 3) {
        td3.textContent == Number(cart[i].quantity * cart[i].price.number);
      }
      if (cart[i].id === 3 && cart[i].quantity < 10) {
        td3.textContent == Number(cart[i].quantity * cart[i].price.number);
      }
      if (cart[i].id !== 1 && cart[i].id !== 3) {
        td2.textContent == Number(cart[i].quantity * cart[i].price.number);
      }
    });
  }
  var finalTotalSum = cart.reduce((sum, item) => sum + item.total, 0);
  console.log(finalTotalSum);
  var totalPrice = document.getElementById("total_price");
  totalPrice.innerHTML = finalTotalSum;
  return finalTotalSum.toFixed(2);
}

let clearTbody = () => {
  let tBody = document.getElementById("cart_list");
  while (tBody.lastElementChild) {
    tBody.removeChild(tBody.lastElementChild);
  }
};

// ** Nivell II **

// Exercise 7
function addToCart(id) {
  // Refactor previous code in order to simplify it
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array
}

function open_modal() {
  console.log("Open Modal");
  printCart();
}
