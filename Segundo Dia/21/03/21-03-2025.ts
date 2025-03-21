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

//Crea una función genérica que reciba dos parámetros de tipos diferentes y los combine en un solo objeto.

function combinar<T, U>(param1: T, param2: U): { primera: T, segunda: U } {
    return { primera: param1, segunda: param2 };
}

let resultado1 = combinar("Hola", 10);
console.log(resultado); 

//Crea una función que acepte un parámetro que pueda ser tanto un número como una cadena de texto. La función debe devolver un mensaje indicando el tipo del parámetro.

function verificarTipo(valor: number| string):string{
    if(typeof valor === 'number'){
        return 'Es un numero';
    } else{
        return 'Es una cadena de texto.';
    }
}

console.log(verificarTipo(123));
console.log(verificarTipo('Hola'));

//Crea un enum llamado Color con los valores Rojo, Verde y Azul. Luego, crea una variable que almacene un color y usa el enum para asignar el valor.

enum Color{
    Rojo = 'Rojo',
    Verde = 'Verde',
    Azul = 'Azul',
}

let colorFavorito: Color = Color.Azul;
console.log(colorFavorito);

// Crea una función que imprima un mensaje en la consola, pero que no devuelva ningún valor. Usa void como tipo de retorno.

function saludar(nombre: string): void{
    console.log(`Hola, ${nombre}!`)
}

saludar("Carlos");

//Crea una función que acepte un parámetro de tipo unknown y maneje el valor de manera segura usando un tipo de comprobación.

function manejarValor(valor: unknown): void{
    if (typeof valor === "string"){
        console.log(`El valor es una cadena: ${valor}`)
    } else if (typeof valor === 'number'){
        console.log('El valor es un numero: ' + valor );
    } else {
        console.log('El valor tiene un tipo desconocido.')
    }
}

manejarValor('Texto');
manejarValor(20);
manejarValor(true);

//Crea una función que calcule el factorial de un número de manera recursiva.

function factorial(n: number): number{
    if(n <= 1){
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5));

//Crea una arrays que almacene un nombre (como string) y una edad (como number). Accede a sus valores e imprímelos.

let persona1: [string, number] = ['Ruben', 20];

console.log(persona1[0]);
console.log(persona[1]);

//Usa el operador as para hacer una aserción de tipo, y haz que TypeScript trate una variable como un tipo específico.

let valor: any ='Hola Mundo';
let longitud1: number = (valor as string).length;

console.log(longitud1);

//Crea una función que reciba dos parámetros, pero el segundo parámetro debe ser opcional. Si no se proporciona, debe usar un valor predeterminado.

function saludar1(nombre: string, edad?: number): void {
    if (edad) {
        console.log(`Hola, ${nombre}, tienes ${edad} años.`);
    } else {
        console.log(`Hola, ${nombre}.`);
    }
}

saludar("Carlos");
saludar("Ana");        

//Usa type para crear un alias de tipo que represente un objeto con las propiedades nombre y edad.

type Persona2 = {
    nombre: string;
    edad: number;
};

let Persona3: Persona2 = {
    nombre: 'Ruben',
    edad: 20
}

console.log(persona.nombre);
console.log(persona.edad);

//Crea una clase llamada Rectángulo que tenga un método area que calcule y devuelva el área del rectángulo.

class Rectangular{
    ancho: number;
    alto: number;

    constructor(ancho: number, alto:number){
        this.ancho = ancho;
        this.alto = alto;
    }
    
    area(): number{
        return this.ancho * this.alto;
    }
}

let rect= new Rectangular(5, 10);
console.log(rect.area());

//Crea una clase Animal con una propiedad nombre y un método hablar. Luego, crea una clase Perro que herede de Animal y sobrescriba el método hablar.

class Animal {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    hablar(): void {
        console.log(`${this.nombre} hace un sonido.`);
    }
}

class Perro extends Animal {
    hablar(): void {
        console.log(`${this.nombre} dice: ¡Guau!`);
    }
}

let perro = new Perro("Rex");
perro.hablar(); // Imprime: Rex dice: ¡Guau!

// Crea una clase con propiedades que utilicen los modificadores de acceso public, private y protected para controlar su visibilidad.

class Empleado {
    public nombre: string;
    private salario: number;
    protected puesto: string;

    constructor(nombre: string, salario: number, puesto: string) {
        this.nombre = nombre;
        this.salario = salario;
        this.puesto = puesto;
    }

    obtenerSalario(): number {
        return this.salario;
    }
}

let empleado = new Empleado("Pedro", 3000, "Desarrollador");
console.log(empleado.nombre);  
console.log(empleado.obtenerSalario()); 

//Usa un switch para determinar el día de la semana según un número.

function generarNumeroAleatorio(): number {
    return Math.floor(Math.random() * 7) + 1;
}

let dia: number = generarNumeroAleatorio();
let diaNombre: string;

switch (dia) {
    case 1:
        diaNombre = "Lunes";
        break;
    case 2:
        diaNombre = "Martes";
        break;
    case 3:
        diaNombre = "Miércoles";
        break;
    case 4:
        diaNombre = "Jueves";
        break;
    case 5:
        diaNombre = "Viernes";
        break;
    case 6:
        diaNombre = "Sábado";
        break;
    case 7:
        diaNombre = "Domingo";
        break;
    default:
        diaNombre = "Día inválido";
}

console.log(diaNombre); 

//Usa el bucle for...of para recorrer un array y sumar sus elementos.

let numero4: number[] = [1, 2, 3, 4, 5];
let suma5: number = 0;

for (let numero4 of numeros) {
    suma5 += numero4;
}

console.log(suma); // Imprime: 15
