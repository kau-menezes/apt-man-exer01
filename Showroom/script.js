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
  
          const cardText = document.createElement("p");
          cardText.className = "card-text";
          cardText.textContent = "R$" + produto.preco.toFixed(2);
  
          cardBody.appendChild(cardTitle);
          cardBody.appendChild(cardText);
        //   cardBody.appendChild(btnAdicionarAoCarrinho);
  
          card.appendChild(imagem);
          card.appendChild(cardBody);
  
          wrap.appendChild(card);
        });
      })
      .catch((error) => console.error("Erro ao carregar o arquivo JSON", error));
});
  