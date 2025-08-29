/***********************
 * Part 1: Variables & Conditionals
 ***********************/
document.getElementById("checkAgeBtn").addEventListener("click", function () {
    let age = parseInt(document.getElementById("ageInput").value);
    let message = "";

    if (isNaN(age)) {
        message = "Please enter a valid age.";
    } else if (age < 18) {
        message = "You are a minor.";
    } else if (age >= 18 && age < 60) {
        message = "You are an adult.";
    } else {
        message = "You are a senior citizen.";
    }

    document.getElementById("ageMessage").textContent = message;
});


/***********************
 * Part 2: Functions
 ***********************/
// Function to calculate total price with tax
function calculateTotal(price, taxRate) {
    return price + (price * (taxRate / 100));
}

// Function to toggle visibility of an element
function toggleContentVisibility(elementId) {
    let element = document.getElementById(elementId);
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

// Attach events for Part 2
document.getElementById("calcTotalBtn").addEventListener("click", function () {
    let price = parseFloat(document.getElementById("price").value);
    let tax = parseFloat(document.getElementById("taxRate").value);

    if (isNaN(price) || isNaN(tax)) {
        document.getElementById("totalResult").textContent = "Please enter valid numbers.";
        return;
    }

    let total = calculateTotal(price, tax);
    document.getElementById("totalResult").textContent = `Total with tax: $${total.toFixed(2)}`;
});

document.getElementById("toggleBtn").addEventListener("click", function () {
    toggleContentVisibility("toggleSection");
});


/***********************
 * Part 3: Loops
 ***********************/
document.getElementById("runLoopsBtn").addEventListener("click", function () {
    let output = "";

    // For loop: 1 to 10
    output += "For loop (1-10): ";
    for (let i = 1; i <= 10; i++) {
        output += i + " ";
    }

    // While loop: countdown from 5
    output += "<br>While loop (5-1): ";
    let count = 5;
    while (count > 0) {
        output += count + " ";
        count--;
    }

    // forEach loop: array of colors
    let colors = ["Red", "Green", "Blue"];
    output += "<br>forEach loop (colors): ";
    colors.forEach(color => {
        output += color + " ";
    });

    document.getElementById("loopOutput").innerHTML = output;
});


/***********************
 * Part 4: DOM Manipulation
 ***********************/
document.getElementById("changeTextBtn").addEventListener("click", function () {
    document.querySelector("h1").textContent = "Heading Changed!";
});

document.getElementById("toggleClassBtn").addEventListener("click", function () {
    document.querySelector("h1").classList.toggle("highlight");
});

document.getElementById("addItemBtn").addEventListener("click", function () {
    let list = document.getElementById("dynamicList");
    let newItem = document.createElement("li");
    newItem.textContent = "New Item " + (list.children.length + 1);
    list.appendChild(newItem);
});
