document.getElementById("registrationForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const messageEl = document.getElementById("message");

  const check = await fetch(`/api/check-email?email=${encodeURIComponent(email)}`);
  const exists = await check.json();

  if (exists.exists) {
    messageEl.textContent = "Ця електронна адреса вже зареєстрована";
    messageEl.style.color = "red";
    return;
  }

  const res = await fetch("/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ firstName, lastName, email, password })
  });

  if (res.ok) {
    messageEl.textContent = "Реєстрація успішна";
    messageEl.style.color = "green";
    document.getElementById("registrationForm").reset();
  } else {
    messageEl.textContent = "Помилка при реєстрації";
    messageEl.style.color = "red";
  }
});
