// Declaração da variável produtos fora do escopo do evento para torná-la global
let produtos;

document.addEventListener("DOMContentLoaded", function () {
    fetch("../Dados/loja.json")
      .then((response) => response.json())
      .then((data) => {
        produtos = data;
        const wrap =
          document.getElementById("wrap");
  
        produtos.map((produto, index) => {
          const card = document.createElement("div");
          card.className = "card";
  
          const imagem = document.createElement("img");
          imagem.src = produto.imagem;
          imagem.className = "card-img-top";
  
          const cardBody = document.createElement("div");
          cardBody.className = "card-body";
  
          const cardTitle = document.createElement("h4");
          cardTitle.className = "card-title";
          cardTitle.textContent = produto.nome;

          const cardDiv = document.createElement("div");
          cardDiv.className = "card-div"

          const status = document.createElement("div");
          status.className = "card-status"
          if (produto.status) {
            status.style.backgroundColor = "#198f1f";
          } else {
            status.style.backgroundColor = "#cc3838";   
          }
  
          const cardText = document.createElement("p");
          cardText.className = "card-text";
          cardText.textContent = "R$" + produto.preco.toFixed(2);
  
          cardDiv.append(cardTitle);
          cardDiv.append(status);
          cardBody.appendChild(cardDiv);
          cardBody.append(cardText);
  
          card.appendChild(imagem);
          card.appendChild(cardBody);
  
          wrap.appendChild(card);
        });
      })
      .catch((error) => console.error("Erro ao carregar o arquivo JSON", error));
});
  