// Define the array of names
var names = ["John", "Jane", "Jim", "Bob", "Alice"];

// Loop over each name in the array
for (var i = 0; i < names.length; i++) {
    // Get the current name
    var name = names[i];
    
    // Check if the name starts with 'j' or 'J'
    if (name.charAt(0).toLowerCase() === 'j') {
        // Print 'Goodbye' for names starting with 'j' or 'J'
        console.log("Goodbye " + name);
    } else {
        // Print 'Hello' for names starting with any other letter
        console.log("Hello " + name);
    }
}
// library1.js
(function (window) {
    var helloSpeaker = {}; // Create an object to hold the functionality

    helloSpeaker.speak = function (name) {
        console.log("Hello " + name); // Print 'Hello' followed by the name
    };

    window.helloSpeaker = helloSpeaker; // Expose the helloSpeaker object to the global scope
})(window);

// library2.js
(function (window) {
    var byeSpeaker = {}; // Create an object to hold the functionality

    byeSpeaker.speak = function (name) {
        console.log("Goodbye " + name); // Print 'Goodbye' followed by the name
    };

    window.byeSpeaker = byeSpeaker; // Expose the byeSpeaker object to the global scope
})(window);
// main.js
// Assuming the libraries are already loaded

// Define the array of names
var names = ["John", "Jane", "Jim", "Bob", "Alice"];

// Loop over each name in the array
for (var i = 0; i < names.length; i++) {
    // Get the current name
    var name = names[i];
    
    // Check if the name starts with 'j' or 'J'
    if (name.charAt(0).toLowerCase() === 'j') {
        // Use the byeSpeaker from library2.js for names starting with 'j' or 'J'
        byeSpeaker.speak(name);
    } else {
        // Use the helloSpeaker from library1.js for names starting with any other letter
        helloSpeaker.speak(name);
    }
}
