// import { buildGrid } from './modules/init';

// GET DOM ELEMENTS
let empTable    = document.querySelector('#employees');
// let empCount    = document.querySelector('#empCount');
// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        // CONFIRM THE DELETE
        if (confirm('Are you sure you want to delete this employee?')) {
            // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            let rowIndex = e.target.parentNode.parentNode.rowIndex;
            // REMOVE EMPLOYEE FROM ARRAY
            empTable.deleteRow(rowIndex);
        }
    }
});
// BUILD THE EMPLOYEES GRID
let tbody = document.createElement('tbody');
async function buildGrid() {
    try {
    const response = await fetch('../data/employees.json');
    const employees = await response.json();
    for (let employee of employees) {
        // empTable.lastElementChild.remove();       
        tbody.innerHTML +=
        `
        <tr>
            <td>${employee.id}</td>
            <td>${employee.name}</td>
            <td>${employee.ext}</td>
            <td><a href="mailto:${employee.email}">${employee.email}</a></td>
            <td>${employee.dept}</td>
            <td><button class="btn btn-sm btn-danger delete">X</button></td>
        </tr>
        `
    }
    empTable.appendChild(tbody);
} catch (error) {
    console.error(error)
}
}
buildGrid();

