import { baseURL, headers, token } from "./config.js";
const endpoint = "/users"

async function deleteUser(id){
    const payloadBase64 = token.split(".")[1];
    const payload = JSON.parse(atob(payloadBase64));
    const currentUser = await fetch(`${baseURL}${endpoint}/current-user`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: payload.sub
    });
    console.log(currentUser);

    const currentUserData = await currentUser.json();

    if (currentUserData.id === id) {
        alert("You cannot delete your own account!");
        return;
    }

    const options = {
        method: "DELETE",
        headers
    };
    const url = `${baseURL}${endpoint}/${id}`;
    console.log(`${url}/${id}`)
    const response = await fetch(url, options);
    console.log(response.status);
}

async function updateUser(id){

    const url = `${baseURL}${endpoint}`;
    let updatedName = document.getElementById("update__name").value;
    let updatedEmail = document.getElementById("update__email").value;
    let updatedStatus = document.getElementById("current__status").innerHTML;

    let updatedUserData = {
        id: id
    };

    if(updatedName !== "") {
        updatedUserData.name = updatedName;
    }
    if (updatedEmail !== "") {
        updatedUserData.email = updatedEmail;
    }

    if(document.querySelector("input[type = radio]:checked") != null) {
        updatedStatus = document.querySelector("input[type = radio]:checked").value;
        updatedUserData.status = updatedStatus;
    }

    const options = {
        method: "PUT",
        headers,
        body: JSON.stringify(updatedUserData)};

            try {
                const response = await fetch(url, options);
                if (response.ok) {
                    const json = await response.text();
                    console.log("User updated:", json);
                    document.getElementById("div__container").innerHTML = "";
                } else {
                    console.log("Update failed with status:", response.status);
                }
            } catch (error) {
                console.error("Error updating user:", error);
            }
}

export {deleteUser};
export {updateUser};