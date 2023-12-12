//Simulador de venta de productos
let precioShort = 6000;
let precioTop = 5000;
let precioRemera = 7000;
let precioBiker = 6500;
let producto, cuotas, precioUnitario, precioFinal;
let consultaProducto = true;
let eleccionCuotas = true;
let compraFinal = "";
let sumaTotal = 0;

// FUNCION
function precioCuotas(precioParcial, cuotas){
    switch(cuotas){
        case 1:
            precioFinal = precioParcial;
            break;
        case 3:
            precioFinal = precioParcial * 1.10;
            break;
        case 6:
            precioFinal = precioParcial * 1.15;
            break;
        default:
            alert ("Cantidad de cuotas no valida");
    }
    precioFinal = Math.round(precioFinal);
}

//Ingreso Producto
while (consultaProducto){
    producto = prompt(
        `Ingrese el producto que quiera comprar:
        •Top
        •Remera
        •Biker
        •Short`).toLowerCase();
    if (producto === "short") {
        precioUnitario = precioShort;
        alert(`El precio del short por unidad es de ${precioUnitario}`);
    }else if (producto === "top") {
        precioUnitario = precioTop;
        alert(`El precio del top por unidad es de ${precioUnitario}`);
    } else if (producto === "remera") {
        precioUnitario = precioRemera;
        alert(`El precio la remera por unidad es de ${precioUnitario}`);
    } else if (producto === "biker") {
        precioUnitario = precioBiker;
        alert(`El precio de la biker por unidad es de ${precioUnitario}`);
    } else{
        alert("Producto inexistente");
    }
    //Ingreso Cantidad de producto
    let cantidad = Number(prompt("Ingrese la cantidad que quieras comprar"));

    let precioParcial = precioUnitario * cantidad;
    alert(`El precio por ${cantidad} unidad/es es de $${precioParcial}`);
    // Registro de precio y productos
    sumaTotal = sumaTotal + precioParcial;
    compraFinal = compraFinal + producto + " x" + cantidad + " "; 
    // Consulta para seguir comprando
    if (prompt("Si desea seguir comprando, escriba: si").toLowerCase() != "si"){
        consultaProducto = false;
    }
}
//Ingreso Cuotas
while (eleccionCuotas){
    cuotas = Number(prompt(
        `Ingrese la cantidad de cuotas en las que deseas pagar:
        •1 cuota sin interés
        •3 cuotas con 10% de interés
        •6 cuotas con 15% de interés`));
    if (!(cuotas === 1 || cuotas === 3 || cuotas === 6)){
        alert("Cantidad de cuotas no valida");
    } else {
        eleccionCuotas = false;
    }
}
// Calculo de precio total con recargo por abonar con cuotas
precioCuotas(sumaTotal, cuotas);
//Resumen de la compra
alert(`Los productos seleccionados son:
${compraFinal}
Lo pagarás en ${cuotas} cuota/s.
El precio final es de $${precioFinal}.
¡Muchas gracias!`);