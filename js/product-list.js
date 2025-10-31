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
  container.innerHTML = "";
  jackets.forEach((jacket) => {
    console.log(jacket);
    const link = document.createElement("a");
    link.href = `product/index.html?id=${jacket.id}`;
    link.classList.add("jacket-link");

    const nameDiv = document.createElement("div");
    nameDiv.textContent = jacket.title;
    nameDiv.classList.add("name")
    container.appendChild(nameDiv);

    const priceDiv = document.createElement("div");
    priceDiv.textContent = jacket.price + "kr";
    priceDiv.classList.add("price")
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

async function init() {
  const jackets = await fetchJackets();
  if (jackets) displayJackets(jackets);
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

