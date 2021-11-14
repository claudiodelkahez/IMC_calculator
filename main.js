const calcular = document.getElementById('calculate');

function imc() {
    const nombre = document.getElementById('name').value;
    const altura = document.getElementById('height').value;
    const peso = document.getElementById('weight').value;
    const resultado = document.getElementById('result');

    if (nombre !== '' && altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(2);

        let clasificacion = "";

        if (valorIMC < 18.5) {
            clasificacion = "Está bajo de peso"
        } else if (valorIMC < 25) {
            clasificacion = "Está dentro del rango de tu peso ideal. Felicitaciones"
        } else if (valorIMC < 30) {
            clasificacion = "Estas levemente sobre tu peso ideal."
        } else if (valorIMC < 35) {
            clasificacion = "Atento! estas con obesidad grado 1"
        } else if (valorIMC < 40) {
            clasificacion = "Atento! estas con obesidad grado 2"
        }
        else {
            clasificacion = "Cuidado! estas con obesidad grado 3"
        }

        resultado.textContent = `${nombre} tu IMC es ${valorIMC} y estas ${clasificacion}`;
    } else {
        //  alert ('Completa todos los campos!!!')
        resultado.textContent = 'complete todos los campos!';
    }
}

calcular.addEventListener('click', imc);

