function imagens() {
    var lista = ["imagens/bougainville.jpg", "imagens/camelia.jpg", "imagens/crisantemo.jpg", "imagens/flor-de-cerejeira.jpg", "imagens/hibisco.jpg", "imagens/hortensia.jpg", "imagens/lirio-do-vale.jpg", "imagens/lotus.jpg", "imagens/orquidea.jpg", "imagens/rosas.jpg"];
    var idiv = document.querySelector('div');
    for (i = 0; i < lista.length; i++) {
      var foto = document.createElement("img");
      foto.classList.add("tam");
      foto.src = lista[i];

      idiv.appendChild(foto);
    }
  }