const baseURL1 = 'http://localhost:8080';
document.addEventListener('DOMContentLoaded', () => {

    const importDate = sessionStorage.getItem('importDate');


    if (importDate) {
        fetch(`${baseURL1}/transactions/details/${importDate}`, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(transactions => {
            if (transactions.length > 0) {
                // Assuming these values come from the first transaction
                const firstTransaction = transactions[0];
    
                const importedBy = document.getElementById('byJs');
                importedBy.innerText = firstTransaction.idUser || 'N/A'; // Replace with correct property if needed
    
                const inportedIn = document.getElementById('inJs');
                inportedIn.innerText = new Date(firstTransaction.importDate).toLocaleString() || 'N/A'; // Replace with correct property if needed
    
                const transactionDate = document.getElementById('dateJs');
                transactionDate.innerText = new Date(firstTransaction.transactionDate).toLocaleString() || 'N/A'; // Replace with correct property if needed
            } else {
                console.error('No transactions available');
            }

            const list = document.getElementById('.import__grid');
            list.innerHTML = '';

            transactions.forEach(transaction => {
                const listItem = document.createElement('div');
                listItem.classList.add('import__row');

                const originBank = document.createElement('p');
                originBank.textContent = `${(transaction.originalBank).toLocaleString()}`;

                const originAgency = document.createElement('p');
                originAgency.textContent = `${(transaction.originalAgency).toLocaleString()}`;

                const originAccount = document.createElement('p');
                originAccount.textContent = `${(transaction.originalAccount).toLocaleString()}`;

                const destinyBank = document.createElement('p');
                destinyBank.textContent = `${(transaction.destinyBank).toLocaleString()}`;

                const destinyAgency = document.createElement('p');
                destinyAgency.textContent = `${(transaction.destinyAgency).toLocaleString()}`;

                const destinyAccount = document.createElement('p');
                destinyAccount.textContent = `${(transaction.destinyAccount).toLocaleString()}`;

                const amount = document.createElement('p');
                amount.textContent = `R$${(transaction.amount).toLocaleString()}`;

                listItem.appendChild(originBank);
                listItem.appendChild(originAgency);
                listItem.appendChild(originAccount);
                listItem.appendChild(destinyBank);
                listItem.appendChild(destinyAgency);
                listItem.appendChild(destinyAccount);
                listItem.appendChild(amount);
                list.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching details:', error));
    } else {
        console.error('Import date not found in sessionStorage');
    }
});