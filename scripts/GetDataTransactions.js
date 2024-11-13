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
                console.log(transaction);
                const listItem = document.createElement('li');
                listItem.classList.add('transaction__list');

                const transactionDate = document.createElement('p');
                transactionDate.textContent = `Transaction Date: ${new Date(transaction.transactionDate).toLocaleString()}`;

                const rawImportDate = new Date(transaction.importDate);
                const formattedImportDate = formatDateToISOString(rawImportDate);
                const importDateText = document.createElement('p');
                importDateText.textContent = `Import Date: ${new Date(transaction.importDate).toLocaleString()}`;

                const name = document.createElement('p');
                name.textContent = `User: ${(transaction.idUser).toLocaleString()}`;

                const detailButton = document.createElement('button');
                detailButton.textContent = 'Details';
                detailButton.classList.add('user__button');
                detailButton.addEventListener('click', async () => {
                    sessionStorage.setItem('importDate', formattedImportDate);
                    window.location.href = 'import-details.html';
                });

                listItem.appendChild(transactionDate);
                listItem.appendChild(importDateText);
                listItem.appendChild(name);
                listItem.appendChild(detailButton);
                list.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching transactions:', error));
});

function formatDateToISOString(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
}