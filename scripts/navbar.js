import { navbarHtml, loginHtml } from "./config.js";

document.addEventListener("DOMContentLoaded", function () {
    // Fetch and load the navbar
    fetch(navbarHtml)
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("navbar__container").innerHTML = data;

            // Highlight the active page
            const currentPage = window.location.pathname.split("/").pop();
            const navbarLinks = document.querySelectorAll(".navbar__link");

            navbarLinks.forEach((link) => {
                if (link.getAttribute("href") === currentPage) {
                    link.style.fontWeight = "700";
                }
            });

            // Add logout event listener
            const logoutButton = document.getElementById("logout");
            if (logoutButton) {
                logoutButton.addEventListener("click", logout);
            } else {
                console.error("Logout button not found.");
            }
        })
        .catch((error) => console.error("Error loading navbar:", error));
});

function logout(event) {
    event.preventDefault();

    localStorage.removeItem("token");
    window.location.href = loginHtml;
}