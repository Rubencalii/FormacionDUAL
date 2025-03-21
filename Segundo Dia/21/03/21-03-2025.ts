console.log('Hola Mundo');


//Define una variable que almacene un número, otra que almacene un texto

let edad: number = 25;            // Tipo de dato numérico
let nombre: string = "Ruben";      // Tipo de dato string 
let esActivo: boolean = true;     // Tipo de dato booleano true 

//Crea una función que reciba dos números como parámetros y devuelva su suma. Asegúrate de que la función tenga un tipo de retorno de número.

function suma(a: number, b:number):number{
    return a + b;
}

let resultado = suma(5, 10);
console.log(resultado);

//Define un objeto que represente a una persona con propiedades como nombre, edad y email.

interface Persona {
    nombre: string;
    edad: number;
    email: string;
}

let persona: Persona = {
    nombre: "María",
    edad: 30,
    email: "maria@example.com"
};

//Crea una función que reciba una cadena de texto y devuelva su longitud si la cadena no está vacía. Si está vacía, debe devolver null.

function obtenerLongitud(cadena: string): number | null {
    if (cadena === "") {
        return null;
    }
    return cadena.length;
}

let longitud = obtenerLongitud("Hola");
console.log(longitud); 

//Crea una variable con tipo any que pueda almacenar valores de cualquier tipo. Asigna valores de diferentes tipos a esa variable.

let cualquierCosa: any = 42;
console.log(cualquierCosa);

cualquierCosa = 'Texto';
console.log(cualquierCosa);

cualquierCosa = true;
console.log(cualquierCosa);

// Crea una clase Coche que tenga propiedades como marca, modelo y año. Luego, crea un objeto de esa clase y accede a sus propiedades.

class Coche{
    marca: string;
    modelo: string;
    año: number;

    constructor(marca: string, modelo:string, año:number){
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    monstrarInfo(): void {
        console.log(`Coche: ${this.marca} ${this.modelo}, Año: ${this.año}`);
    }
}

// Crea un array de números y otro array de cadenas de texto. Asegúrate de que los tipos estén correctamente definidos.

let numeros: number[] = [1, 2, 3, 4, 5];
let texto: string[] = ['Hola', 'Mundo', 'este', 'es', 'mi', 'primer', 'Texto'];