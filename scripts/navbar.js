import { navbarHtml, loginHtml } from "./config.js";

document.addEventListener("DOMContentLoaded", function () {
    if (!localStorage.getItem("token")) {
        // Redirect to login if token is missing
        return;
    }
    fetch(navbarHtml)
      .then(response => response.text())
        .then(data => {
            document.getElementById("navbar__container").innerHTML = data;
    // Get the current path
    const currentPage = window.location.pathname.split("/").pop();
    
    // Get all the navbar links
    const navbarLinks = document.querySelectorAll(".navbar__link");

    // Loop through the links and apply the font-weight to the active page
    navbarLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.style.fontWeight = "700";
        }
    });
})  
.catch(error => console.error("Error loading navbar:", error));
});

document.addEventListener("DOMContentLoaded", () => {
    const logoutButton = document.getElementById("logout");

    logoutButton.addEventListener("click", logout);
});

function logout() {
    localStorage.removeItem("token");
    window.location.href = loginHtml;
}
