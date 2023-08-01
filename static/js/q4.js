function mudarForma() {
    var forma = document.getElementById("forma");
    if (forma.value == "triangulo") {
      document.querySelector('img').src = "static/imagens/triangulo.png";
    } else if (forma.value == "quadrado") {
      document.querySelector('img').src = "static/imagens/quadrado.png";
    } else if (forma.value == "circulo") {
      document.querySelector('img').src = "static/imagens/circulo.png";
    } else {
      document.querySelector('img').src = "static/imagens/interrogacao.png";
      alert("forma inválida!")
    }
  }
  document.querySelector('button').addEventListener('click', mudarForma);