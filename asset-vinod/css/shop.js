document.querySelectorAll('.question-wrap h6').forEach((question) => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;

        // Toggle the rotation and open/close state
        question.classList.toggle('rotate');
        if (answer.style.maxHeight) {
        answer.style.maxHeight = null; // Close
        answer.style.paddingBottom = '0';
        } else {
        answer.style.maxHeight = `${answer.scrollHeight}px`; // Open
        answer.style.paddingBottom = '40px';
        }
    });
    });



// Select Elements
const toggleButton = document.querySelector(".down"); // Default state: down
const dropdownMenu = document.querySelector(".drop-down");
const headerLoc = document.querySelector(".header-loc");

// Toggle Dropdown Visibility and Class
toggleButton.addEventListener("click", () => {
    if (dropdownMenu.style.display === "block") {
        dropdownMenu.style.display = "none"; // Hide dropdown
        toggleButton.classList.remove("up");
        toggleButton.classList.add("down"); // Reset class
    } else {
        dropdownMenu.style.display = "block"; // Show dropdown
        toggleButton.classList.remove("down");
        toggleButton.classList.add("up"); // Change class
    }
});

// Replace Text on List Click
dropdownMenu.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        toggleButton.textContent = event.target.textContent; // Replace text
        dropdownMenu.style.display = "none"; // Hide dropdown
        toggleButton.classList.remove("up");
        toggleButton.classList.add("down"); // Set class back to 'down'
    }
});

// Hide Dropdown on Outside Click
document.addEventListener("click", (event) => {
    if (!headerLoc.contains(event.target)) {
        dropdownMenu.style.display = "none";
        toggleButton.classList.remove("up");
        toggleButton.classList.add("down");
    }
});

function renderSearchBar(){
    document.querySelector(".search-bar-panel").style.display = "flex";
}

function hideSearchBar(){
    document.querySelector(".search-bar-panel").style.display = "none";
}

//hero section 

const slides = document.querySelectorAll(".slides img");
const dots = document.querySelectorAll(".dot");
let currentSlide = 0;

// Function to update slides and dots
function updateSlider() {
    // Hide all slides and remove active class
    slides.forEach((slide, index) => {
        slide.classList.toggle("active", index === currentSlide);
    });

    // Update dots
    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentSlide);
    });

    // Move to the next slide
    currentSlide = (currentSlide + 1) % slides.length;
}

// Auto-change slides every 7 seconds
setInterval(updateSlider, 7000);

// Dot click event
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        currentSlide = index;
        updateSlider();
    });
});

// Initialize the slider
updateSlider();

//product section here
// Get all the brand buttons and product cards
const brandButtons = document.querySelectorAll('.brand-iteam');
const productCards = document.querySelectorAll('.product-card');

// Function to determine the brand based on the product name
function getBrandFromProductName(productName) {
    // Check for specific keywords in product names
    if (productName.includes('Bisleri Vedica') || productName.includes('Vedica')) {
        return 'vedica';
    } else if (productName.includes('Bisleri Club Soda')) {
        return 'bisleri-soda';
    } else if (
        productName.includes('Bisleri Rev') ||
        productName.includes('Bisleri Spyci Jeera') ||
        productName.includes('Bisleri Limonata') ||
        productName.includes('Bisleri Pop')
    ) {
        return 'fizzy-drinks';
    } else if (productName.includes('Bisleri')) {
        return 'bisleri';
    }
    return 'all-products'; // Default case
}

// Function to show the products based on the selected brand
function filterProducts(brand) {
    productCards.forEach(card => {
        const productName = card.querySelector('.product-info h6').innerText;
        const productBrand = getBrandFromProductName(productName);

        // If 'All Products' is selected, show all products
        if (brand === 'all-products') {
            card.style.display = 'block';
        } else {
            // If the selected brand matches the product's brand, show it
            if (productBrand === brand) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        }
    });
}

// Add event listener to each brand button
brandButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const selectedBrand = e.target.getAttribute('data-brand');
        filterProducts(selectedBrand);
    });
});

// Initially, show all products
filterProducts('all-products');


//side buttons

let currentIndex = 0;
const cards = document.querySelectorAll('.article-card');
const totalCards = cards.length;
const visibleCards = 4;

function showCards(index) {
    cards.forEach((card, i) => {
        if (i >= index && i < index + visibleCards) {
            card.classList.remove('hide');
        } else {
            card.classList.add('hide');
        }
    });
}

document.querySelector('.prev-btn').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex -= visibleCards;
        showCards(currentIndex);
    }
});

document.querySelector('.next-btn').addEventListener('click', () => {
    if (currentIndex + visibleCards < totalCards) {
        currentIndex += visibleCards;
        showCards(currentIndex);
    }
});

// Initialize with the first set of cards
showCards(currentIndex);


//FAQs

// Add event listeners for each FAQ question
document.querySelectorAll('.faq-question').forEach((item) => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling; // The <p> element containing the answer
        answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
    });
});