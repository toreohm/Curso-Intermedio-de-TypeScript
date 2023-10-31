/*Las interfaces nos permiten crear moldes de objetos con sus respectivas propiedades y tipado.
Para generar interfaces usamos la palabra reservada interface */

//Repasando lo anterior...
//Con una interfaz esto no se puede ser, ya que siempre debe de tener un cuerpo {}.
type Sizes = 'S' | 'M' | 'L' | 'XL';
type userId = string | number;
type Product = {
  id: string | number,
  title: string,
  createdAt: Date,
  stock: number,
  size: Sizes,
};

const products: Product[] = [];
products.push({id: 1, title: "Chess", createdAt: new Date(), stock: 10, size: 'M'});

//Interfaces vs. Type
/*✅Utilizamos type para definir principalmente tipos primitivos o declaraciones cortas y puntuales,
 mientras que con una interface definimos una estructura llave-valor de propiedades que describan lo que
 debe tener un objeto.
 ✅Los interface se pueden fácilmente extender (realizar herencia), mientras que con los type no.
 Esto los hace más escalables. */

 interface Product2 {
	id: number | string,
	title: string,
	price: number,
	stock: number,
	size?: Sizes,
  createdAt: Date,
}

function addProduct(data: Product) {
  products.push(data);
}

//Interface as Function Type
interface MyClassProps {
  onChange(name: string): any;
  doSomething(): void;
  optionalFunction?(name: string): number;
}

//Interface for Array Type
interface NumList {
  [index:number]:number
}

let numArr: NumList = [1, 2, 3];
numArr[0];
numArr[1];

interface IStringList {
  [index:string]:string
}

let strArr : IStringList = {};
strArr["TS"] = "TypeScript";
strArr["JS"] = "JavaScript";
