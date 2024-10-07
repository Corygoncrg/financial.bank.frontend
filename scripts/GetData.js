document.addEventListener('DOMContentLoaded', () => {
    fetch('/files')
        .then(response => response.json())
        .then(files => {
            const list = document.querySelector('.list__div ul');
            files.forEach(file => {
                const listItem = document.createElement('li');
                const link = document.createElement('a');
                link.href = file;
                link.textContent = file;
                listItem.appendChild(link);
                list.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching files:', error));
});