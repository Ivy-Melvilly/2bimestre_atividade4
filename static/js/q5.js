function imagens() {
    var f = ["imagens/bougainville.jpg", "imagens/camelia.jpg", "imagens/crisantemo.jpg", "imagens/flor-de-cerejeira.jpg", "imagens/hibisco.jpg", "imagens/hortensia.jpg", "imagens/lirio-do-vale.jpg", "imagens/lotus.jpg", "imagens/orquidea.jpg", "imagens/rosas.jpg"]; 
    for (i = 0; i < f.length; i++) {
      document.getElementById('f').innerHTML+= "<img src='static/imagens/"+f[i]+".jpg' >"
    }
  }