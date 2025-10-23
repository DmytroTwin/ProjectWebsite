document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let firstName = document.getElementById("firstName").value.trim();
  let lastName = document.getElementById("lastName").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  if (!firstName || !lastName || !email || !password) {
    alert("Потрібно заповнити всі поля.");
    return;
  }

  alert("Форма відправлена.");
  this.submit();
});
