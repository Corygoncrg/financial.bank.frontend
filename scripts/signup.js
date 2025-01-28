import { baseURL, loginHtml } from "./config.js";
const endpoint = "/users/signup"

const form = document.querySelector("form");
form.addEventListener("submit", handleUpload)

function handleUpload(event) {
    event.preventDefault();

    Signup();

}

async function Signup() {
    const url = `${baseURL}${endpoint}`;

    let signupName = document.getElementById("signup__username").value;
    let signupEmail = document.getElementById("signup__email").value;

    let signupData = {
        username: signupName,
        email: signupEmail
    };
    const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signupData)
        };

            try {
                const response = await fetch(url, options);
                if (response.ok) {
                      response.text().then(message => {
                        console.log("Message from server:", message);
                        alert("An email has been sent to your email address with the verification link.");
                        window.location.href = loginHtml;
                });

                } else {
                     response.text().then(message => {
                        console.log("Failed creating user with status:", response.status);
                        console.log("Error message from server:", message);
                        alert("Error: " + message);
                });
                }
            } catch (error) {
                console.error("Error creating user: ", error);
            }
    
}
