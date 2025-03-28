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
id = "abc"; 

// 11. Función con tipo unión
function mostrarId(id: string | number): void {
  console.log(id);
}

// 12. Aserciones de tipo
let algo: any = "Esto es un string";
let longitud: number = (<string>algo).length; 

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
console.log(contenedorNumero.obtenerValor()); 

// 17. Métodos estáticos en clases
class Calculadora {
  static sumar(a: number, b: number): number {
    return a + b;
  }
}

console.log(Calculadora.sumar(5, 3)); 

// 18. Tipo never
function lanzarError(message: string): never {
  throw new Error(message);
}

// 19. Uso de tipos condicionales
type EsString<T> = T extends string ? true : false;

type Resultado1 = EsString<string>;  
type Resultado2 = EsString<number>;  

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


// 24. Uso de this en métodos de clase
class Rectangulo {
  constructor(public alto: number, public ancho: number) {}

  calcularArea(): number {
    return this.alto * this.ancho;
  }
}

const rect = new Rectangulo(10, 5);
console.log(rect.calcularArea()); 

// 25. Decoradores de clases
function Logger(constructor: Function) {
  console.log("Clase instanciada:", constructor.name);
}

@Logger
class Persona {
  constructor(public nombre: string) {}
}

const persona2 = new Persona("Carlos");

// 25. **Aserción de tipo con "as"**
let valor: any = "Hola Mundo";
let longitud: number = (valor as string).length;

// 26. **Uso de `unknown`**
let datos: unknown = 5;
if (typeof datos === "number") {
  console.log(datos * 2);  
}

// 27. **Tipo `null` y `undefined`**
let variableNula: null = null;
let variableIndefinida: undefined = undefined;

// 28. **Clase con método estático privado**
class Logger {
  private static instance: Logger;

  private constructor() {}

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  log(message: string): void {
    console.log(message);
  }
}

Logger.getInstance().log("Singleton pattern in action!");

// 29. **Extender una interfaz con otra**
interface Animal {
  nombre: string;
  edad: number;
}

interface Mascota extends Animal {
  tipo: string;
}

let mascota: Mascota = {
  nombre: "Luna",
  edad: 3,
  tipo: "Perro"
};

// 30. **Función con callback**
function saludar(callback: (nombre: string) => void): void {
  callback("Juan");
}

saludar((nombre) => {
  console.log(`Hola, ${nombre}`);
});

// 31. **Type Guard (Guarda de tipo personalizada)**
function esString(valor: unknown): valor is string {
  return typeof valor === "string";
}

let valor2: unknown = "Hola";

if (esString(valor2)) {
  console.log(valor2.toUpperCase());  
}

// 32. **Combinación de tipos y uso de `&`**
interface Persona {
  nombre: string;
  edad: number;
}

interface Direccion {
  calle: string;
  ciudad: string;
}

type PersonaConDireccion = Persona & Direccion;

let personaConDireccion: PersonaConDireccion = {
  nombre: "Carlos",
  edad: 35,
  calle: "Calle Falsa 123",
  ciudad: "Springfield"
};

// 33. **Tipo `Record`**
type Fruta = "manzana" | "banana" | "cereza";

const frutas: Record<Fruta, number> = {
  manzana: 10,
  banana: 5,
  cereza: 20
};

// 34. **Uso de `keyof`**
type Producto = {
  nombre: string;
  precio: number;
};

function obtenerValor<T>(obj: T, clave: keyof T): any {
  return obj[clave];
}

let producto: Producto = { nombre: "Camiseta", precio: 20 };
console.log(obtenerValor(producto, "nombre"));  

// 35. **Uso de `infer` en tipos condicionales**
type TipoDeRetorno<T> = T extends (...args: any[]) => infer R ? R : never;

type Resultado = TipoDeRetorno<(x: number) => string>;  

// 36. **Funciones con argumentos opcionales**
function saludar2(nombre: string, apellido?: string): string {
  return apellido ? `${nombre} ${apellido}` : nombre;
}

console.log(saludar2("Juan"));         
console.log(saludar2("Juan", "Pérez"));

// 37. **Funciones con parámetros por defecto**
function multiplicar(a: number, b: number = 2): number {
  return a * b;
}

console.log(multiplicar(5));  
console.log(multiplicar(5, 3)); 

// 38. **Uso de `this` en clases con herencia**
class Vehiculo {
  constructor(public marca: string) {}

  mostrarMarca(): void {
    console.log(this.marca);
  }
}

class Coche extends Vehiculo {
  constructor(marca: string, public modelo: string) {
    super(marca);
  }

  mostrarDetalles(): void {
    console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`);
  }
}

let coche = new Coche("Toyota", "Corolla");
coche.mostrarDetalles();

// 39. **Type alias y tipos literales con valores**
type Estado = "activo" | "inactivo" | "pendiente";

function cambiarEstado(estado: Estado): void {
  console.log(`El estado es: ${estado}`);
}

cambiarEstado("activo");

// 40. **Uso de `function overloading` (Sobrecarga de funciones)**
function concatenar(a: string, b: string): string;
function concatenar(a: number, b: number): number;
function concatenar(a: any, b: any): any {
  return a + b;
}

console.log(concatenar("Hola", " Mundo")); // Hola Mundo
console.log(concatenar(5, 3));            // 8

// 42. **Desestructuración de arrays**
const colores: string[] = ["rojo", "verde", "azul"];
const [primero, segundo, tercero] = colores;

console.log(primero);  
console.log(segundo);  

// 43. **Uso de `Rest` y `Spread`**
function sumarTodo(...valores: number[]): number {
  return valores.reduce((a, b) => a + b, 0);
}

console.log(sumarTodo(1, 2, 3, 4)); 

const numeros2 = [5, 6, 7];
console.log([1, 2, ...numeros2, 8]); 

// 44. **Modificadores de acceso en clases**
class Persona4 {
  public nombre: string;
  private edad: number;
  protected direccion: string;

  constructor(nombre: string, edad: number, direccion: string) {
    this.nombre = nombre;
    this.edad = edad;
    this.direccion = direccion;
  }

  public obtenerEdad(): number {
    return this.edad;
  }
}

const persona4 = new Persona4("Laura", 30, "Madrid");
console.log(persona4.obtenerEdad()); 

// 45. **Uso de `Optional chaining`**
let usuario: { direccion?: { ciudad?: string } } = {};
console.log(usuario.direccion?.ciudad); 

// 46. **Uso de `Nullish coalescing`**
let valor3: string | null = null;
let resultado = valor3 ?? "Valor por defecto";
console.log(resultado); 

// 47. **Mapas en TypeScript**
const mapa: Map<string, number> = new Map();
mapa.set("uno", 1);
mapa.set("dos", 2);

console.log(mapa.get("uno")); 
console.log(mapa.size);        

// 48. **WeakMap en TypeScript**
let obj = {};
const weakMapa = new WeakMap();
weakMapa.set(obj, "valor asociado");

console.log(weakMapa.get(obj)); // valor asociado

// 49. **Uso de `Set` en TypeScript**
const conjunto = new Set([1, 2, 3, 4]);
conjunto.add(5);
console.log(conjunto.has(3));  
console.log(conjunto.size);    

// 50. **Uso de `WeakSet` en TypeScript**
const objeto1 = {};
const objeto2 = {};

const weakSet = new WeakSet();
weakSet.add(objeto1);

console.log(weakSet.has(objeto1)); 
console.log(weakSet.has(objeto2)); 
