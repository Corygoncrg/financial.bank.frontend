import { baseURL } from "./config.js";
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
                    document.getElementById("div__container").innerHTML = "";
                } else {
                    console.log("Failed creating user with status: ", response.status);
                }
            } catch (error) {
                console.error("Error creating user: ", error);
            }
    
}