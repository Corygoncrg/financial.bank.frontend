import { headerHtml } from "./config.js";

document.addEventListener("DOMContentLoaded", function () {
    fetch(headerHtml)
      .then(response => response.text())
        .then(data => {
            document.getElementById("header__container").innerHTML = data;
})  
.catch(error => console.error("Error loading navbar:", error));
}); 