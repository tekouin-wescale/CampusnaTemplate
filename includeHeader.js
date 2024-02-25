// Function to include the header
function includeHeader() {
    // Create a new XMLHttpRequest object
    var xhttp = new XMLHttpRequest();
    // Define the file to be loaded
    xhttp.open("GET", "header.html", true);
    // Define what to do when the request is complete
    xhttp.onreadystatechange = function() {
        // Check if the request is completed and successful
        if (this.readyState == 4 && this.status == 200) {
            // Insert the HTML content into the header-container element
            document.getElementById("header-container").innerHTML = this.responseText;
        }
    };
    // Send the request
    xhttp.send();
}

// Call the function to include the header
includeHeader();
