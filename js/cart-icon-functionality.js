let cartContent = JSON.parse(localStorage.getItem("cart")) || [];

const url = window.location.href;

let cartIcon = document.querySelector(".cart-icon");
cartIcon.innerHTML = "";

const iconImg = document.createElement("img");
iconImg.classList.add("cart");
cartIcon.appendChild(iconImg);

const icon = "./assets/shopping-cart-icon.png";
const icon4 = "./assets/shopping-cart-icon-4.png";
const icon5 = "./assets/shopping-cart-icon5.png";
const icon6 = "./assets/shopping-cart-icon6.png";

if (cartContent.length === 0 && !url.includes("checkout")) {
  iconImg.src = icon;
} else if (cartContent.length > 0 && !url.includes("checkout")) {
  iconImg.src = icon5;
} else if (cartContent.length === 0 && url.includes("checkout")) {
  iconImg.src = icon4;
} else if (cartContent.length > 0 && url.includes("checkout")) {
  iconImg.src = icon6;
}
