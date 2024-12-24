(function() {
    // Function to check if the token is expired
    function isTokenExpired(token) {
        if (!token) return true;

        try {
            // Decode the payload of the token (it"s the second part of the JWT)
            const payloadBase64 = token.split(".")[1];
            const payload = JSON.parse(atob(payloadBase64));
            
            // Get the current time in seconds
            const currentTime = Math.floor(Date.now() / 1000);
            
            // Check if `exp` exists and is valid
            if (payload.exp && payload.exp < currentTime) {
                return true; // Token is expired
            }
            return false; // Token is valid
        } catch (error) {
            console.error("Error decoding the token:", error);
            return true; // Consider the token invalid if decoding fails
        }
    }

    // Check for the token in localStorage and handle accordingly
    const token = localStorage.getItem("token");
    if (!token || isTokenExpired(token)) {
        // Clear the token from localStorage and redirect if expired or missing
        localStorage.removeItem("token");
        window.location.href = "login.html";
    } else {
        // Populate the hidden input field with the token if the DOM contains it
        document.addEventListener("DOMContentLoaded", () => {
            const tokenInput = document.getElementById("token");
            if (tokenInput) {
                tokenInput.value = token;
            }
        });
    }
})();