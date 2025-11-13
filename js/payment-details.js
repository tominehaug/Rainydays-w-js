const cart = JSON.parse(localStorage.getItem("cart")) || [];

console.log(cart);

const orderSummary = document.getElementById("summary");
orderSummary.innerHTML = "";

function displayItems(items) {    
    const asideHeading = document.createElement("h2");
    asideHeading.textContent = "Order summary";
    orderSummary.appendChild(asideHeading);

    items.forEach((item) => {
        const image = document.createElement("img");
        image.src = item.imageUrl;
        image.alt = item.imageAlt;
        orderSummary.appendChild(image);

        const name = document.createElement("p");
        name.textContent = item.name;
        name.classList.add("product");
        orderSummary.appendChild(name);

        const size = document.createElement("p");
        size.textContent = "Size: " + item.size;
        orderSummary.appendChild(size);

        const quantity = document.createElement("p");
        quantity.textContent = "Quantity: " + item.quantity;
        orderSummary.appendChild(quantity);

        const price = document.createElement("p");
        price.textContent = "Price: " + item.price + "kr";
        orderSummary.appendChild(price);
    });

}

function calculateSubtotal(){
        let subtotal = 0;
    cart.forEach(item => {
        subtotal += Number(item.price) * Number(item.quantity);
    })

    const subtotalFixed = subtotal.toFixed(2);

    const subtotalDisplay = document.createElement("p");
    subtotalDisplay.classList.add("subtotal");
    subtotalDisplay.textContent = "SUBTOTAL: " + subtotalFixed + "kr";
    orderSummary.appendChild(subtotalDisplay);
}

displayItems(cart);
calculateSubtotal();


const form = document.getElementById("details-form");

form.addEventListener('sumbit', function (event){
    event.preventDefault();

    const nameFormInput = document.getElementById("name");
    const phoneInput = document.getElementById("phone");
    const emailInput = document.getElementById("email");
    const streetnameInput = document.getElementById("streetname");
    const streetnumberInput =document.getElementById("streetnumber");
    const cityInput = document.getElementById("city");
    const zipcodeInput = document.getElementById("zipcode");
    const cardnumberInput = document.getElementById("card-number");
    const expirationInput = document.getElementById("date");
    const cvcInput = document.getElementById("cvc");

    const nameError = document.getElementById("name-error");
    const phoneError = document.getElementById("phone-error");
    const emailError = document.getElementById("email-error");
    const streetnameError = document.getElementById("streetname-error");
    const streetnumberError = document.getElementById("streetnumber-error");
    const cityError = document.getElementById("city-error");
    const zipcodeError = document.getElementById("zipcode-error");
    const cardnumberError = document.getElementById("card-number-error");
    const expirationError = document.getElementById("date-error");
    const cvcError = document.getElementById("cvc-error");

    nameError.textContent='';
    phoneError.textContent='';
    emailError.textContent='';
    streetnameError.textContent='';
    streetnumberError.textContent='';
    cityError.textContent='';
    zipcodeError.textContent='';
    cardnumberError.textContent='';
    expirationError.textContent='';
    cvcError.textContent='';

    const nameForm = nameFormInput.value.trim();
    const phone = phoneInput.value.trim();
    const email = emailInput.value.trim();
    const streetname = streetnameInput.value.trim();
    const streetnumber = streetnumberInput.value.trim();
    const city = cityInput.value.trim();
    const zipcode = zipcodeInput.value.trim();
    const cardnumber = cardnumberInput.value.trim();
    const expiration = expirationInput.value.trim();
    const cvc = cvcInput.value.trim();

    let isValid = true;

    if (nameForm ===''){
        nameFormError.textContent = "Please fill out this required field."
        isValid = false;
    }
    if (streetname === ''){
        streetnameError.textContent = "Please fill out this required field.";
        isValid = false;
    }
    if (streetnumber === ''){
        streetnumberError.textContent = "Please fill out this required field.";
        isValid=false;
    }
    if (city === ''){
        cityError.textContent = "Please fill out this required field.";
        isValid = false;
    }
    if (isNaN(zipcode) || (zipcode === '') ){
        zipcodeError.textContent = "Please enter valid information.";
        isValid = false;
    }
    if (isNaN(cardnumber) || (cardnumber === '') || (cardnumber.length !== 16)){
        cardnumberError.textContent = "Please enter a valid card number.";
        isValid = false;
    }
    if (expiration === '' || ){
        expirationError.textContent="Please enter valid information."
    }
    if ((cvc === '') || isNaN(cvc) || (cvc.length !== 3)){
        cvcError.textContent = "Please enter valid info."
        isValid = false;
    }
    
    if (phone.checkValidity()){
    }else{
        phoneError.textContent = "Please enter valid phone number."
        isValid = false;
    }
    if (email.checkValidity()){
    }else{
        emailError.textContent = "Please enter valid email address."
        isValid = false;
    }

    if (isValid){
        console.log('Form is valid. Submitting data...');
        console.log({
            name: nameForm,
            phoneNumber: phone,
            email: email,
            streetname: streetname,
            streetnumber: streetnumber,
            city: city,
            zipcode: zipcode,
            cardnumber: cardnumber,
            expirationDate: expiration,
            cvc: cvc,
        });
    }
})


