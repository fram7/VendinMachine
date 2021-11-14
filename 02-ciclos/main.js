import {
  validarDinero,
  validarSeleccion,
  consultar,
  validarPrecio,
  darDevueltas,
  validarInventario,
  actualizarInventario,
  buscarProducto,
} from "./tarea.js";

//NO TOCAR
function limpiarlog() {
  const element = document.getElementById("myDiv");
  element.innerHTML = "";
}
//NO TOCAR
function imprimirMensaje(texto) {
  const element = document.getElementById("myDiv");
  element.innerHTML += `${texto}<br/>`;
}

//NO  TOCAR
function pintarRespuesta(texto) {
  const element = document.getElementById("respuesta");
  element.innerHTML = `Respuesta: ${texto}`;
}

//NO TOCAR
function getDinero() {
  const dinero = document.getElementById("dinero").value;
  imprimirMensaje(`Valor dinero: ${dinero}`);

  if (validarDinero(dinero)) {
    return dinero;
  } else {
    return -1;
  }
}

//NO TOCAR
function getSeleccion() {
  const seleccion = document.getElementById("seleccion").value;
  imprimirMensaje(`Valor seleccion: ${seleccion}`);

  if (validarSeleccion(seleccion)) {
    return seleccion;
  } else {
    return -1;
  }
}

//NO TOCAR
export function handleConsultar() {
  limpiarlog();
  imprimirMensaje("Metodo: Consultar");
  //1. Obtengo  y valido los valores
  const seleccion = getSeleccion();

  if (seleccion == -1) {
    imprimirMensaje(`El valor en seleccion no es valido`);
    pintarRespuesta(`Valor en Selección no es correcto`);
  } else {
    //2. Consulto el producto
    imprimirMensaje(`Valor de seleccion correcto, consulto opción`);
    const consulta = consultar(seleccion);
    imprimirMensaje(`Datos producto: ${consulta}`);
    pintarRespuesta(consulta);
  }
}

//NO TOCAR
export function handleEnviar() {
  limpiarlog();
  imprimirMensaje("Metodo: Dar Producto");
  //1. Obtengo  y valido los valores
  const seleccion = getSeleccion();
  const dinero = getDinero();
  if (seleccion == -1) {
    imprimirMensaje(`El valor en seleccion no es valido`);
    //Pintar mensjae de seleccion esta mal
    pintarRespuesta(`Valor en Selección no es correcto`);
  } else if (dinero == -1) {
    imprimirMensaje(`El valor en dinero no es valido`);
    //pintar mensaje se dinero esta mal
    pintarRespuesta(`Valor en Dinero no es correcto`);
  } else {
    //2. Consulto si le alcanza la plata
    imprimirMensaje(`Consultamos ValidarPrecio`);
    const isDineroOk = validarPrecio(seleccion, dinero);

    if (!isDineroOk) {
      //pintar No le alcanza el dinero
      imprimirMensaje(`Dinero insuficiente`);
      pintarRespuesta(`No te alcanza el dinero`);
    } else {
      //3. Valido si hay suficiente en el inventario
      imprimirMensaje(`Consultamos validarInventario`);
      const isInventarioOk = validarInventario(seleccion);

      if (!isInventarioOk) {
        imprimirMensaje(`Producto agotado`);
        pintarRespuesta(`Producto agotado`);
        //pintar No hay inventario suficiente
      } else {
        //4. Resto el inventario
        imprimirMensaje(`actualizamos el Inventario (-1)`);
        actualizarInventario(seleccion);

        //5. Calculo devueltas
        imprimirMensaje(`Consultamos el dinero a devolver`);
        const devueltas = darDevueltas(seleccion, dinero);
        imprimirMensaje(`Dinero a devolver: ${devueltas}`);
        //pintar cambio

        //6. Buscar Producto
        imprimirMensaje(`Consultamos el producto`);
        const producto = buscarProducto(seleccion);
        imprimirMensaje(`Producto: ${producto}`);
        //pintar producto
      }
    }
  }
}
