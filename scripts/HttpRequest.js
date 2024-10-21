
async function deleteUser(id){

    const options = {
        method: "DELETE",
        
    };
    url = `${baseURL}${endpoint}/${id}`;
    console.log(`${url}/${id}`)
    const response = await fetch(url, options);
    console.log(response.status);
}

async function putUser(id){
    const url = `${baseURL}${endpoint}`;
    const updatedName = document.getElementById("update__name").value;
    const updatedEmail = document.getElementById("update__email").value;
    const updatedStatus = document.getElementsByName("update__status");
    console.log(updatedStatus);


    console.log(id)
    const options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(
            {
                id: id,
                name: updatedName,
                email: updatedEmail,
                status: updatedStatus
            })};

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