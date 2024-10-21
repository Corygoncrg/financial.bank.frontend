
async function showMenu(id, name, email, status) {

    fetch('editUser.html')
      .then(response => response.text())
        .then(data => {
            document.getElementById("div__container").innerHTML = data;

            document.getElementById("currentName").innerHTML = name;
            document.getElementById("currentEmail").innerHTML = email;
            document.getElementById("currentStatus").innerHTML = status;



            document.getElementById("update").setAttribute('onclick', `putUser(${id})`);
                }
            )  
             .catch(error => console.error('Error loading edit form:', error));
            ; 
}