async function loadUsers() {
  const res = await fetch("/api/users");
  const users = await res.json();
  const tbody = document.querySelector("#usersTable tbody");
  tbody.innerHTML = "";
  users.forEach(u => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${u.id}</td>
      <td>${u.first_name}</td>
      <td>${u.last_name}</td>
      <td>${u.email}</td>
      <td>${u.password}</td>
      <td>
        <a href="edit.html?id=${u.id}">Редагувати</a> |
        <a href="delete.html?id=${u.id}">Видалити</a>
      </td>`;
    tbody.appendChild(row);
  });
}

loadUsers();
