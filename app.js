/*function fetchJSON() {
    fetch('https://s3.amazonaws.com/open-to-cors/assignment.json')
        .then(response => response.json())
        .then(data => displayProducts(data.products))
        .catch(error => console.error('Error fetching JSON:', error));
}

function displayProducts(products) {
    const tableBody = document.getElementById('productTableBody');
    tableBody.innerHTML = '';
    products.forEach(product => {
        const row = tableBody.insertRow();
        row.insertCell(0).textContent = product.title;
        row.insertCell(1).textContent = product.price;
        row.insertCell(2).textContent = product.popularity;
    });
}

fetchJSON();*/


document.addEventListener('DOMContentLoaded', fetchDataAndRender);

function fetchDataAndRender() {
    // Assuming you have a function to fetch data asynchronously
    fetchData()
        .then(renderTable)
        .catch(error => console.error('Error fetching data:', error));
}

function fetchData() {
    // Replace this with your actual API endpoint or data source
    const apiUrl = 'https://s3.amazonaws.com/open-to-cors/assignment.json';

    // Using fetch API to get data (replace with your actual fetch code)
    return fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        });
}

function renderTable(data) {
    const tableBody = document.querySelector('#data-table tbody');

    // Clear existing rows
    tableBody.innerHTML = '';

    // Check if data is an array and not empty
    if (Array.isArray(data) && data.length > 0) {
        data.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.subcategory || 'N/A'}</td>
                <td>${item.title || 'N/A'}</td>
                <td>${item.price || 'N/A'}</td>
                <td>${item.popularity || 'N/A'}</td>
            `;
            tableBody.appendChild(row);
        });
    } else {
        // No data, insert a default row
        const defaultRow = document.createElement('tr');
        defaultRow.innerHTML = '<td colspan="4">No data available</td>';
        tableBody.appendChild(defaultRow);
    }
}
