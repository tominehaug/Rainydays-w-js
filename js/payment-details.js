const cart = JSON.parse(localStorage.getItem("cart")) || [];

console.log(cart);

const orderSummary = document.getElementById("summary");
orderSummary.innerHTML = "";

function displayItems(items) {    
    const asideHeading = document.createElement("h2");
    asideHeading.textContent = "Order summary";
    orderSummary.appendChild(asideHeading);

    items.forEach((item) => {
        const image = document.createElement("img");
        image.src = item.url;
        image.alt = item.alt;
        orderSummary.appendChild(image);

        const name = document.createElement("p");
        name.textContent = item.name;
        name.classList.add("product");
        orderSummary.appendChild(name);

        const size = document.createElement("p");
        size.textContent = "Size: " + item.size;
        orderSummary.appendChild(size);

        const quantity = document.createElement("p");
        quantity.textContent = "Quantity: " + item.quantity;
        orderSummary.appendChild(quantity);

        const price = document.createElement("p");
        price.textContent = "Price: " + item.price + "kr";
        orderSummary.appendChild(price);
    });

}

function calculateSubtotal(){
        let subtotal = 0;
    cart.forEach(item => {
        subtotal += item.price * item.quantity;
    })

    const subtotalDisplay = document.createElement("p");
    subtotalDisplay.classList.add("subtotal");
    subtotalDisplay.textContent = "SUBTOTAL: " + subtotal + "kr";
    orderSummary.appendChild(subtotalDisplay);
}

displayItems(cart);
calculateSubtotal();
