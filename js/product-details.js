const params = new URLSearchParams(window.location.search);
const jacketId = params.get("id");

console.log("Jacket ID from URL:", jacketId);

async function fetchProduct() {
  try {
    const response = await fetch(`https://v2.api.noroff.dev/rainy-days/${jacketId}`);
    if (!response.ok) throw new Error("There was a failed network response");
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Something went wrong" + error);
    alert("There was an error fetching the product!" + error);
  }
}

function displayProduct(product) {
    const content = document.querySelector('main');
    content.innerHTML = "";

    const productimage = document.createElement("img")
    productimage.src = product.image.url;
    productimage.alt = product.image.alt;
    productimage.classList.add = ("productimage")
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
    price.textContent = `${product.price}`+ "kr";
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

    const form = document.createElement("form");
    container.appendChild(form);

    form.innerHTML = 
        `<fieldset>
            <label>Size</label>
            <select>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
            </select>
        </fieldset>
        <fieldset>
            <label>Quantity</label>
            <select>
                <option value="one">1</option>
                <option value="two">2</option>
                <option value="three">3</option>
                <option value="four">4</option>
                <option value="five">5</option>
                <option value="six">6</option>
            </select>
        </fieldset>`;

    const cartbutton = document.createElement("div");
    cartbutton.textContent = "Add to cart";
    cartbutton.classList.add("cartbutton");
    container.appendChild(cartbutton);

    let addedToCart = false;

    cartbutton.addEventListener('click', function (event) {
        if (!addedToCart) {
            cartbutton.textContent = "Go to cart >";
            addedToCart = true;
        }

        else{
            window.location.href = "../checkout/index.html";
        }
    });

}

async function init() {
  const product = await fetchProduct();
  if (product) displayProduct(product);
}

init();