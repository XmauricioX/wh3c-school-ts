/*

------ DATATYPES 
Hay tres primitivas principales en JavaScript y TypeScript.

boolean- valores verdaderos o falsos
number- números enteros y valores de coma flotante
string- valores de texto como "TypeScript Rocks"
any- desactiva la verificacion de datatypes y deja que se use cualquier datatype
undefined- dato no definido
null- dato nullo
readonly- no deja que se modifique algo como un array
never- no deja que se le declaren datatypes, al hacerlo da error
unknown- alternativa a any pero mas segura, luego hay que usar AS para definirle un datatype

También hay 2 primitivas menos comunes que se utilizan en versiones posteriores de Javascript y TypeScript:

bigint- números enteros y valores de coma flotante, pero permite números negativos y positivos más grandes que el numbertipo.
symbol- se utilizan para crear un identificador único global.

es posible que vea tipos primitivos en mayúscula como Boolean.

boolean !== Boolean
pero estos se usan para casos muy especificos

---- VARIABLES

En ts se pueden declarar variables implicitas y explicitas, es decir, aclarar que datatype usara
o no hacerlo

*/

//- EXPLICITO
const firstName: string = "dylan"
// las declaraciones sxplicitas son mas faciles de leer y son mas intencionales

//- IMPLICITO
const FirstName = "dylan"
// en las implicitas ts adivinara el datatype segun el tipo de dato asignado

