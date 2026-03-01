let allJackets = [];

async function fetchJackets() {
  try {
    const response = await fetch("https://v2.api.noroff.dev/rainy-days");
    if (!response.ok) throw new Error("There was a failed network response");
    const data = await response.json();
    return data.data;
  } catch (error) {
    const container = document.querySelector("#productlist");
    container.innerHTML = "";

    const errorWrapper = document.createElement("div");
    errorWrapper.classList.add("error-message");

    const message = document.createElement("p");
    message.textContent =
      "Sorry, we couldn't load our jacket collection right now.";

    const retryBtn = document.createElement("button");
    retryBtn.textContent = "Try Again";
    retryBtn.addEventListener("click", () => location.reload());

    errorWrapper.appendChild(message);
    errorWrapper.appendChild(retryBtn);
    container.appendChild(errorWrapper);
  }
}

function displayJackets(jackets) {
  const container = document.getElementById("productlist");
  container.innerHTML = "";
  jackets.forEach((jacket) => {
    const link = document.createElement("a");
    link.href = `store/product/index.html?id=${jacket.id}`;
    link.classList.add("jacket-link");

    const nameDiv = document.createElement("div");
    nameDiv.textContent = jacket.title;
    nameDiv.classList.add("name");
    container.appendChild(nameDiv);

    const priceDiv = document.createElement("div");
    priceDiv.textContent = jacket.price + "kr";
    priceDiv.classList.add("price");
    container.appendChild(priceDiv);

    const image = document.createElement("img");
    image.src = jacket.image.url;
    image.alt = jacket.image.alt;
    container.appendChild(image);

    link.appendChild(image);
    link.appendChild(nameDiv);
    link.appendChild(priceDiv);
    container.appendChild(link);
  });
}

function filterJackets() {
  const womenChecked = document.getElementById("womenCheckbox").checked;
  const menChecked = document.getElementById("menCheckbox").checked;

  let filtered = [];

  if (!womenChecked && !menChecked) {
    filtered = allJackets;
  } else {
    filtered = allJackets.filter((jacket) => {
      if (jacket.gender === "Female" && womenChecked) return true;
      if (jacket.gender === "Male" && menChecked) return true;
      return false;
    });
  }

  displayJackets(filtered);
}

document
  .getElementById("womenCheckbox")
  .addEventListener("change", filterJackets);
document
  .getElementById("menCheckbox")
  .addEventListener("change", filterJackets);

async function init() {
  allJackets = await fetchJackets();
  if (!allJackets) return;

  displayJackets(allJackets);
}

init();
