let cart = JSON.parse(localStorage.getItem("cart")) || [];

const itemList = document.getElementById("item-list");
itemList.innerHTML="";

const continueBtn = document.querySelector(".continue");

if (cart.length === 0) {
    itemList.innerHTML = "<p>Your cart is empty.</p>";
    continueBtn.remove();
    emptyCart.remove();
}

function updateSubtotal(){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let subtotal = 0;
    cart.forEach(item => {
        subtotal += Number(item.price) * Number(item.quantity);
    })

    const subtotalFixed = subtotal.toFixed(2);

    const subtotalDisplay = document.getElementById("subtotal");
    subtotalDisplay.textContent = "SUBTOTAL: " + subtotalFixed + "kr";
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
        deleteButton.classList.add = "delete-button";
        deleteButton.textContent = "Delete";
        infoDiv.appendChild(deleteButton);
        deleteButton.addEventListener('click', function (event){
            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            const itemIndex = cart.findIndex(cartItem => 
                cartItem.id === item.id && cartItem.size === item.size
            );

            if (itemIndex !== -1){
                cart[itemIndex].quantity-=1;
                if (cart[itemIndex].quantity <= 0){
                    cart.splice(itemIndex, 1);
                }
            }

            localStorage.setItem("cart", JSON.stringify(cart));

            displayItems(cart);
            updateSubtotal();
        })
    })
}

const emptyCart = document.createElement("button");
emptyCart.id = "empty-cart";
emptyCart.textContent = "CLEAR CART";
itemList.after(emptyCart);
emptyCart.addEventListener('click', function(event){
    localStorage.removeItem("cart");
    itemList.innerHTML = "<p>Your cart is empty.</p>";
    continueBtn.remove();
    emptyCart.remove();
})
    
if (cart.length === 0) {
    itemList.innerHTML = "<p>Your cart is empty.</p>";
    continueBtn.remove();
    emptyCart.remove();
}else{
    displayItems(cart);
    updateSubtotal();
}