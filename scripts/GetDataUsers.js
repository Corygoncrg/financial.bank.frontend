
document.addEventListener('DOMContentLoaded', () => {
    const token = localStorage.getItem('token');

    fetch(`${baseURL}${endpoint}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`, // Include token in the header
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (response.status === 401) {
            // Redirect to login if token is invalid or expired
            window.location.href = "html/login.html";
        }
        return response.json();
    })
    
        .then(users => {
            const list = document.querySelector('.list__div ul');
            list.innerHTML = '';


            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.classList.add('even__menu');

                const id = document.createElement('p');
                id.textContent = `${(user.id).toLocaleString()}`;
                
                const name = document.createElement('p');
                name.textContent = `${(user.name).toLocaleString()}`

                const email = document.createElement('p');
                email.textContent = `${(user.email).toLocaleString()}`;

                const editButton = document.createElement('button');
                editButton.textContent = 'Edit';
                editButton.classList.add('user__button');
                editButton.addEventListener('click', async () => {
                    await showMenu(user.id, user.name, user.email, user.status)
                });

                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.classList.add('user__button' ,'red');
                deleteButton.addEventListener('click', async () => {
                    await deleteUser((user.id));
                })
                

                const div = document.createElement('div');
                div.classList.add('button__div');
                div.appendChild(editButton);
                div.appendChild(deleteButton);
                //Use Ajax to the functions to edit and delete users from the database

                listItem.appendChild(id);
                listItem.appendChild(name)
                listItem.appendChild(email);
                listItem.appendChild(div);
                list.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching transactions:', error));
 });

