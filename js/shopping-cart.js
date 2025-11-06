const cart = JSON.parse(localStorage.getItem("cart")) || [];

const itemList = document.getElementById("item-list");
itemList.innerHTML="";

function displayItems(items) {
    itemList.innerHTML = "";
    const itemContainer = document.createElement("div");
    itemList.appendChild(itemContainer);
    
    cart.forEach((item) => {
        const image = document.createElement("img");
        image.src = item.imageUrl;
        image.alt = item.imageAlt;
        itemContainer.appendChild(image);

        const name = document.createElement("h2");
        name.textContent = item.name;
        itemContainer.appendChild(name);

        const infoDiv = document.createElement("div");
        itemContainer.appendChild(infoDiv);
        
        const size =document.createElement("p");
        size.textContent = "Size: " + item.size;
        infoDiv.appendChild(size);

        const quantity = document.createElement("p");
        quantity.textContent = "Quantity: " + item.quantity;
        infoDiv.appendChild(quantity);

        const price = document.createElement("p");
        price.textContent = "Price: " + item.price + "kr";
        infoDiv.appendChild(price);
    });

}

if (cart.length === 0) {
    itemList.innerHTML = "<p>Your cart is empty.</p>";
}else{
    displayItems(items);
}
