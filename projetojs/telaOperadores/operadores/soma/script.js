function Enviar() {
  document.getElementById("c1").innerHTML = "Bem-vindo, " + document.getElementById("userName").value;
 
 
  document.getElementById('Correto').innerHTML = 'CORRETAS';

  document.getElementById('Incorreto').innerHTML = 'ERRADAS';


 

var q1 = document.getElementById("q1").value;
  var q2 = document.getElementById("q2").value;
  var q3 = document.getElementById("q3").value;
   var q4 = document.getElementById("q4").value;
 
 
 
if (q1 == 10) {
document.getElementById('correcto1').innerHTML = '1. Quanto é 5 + 5? Resposta: 10' ; 
}  else {
document.getElementById('erro1').innerHTML = '1. Quanto é 5 + 5? A resposta correta é: 10';
}

 

 
if (q2 == 16) {
document.getElementById('correcto2').innerHTML = '2. Quanto é 9 + 7? Resposta: 16';
} else { document.getElementById('erro2').innerHTML = '2. Quanto é 9 + 7? A resposta correta é: 16';
} 
 

 
 
if (q3 == 96) {
document.getElementById('correcto3').innerHTML = '3. Quanto é 82 + 14? Resposta: 96';
} else { document.getElementById('erro3').innerHTML = '3. Quanto é 82 + 14? A resposta correta é: 96';
} 
 

 
if (q4 == 72) {
document.getElementById('correcto4').innerHTML = '4. Quanto é 16 + 56? Resposta: 72'; 
}  else {
document.getElementById('erro4').innerHTML = '4. Quanto é 16 + 56? A resposta correta é: 72';
}
}

 


