function Enviar() {
  document.getElementById("c1").innerHTML = "Bem-vindo, " + document.getElementById("userName").value;
 
 
  document.getElementById('Correto').innerHTML = 'CORRETAS';

  document.getElementById('Incorreto').innerHTML = 'ERRADAS';


 

var q1 = document.getElementById("q1").value;
  var q2 = document.getElementById("q2").value;
  var q3 = document.getElementById("q3").value;
   var q4 = document.getElementById("q4").value;
 
 
 
if (q1 == 9) {
document.getElementById('correcto1').innerHTML = '1. Quanto é 9 x 1? Resposta: 9' ; 
}  else {
document.getElementById('erro1').innerHTML = '1. Quanto é 9 x 1? A resposta correta é: 9';
}

 

 
if (q2 == 57) {
document.getElementById('correcto2').innerHTML = '2. Quanto é 19 x 3? Resposta: 57';
} else { document.getElementById('erro2').innerHTML = '2. Quanto é 19 x 3? A resposta correta é: 57';
} 
 

 
 
if (q3 == 756) {
document.getElementById('correcto3').innerHTML = '3. Quanto é 184 x 4? Resposta: 756';
} else { document.getElementById('erro3').innerHTML = '3. Quanto é 184 x 4? A resposta correta é: 756';
} 
 

 
if (q4 == 7416) {
document.getElementById('correcto4').innerHTML = '4. Quanto é 1236 x 6? Resposta: 7416'; 
}  else {
document.getElementById('erro4').innerHTML = '4. Quanto é 1236 x 6? A resposta correta é: 7416';
}
}

 


