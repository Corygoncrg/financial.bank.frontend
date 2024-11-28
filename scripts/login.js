const loginURL = 'http://localhost:8082';
const loginEndpoint = 'login';

async function login() {
    const url = `${loginURL}/${loginEndpoint}`

    let user = document.getElementById("user").value;
    let password= document.getElementById("password").value;

    let loginInput = {
        user: user,
        password: password
    };

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(loginInput)};

    try {
        const response = await fetch(url, options);
        if (response.ok) {
            const json = await response.json();

            localStorage.setItem('token', json.token);

            window.location.href="/html/users.html";

        } else {
            console.log("Login failed with status:", response.status);
        }
    } catch (error) {
        console.error("Error trying to log-in:", error);
    }
}