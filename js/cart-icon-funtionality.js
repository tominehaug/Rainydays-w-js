let cart = JSON.parse(localStorage.getItem("cart")) || [];

const url = window.location.href;

let cartIcon = document.querySelector(".cartIcon");
cartIcon.innerHTML = '';

const iconImg = document.createElement("img");
iconImg.classList.add("cart");
cartIcon.appendChild(iconImg);

if ((cart.length === 0) && !url.includes("checkout")){
    iconImg.src = "/assets/shopping-cart-icon.png";
}
if ((cart.length > 0) && !url.includes("checkout")){
    iconImg.src = "/assets/shopping-cart-icon5.png"
}
if ((cart.length === 0) && url.includes("checkout")){
    iconImg.src = "../../assets/shopping-cart-icon-4.png";
}
if ((cart.length > 0) && url.includes("checkout")){
    iconImg.src = "../../assets/shopping-cart-icon6.png";
}