function calcularIMC() {
        let peso = document.getElementById("peso").value;
        let altura = document.getElementById("altura").value;
        let imc = peso / (altura * altura);
        if (imc <= 16.9) 
          alert(imc + " " + ":"+ " " + "Magreza severa");
        else if (imc > 16.9 && imc <= 18.4)
          alert(imc + " " + ":"+ " " + "Abaixo do peso");
        else if (imc > 18.4 && imc <= 24.9)
          alert(imc + " " + ":"+ " " + "Peso normal");
        else if (imc > 24.9 && imc <= 29.9)
          alert(imc + " " + ":"+ " " + "Acima do peso");
        else if (imc > 29.9 && imc <= 34.9)
          alert(imc + " " + ":"+ " " + "Obesidade Grau I")
        else if (imc > 34.9 && imc <= 40)
          alert(imc + " " + ":"+ " " + "Obesidade Grau II")
        else if (imc > 40)
          alert(imc + " " + ":"+ " " + "Obesidade Grau III")
        return imc
      }     