const baseURL1 = 'http://localhost:8080';
const yearSelect = document.querySelector("#year");

// Get the current year as a number
const date = new Date();
const year = date.getFullYear();

// Make this year, and the 100 years before it available in the year <select>
for (let i = 0; i <= 100; i++) {
    const option = document.createElement("option");
    option.textContent = year - i;
    yearSelect.appendChild(option);
}


async function searchTransactions() {
    // const list = document.querySelector('.import__grid');
    //         list.innerHTML = '';
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
    const date = year + "/" + month;
    console.log(date)

    fetch(`${baseURL1}/transactions/analyses/${date}`, {
        method: 'GET'
    })
        .then(response => response.json())

        .then(transactions => {
            if(transactions == '') {
                alert(`No suspect transactions found for the ${date}`)
                return;
            }
            const list = document.getElementById('import__grid');
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
        searchAccounts(year, month);
        searchAgencies(year, month);

}

async function searchAccounts(year, month) {
  

    fetch(`${baseURL1}/accounts/analyses/${year}/${month}`)
        .then(response => response.json())
        .then(accounts => {
            const list = document.getElementById('suspected__accounts__grid');
            list.innerHTML = '';

            accounts.forEach(account => {
                const listItem = document.createElement('div');
                listItem.classList.add('suspected__accounts__row');

                const bank = document.createElement('p');
                bank.textContent = `${(account.bank).toLocaleString()}`;
                
                const agency = document.createElement('p');
                agency.textContent = `${(account.agency).toLocaleString()}`;
                
                const acc = document.createElement('p');
                acc.textContent = `${(account.account).toLocaleString()}`;
                
                const totalAmountMoved = document.createElement('p');
                totalAmountMoved.textContent = `${(account.totalAmountMoved).toLocaleString()}`;
                
                const transferType = document.createElement('p');
                transferType.textContent = `${(account.transferType).toLocaleString()}`;
                


                listItem.appendChild(bank);
                listItem.appendChild(agency);
                listItem.appendChild(acc);
                listItem.appendChild(totalAmountMoved);
                listItem.appendChild(transferType);

                list.appendChild(listItem);
            });
        });
}

async function searchAgencies(year, month) {

    fetch(`${baseURL1}/agencies/analyses/${year}/${month}`)
        .then(response => response.json())
        .then(agencies => {
            const list = document.getElementById('suspected__agencies__grid');
            list.innerHTML = '';

            agencies.forEach(agency => {
                const listItem = document.createElement('div');
                listItem.classList.add('suspected__agencies__row');

                const bank = document.createElement('p');
                bank.textContent = `${(agency.bank).toLocaleString()}`;
                
                const ag = document.createElement('p');
                ag.textContent = `${(agency.agency).toLocaleString()}`;
            
                
                const totalAmountMoved = document.createElement('p');
                totalAmountMoved.textContent = `${(agency.totalAmountMoved).toLocaleString()}`;
                
                const transferType = document.createElement('p');
                transferType.textContent = `${(agency.transferType).toLocaleString()}`;
                

                 listItem.appendChild(bank);
                listItem.appendChild(ag);
                listItem.appendChild(totalAmountMoved);
                listItem.appendChild(transferType);

                list.appendChild(listItem);
            });
        });
}