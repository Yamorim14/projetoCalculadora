function somar(){
    var tn1 = window.document.getElementById('txtn1');
    var tn2 = window.document.getElementById('txtn2');
    var tn3 = window.document.getElementById('txtn3');
    var resu = document.getElementById('resul');
    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);
    var n3 = Number(tn3.value);
    var s = n1 + n2 + n3;
    resu.innerHTML = `A soma de ${n1}, ${n2} e ${n3} é igual a ${s}`
}

function subtrair(){
    var tn1 = window.document.getElementById('txtn1');
    var tn2 = window.document.getElementById('txtn2');
    var resu = document.getElementById('resul');
    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);
    var s = n1 - n2;
    resu.innerHTML = `A subtração de ${n1} e ${n2} é igual a ${s}`
}

function dividir(){
    var tn1 = window.document.getElementById('txtn1');
    var tn2 = window.document.getElementById('txtn2');
    var resu = document.getElementById('resul');
    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);
    var s = n1 / n2;
    resu.innerHTML = `A divisão de ${n1} e ${n2} é igual a ${s}`
}

function multiplicar(){
    var tn1 = window.document.getElementById('txtn1');
    var tn2 = window.document.getElementById('txtn2');
    var resu = document.getElementById('resul');
    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);
    var s = n1 * n2;
    resu.innerHTML = `A multiplicação de ${n1} e ${n2} é igual a ${s}`
}

function calcular(){
    var tn1 = window.document.getElementById('txtn1');
    var tn2 = window.document.getElementById('txtn2');
    var resu = document.getElementById('resul');
    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);
    var s = (n1 + n2) / 2;
    resu.innerHTML = `A média entre ${n1} e ${n2} é igual a ${s}`
}