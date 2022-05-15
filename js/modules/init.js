// // BUILD THE EMPLOYEES GRID
// let tbody = document.createElement('tbody');
// async function buildGrid() {
//     try {
//     const response = await fetch('../data/employees.json');
//     const employees = await response.json();
//     for (let employee of employees) {
//         // empTable.lastElementChild.remove();       
//         tbody.innerHTML +=
//         `
//         <tr>
//             <td>${employee.id}</td>
//             <td>${employee.name}</td>
//             <td>${employee.ext}</td>
//             <td><a href="mailto:${employee.email}">${employee.email}</a></td>
//             <td>${employee.dept}</td>
//             <td><button class="btn btn-sm btn-danger delete">X</button></td>
//         </tr>
//         `
//     }
//     empTable.appendChild(tbody);
// } catch (error) {
//     console.error(error)
// }
// }
// buildGrid();

// export { buildGrid };