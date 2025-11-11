const cart = JSON.parse(localStorage.getItem("cart")) || [];

console.log(cart);

const itemList = document.getElementById("item-list");
itemList.innerHTML="";

function updateSubtotal(){
    let subtotal = 0;
    cart.forEach(item => {
        subtotal += item.price * item.quantity;
    })

    const subtotalDisplay = document.getElementById("subtotal");
    subtotalDisplay.textContent = "SUBTOTAL: " + subtotal + "kr";
}

updateSubtotal();

function displayItems(items) {
    itemList.innerHTML = "";
    
    items.forEach((item) => {
        const itemContainer = document.createElement("div");
        itemContainer.classList.add("item-container");
        itemList.appendChild(itemContainer);

        const image = document.createElement("img");
        image.src = item.imageUrl;
        image.alt = item.imageAlt;
        itemContainer.appendChild(image);

        const infoDiv = document.createElement("div");
        infoDiv.classList.add("info");
        itemContainer.appendChild(infoDiv);
    
        const name = document.createElement("h2");
        name.textContent = item.name;
        infoDiv.appendChild(name);
        
        const size =document.createElement("p");
        size.textContent = "Size: " + item.size;
        infoDiv.appendChild(size);

        const quantity = document.createElement("p");
        quantity.textContent = "Quantity: " + item.quantity;
        infoDiv.appendChild(quantity);

        const price = document.createElement("p");
        price.textContent = "Price: " + item.price + "kr";
        infoDiv.appendChild(price);
        
        const deleteButton = document.createElement("button");
        deleteButton.id = "delete-button";
        deleteButton.textContent = "Delete";
        infoDiv.appendChild(deleteButton);
    })
        
}

    
if (cart.length === 0) {
    itemList.innerHTML = "<p>Your cart is empty.</p>";
}else{
    displayItems(cart);
}
