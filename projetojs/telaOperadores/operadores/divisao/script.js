function Enviar() {
  document.getElementById("c1").innerHTML = "Bem-vindo, " + document.getElementById("userName").value;
 
 
  document.getElementById('Correto').innerHTML = 'CORRETAS';

  document.getElementById('Incorreto').innerHTML = 'ERRADAS';


 

var q1 = document.getElementById("q1").value;
  var q2 = document.getElementById("q2").value;
  var q3 = document.getElementById("q3").value;
   var q4 = document.getElementById("q4").value;
 
 
 
if (q1 == 25) {
document.getElementById('correcto1').innerHTML = '1. Quanto é 50 / 2? Resposta: 25' ; 
}  else {
document.getElementById('erro1').innerHTML = '1. Quanto é 50 / 2? A resposta correta é: 25';
}

 

 
if (q2 == 22) {
document.getElementById('correcto2').innerHTML = '2. Quanto é 22 / 1? Resposta: 22';
} else { document.getElementById('erro2').innerHTML = '2. Quanto é 22 / 1? A resposta correta é: 22';
} 
 

 
 
if (q3 == 50) {
document.getElementById('correcto3').innerHTML = '3. Quanto é 200 / 4? Resposta: 50';
} else { document.getElementById('erro3').innerHTML = '3. Quanto é 200 / 4? A resposta correta é: 50';
} 
 

 
if (q4 == 5.3) {
document.getElementById('correcto4').innerHTML = '1. Quanto é 16 / 3? Resposta: 5.3'; 
}  else {
document.getElementById('erro4').innerHTML = '1. Quanto é 16 / 3? A resposta correta é: 5.3';
}
}

 


