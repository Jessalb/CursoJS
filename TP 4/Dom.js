///Ejercicios 4
//Ejercicio 1
var NumeroUno = 5
var NumeroDos = 9
if (NumeroUno > NumeroDos) {
    alert("El mayor es el numero: " + NumeroUno)
}
else {
    alert("El mayor es el numero: " + NumeroDos)
}

//Ejercicio 2
var NumeroA = 3
if (NumeroA % 2 == 0) {
    console.log(NumeroA + " ES PAR")
}
else {
    console.log(NumeroA + " ES IMPAR")
}

//Ejercicio 3
var ganeLaCarrera = false
if (ganeLaCarrera == true) {
    console.log("GANASTE!")
}
else {
    console.log("Perdiste :-(")
}

//Ejercicio 4
var PosicionEnLaCarrera = 6
if (PosicionEnLaCarrera == 1) {
    alert("FELICITACIONES SALISTE PRIMERO")
}
else {
    if (PosicionEnLaCarrera == 2) {
        alert("Te falta poquito para ganar")
    }
    else {
        if (PosicionEnLaCarrera == 3) {
            alert("Sos un orgullo para tu familia")
        }
        else {
            if (PosicionEnLaCarrera > 3) {
                alert("Volve a tu casa")
            }
            else {
                alert("No tires fruta")
            }
        }
    }
}

//Ejercicio 5
var RespuestaMensajeFinal = ""
var posicionEnLaCarrera = 6
if (posicionEnLaCarrera == 1) {
    RespuestaMensajeFinal = "FELICITACIONES SALISTE PRIMERO"
}
else {
    if (posicionEnLaCarrera == 2) {
        RespuestaMensajeFinal = "Te falta poquito para ganar"
    }
    else {
        if (posicionEnLaCarrera == 3) {
            RespuestaMensajeFinal = "Sos un orgullo para tu familia"
        }
        else {
            if (posicionEnLaCarrera > 3) {
                RespuestaMensajeFinal = "Volve a tu casa"
            }
            else {
                RespuestaMensajeFinal = "No tires fruta"
            }
        }
    }
}
console.log(RespuestaMensajeFinal)


//Ejercicio 6
var ProductoUno = 200
var ProductoDos = 300
var ProductoTres = 700
var TotalFactura = (ProductoUno + ProductoDos + ProductoTres)
if (TotalFactura > 1000){
    var TotalConDescuento = (TotalFactura - (TotalFactura * 0.2))
    console.log( "Se le aplicó un descuento, el total de su factura es: $ " + TotalConDescuento)
}
else { 
    console.log("El total de su factura es: $ " + TotalFactura)
}

//Ejercicio 7
var MontoVendido = prompt("Ingrese el monto vendido: " )
var CodigoVendedor = prompt("Ingrese el codigo del vendedor: " )
if (CodigoVendedor < 100){
    var Comision = (MontoVendido * 0.3)
    alert("El vendedor: " + CodigoVendedor + " ha vendido un total de $ " + MontoVendido + " y se lleva una comision de $ " + Comision)
}
else 
    if (CodigoVendedor >= 100 && CodigoVendedor <= 200){ 
        var Comision = (MontoVendido * 0.2)
        alert("El vendedor: " + CodigoVendedor + " ha vendido un total de $ " + MontoVendido + " y se lleva una comision de $ " + Comision)
  }
  else{
      if (CodigoVendedor > 200){
          var Comision = (MontoVendido * 0.10)
          alert("El vendedor: " + CodigoVendedor + " ha vendido un total de $ " + MontoVendido + " y se lleva una comision de $ " + Comision)
      }
  }

  //Ejercicio 8
  var Numero = prompt("Ingrese un numero del 1 al 7 " )
  if (Numero == 1){
      alert("Lunes")
  }
else 
    if (Numero == 2){
        alert("Martes")
    }
else 
    if (Numero == 3){
        alert("Miercoles")
    }
else 
    if (Numero == 4){
        alert("Jueves")
    }
else 
    if (Numero == 5){
        alert("Viernes")
    }
else 
    if (Numero == 6){
        alert("Sabado")
    }
else 
    if (Numero == 7){
        alert("Domingo")
    }
else 
    alert("Usted ingreso un numero fuera de rango")

//Ejercicio 9
var CantidadDePersonas = prompt("Ingrese la cantidad de personas")
if (CantidadDePersonas < 8){
    var PrecioTotal = (CantidadDePersonas * 1.5)
    alert("El precio total es: " + PrecioTotal)
}
else 
var PrecioTotal = (CantidadDePersonas * 0.5)
alert("El precio total es: " + PrecioTotal)

//Ejercicio 10
var ProductoUno = 20
var ProductoDos = 30
var ProductoTres = 70
var TotalFactura = (ProductoUno + ProductoDos + ProductoTres)
if (TotalFactura > 100){
    var TotalConDescuento = (TotalFactura - (TotalFactura * 0.15))
    console.log( "Se le aplicó un descuento, el total de su factura es: $ " + TotalConDescuento)
}
else { 
    console.log("El total de su factura es: $ " + TotalFactura)
}