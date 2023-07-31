function calcular(){
    var valorA=document.getElementById("valorA").value;
    var valorB=document.getElementById("valorB").value;
    var op=document.getElementById("op").value;
    var resultado=0
    switch (op){
      case 'soma':
        resutado = parseInt(valorA) + parseInt(ValorB);
        break;
      case 'sub':
        resutado = parseInt(valorA) - parseInt(ValorB);
        break;
      case 'mult':
        resutado = parseInt(valorA) * parseInt(ValorB);
        break;
      case 'div':
        resutado = parseInt(valorA) / parseInt(ValorB);
        break;
      default:
        resutado="Você não selecionou nenhuma operação";
    }
  document.getElementById("resultado").innerHTML=resultado;
    }