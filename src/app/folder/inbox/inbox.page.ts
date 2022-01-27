import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.page.html',
  styleUrls: ['./inbox.page.scss'],
})
export class InboxPage implements OnInit {

  imc: number;
  peso: number;
  altura: number;
  email: string;
  patron: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  valoresLista = [
    {
      nombre: "Outbox",
      enlace: "/folder/Outbox"
    },
    {
      nombre: "Favorites",
      enlace: "/folder/Favorites"
    },
    {
      nombre: "Archived",
      enlace: "/folder/Archived"
    }
  ];


  constructor() { }

  ngOnInit() {
    let list = [{ key: 4, value: "bat" }, { key: 5, value: "bi" }, { key: 6, value: "hiru" }];
    console.log(list);
    for (let i in list) {
      console.log("Lista in " + i); // "0", "1", "2",
    }

    for (let i of list) {
      console.log("Lista of " + i.value); // "4", "5", "6"
    }

    let miArray: number[] = [1, 2, 3, 4, 5]

    console.log("Index de 1: "+miArray.indexOf(1)); 

    let nuevoArray = miArray.push(6); //Mete por detrás
    console.log(nuevoArray);
    let stringArray =["Uno","Bi","Hiru"];
    console.log(stringArray.pop()); //pop quita por detrás y lo pasa a una variable si se quiere
    console.log(stringArray.length);   
    console.log(stringArray);
    stringArray.unshift("Zero"); //Mete por delante
    console.log(stringArray);
    console.log(stringArray.indexOf("Zero"));
    const inventario = [
      {nombre: 'manzanas', cantidad: 2},
      {nombre: 'bananas', cantidad: 0},
      {nombre: 'cerezas', cantidad: 5}
  ];
  function findCherries(fruit) { 
    return fruit.nombre === 'cerezas';
}
  const resultado = inventario.find(findCherries);
  console.log(resultado);
  const result2 = inventario.find(fruit =>fruit.cantidad<2);
  console.log(result2);
  const result3 = inventario.find(function(fruit){return fruit.cantidad==2})
  console.log(result3);

//     let nuevaLongi = miArray.push(otroElemento);	// Añade al final
// let ultimo = miArray.pop();                 	// Elimina del final
// console.log(miArray.length);                	// Longitud del array
// nuevaLongitud = miArray.unshift(otroElemento);  // Añade al inicio
// let primero = miArray.shift();              	// Elimina del inicio
// let copiaArray = miArray.slice();           	// Copia el array
// let array2 = [...miArray];                  	// Añade elementos array

// // Elimina un elemento empezando por el índice 0
// let eliminado = miArray.splice(0, 1);

// const resultado = miArray.find( elemBuscar => condicionBuscar );
// const resultado = miArray.find( function(elemBuscar) { condicionBuscar } );

// miArray.indexOf(elemento);

  }

  onClick() {
    this.imc = this.peso / (this.altura * this.altura);

    if (this.email != "") {
      alert("Email: " + this.email + " tienes IMC: " + this.imc);
    }

    const variableTipoFuncionConst = function (param1: string, param2: string): string {

      return ("Funcion con constante: " + param1 + " " + param2);
    }

    console.log("CONSTANTE" + variableTipoFuncionConst("Bat", "Bi"));

    function nombre(param1: string, param2: string): string {
      return "resultado function " + param1 + param2;
    }

    console.log("FUNCTION" + nombre("Bat ", "Bi"));


    let variableTipoFuncion = (a: number, b: number) => {
      let resultado = a + b;
      return resultado;

   

//     let nuevaLongi = miArray.push(otroElemento);	// Añade al final
// let ultimo = miArray.pop();                 	// Elimina del final
// console.log(miArray.length);                	// Longitud del array
// nuevaLongitud = miArray.unshift(otroElemento);  // Añade al inicio
// let primero = miArray.shift();              	// Elimina del inicio
// let copiaArray = miArray.slice();           	// Copia el array
// let array2 = [...miArray];                  	// Añade elementos array

// // Elimina un elemento empezando por el índice 0
// let eliminado = miArray.splice(0, 1);

// const resultado = miArray.find( elemBuscar => condicionBuscar );
// const resultado = miArray.find( function(elemBuscar) { condicionBuscar } );

// miArray.indexOf(elemento);


    }

    console.log("LET " + variableTipoFuncion(10, 5));

    function mensaje(texto:string) {
      console.log("Delante"+Date.now());
      setTimeout(function() {
        console.log("hola desde javascript "+texto);
      }, 5000);
      console.log("Detras"+Date.now());
    }
    function alerta() {
      alert("hola");
    }

    mensaje(Date.now().toString());
    alerta();


  }

  // nombre(param1: string, param2: string): string {
  //   return "resultado";
  // }









}
