async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const API_URL = "https://luxurycars-hhp6.onrender.com";

  try {
    const res = await fetch(`${API_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    console.log("Resposta:", data);

    if (!res.ok) {
      alert(data.msg || "Erro no login");
      return;
    }

    localStorage.setItem("token", data.token);

    window.location.href = "/home.html";

  } catch (error) {
    console.error("Erro:", error);
    alert("Erro ao conectar com servidor");
  }
}