import { loginHtml } from "./config.js";

(function() {
    function isTokenExpired(token) {
        if (!token) return true;

        try {
            const payloadBase64 = token.split(".")[1];
            const payload = JSON.parse(atob(payloadBase64));
            
            const currentTime = Math.floor(Date.now() / 1000);
            
            if (payload.exp && payload.exp < currentTime) {
                return true;
            }
            return false; 
        } catch (error) {
            console.error("Error decoding the token:", error);
            return true;
        }
    }

    const token = localStorage.getItem("token");
    if (!token || isTokenExpired(token)) {
        localStorage.removeItem("token");
        window.location.href = loginHtml;
    } else {
        document.addEventListener("DOMContentLoaded", () => {
            const tokenInput = document.getElementById("token");
            if (tokenInput) {
                tokenInput.value = token;
            }
        });
    }
})();