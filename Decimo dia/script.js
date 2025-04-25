let display = document.getElementById('display');
let history = document.getElementById('history');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        let result = eval(display.value);
        if (isNaN(result) || !isFinite(result)) {
            throw new Error('Error');
        }

        // Mostrar el historial
        history.textContent = display.value + ' = ' + result;

        // Mostrar el resultado
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

// Agregar funcionalidad para porcentaje
function calculatePercentage() {
    try {
        let result = eval(display.value);
        display.value = result / 100;
    } catch (error) {
        display.value = 'Error';
    }
}
