function login() {
  var nome = $("#nome").val();
  var senha = $("#senha").val();

  if (nome && senha && nome === "admin" && senha === "admin") {
    const user = {
      name: nome,
      dataEntrada: new Date(),
      id: Math.floor(Math.random() * 100000),
    };

    localStorage.setItem("usuario", JSON.stringify(user));

    window.location.href = "../Loja/loja.html";
  } else {
    document.getElementById("modal").style.display = "block";
    document.getElementById("modal-background").style.display = "block"; 
    document.getElementById("modal-background").style.backgroundColor = "rgba(0, 0, 0, 0.5)"; 
  
    document.getElementById("modal-dismiss").addEventListener("click", () =>  {
      document.getElementById("modal-background").style.display = "none"; 
      document.getElementById("modal-background").style.backgroundColor = "rgba(0, 0, 0, 0.5)"; 
      document.getElementById("modal").style.display = "none"; 
  })
  }
}

function passwordVisibility() {
  
  console.log("oi");
  let btn = document.getElementById("ps-visibility"); 
  let input = document.getElementById("senha"); 


  if (btn.innerText == "🙈") {
    input.type = "text";
    btn.innerText = "🐵"

  } else {
    btn.innerText = "🙈"
    input.type = "password"
  }
}
