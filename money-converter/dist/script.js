/* Atribuições, valor em cada moeda */
umD = 0.18
umE = 0.15
umI = 25
umL = 0.13

/* Conversor */
document.getElementsByName("valorReal")[0].addEventListener("input", function() {
  var valorReal = parseFloat (document.getElementsByName("valorReal")[0].value);

if (!isNaN(valorReal)) {
 
    var valorDolar = valorReal * umD;
    var valorEuro = valorReal * umE;
    var valorIene = valorReal * umI;
    var valorLibra = valorReal * umL;
  
     valorDolar = valorDolar . toLocaleString ('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  valorEuro = valorEuro . toLocaleString ('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  valorIene = valorIene . toLocaleString ('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  valorLibra = valorLibra . toLocaleString ('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  
      document.getElementsByName("valorDólar")[0].value = "USD " + valorDolar;
    document.getElementsByName("valorEuro")[0].value = "€ " + valorEuro;
    document.getElementsByName("valorIene")[0].value = "¥ " + valorIene;
    document.getElementsByName("valorLibra")[0].value = "£ " + valorLibra; 
    
  } else {alert("Por Favor insira um número")}
    
});