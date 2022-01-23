
//
//Ejercicio #1
//
/*
class Persona{
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    get Describe(){
        return this.nombre + ", " + this.edad + " years old";
    }
}

function agregar(){

    x = document.getElementById("entrada").value;
    y = document.getElementById("edad").value;

    let individuo = new Persona(x,y);

    var x = document.createElement("LI");
    var t = document.createTextNode(individuo.Describe);
    x.appendChild(t);
    document.querySelector("#container ol").appendChild(x);

    document.getElementById("entrada").value="";
    document.getElementById("edad").value="";
}
*/

//
//Ejercicio 2
//

class Book{
    constructor(title,genre,author,read,readDate){
        this.title=title;
        this.genre=genre;
        this.author=author;
        this.read=read;
        this.readDate=readDate;
    }

    get Escribir(){
        return "Nombre: " + this.title + "\n|Genero: " + this.genre + "\n|Autor: " + this.author + "\n|Leido: " + this.read + "\n|Fecha: " + this.readDate ;
    }
}

function leido(res){
    if(res=="Si"){
        return true;
    }else if(res=="No"){
        return false;
    }else{
        return "Respuesta invalida";
    }
}

var libros = [];

for(i=0;i<2;i++){

let x = prompt("Cual es el nombre del libro?");
let y = prompt("Cual es el genero del libro?");
let z = prompt("Cual es el autor?");
let w = leido(prompt("Ya leiste el libro? ('Si' o 'No') "));
let q = new Date(prompt("En que fecha lo leiste? \nFormato de respuesta: 2015-03-25 \n(Si no lo has leido puedes dejar en blanco el espacio)"));


libros[i] = new Book(x,y,z,w,q);

}

libros.forEach(function(elemento,indice,array){
    document.getElementById(("libro"+indice)).innerHTML = elemento.Escribir;
    console.log(elemento);
})


