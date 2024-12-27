import { baseURL, headers } from "./config.js";
import showMenu from "./userEdit.js";
import { deleteUser } from "./HttpRequest.js";
const endpoint = "/users";
const url = `${baseURL}${endpoint}`;

    
    fetch(url, {
        method: "GET",
        headers

    })
    .then(async (response) => {
        if (response.status === 401) {
            // Redirect to login if token is invalid or expired
            window.location.href = "login.html";
        }
        if (!response.ok) {
            // Parse error response
            const errorData = await response.json();
            
            throw new Error(`Error fetching users: ${errorData.error}`);
          }          
        return response.json();
    })
    
        .then(users => {
            const list = document.querySelector(".list__div ul");
            list.innerHTML = "";


            users.forEach(user => {
                const listItem = document.createElement("li");
                listItem.classList.add("even__menu");

                const id = document.createElement("p");
                id.textContent = `${(user.id).toLocaleString()}`;
                
                const name = document.createElement("p");
                name.textContent = `${(user.name).toLocaleString()}`

                const email = document.createElement("p");
                email.textContent = `${(user.email).toLocaleString()}`;

                const editButton = document.createElement("button");
                editButton.textContent = "Edit";
                editButton.classList.add("user__button");
                editButton.addEventListener("click", async () => {
                    await showMenu(user.id, user.name, user.email, user.status)
                });

                const deleteButton = document.createElement("button");
                deleteButton.textContent = "Delete";
                deleteButton.classList.add("user__button" ,"red");
                deleteButton.addEventListener("click", async () => {
                    await deleteUser((user.id));
                })
                

                const div = document.createElement("div");
                div.classList.add("button__div");
                div.appendChild(editButton);
                div.appendChild(deleteButton);

                listItem.appendChild(id);
                listItem.appendChild(name)
                listItem.appendChild(email);
                listItem.appendChild(div);
                list.appendChild(listItem);
            });
        })
        .catch(error => console.error("Error fetching users:", error));

 

