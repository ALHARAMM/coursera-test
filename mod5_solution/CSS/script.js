// Define an array of possible category short_names
var categories = ["Chicken", "Beef", "Sushi", /* Add more categories as needed */];

// Generate a random index to select a category from the array
var randomIndex = Math.floor(Math.random() * categories.length);

// Get the randomly selected category short_name
var randomCategoryShortName = categories[randomIndex];

// Function to load menu items with the random category short_name
function loadRandomMenuItems() {
    $dc.loadMenuItems(randomCategoryShortName);
}

// Update the onclick event to call the loadRandomMenuItems function
document.getElementById("#").onclick = loadRandomMenuItems;
