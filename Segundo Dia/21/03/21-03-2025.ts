console.log('Hola Mundo');


//1. Define una variable que almacene un número, otra que almacene un texto

let edad: number = 25;            // Tipo de dato numérico
let nombre: string = "Ruben";      // Tipo de dato string 
let esActivo: boolean = true;     // Tipo de dato booleano true 

//2. Crea una función que reciba dos números como parámetros y devuelva su suma. Asegúrate de que la función tenga un tipo de retorno de número.

function suma(a: number, b:number):number{
    return a + b;
}

let resultado = suma(5, 10);
console.log(resultado);

//3. Define un objeto que represente a una persona con propiedades como nombre, edad y email.

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

//4. Crea una función que reciba una cadena de texto y devuelva su longitud si la cadena no está vacía. Si está vacía, debe devolver null.

function obtenerLongitud(cadena: string): number | null {
    if (cadena === "") {
        return null;
    }
    return cadena.length;
}

let longitud = obtenerLongitud("Hola");
console.log(longitud); 

//5. Crea una variable con tipo any que pueda almacenar valores de cualquier tipo. Asigna valores de diferentes tipos a esa variable.

let cualquierCosa: any = 42;
console.log(cualquierCosa);

cualquierCosa = 'Texto';
console.log(cualquierCosa);

cualquierCosa = true;
console.log(cualquierCosa);

//6. Crea una clase Coche que tenga propiedades como marca, modelo y año. Luego, crea un objeto de esa clase y accede a sus propiedades.

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

//7. Crea un array de números y otro array de cadenas de texto. Asegúrate de que los tipos estén correctamente definidos.

let numeros: number[] = [1, 2, 3, 4, 5];
let texto: string[] = ['Hola', 'Mundo', 'este', 'es', 'mi', 'primer', 'Texto'];

//8. Crea una función genérica que reciba dos parámetros de tipos diferentes y los combine en un solo objeto.

function combinar<T, U>(param1: T, param2: U): { primera: T, segunda: U } {
    return { primera: param1, segunda: param2 };
}

let resultado1 = combinar("Hola", 10);
console.log(resultado); 

//9. Crea una función que acepte un parámetro que pueda ser tanto un número como una cadena de texto. La función debe devolver un mensaje indicando el tipo del parámetro.

function verificarTipo(valor: number| string):string{
    if(typeof valor === 'number'){
        return 'Es un numero';
    } else{
        return 'Es una cadena de texto.';
    }
}

console.log(verificarTipo(123));
console.log(verificarTipo('Hola'));

//10. Crea un enum llamado Color con los valores Rojo, Verde y Azul. Luego, crea una variable que almacene un color y usa el enum para asignar el valor.

enum Color{
    Rojo = 'Rojo',
    Verde = 'Verde',
    Azul = 'Azul',
}

let colorFavorito: Color = Color.Azul;
console.log(colorFavorito);

//11. Crea una función que imprima un mensaje en la consola, pero que no devuelva ningún valor. Usa void como tipo de retorno.

function saludar(nombre: string): void{
    console.log(`Hola, ${nombre}!`)
}

saludar("Carlos");

//12. Crea una función que acepte un parámetro de tipo unknown y maneje el valor de manera segura usando un tipo de comprobación.

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

//13. Crea una función que calcule el factorial de un número de manera recursiva.

function factorial(n: number): number{
    if(n <= 1){
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5));

//14. Crea una arrays que almacene un nombre (como string) y una edad (como number). Accede a sus valores e imprímelos.

let persona1: [string, number] = ['Ruben', 20];

console.log(persona1[0]);
console.log(persona[1]);

//15. Usa el operador as para hacer una aserción de tipo, y haz que TypeScript trate una variable como un tipo específico.

let valor: any ='Hola Mundo';
let longitud1: number = (valor as string).length;

console.log(longitud1);

//16. Crea una función que reciba dos parámetros, pero el segundo parámetro debe ser opcional. Si no se proporciona, debe usar un valor predeterminado.

