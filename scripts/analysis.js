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
    const date = year+"/"+month;
    console.log(date)

    fetch(`${baseURL1}/transactions/analyses/${date}`, {
        method: 'GET'
    })
    .then(response => response.json())
    .then(transactions => {
        const list = document.getElementById('import__grid');
            list.innerHTML = '';

    })

}