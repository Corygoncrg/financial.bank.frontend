
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
    let updatedName = document.getElementById("update__name").value;
    let updatedEmail = document.getElementById("update__email").value;
    let updatedStatus = document.getElementById("current__status").innerHTML;

    let updatedUserData = {
        id: id
    };

    if(updatedName !== '') {
        updatedUserData.name = updatedName
    }
    if (updatedEmail !== '') {
        updatedUserData.email = updatedEmail;
    }

    if(document.querySelector("input[type = radio]:checked") != null) {
        updatedStatus = document.querySelector("input[type = radio]:checked").value;
        updatedUserData.status = updatedStatus;
    }


   
    console.log(updatedName);
    console.log(updatedEmail);
    console.log(updatedStatus);

    console.log(updatedUserData)

//     const options = {
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(updatedUserData)};

//             try {
//                 const response = await fetch(url, options);
//                 if (response.ok) {
//                     const json = await response.text();
//                     console.log("User updated:", json);
//                     document.getElementById('div__container').innerHTML = '';
//                 } else {
//                     console.log("Update failed with status:", response.status);
//                 }
//             } catch (error) {
//                 console.error("Error updating user:", error);
//             }
}