function saludar1(nombre: string, edad?: number): void {
    if (edad) {
        console.log(`Hola, ${nombre}, tienes ${edad} años.`);
    } else {
        console.log(`Hola, ${nombre}.`);
    }
}

saludar("Carlos");
saludar("Ana");        

//17. Usa type para crear un alias de tipo que represente un objeto con las propiedades nombre y edad.

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

//18. Crea una clase llamada Rectángulo que tenga un método area que calcule y devuelva el área del rectángulo.

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

//19. Crea una clase Animal con una propiedad nombre y un método hablar. Luego, crea una clase Perro que herede de Animal y sobrescriba el método hablar.

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

//20. Crea una clase con propiedades que utilicen los modificadores de acceso public, private y protected para controlar su visibilidad.

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

//21. Usa un switch para determinar el día de la semana según un número.

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

//22. Usa el bucle for...of para recorrer un array y sumar sus elementos.

let numero4: number[] = [1, 2, 3, 4, 5];
let suma5: number = 0;

for (let numero4 of numeros) {
    suma5 += numero4;
}

console.log(suma); // Imprime: 15

//23. Crea una función que reciba dos valores booleanos y devuelva el resultado de aplicar los operadores lógicos AND, OR y NOT.

function operadoresLogicos(a: boolean, b:boolean): void{
    console.log (`a AND b: ${a && b}`);
    console.log (`a OR b: ${a && b}`)
    console.log(`NOT a: ${!a}`);
    console.log(`NOT b: ${!b}`);
}

operadoresLogicos(true, false);

//24. Crea una función tipo flecha que reciba un número y devuelva su cuadrado.

const cuadrado = (numero5: number): number =>{
    return numero5 * numero5;
}

console.log(cuadrado(4));

//25. Dado un array de números, crea un nuevo array con el doble de cada número utilizando el método map.
let numeros7 = [1, 2, 3, 4, 5];
let doubles = numeros.map(num => num * 2);

/*map() utiliza para crear un nuevo array con los resultados de la ejecución de una función en cada uno de los elementos del array original.*/ 

console.log(doubles);

//26. Crea una clase Matematica con un método estático que calcule la raíz cuadrada de un número.

class Matematica{
    static raizCuadrada(n: number): number {
        return Math.sqrt(n);
    }
}

console.log(Matematica.raizCuadrada(9));

/*Math.sqrt(n): devuelve la raíz cuadrada de un número n. Si el número es negativo, Math.sqrt() devuelve NaN (Not a Number).*/

//27. Usa los métodos Object.keys y Object.values para obtener las claves y los valores de un objeto.

let persona10 = {
    nombre: "Carlos",
    edad: 35,
    profesion: "Arquitecto"
};

let claves = Object.keys(persona);
let valores = Object.values(persona);

/*
    Object.keys() devuelve un array con las claves del objeto.
    Object.values() devuelve un array con los valores del objeto. 
*/

console.log(claves);
console.log(valores);

//28. Usa el método slice() para clonar un array.

let original = [1, 2, 3, 4, 5, 6];
let clona = original.slice();

console.log(clona);

/*Slice:  devuelve una copia superficial (no modifica el array original). */

//29. Usa el método every() para verificar si todos los números de un array son pares.

let numeros29 = [2, 4, 6, 8];
let todosPares = numeros29.every(num => num % 2 === 0);

console.log(todosPares);

/* 
    Every() verifica si todos los elementos del array cumplen con una condición.
    Retorna true si todos los elementos cumplen la condición, o false si al menos uno no la cumple.
*/

//30. Usa el método includes() para verificar si el número 5 está presente en el array.

let numeros30 = [1, 2, 3, 4, 5];
let contieneCinco = numeros30.includes(5);

console.log(contieneCinco);

/*
includes() devuelve true si el array contiene el valor especificado, de lo contrario, devuelve false.
*/ 