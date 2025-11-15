let cartContent = JSON.parse(localStorage.getItem("cart")) || [];

const url = window.location.href;

let cartIcon = document.querySelector(".cartIcon");
cartIcon.innerHTML = '';

const iconImg = document.createElement("img");
iconImg.classList.add("cart");
cartIcon.appendChild(iconImg);

if ((cartContent.length === 0) && !url.includes('checkout')){
    iconImg.src = "/assets/shopping-cart-icon.png";
}
else if ((cartContent.length > 0) && !url.includes('checkout')){
    iconImg.src = "/assets/shopping-cart-icon5.png"
}
else if ((cartContent.length === 0) && url.includes('checkout')){
    iconImg.src = "../../assets/shopping-cart-icon-4.png";
}
else if ((cartContent.length > 0) && url.includes('checkout')){
    iconImg.src = "../../assets/shopping-cart-icon6.png";
}