///Ejercicios 3-1
//Ejercicio 1
var noValgoNi5 = 4
console.log(noValgoNi5)

// Ejercicio 2
var miAnioDeNacimiento = 1992
var meGustariaTener80Anios = 80
var voyATener80ElAnio = miAnioDeNacimiento + meGustariaTener80Anios
console.log(voyATener80ElAnio)

// Ejercicio 3
var costoDeUnaTele = 10000
var ahorros = 9000
var dineroQueMeFalta = costoDeUnaTele - ahorros
console.log("Te falta para comprar la tele: $" + dineroQueMeFalta)

// Ejercicio 4
var diasPorAnio = 365
var cantidadDeAniosEnUnaDecada = 10
var cantidadDeDiasEnUnaDecada = diasPorAnio * cantidadDeAniosEnUnaDecada
console.log(cantidadDeDiasEnUnaDecada)

// Ejercicio 5
var PorcionesEnLaMesa = 24
var PorcionesPorPizza = 8
var PizzasEnLaMesa = PorcionesEnLaMesa / PorcionesPorPizza
console.log("Tengo en la mesa un total de pizzas:" + PizzasEnLaMesa)

// Ejercicio 6
var miAnimalFavorito = "Perro"
if (miAnimalFavorito == "Perro") {
    console.log(true)
}
else {
    console.log(false)
}

// Ejercicio 7
console.log("flan" != "flan con dulce de leche")

// Ejercicio 8
var soyMayorDeEdad = (29 > 17)
console.log(soyMayorDeEdad)

// Ejercicio 9
var soyMenorDe25 = (29 < 25)
console.log(soyMenorDe25)

// Ejercicio 10
var estamosEnEnero = "Marzo" === "Enero"
console.log(estamosEnEnero)

// Ejercicio 11
var noEstamosEnEnero = "Marzo" !== "Enero"
console.log(noEstamosEnEnero)

// Ejercicio 12
var miNotaEnElParcial = 8
var notaMinimaParaAprobar = 6
var estoyAprobado = miNotaEnElParcial >= notaMinimaParaAprobar
console.log(estoyAprobado)

// Ejercicio 13
var esHoraDeAlmorzar = (18 <= 12)
console.log(esHoraDeAlmorzar)

///Ejercicio 3-2
//Ejercicio 1
/*
    Algoritmo es una consecución de pasos a seguir para lograr un determinado fin. 
    Ejemplo : Algoritmo para hacer un huevo frito
    Paso 1: Poner aceite a calentar en una sarten 
    Paso 2: Una vez que el aceite esté bien caliente, tomar un huevo, romperlo y dejar caer el contenido en la sarten con aceite
    Paso 3: Cuando el huevo toma color y esté cocido, tomar una espatula y sacarlo del aceite
    Paso 4: Colorcar el huevo frito en un plato y comer.
*/

//Ejercicio 2 
/*
    Pseudocódigo es una narración de un algoritmo y/o código de programación genérica.
    Ejemplo: Ejercicio 12 de modulo 3-1
    declarar variable con nombre "miNotaEnElParcial" y asignarle valor 8
    declarar variable con nombre "notaMinimaParaAprobar" y asignarle valor 6
    declarar variable con nombre "estoyAprobado" y asignarle el valor de comparar si la variable "miNotaEnElParcial" es mayor o igual a la variable "notaMinimaParaAprobar"
    Mostrar el resultado de la variable "estoyAprobado" por pantalla
*/

//Ejercicio 3
//a)
var BaseRectangulo = 20
var AlturaRectangulo = 30
var SuperficieRectangulo = BaseRectangulo * AlturaRectangulo
console.log(SuperficieRectangulo)

var BaseTriangulo = 40
var AlturaTriangulo = 60
var SuperficieTriangulo = ((BaseTriangulo * AlturaTriangulo) / 2)
console.log(SuperficieTriangulo)

var Pi = 3.14
var RadioCirculo = 50
var SuperficieCirculo = (Pi * (RadioCirculo * RadioCirculo))
console.log(SuperficieCirculo)

//b)
var numeroUno = 4
var numeroDos = 5
var numeroTres = 6
var Producto = numeroUno * numeroDos * numeroTres
var Suma = numeroUno + numeroDos + numeroTres
var Promedio = ((numeroUno + numeroDos + numeroTres) / 3)
console.log(Producto)
console.log(Suma)
console.log(Promedio)

//c)
var Remera = 5
var Pantalon = 7
var Medias = 3
var Sweater = 6
var Sombrero = 4
var TotalProductos = Remera + Pantalon + Medias + Sweater + Sombrero
var Descuento = ((TotalProductos) * 0.15)
console.log("El descuento aplicado es: $" + Descuento)
var TotalConDescuento = TotalProductos - Descuento
console.log("El total final con el descuento es: $" + TotalConDescuento)

//d)
var CantidadDePesos = 500
var Cambio = 200
var CambioDolar = CantidadDePesos / Cambio
console.log(CambioDolar)

// e)
var Factura = 1000
var Iva = Factura * 0.21
console.log(Iva)

