function cadastrar() {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    alert("As senhas não coincidem!");
    return;
  }

  fetch("http://localhost:3000/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: nome,
      email,
      password
    })
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);

    if (data.msg) {
      alert(data.msg);
      window.location.href = "/index.html";
    } else {
      alert("Erro no cadastro");
    }
  });
}