import { navbarHtml, loginHtml } from "./config.js";



document.addEventListener("DOMContentLoaded", function () {
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
    const navbarContainer = document.getElementById("navbar__container");
    if (navbarContainer) {
        navbarContainer.innerHTML = `
            <div class="navbar__div">
                <a class="navbar__link" href="import.html">Import</a>
            </div>
            <div class="navbar__div">
                <a class="navbar__link" href="analysis.html">Analysis</a>
            </div>
            <div class="navbar__div">
                <a class="navbar__link" href="users.html">User</a>
            </div>
            <div class="navbar__div">
                <a class="navbar__link right" href="login.html">Login</a>
            </div>
            <div class="navbar__div">
                <a class="navbar__link" href="signup.html">Sign-up</a>
            </div>
            <div class="navbar__div">
                <a href="javascript:void(0)" id="logout">Log-out</a>
            </div>
        `;

        // Dispatch a custom event to signal the navbar is ready
        document.dispatchEvent(new CustomEvent("navbarLoaded"));
    }
});

document.addEventListener("navbarLoaded", () => {
    const logoutButton = document.getElementById("logout");

    logoutButton.addEventListener("click", logout);
});

function logout() {
    localStorage.removeItem("token");
    window.location.href = loginHtml;
}
