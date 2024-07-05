document.addEventListener('DOMContentLoaded', function() {
    const loader = document.getElementById('loader');
    const userTable = document.getElementById('userTable');
    const userTableBody = userTable.querySelector('tbody');

    fetch('https://reqres.in/api/users?delay=3')
        .then(response => response.json())
        .then(data => {
            loader.classList.add('d-none');
            userTable.classList.remove('d-none');
            data.data.forEach(user => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td><img src="${user.avatar}" class="avatar img-fluid" alt="Avatar"></td>
                    <td>${user.first_name}</td>
                    <td>${user.last_name}</td>
                    <td>${user.email}</td>
                `;
                userTableBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error :', error);
            loader.innerHTML = '<p>Error al cargar.</p>';
        });
});
