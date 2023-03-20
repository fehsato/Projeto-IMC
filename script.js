function calcularIMC() {
    var peso, altura, result;
    peso = parseFloat(document.getElementById("peso").value);
    altura = parseFloat(document.getElementById("altura").value);
    altura = altura / 100;
    result = peso / (altura*altura);
    
    const textResult = document.getElementById("txt-resultado");

    
    

    // alert(Math.round(result));

    if(result < 18.5){
        textResult.innerHTML = "Magreza"
    }
    
    if( 24.9 < result || result > 18.5){
        textResult.innerHTML = "Normal"
    }

    if( 29.9 < result || result > 25.0){
    textResult.innerHTML = "Sobrepeso"
    }

    if( 34.9 < result || result > 30){
        textResult.innerHTML = "Obesidade grau I"
    }

    if( 39.9 < result || result > 35){
        textResult.innerHTML = "Obesidade grau II"
    }
    if( result > 40){
        textResult.innerHTML = "Obesidade grau III"
    }
}


