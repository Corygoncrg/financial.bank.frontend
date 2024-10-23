
async function showMenu(id, name, email, status) {

    fetch('editUser.html')
      .then(response => response.text())
        .then(data => {
            document.getElementById("div__container").innerHTML = data;

            document.getElementById("current__name").innerHTML = name;
            document.getElementById("current__email").innerHTML = email;
            document.getElementById("current__status").innerHTML = status;



            document.getElementById("update").setAttribute('onclick', `putUser(${id})`);
                }
            )  
             .catch(error => console.error('Error loading edit form:', error));
            ; 
}