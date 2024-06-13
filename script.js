function calcularIMC() {
        let peso = document.getElementById("peso").value;
        let altura = document.getElementById("altura").value;
        if (peso != Number) {
            alert("Por favor, insira um número válido para o peso.");
            return;
        } else if (altura != Number) {
            alert("Por favor, insira um número válido para a altura.");
            return;
        } else {
        let imc = peso / (altura * altura);
        alert(imc);
        return imc
      }     
    }