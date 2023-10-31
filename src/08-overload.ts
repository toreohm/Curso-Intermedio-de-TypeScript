/*Con la sobrecarga de funciones definimos diferentes firmas de una función en la que cada firma
puede manejar cierto tipado de entrada y salida. TypeScript decidirá de manera automática qué firma
es la correcta para usar basándose en los argumentos enviados y el tipo de datos de estos.
La sobrecarga de funciones sólo funciona con function.

La sobrecarga de funciones puede resolver el siguiente problema:*/

//Imaginemos que queremos lograr una función que:
//✅Acepte un string y devuelva un array - entrada:string => salida:string[]
//✅Acepte un array y devuelva un string - entrada:string[] => salida:string

function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join("");
  } else {
    return input.split("");
  }
}

/*El PROBLEMA es: Cuando invocamos la función para enviar los argumentos que deseamos probar,
TypeScript no sabe inicialmente qué tipo de dato le estás mandando de manera específica en el código.
Por tanto, no podemos acceder en la siguiente línea de código a ningún método propio de
un string o un array: */
const rtaArray = parseStr("toreohm");
rtaArray.reverse();

const rtaString = parseStr(["t", "o", "r", "e", "o", "h", "m"]);
rtaString.toUpperCase();

//Se puede resolver de la siguiente manera:

if (Array.isArray(rtaArray)) {
  rtaArray.reverse();
}

if (typeof rtaString === "string") {
  rtaString.toUpperCase();
}

//SOLUCIÓN CON SOBRECARGA DE FUNCIONES
{
  // SOBRECARGAS:
function parseStr(input: string): string[]; // Entrada: string - Salida: string[]
function parseStr(input: string[]): string; // Entrada: string[] - Salida: string
function parseStr(input: number): boolean; // Entrada: number - Salida: boolean

// Función principal y a la que se le aplicarán las sobrecargas:
function parseStr(input: unknown): unknown {
    if (Array.isArray(input)) {
        return input.join(''); // string
    } else if (typeof input === "string"){
        return input.split(''); // string[]
    } else if (typeof input === "number"){
      return (input > 1000); // boolean
  }
}

const rtaArray = parseStr('Nico'); // Salida: array
rtaArray.reverse(); // ✅ Ya podemos acceder a los métodos de un array
console.log('rtaArray', 'Nico =>', rtaArray);

const rtaStr = parseStr(['N','i','c','o']); // Salida: string
rtaStr.toLowerCase(); // ✅ Ya podemos acceder a los métodos de un string
console.log('rtaStr', "['N','i','c','o'] =>",rtaStr);

const rtaBoolean = parseStr(880); // Salida: boolean
Number(rtaBoolean);
console.log('rtaStr', "880 =>", rtaBoolean);
}
/*En conclusión: La sobrecarga de funciones nos permite definir varias declaraciones de una función
con el mismo nombre que puedan recibir diferentes parámetros y/o con diferente tipado.
P.D Sobrecargas con unknown o any van al final*/
