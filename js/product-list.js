async function fetchJackets() {
  try {
    const response = await fetch("https://v2.api.noroff.dev/rainy-days");
    if (!response.ok) throw new Error("There was a failed network response");
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Something went wrong" + error);
    alert("There was an error fetching jackets!" + error);
  }
}

function displayJackets(jackets) {
  const container = document.getElementById("productlist");
  jackets.forEach((jacket) => {
    console.log(jacket);
    const nameDiv = document.createElement("div");
    nameDiv.textContent = jacket.title;
    container.appendChild(nameDiv);
  });
}

function displayImg(jackets) {
  const container = document.getElementById("productlist");
  jackets.forEach((jacket) => {
    const image = document.createElement("img");
    img.src = data.image.url;
    img.alt = data.image.alt;
    container.appendChild(img);
  });
}

function displayPrice(jackets) {
  const container = document.getElementById("productlist");
  jackets.forEach((jacket) => {
    const priceDiv = document.createElement("div");
    priceDiv.textContent = jacket.price;
    container.appendChild(priceDiv);
  });
}

async function init() {
  const jackets = await fetchJackets();
  if (jackets) displayJackets(jackets);
  if (jackets) displayImg(jackets);
  if (jackets) displayPrice(jackets);
}

init();




/*
function displayJackets(images) {
  const container = document.getElementById("jacketImg");
  jackets.forEach((images) => {
    console.log(images);
    const imgDiv = document.createElement("div");
    nameDiv.textContent = jacket.image;
    container.appendChild(imgDiv);
  });
}

async function loadImages() {
  try {
    const response = await fetch("https://v2.api.noroff.dev/rainy-days");
    if (!response.ok) throw new Error("There was a failed network response");
    const images = await response.json();

    const container = document.getElementById("jacketImg");

    images.forEach(image => {
      const img = document.createElement("img");
      img.src = data.image.url;
      img.alt = data.image.alt;
      jacketImg.appendChild(img);
    });
  } catch (error) {
    console.error("Error loading images:", error);
  }
}
*/

