const baseURL = 'http://localhost:8081';
const endpoint = '/users'

async function login() {
    const url = `${baseURL}${endpoint}/login`

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

function logout() {
    localStorage.removeItem('token');
}

async function deleteUser(id){
    const token = localStorage.getItem('token');

    console.log(`${baseURL}${endpoint}/current-user`)
    const currentUser = await fetch(`${baseURL}${endpoint}/current-user`, {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });
    console.log(currentUser);

    const currentUserData = await currentUser.json();

    if (currentUserData.id === id) {
        alert("You cannot delete your own account!");
        return;
    }

    const options = {
        method: "DELETE",
        headers: {
            'Authorization': `Bearer ${token}`, // Include token in the header
            'Content-Type': 'application/json'
        }
    };
    const url = `${baseURL}${endpoint}/${id}`;
    console.log(`${url}/${id}`)
    const response = await fetch(url, options);
    console.log(response.status);
}

async function updateUser(id){
    const token = localStorage.getItem('token');

    const url = `${baseURL}${endpoint}`;
    let updatedName = document.getElementById("update__name").value;
    let updatedEmail = document.getElementById("update__email").value;
    let updatedStatus = document.getElementById("current__status").innerHTML;

    let updatedUserData = {
        id: id
    };

    if(updatedName !== '') {
        updatedUserData.name = updatedName;
    }
    if (updatedEmail !== '') {
        updatedUserData.email = updatedEmail;
    }

    if(document.querySelector("input[type = radio]:checked") != null) {
        updatedStatus = document.querySelector("input[type = radio]:checked").value;
        updatedUserData.status = updatedStatus;
    }

    const options = {
        method: "PUT",
        headers: {
            'Authorization': `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedUserData)};

            try {
                const response = await fetch(url, options);
                if (response.ok) {
                    const json = await response.text();
                    console.log("User updated:", json);
                    document.getElementById('div__container').innerHTML = '';
                } else {
                    console.log("Update failed with status:", response.status);
                }
            } catch (error) {
                console.error("Error updating user:", error);
            }
}