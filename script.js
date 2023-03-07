function calcularIMC() {
    var peso, altura, result;
    peso = parseFloat(document.getElementById("peso").value);
    altura = parseFloat(document.getElementById("altura").value);
    altura = altura / 100;
    result = peso / (altura*altura);
}

const result =
document.getElementById('result');


    if (result < 18,8){
        createMessage("Magreza")
    } else if  ( 24,9 > result && result > 18,8){
        createMessage("Normal")
    } else if  ( 29,9 > result && result > 25){
        createMessage("Sobrepeso")
    } else if  ( 34,9 > result && result > 30){
        createMessage("Obesidade grau I")
    } else if  ( 39,9 > result && result > 35){
        createMessage("Obesidade grau II")
    }else if  ( result > 40){
        createMessage("Obesidade grau III")
    }

    function createMessage(msg, type) {
        document
          .querySelector("body")
          .insertAdjacentHTML("beforebegin", `<div class='message ${type}'>${msg}</div>`);
    }


