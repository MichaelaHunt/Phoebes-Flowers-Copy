const itemsLabel = document.querySelector("#items");
const totalLabel = document.querySelector("#cart-total-right");
const contents = document.querySelector("#cart-main");

function updateCart() {
    //grab from localStorage
    let totalItems = parseInt(localStorage.getItem('totalItems')) || 0;
    let runningTotal = parseFloat(localStorage.getItem('runningTotal')) || 0.0;
    let cartContents = JSON.parse(localStorage.getItem('cartContents')) || [];
    //update the items label if not zero
    if (totalItems > 0) {
        itemsLabel.textContent = totalItems + " items";
    }
    //update the total label
    if (runningTotal > 0) {
        totalLabel.textContent = "$" + runningTotal.toFixed(2);
    }
    //update the grid.
    if (cartContents.length > 0) {
        assembleCartContents(cartContents);
    }
}

function assembleCartContents(cartContents) {
    //first, remove the elements for empty case
    while (contents.firstChild) {
        contents.removeChild(contents.firstChild);
        contents.style.padding = 0;
    }
    
    //next, loop thru each contents object and create a row for each
    for (purchase of cartContents) {
        //create the overarching element
        console.log("assemble cart entered loop");
        const row = document.createElement('div');
        row.className = "rowStyle";

        const container = document.createElement('div');
        container.className = "containerStyle";

        const rowTitle = document.createElement('h2');
        rowTitle.className = "rowTitleStyle";
        rowTitle.textContent = purchase.item.name;

        const rowQuantity = document.createElement('h3');
        rowQuantity.className = "rowQuantityStyle";
        rowQuantity.textContent = "Quantity: " + purchase.quantity;

        const rowCost = document.createElement('h2');
        rowCost.className = "rowCostStyle";
        rowCost.textContent = "$" + (purchase.item.price * purchase.quantity).toFixed(2);

        container.appendChild(rowTitle);
        container.appendChild(rowQuantity);
        row.appendChild(container);
        row.appendChild(rowCost);
        contents.appendChild(row);
    }
}