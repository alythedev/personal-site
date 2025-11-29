// i was actually struggling to get the dvd working with a checkbox so i used gemini and we got here after an hour of going back and forth

// Link to the elements
const toggle = document.getElementById('toggleDVD');

// Wait for the main animation script (dvd-animation.js) to load and expose the functions.
// If dvd-animation.js is loaded AFTER this script, you may need a small delay or a deferred setup.
// Assuming both scripts are loaded together in the HTML, this should work:

// Initial state: hide the DVD
if (window.dvd) {
    window.dvd.style.display = 'none';
}

// Add the change listener
toggle.addEventListener('change', () => {
    // Check if the functions from dvd-animation.js are available
    if (window.startDVD && window.stopDVD) {
        if (toggle.checked) {
            window.startDVD(); // Call the exposed start function
        } else {
            window.stopDVD();  // Call the exposed stop function
        }
    } else {
        console.error("Core DVD animation functions (startDVD/stopDVD) not yet loaded.");
    }
});