/*

hacer que ts adivine el datatype se llama inferir

al querer reasignarle valores va a arrojar error dado que ya tiene un datatype ya sea explicito o implicito

firstName = 3
FirstName = true

las dos dan error

aveces ts no difiere entre datatypes, es cuando usa any como datatype para deshabilitar la verificacion de datatypes
como al usar JSON, al no saber que dato puede venir se declara implicitamente como any
esto de puede deshabilitar en en tsconfig habilitando notImplicitAny

--- SPECIALS DATATYPES
-ts tiene tipos especiales que pueden no hacer referencia a ningun tipo de dato en especifico

-any
any es un datatype que deshabilita la verificacion de datatypes permitiendo usar cualquier datatypes

let u = true
u = "hola" /da error por que no se puede reasignar ya que se infiere de tipo string

let v: any = 4
v = "hola" /esto no da error ya que al agregar any, la variable v puede almacenar cualquier datatype


-unknown
es una alternativa similar a any pero mas segura

ta evitara que unknown utilize datatypes
unknownse utiliza mejor cuando no se sabe el tipo de datos que se están escribiendo. Para agregar un tipo más adelante, deberás convertirlo.
La conversión es cuando usamos la palabra clave "as" para decir que la propiedad o variable es del tipo convertido.

-never
arroja un error cada vez que se intenta definir con un tipo

let x: never = true; / da error al intentar definirlo como booleano por ser de tipo never

neverrara vez se usa, especialmente solo, su uso principal es en genéricos avanzados.
(no se lo que es un generico avanzado xd)

-undefined
-null

hacen referencia a los datatypes primitivos de js

let a : undefined = undefined;
let d : null = null;

Estos tipos no tienen mucha utilidad a menos que los strictNullChecks estén habilitados en el archivo tsconfig.json

--- MATRICES / ARRAYS

const names: string[] = []
names.push("dylan"); 
esto no da error ya que el array fue definido con el datatype string

const names: readonly = ["dylan"]
names.push("pipo");
esto da error ya que readonly no deja modificar el array

-ts puede inferir el datatype que tenga cierto array si tiene valores

let numbers = [1,2,3,4]; esto sera inferido como datatype number
numbers.push(5); esto no daria error 
numbers.push("hola"); esto da error 

let numeros:number = number = [1,2,3,4,5]
no da error ya que coinciden los datatypes

---TUPLAS / MATRICES ESCRITAS / ARRAYS ESCRITOS

las tuplas o arrays se definian con =
let array = []
pero ahora se definen con :
let array : []

para reasignas si se usa =

Una tupla es un array escrita con una longitud y tipos predefinidos para cada índice.
Las tuplas son excelentes porque permiten que cada elemento del array sea un tipo de valor conocido.
Para definir una tupla, especifique el tipo de cada elemento en la matriz:

esto seria como la firma de una funcion
definicion de la tupla
let unaTupla = [number, string, boolean]

ahora la inicializamos
let unaTupla = [3,"hola", true]

si cambiamos el orden que se definio antes dar error 
unaTupla = ["hola", 3 , false]
aunque el booleano esta en orden aun asi dara error por no usar el orden de los demas

-tupla de solo lectura
una buena practica es hacer readonly a las tuplas
se supone que las tuplas no deberian poder ser cambiadas mas alla de sus datatypes declarados
pero se puede

definimos la tupla

se inicializa
let masTuplas: [number, boolean, string];

se agrega
masTuplas = [5,true,"esto esta correcto"]

se agrega mas
masTuplas.push("esto sigue estando bien")

se agrega todabia mas
masTuplas.push(553)

se muestra
console.log(masTuplas)
da esto: [ 5, true, 'esto esta correcto', 'esto sigue estando bien', 553 ]

con lo cual se determina que las tuplas tienen datos fuertemente definidos solo para los valores
iniciales

-con readonly

se define la tuple con readonly => esta es otra forma de definir ya que se esta definiendo y
agregando en la misma linea

let tuplaReadOnly: readonly [number,boolean,string] = [5,true,"esta tupla solo se lee"];

se intenta agregar pero no se puede
tuplaReadOnly.push("esto no se puede unu")

-tuplas con indices nombrados
las tuplas con nombre dan mas contexto a nuestros indices, (los indices son los items que tenga
la tupla)
 ej:
 const graph: [x:number, y:number] = [55.3, 2234];

-destructuracion de tuplas

const graph: [number, number] = [33, 346.1];
const [x,y] = graph;

le esta asignando a x e y, el valor de los indices 0 y 1 de graph, es decir se esta destructurando




----- objetos 


let objeto = {
    asd: 3
} 
normalmente se definiria algo asi un objeto en js vanilla

-

esto se puede hacer pero no te deja acceder al dato en si solo al datatype
este objeto tiene dos datatypes detectados, string y number pero no se puede acceder a esos valores
let objeto = {
    a: "as",
    b: 4
}

-

ahora se puede definir el datatype que tendra el objeto en su/s key/s
let objeto: {key1 : string} = {
    key1: "asdf"
}

-

en cuantos mas keys mas valores a definir habra
let objeto: {nombre:string, edad:number} = {
    nombre: "hola",
    edad: 33,
};

-

parametros del objeto que sean opcionales 
let objeto : {nombre: string , estadoCivil: "libre" | "encarcelado" | "en busca de la pasion" } = {
    nombre: "pingo",
    estadoCivil: "libre",
};

-

parametros no obligatorios
let objeto : {nombre: string, edad?: number} = {
    nombre: "mouse"
}

-

para no hacer eso en cada objeto y que sea insostenible existen las interfaces

-primero se crea la interface donde se definden laskeys y sus respectivos datatypes
interface Rectangle {
  height: number,
  width: number
}

-despues ya se pueden llamar a esas keys y sus valores
const rectangle: Rectangle = {
  height: 20,
  width: 10
};

de esta manera al querer acceder te dice el dato que contiene el valor de la key en este caso al mirar width diria 10
no como antes que solo diria number

---object type interference

ts puede inferir en el tipo de dato que tenga un objeto

const car = {
    type: "Toyota",
}; 
estamos definiendo un objeto el cual tiene una key llamada type con el valor "Toyota"

car.type = "Ford"
se accede a type que esta dentro de car y se intenta reasignarle un valor, en este caso no da error por ser del mismo tipo

car.type = 3 
esto da error por que es otro tipo al definido en el objeto car

--- firmas de indice

las firmas de indice pueden ser usadas para objetos sin una lista de tipos definida
entre los : y el = se define el tipo, en este caso se llama index y sera un string el cual guardara un numero

const nameAgeMap: { [index: string]: number } = {}

aca se le define el parametro que tiene que ser string, usando el . y asignandole un valor
el nombre Jack en este caso, es la key y 25 es el valor

nameAgeMap.Jack = 25

nameAgeMap.Mark = "hola"
esto da error por que se intenta asignar un string cuando se definio en el objeto un number

--- enum / enumeraciones
pueden ser texto o numeros pero se recomienda que sea de uno solo a la vez aunmque tecnicamente se puede usar un enum de numeros y strings

enum es una clase que guarda variables inmutables, su utilidad es guardar datos que no van a cambiar y que no deban ser cambiados
ademas de eso se les da in indice a cada valor empezando desde cero y esos valores nunca van a cambiar
al ser una clase el nombre empieza en mayuscula
otra utilidad es asignarle un valor que no sea cero y que empieze a sumar desde ese valor o darle un valor para que no cambie y se quede asi

este es un enum de strings por defecto sin definiciones adicionales
enum CardinalDirections {
    norte,
    sur,
    este,
    noreste,
};

este enum tiene valores los caul va a respetar y no van a cambiar
enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}


en este caso se empieza desde el 1 y los demas van a ser indexados a partir de ese numero
enum CardinalDirections {
  North = 1,
  East,
  South,
  West
}

aca se estan definiendo string como valor, aunque es mas normal usar numeros por usabilidad, legibilidad e intencion
enum CardinalDirections {
  North = 'North',
  East = "East",
  South = "South",
  West = "West"
};

aca se intento reemplazar un enum con un objeto readonly
const statusCodes: readonly {string:number} = {
    NotFound : 404,
    Success : 200,
    Accepted : 202,
    BadRequest : 400
}
esto da error ya que no se puede usar readonly en objetos, solo se puede usar en arrays y tuplas, por que son putos
se podria hacer un array en su defecto como una tupla pero es mas facil usar enum

--- interfaces y alias
los alias y las interfaces permiten compartir tipos facilmente entre diferentes variables y objetos
ya que typescript permite definir los tipos por serparado de las variables y objetos que las van a usar

-tipos de alias / type alias / alias type

un alias es un datatype con nombre personalizado
los alias se pueden usar para definir strings, objetos y arrays
se escriben con la primer letra en mayuscula aunque en minuscula lo entiende igual


definicion de typos:

type CarYear = number;
type CarType = string;
type CarModel = string;

uso de los tipos en un objeto:
type Car = {
    year: CarYear,
    type: CarType,
    model: CarModel,
}; // se estan usando en un objeto los typos creados anteriormente

asignacion de datos usando los tipos:
const carYear: CarYear = 2001;
const carType: CarType = "Toyota";
const carModel: CarModel= "Corolla";

const car: Car = {
    year: carYear,
    type: carType,
    model: carModel,
}; // se estan usando las variables que usan los tipos definidos al principio


--- interfaces
las interfaces solo se aplican a los objetos
se delcaro en mayuscula el primer digito pero puede ser en minuscula

se definen los tipos a utilizar
interface Rectangle {
    height: number,
    width: number,
};

asi se usan los tipos definidos
const rectangle: Rectangle = {
    height: 234,
    width: 332,
};
esto se hace para que los datos que se usen respeten cierto criterio, en este caso que sean numeros

--- extencion de interfaces
extender una interface significa crear una nueva interface con las mismas propiedades mas algo mas
esto se hace para no reescribir el mismo codigo

se crea la interface
interface Rectangle {
    heigth: number,
    width: number,
};

se extiende agregandole una propiedad mas
interface ColoredRectangle extends Rectangle {
    color: string,
};

se crea un objeto usando la interface extendida
const myColoredRectangle: ColoredRectangle = {
    heigth: 20,
    width: 21,
    color: "Red"
}


--- union types o tipos de union
esto se usa cuando los tipos pueden ser mas de uno
es decir que sean opciones a los tipos y que se pueda enviar string o number

esto se hace usando el digito |
string | number

function print(code: string | number) {
    console.log(code)
}

print("hola")
print(333)
los dos casos son correctos ya que acepta los dos tipos


-errores en los tipos de union 
al usar tipos de union hay que saber cual se esta utilizando para evitar problemas como estos

function print(code: string | number) {
    console.log(code.toUppercase())
}

el vsc dice esto en su error:  Property 'toUppercase' does not exist on type 'string'
eso quiere decir que en caso de que code contenga un numero no va a poder aplicarle el uppercase por que no existe para numeros

--- functions | funciones

ts tiene una sintaxis especifica para definir funciones y sus parametros

el tipo del valor devuelto se puede especificar de manera explicita

function getTime(): number{
    return new Date().getTime();
}; // en este caso se esta especificando que sera un numero el parametro 

- devolucion nula

type void, este datatype sirve para que la funcion no devuelva nada

function printHello(): void {
    console.log("hello");
    
} // los parentesis son necesarios para usar void

printHello()
// esto no va a devolver nada por consola...o eso se suponia por que me devuelve el saludo


- parametros en funciones
los parametros se declaran parecido a la sintaxis de una variable

function parameters (a: string, b:number){
    return a + b;
}; // los parentesis en los parametros son necesarios al usar mas de un parametro

por defecto ts va a entender que el parametro es any si no es definido, a menos que haya informacion
de otra manera por ejemplo usando un alias o los datos que se esten usando en la funcion para definirla 
de manera mas especifica


- parametros opcionales

se usa un ? al final del parametro para declararlo como opcional
cuando se usan losparentecis no hace falta los : entre el nombre y los parametros

function add(a:string,b: string,c?: string){
    return a + b + (c || 0);
}
// puede usarse doble pipeline o una sola para definirle un dato en caso de que no llegue uno

-parametros predeterminados

function sumarDiez( a: number, b: number = 10 ){
    return a + b
}
sumarDiez(10)

el resultado seria 20 ya que el parametro b tiene por defecto el valor 10

-parametros con nombre
estos siguen el mismo patron que los parametros normales

function parametrosNombrados(numero1: number, numero2: number){
    return numero1 + numero2;
};

parametrosNombrados(2,2)
daria 4 

function params({ numero1, numero2 } : {numero1: number, numero2: number}){
    return numero1 + numero2
}
params(1,1)
// esta es una forma mas prolija quisas para tener separado los parametros de un lado y las datatypes de los mismos por otro lado
pero es mas larga de escribir

-parametros de descanso
estos siempre son matrices o arrays


function descansoPlis(a:number,b:number,...rest:number[]){
    return a + b + rest[2];
}
// no se como usaria esto pero algun uso debera tener

--- type alias | tipo alias

los datatypes de los paramtetros de una funcion se pueden definir por separado o antes de escribir la funcion
estas tienen sintaxis como las arrow function

primero se define el type
type SumarDiez = (value: number) => number

despues se inicializa
const sumarDiezFunction: SumarDiez = (value)=> value +10

y se llama
sumarDiezFunction(5)

esto seria una funcion de alias entiendo, lo que la diferencia es que no se usa con function


--- cambio de tipos con AS

aveces es necesario anular un tipo de variable y asignarle uno nuevo, es decir carmbiarle el tipo

usando as en variables:
let x: unknown = "hola";
console.log((x as string).length);

el tipo en este caso es desconocido y se esta definiendo como string

la conversion en realidad no cambia el tipo de dato dentro de la variable, el siguiente ejemplo da error

let x: unknown = 4;
console.log((x as string).length); // prints undefined since numbers don't have a length
/por que x sigue teniendo un numero por mas que lo leas como string

ts sabe que no tiene sentido convertir un number en string sin cambiar los datos de la variable

--- conversion de tipo con <>

usar <> es lo mismo que usar AS 

let x : unknown = 3;
console.log( (<string>x).length );
//Este tipo de conversión no funcionará con TSX, como cuando se trabaja con archivos React

---forma correcta de conversion

para evitar los errores de tipo anteriormente nombrados se hace primero una conversion al tipo unknown
y despues al tipo deseado 

let x = "hola";
console.log( ((x as unknown)as number).length )
esto sigue dando error por que x no es un numero es decir su valor no es numerico, aun sigue siendo un string.

--- clases

class Person {
    private name: string;// aca se define que name va a ser un string privado
    
    private constructor(name: string){
        this.name = name; //  aca se esta usando name en el constructor, va a llegarle un string y le va a asignar a name ese string
    }
    
    public getName(): string {
        return this.name; // aca se esta retornando ese valor
    }
};

const person = new Person("Jane"); // el constructor de la case es privado
console.log(person.getName()); //person.name no es accesible desde fuera de la clase mientras sesa privada

-
public- (predeterminado) permite el acceso al miembro de la clase desde cualquier lugar
private- sólo permite el acceso al miembro de la clase desde dentro de la clase
protected- permite el acceso al miembro de la clase desde sí mismo y desde cualquier clase que lo herede, lo cual se trata en la sección de herencia a continuación
-


--- genericos basicos
en ts se pueden establecer normal basicas genericas para funciones, clases, variables, interfaces y no se que mas

ni lo intentendi asi que no voy a copiar algo que no entendi xd

--- tipos de utilidades | utility types

son tipos para manipulacion de tipos

-Partial
cambia todas las propiedades de un objeto para que todas sean opcionales
ejemplo:

interface Point {
  x: number;
  y: number;
}

let pointPart: Partial<Point> = {}; // `Partial` allows x and y to be optional
pointPart.x = 10;


-Required
todas las propiedades son obligatorias
ejemplo:

interface Car {
  make: string;
  model: string;
  mileage?: number;
}

let myCar: Required<Car> = {
  make: 'Ford',
  model: 'Focus',
  mileage: 12000 // `Required` forces mileage to be defined
};

-Record
es un atajo para definir un tipo de objeto con un tipo de clave y un tipo de valor específicos.

ejemplo:
const nameAgeMap: Record<string, number> = {
  'Alice': 21,
  'Bob': 25
};

Record<string, number>es equivalente a{ [key: string]: number }

-Omit
elimina claves de un tipo de objeto

ejemplo:
interface Person {
  name: string;
  age: number;
  location?: string;
}

const bob: Omit<Person, 'age' | 'location'> = {
  name: 'Bob'
  // `Omit` has removed age and location from the type and they can't be defined here

-Pick
elimina todas las claves excepto las especificadas de un tipo de objeto.

ejemplo:
interface Person {
  name: string;
  age: number;
  location?: string;
}

const bob: Pick<Person, 'name'> = {
  name: 'Bob'
  // `Pick` has only kept name, so age and location were removed from the type and they can't be defined here

-Exclude
elimina tipos de una union

ejemplo:
type Primitive = string | number | boolean
const value: Exclude<Primitive, string> = true; // a string cannot be used here since Exclude removed it from the type.

-ReturnType
extrae el tipo de retorno de un tipo de función

ejemplo:
type PointGenerator = () => { x: number; y: number; };
const point: ReturnType<PointGenerator> = {
  x: 10,
  y: 20
};


-Parameters
extrae los tipos de parámetros de un tipo de función como una matriz.

ejemplo:
type PointPrinter = (p: { x: number; y: number; }) => void;
const point: Parameters<PointPrinter>[0] = {
  x: 10,
  y: 20
};

-ReadOnly
hace que un tipo no sea modificable, solo sea de lectura

ejemplo:
interface Person {
  name: string;
  age: number;
}
const person: Readonly = {
  name: "Dylan",
  age: 35,
};
person.name = 'Israel'; // prog.ts(11,8): error TS2540: Cannot assign to 'name' because it is a read-only property.


*/

















