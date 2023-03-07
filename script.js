function calcularIMC() {
    var peso, altura, result;
    peso = parseFloat(document.getElementById("peso").value);
    altura = parseFloat(document.getElementById("altura").value);
    altura = altura / 100;
    result = peso / (altura*altura);

    document.getElementById('result').value = result;
}