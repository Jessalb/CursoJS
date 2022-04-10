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

//Ejercicio 4
var RespuestaMensajeFinal = ""
var pocisionEnlaCarrera = 6
if (pocisionEnlaCarrera == 1) {
    RespuestaMensajeFinal = "FELICITACIONES SALISTE PRIMERO"
}
else {
    if (pocisionEnlaCarrera == 2) {
        RespuestaMensajeFinal = "Te falta poquito para ganar"
    }
    else {
        if (pocisionEnlaCarrera == 3) {
            RespuestaMensajeFinal = "Sos un orgullo para tu familia"
        }
        else {
            if (pocisionEnlaCarrera > 3) {
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
