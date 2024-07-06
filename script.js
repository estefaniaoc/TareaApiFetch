document.addEventListener('DOMContentLoaded', function() {
    const loader = document.getElementById('loader');
    const userTable = document.getElementById('userTable');
    const userTableBody = userTable.querySelector('tbody');
    const reloadButton = document.getElementById('reloadButton');

    function fetchData() {
        loader.classList.remove('d-none');
        reloadButton.classList.add('d-none');
        userTable.classList.add('d-none');
        userTableBody.innerHTML = ''; // Limpiar la tabla antes de cargar nuevos datos

        fetch('https://reqres.in/api/users?delay=3')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                loader.classList.add('d-none');
                userTable.classList.remove('d-none');
                reloadButton.classList.remove('d-none');
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
                console.error('Error fetching data:', error);
                loader.innerHTML = '<p>Error al cargar datos</p>';
                reloadButton.classList.remove('d-none');
            });
    }

    // Fetch data when the page loads
    fetchData();

    // Add click event listener to the reload button
    reloadButton.addEventListener('click', function() {
        fetchData();
    });
});
