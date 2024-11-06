const baseURL1 = 'http://localhost:8080';
document.addEventListener('DOMContentLoaded', () => {

    fetch(`${baseURL1}/transactions`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(transactions => {
            const list = document.querySelector('.list__div ul');
            list.innerHTML = '';


            transactions.forEach(transaction => {
                const listItem = document.createElement('li');
                listItem.classList.add('transaction__list');

                const transactionDate = document.createElement('p');
                transactionDate.textContent = `Transaction Date: ${new Date(transaction.transactionDate).toLocaleString()}`;
                
                const importDate = document.createElement('p');
                importDate.textContent = `Import Date: ${new Date(transaction.importDate).toLocaleString()}`;

                const name = document.createElement('p');
                name.textContent = `User: ${(transaction.idUser).toLocaleString()}`;
               
                const detailButton = document.createElement('button');
                detailButton.textContent = 'Details';
                detailButton.classList.add('user__button');
                detailButton.addEventListener('click', async () => {
                    await showMenu(user.id, user.name, user.email, user.status)
                });


                listItem.appendChild(transactionDate);
                listItem.appendChild(importDate);
                listItem.appendChild(name);
                listItem.appendChild(detailButton);
                list.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching transactions:', error));
});