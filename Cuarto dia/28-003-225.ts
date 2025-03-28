// 1. Declarar una variable tipo string
let nombre: string = "Juan";

// 2. Declarar un número con tipo explícito
let edad: number = 25;

// 3. Array de números
let numeros: number[] = [1, 2, 3, 4, 5];

// 4. Función que suma dos números
function suma(a: number, b: number): number {
  return a + b;
}

// 5. Función con retorno void
function saludar(nombre: string): void {
  console.log(`Hola, ${nombre}!`);
}

// 6. Interfaz simple
interface Persona {
  nombre: string;
  edad: number;
}

// 7. Usar una interfaz
let persona1: Persona = {
  nombre: "Carlos",
  edad: 30
};

// 8. Función con tipo de retorno de una interfaz
function obtenerPersona(): Persona {
  return { nombre: "Ana", edad: 28 };
}

// 9. Tipo de tupla
let punto: [number, string] = [10, "X"];

// 10. Tipos unión
let id: string | number = 123;
id = "abc"; // También válido

// 11. Función con tipo unión
function mostrarId(id: string | number): void {
  console.log(id);
}

// 12. Aserciones de tipo
let algo: any = "Esto es un string";
let longitud: number = (<string>algo).length; // Aserción de tipo

// 13. Generics con funciones
function identificar<T>(valor: T): T {
  return valor;
}

// 14. Interfaz genérica
interface Caja<T> {
  valor: T;
}

let cajaNumero: Caja<number> = { valor: 123 };
let cajaString: Caja<string> = { valor: "Hola" };

// 15. Clases y herencia
class Animal {
  constructor(public nombre: string) {}

  hacerSonido(): void {
    console.log("Sonido de animal");
  }
}

class Perro extends Animal {
  hacerSonido(): void {
    console.log("Guau");
  }
}

const perro = new Perro("Rex");
perro.hacerSonido(); // Guau

// 16. Clase con generics
class Contenedor<T> {
  private valor: T;

  constructor(valor: T) {
    this.valor = valor;
  }

  obtenerValor(): T {
    return this.valor;
  }
}

const contenedorNumero = new Contenedor(100);
console.log(contenedorNumero.obtenerValor()); // 100

// 17. Métodos estáticos en clases
class Calculadora {
  static sumar(a: number, b: number): number {
    return a + b;
  }
}

console.log(Calculadora.sumar(5, 3)); // 8

// 18. Tipo never
function lanzarError(message: string): never {
  throw new Error(message);
}

// 19. Uso de tipos condicionales
type EsString<T> = T extends string ? true : false;

type Resultado1 = EsString<string>;  // true
type Resultado2 = EsString<number>;  // false

// 20. Tipos literales
type Color = 'rojo' | 'verde' | 'azul';

let colorFavorito: Color = 'rojo';

// 21. Tipos de utilidad Partial
function actualizarPersona(persona: Partial<Persona>): Persona {
  return {
    nombre: persona.nombre ?? "Desconocido",
    edad: persona.edad ?? 0
  };
}

// 22. Tipos de utilidad Required
function hacerRequerido<T>(obj: T): Required<T> {
  return obj as Required<T>;
}

let persona: Required<{ nombre?: string; edad?: number }> = { nombre: "Juan", edad: 25 };

// 23. Tipos de utilidad Readonly
function congelar<T>(obj: T): Readonly<T> {
  return Object.freeze(obj);
}

let personaReadonly: Readonly<{ nombre: string; edad: number }> = { nombre: "Pedro", edad: 40 };
// personaReadonly.edad = 45;  // Error: No se puede asignar a una propiedad de solo lectura.

// 24. Uso de this en métodos de clase
class Rectangulo {
  constructor(public alto: number, public ancho: number) {}

  calcularArea(): number {
    return this.alto * this.ancho;
  }
}

const rect = new Rectangulo(10, 5);
console.log(rect.calcularArea()); // 50

// 25. Decoradores de clases
function Logger(constructor: Function) {
  console.log("Clase instanciada:", constructor.name);
}

@Logger
class Persona {
  constructor(public nombre: string) {}
}

const persona2 = new Persona("Carlos"); // Imprime: Clase instanciada: Persona

