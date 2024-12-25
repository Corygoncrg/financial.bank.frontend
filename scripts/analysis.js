import baseURL from "./config.js";
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
    // const list = document.querySelector(".import__grid");
    //         list.innerHTML = "";
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;
    const date = year + "/" + month;
    console.log(date)

    fetch(`${baseURL}/transactions/analyses/${date}`, {
        method: "GET"
    })
        .then(response => response.json())

        .then(transactions => {
            if(transactions == "") {
                alert(`No suspect transactions found for the ${date}`)
                return;
            }
            const list = document.getElementById("import__grid");
            list.innerHTML = "";

            transactions.forEach(transaction => {
                const listItem = document.createElement("div");
                listItem.classList.add("import__row");

                const originBank = document.createElement("p");
                originBank.textContent = `${(transaction.originalBank).toLocaleString()}`;

                const originAgency = document.createElement("p");
                originAgency.textContent = `${(transaction.originalAgency).toLocaleString()}`;

                const originAccount = document.createElement("p");
                originAccount.textContent = `${(transaction.originalAccount).toLocaleString()}`;

                const destinyBank = document.createElement("p");
                destinyBank.textContent = `${(transaction.destinyBank).toLocaleString()}`;

                const destinyAgency = document.createElement("p");
                destinyAgency.textContent = `${(transaction.destinyAgency).toLocaleString()}`;

                const destinyAccount = document.createElement("p");
                destinyAccount.textContent = `${(transaction.destinyAccount).toLocaleString()}`;

                const amount = document.createElement("p");
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
  

    fetch(`${baseURL}/transactions/accounts/analyses/${year}/${month}`)
        .then(response => response.json())
        .then(accounts => {
            const list = document.getElementById("suspected__accounts__grid");
            list.innerHTML = "";

            accounts.forEach(Account => {
                const listItem = document.createElement("div");
                listItem.classList.add("suspected__accounts__row");

                const bank = document.createElement("p");
                bank.textContent = `${(Account.bank).toLocaleString()}`;
                
                const agency = document.createElement("p");
                agency.textContent = `${(Account.agency).toLocaleString()}`;
                
                const account = document.createElement("p");
                account.textContent = `${(Account.account).toLocaleString()}`;
                
                const totalAmountMoved = document.createElement("p");
                totalAmountMoved.textContent = `${(Account.totalAmountMoved).toLocaleString()}`;
                
                const transferType = document.createElement("p");
                transferType.textContent = `${(Account.transferType).toLocaleString()}`;
                


                listItem.appendChild(bank);
                listItem.appendChild(agency);
                listItem.appendChild(account);
                listItem.appendChild(totalAmountMoved);
                listItem.appendChild(transferType);

                list.appendChild(listItem);
            });
        });
}

async function searchAgencies(year, month) {

    fetch(`${baseURL}/transactions/agencies/analyses/${year}/${month}`)
        .then(response => response.json())
        .then(agencies => {
            const list = document.getElementById("suspected__agencies__grid");
            list.innerHTML = "";

            agencies.forEach(Agency => {
                const listItem = document.createElement("div");
                listItem.classList.add("suspected__agencies__row");

                const bank = document.createElement("p");
                bank.textContent = `${(Agency.bank).toLocaleString()}`;
                
                const agency = document.createElement("p");
                agency.textContent = `${(Agency.agency).toLocaleString()}`;
            
                
                const totalAmountMoved = document.createElement("p");
                totalAmountMoved.textContent = `${(Agency.totalAmountMoved).toLocaleString()}`;
                
                const transferType = document.createElement("p");
                transferType.textContent = `${(Agency.transferType).toLocaleString()}`;
                

                 listItem.appendChild(bank);
                listItem.appendChild(agency);
                listItem.appendChild(totalAmountMoved);
                listItem.appendChild(transferType);

                list.appendChild(listItem);
            });
        });
}

const submit = document.getElementById("submit");
submit.addEventListener("submit", handleUpload);

function handleUpload(event) {
    event.preventDefault();
    console.log("st");
    
    searchTransactions();
}