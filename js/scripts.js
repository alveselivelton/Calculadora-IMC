const resultado = document.getElementById("resultado");

const calcular = () => {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const imc = (peso / altura ** 2).toFixed(1);

    if (imc < 18.5) {
        resultado.innerHTML = `O seu IMC é ${imc} - Magreza`;
    } else if (imc >= 18.5 && imc <= 24.9) {
        resultado.innerHTML = `O seu IMC é ${imc} - Saudável`;
    } else if (imc >= 25 && imc <= 29.9) {
        resultado.innerHTML = `O seu IMC é ${imc} - Sobrepeso`;
    } else if (imc >= 30 && imc <= 34.9) {
        resultado.innerHTML = `O seu IMC é ${imc} - Obesidade Grau I`;
    } else if (imc >= 35 && imc <= 39.9) {
        resultado.innerHTML = `O seu IMC é ${imc} - Obesidade Severa Grau II`;
    } else if (imc >= 40) {
        resultado.innerHTML = `O seu IMC é ${imc} - Obesidade Mórbida Grau III`;
    }
}

const limpar = () => { 
    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";
    resultado.innerHTML = "";
}