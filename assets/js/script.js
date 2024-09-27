//all jquery must be in these curly braces!
$(function () {
    $("#cartModalDiv").load("cart.html");
    $("#couponModalDiv").load("coupon.html");

    function showCouponUponLoad() {
        const couponInterval = setInterval(function () {
            $("#couponModalDiv").modal('show');
            clearInterval(couponInterval);
        }, 2500);
    }
    showCouponUponLoad();
});

class item {
    constructor (name, price) {
        this.name = name,
        this.price = price
    }
}

const itemsTable = [
    new item("Pastel Beauty", 40.00),
    new item("Pale Beach", 25.00),
    new item("Multi-size Roses", 40.00),
    new item("Chocolates", 18.00),
    new item("Teddy Bear", 15.00),
    new item("Chocolate Strawberries", 10.00),
    new item("Custom Card", 1.00),
    new item("Flower Food", 4.00),
    new item("Vase", 50.00)
];

let cartContents = [];
let runningTotal = 0.0;
let totalItems = 0;
const addButton = document.querySelector(".imgbutton");


function addItemToCart(index) {
    //grab the stuff in local storage
    totalItems = parseInt(localStorage.getItem('totalItems')) || 0;
    runningTotal = parseFloat(localStorage.getItem('runningTotal')) || 0.0;
    cartContents = JSON.parse(localStorage.getItem('cartContents')) || [];

    //ask for quantity thru prompt
    const quant = parseInt(prompt("How many would you like to purchase?"));

    //add to cart
    totalItems += quant;
    runningTotal = runningTotal + (itemsTable[index].price * quant);
    const purchase = {
        item: itemsTable[index],
        quantity: quant
    };

    cartContents.push(purchase);
    //add to local storage
    localStorage.setItem('cartContents', JSON.stringify(cartContents));
    localStorage.setItem('totalItems', totalItems);
    localStorage.setItem('runningTotal', runningTotal);
}

function showCartModal() {
    $("#cartModalDiv").modal('show');
    updateCart();
}