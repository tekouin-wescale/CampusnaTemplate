// Function to include the footer
function includeFooter() {
    // Create a new XMLHttpRequest object
    var xhttp = new XMLHttpRequest();
    // Define the file to be loaded
    xhttp.open("GET", "/footer.html", true);
    // Define what to do when the request is complete
    xhttp.onreadystatechange = function() {
        // Check if the request is completed and successful
        if (this.readyState == 4 && this.status == 200) {
            // Insert the HTML content into the footer-container element
            document.getElementById("footer-container").innerHTML = this.responseText;
        }
    };
    // Send the request
    xhttp.send();
}

// Call the function to include the footer
includeFooter();