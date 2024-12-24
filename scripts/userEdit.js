import { updateUser } from "./HttpRequest.js";


async function showMenu(id, name, email, status) {

    fetch("userEdit.html")
      .then(response => response.text())
        .then(data => {
            document.getElementById("div__container").innerHTML = data;

            document.getElementById("current__name").innerHTML = name;
            document.getElementById("current__email").innerHTML = email;
            document.getElementById("current__status").innerHTML = status;

            modal = document.getElementById("div__modal");

            modal.style.display = "block";


            document.getElementById("update").setAttribute("onclick", updateUser(id));
                }
            )  
             .catch(error => console.error("Error loading edit form:", error));
            ; 
            
}

var modal = document.getElementById("div__modal");

window.onclick = function(event) {
    // Check if the clicked target is the modal but NOT the form inside it
    if (event.target == modal && !event.target.closest(".edit__div")) {
        modal.style.display = "none";
    }
};

export default showMenu;