/*
const arreglo = ["Guillermo", "Chang",34];

console.log(arreglo);

let objeto = {
    nombre: "Guillermo",
    apellido: {
            paterno: "Chang",
            materno: "Gordillo" },
    edad: 34,
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido.paterno; //Se usa this para decirle que jale el atributo dentro del objeto y no una variable fuera de nuestro bloque
    }
}

//console.log(objeto.nombre);
//console.log(objeto["nombre"]);

//console.log(objeto.nombreCompleto());

document.getElementById("id").innerHTML= objeto.nombreCompleto();
*/

//
//Clases en JS
//
/*
class Rectangle{
    constructor (height, width){
        this.height = height;
        this.width = width;
    }

    //Getter
    get area(){
        return this.calcArea();
    }

    //Method
    calcArea(){
    return this.height*this.width;
    }
}

const square = new Rectangle(10,10);
const rectangulo = new Rectangle(20,30);
const rectangulo2 = new Rectangle(25,15);

console.log(square.area);
console.log(rectangulo.area);
console.log(rectangulo2.area);
*/

/*
class persona{
    constructor (name, year){
        this.name = name;
        this.year = year;
    }
}

const persona1 = new persona("Guillermo",1987);
const persona2 = new persona("Angeles",1999);

console.log(persona1);
console.log(persona2);

document.getElementById("ID").innerHTML=persona1.name;
//document.getElementById("ID").innerHTML=persona2.name;
*/

class padre {
    constructor (apellido){
        this.apellidoPadre=apellido;
    }
}

class hijo extends padre {
    constructor(nombre,apellido){
        super(apellido);
        this.nombreHijo = nombre;
    }

    registro (){
        return "El nombre del " + this.nombreHijo + " " + this.apellidoPadre;
    }
}

var x = prompt("Cual es el apellido del Padre?");
var y = prompt("Cual es el nombre del primer hijo?");
var z = prompt("Cual es el nombre del segundo hijo?");

let Hijos = new hijo(y, x);
let Hijos2 = new hijo(z, x);

document.getElementById("ID").innerHTML = Hijos.registro();
document.getElementById("ID2").innerHTML = Hijos2.registro();

