let cartContent = JSON.parse(localStorage.getItem("cart")) || [];

const url = window.location.href;

let cartIcon = document.querySelector(".cartIcon");
cartIcon.innerHTML = '';

const iconImg = document.createElement("img");
iconImg.classList.add("cart");
cartIcon.appendChild(iconImg);

console.log("URL:", url);
console.log("Checkout in URL:", url.includes('checkout'));

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