const params = new URLSearchParams(window.location.search);
const jacketId = params.get("id");

async function fetchProduct() {
  try {
    const response = await fetch(
      `https://v2.api.noroff.dev/rainy-days/${jacketId}`,
    );
    if (!response.ok) throw new Error("There was a failed network response");
    const data = await response.json();
    return data.data;
  } catch (error) {
    const container = document.querySelector("main");
    container.innerHTML = "";

    const errorWrapper = document.createElement("div");
    errorWrapper.classList.add("error");

    const message = document.createElement("p");
    message.textContent = "Sorry, we couldn't load this product right now.";

    const retryBtn = document.createElement("button");
    retryBtn.textContent = "Try Again";
    retryBtn.addEventListener("click", () => location.reload());

    errorWrapper.appendChild(message);
    errorWrapper.appendChild(retryBtn);
    container.appendChild(errorWrapper);
  }
}

function displayProduct(product) {
  const content = document.querySelector("main");
  content.innerHTML = "";

  const productimage = document.createElement("img");
  productimage.src = product.image.url;
  productimage.alt = product.image.alt;
  productimage.classList.add("productimage");
  content.appendChild(productimage);

  const container = document.createElement("div");
  container.id = "overview";
  content.appendChild(container);

  const name = document.createElement("h1");
  name.textContent = `${product.title}`;
  container.appendChild(name);

  const gender = document.createElement("h2");
  gender.textContent = `${product.gender}`;
  gender.classList.add("category");
  container.appendChild(gender);

  const price = document.createElement("h2");
  price.textContent = `${product.price}` + "kr";
  price.classList.add("price");
  container.appendChild(price);

  const description = document.createElement("p");
  description.textContent = `${product.description}`;
  description.classList.add("description");
  container.appendChild(description);

  const asideDiv = document.createElement("div");
  asideDiv.classList.add("characteristics");

  const aside = document.createElement("aside");
  asideDiv.appendChild(aside);

  const listTitle = document.createElement("h2");
  listTitle.textContent = "Characteristics:";

  const ul = document.createElement("ul");
  const li1 = document.createElement("li");
  li1.textContent = `${product.baseColor}`;
  const li2 = document.createElement("li");
  li2.textContent = `${product.gender}`;

  container.appendChild(asideDiv);
  aside.appendChild(listTitle);
  aside.appendChild(ul);
  ul.appendChild(li1);
  ul.appendChild(li2);

  const inputSection = document.createElement("div");
  inputSection.classList.add("input-section");
  content.appendChild(inputSection);
  const form = document.createElement("form");
  inputSection.appendChild(form);

  form.innerHTML = `<fieldset>
            <label>Size</label>
            <select id="sizeSelect">
                <option value="" selected></option>
            </select>
            <div class="error"></div>
        </fieldset>
        <fieldset>
            <label>Quantity</label>
            <select id="quantitySelect">
                <option value="0" selected></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
            </select>
            <div class="error"></div>
        </fieldset>`;

  const sizeSelect = document.getElementById("sizeSelect");
  const quantitySelect = document.getElementById("quantitySelect");

  const sizes = product.sizes;

  sizes.forEach((size) => {
    const option = document.createElement("option");
    option.value = size;
    option.textContent = size;
    sizeSelect.appendChild(option);
  });

  const cartbutton = document.createElement("button");
  cartbutton.type = "button";
  cartbutton.textContent = "Add to cart";
  cartbutton.classList.add("cartbutton");
  inputSection.appendChild(cartbutton);

  let addedToCart = false;

  cartbutton.addEventListener("click", function () {
    const size = sizeSelect.value;
    const quantity = quantitySelect.value;
    const item = {
      id: jacketId,
      imageUrl: product.image.url,
      imageAlt: product.image.alt,
      name: product.title,
      price: `${product.price}`,
      size: size,
      quantity: parseInt(quantity),
    };

    if (size === "" || quantity === "0") {
      const errorWrapper = document.querySelector(".error");
      errorWrapper.innerHTML = "Please select size and quantity.";
      return;
    }

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingItem = cart.find(
      (cartItem) => cartItem.id === item.id && cartItem.size === item.size,
    );

    if (existingItem) {
      existingItem.quantity += parseInt(quantity);
    } else {
      cart.push(item);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    if (!addedToCart) {
      cartbutton.textContent = "Go to cart";
      addedToCart = true;
      const confirm = document.createElement("p");
      confirm.textContent = "Added to cart!";
      cartbutton.before(confirm);
    } else {
      window.location.href = `store/checkout/`;
    }
  });
}

async function init() {
  const product = await fetchProduct();
  if (product) displayProduct(product);
}

init();
