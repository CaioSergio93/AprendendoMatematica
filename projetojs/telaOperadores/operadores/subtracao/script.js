function Enviar() {
  document.getElementById("c1").innerHTML = "Bem-vindo, " + document.getElementById("userName").value;
 
 
  document.getElementById('Correto').innerHTML = 'CORRETAS';

  document.getElementById('Incorreto').innerHTML = 'ERRADAS';


 

var q1 = document.getElementById("q1").value;
  var q2 = document.getElementById("q2").value;
  var q3 = document.getElementById("q3").value;
   var q4 = document.getElementById("q4").value;
 
 
 
if (q1 == 0) {
document.getElementById('correcto1').innerHTML = '1. Quanto é 5 - 5? Resposta: 0' ; 
}  else {
document.getElementById('erro1').innerHTML = '1. Quanto é 5 - 5? A resposta correta é: 0';
}

 

 
if (q2 == 3) {
document.getElementById('correcto2').innerHTML = '2. Quanto é 10 - 7? Resposta: 3';
} else { document.getElementById('erro2').innerHTML = '2. Quanto é 10 - 7? A resposta correta é: 3';
} 
 

 
 
if (q3 == 181) {
document.getElementById('correcto3').innerHTML = '3. Quanto é 321 - 140? Resposta: 181';
} else { document.getElementById('erro3').innerHTML = '3. Quanto é 321 - 140? A resposta correta é: 181';
} 
 

 
if (q4 == 770) {
document.getElementById('correcto4').innerHTML = '4. Quanto é 1126 - 356? Resposta: 770'; 
}  else {
document.getElementById('erro4').innerHTML = '4. Quanto é 1126 - 356? A resposta correta é: 770';
}
}

 


