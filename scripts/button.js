
const baseURL = 'http://localhost:8081';
const endpoint = '/users'

async function showMenu(){
    alert("im here")
}

async function deleteUser(){
    id = 2;
    const options = {
        
        method: "DELETE"
    }

    console.log(`${baseURL}${endpoint}/${id}`)
    // const response = await fetch(`${baseURL}${endpoint}${id}`, options);
}

// async function deleteUser(){
//     const options = {
//         method: "GET"
//     }


//     const response = await fetch(`${baseURL}${endpoint}`);
//     const json = await response.json();
//     console.log(json);

// }

async function updateUser(){
const url = `${baseURL}${endpoint}`;
    id = parseInt(2);
    console.log(id)
    const options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(
            {
                id: 2,
                name: "new name",
                email: "mynewemail@email.com",
                status: "ACTIVE"
            })};

            try {
                const response = await fetch(url, options);
                if (response.ok) {
                    const json = await response.text();
                    console.log("User updated:", json);
                } else {
                    console.log("Update failed with status:", response.status);
                }
            } catch (error) {
                console.error("Error updating user:", error);
            }
}