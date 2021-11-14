const PRODUCTOS = ["Coke", "Sprite", "Fanta", "Te Hatsu", "Agua Manantial"];
const PRECIOS = [3, 4, 4, 6, 2];
const DISPONIBILIDAD = [10, 10, 10, 10, 0];

//Este metodo debe validar que se ingrese un valor numerico, mayor a 0 y menor a 50
function validarDinero(dinero) {
  return false; //boolean
}

//Este metodo debe validar que se ingrese un valor numerico, entre 1 y el tamaño del arreglo
function validarSeleccion(seleccion) {
  return false; //boolean
}

//Este metodo debe buscar el producto de seleccion y devolver el nombre, precio y la cantidad disponible en formato: Producto: {Nombre} Precio: {Precio } Disponible: {cantidad}
function consultar(seleccion) {
  return ""; //string
}

//Este metodo buscar el precio del producto seleccionado y valida si el valor de dinero es igual o superior al precio del producto
function validarPrecio(seleccion, dinero) {
  return false; //boolean
}

//Esta metodo debe buscar el precio del producto seleccionado y calcular las vueltas a darle conforme al dinero entregado
function darDevueltas(seleccion, dinero) {
  return 0; //numeric
}

//Este metodo debe buscar la cantidad disponible del producto selecionado y devolver si la cantidad disponible es mayor o igual a 1
function validarInventario(seleccion) {
  return false; //boolean
}

//Este metodo debe disminuir en una unidad la cantidad disponible del producto seleccionado
function actualizarInventario(seleccion) {
  //no retorna nada //void
}

//este metodo debe buscar el producto seleccionado y devolver el valor (Array: PRODUCTO)
function buscarProducto(seleccion) {
  return ""; //string
}

//NO TOCAR
function getDinero() {
  const dinero = document.getElementById("dinero").value;

  if (validarDinero(dinero)) {
    return dinero;
  } else {
    return -1;
  }
}

//NO TOCAR
function getSeleccion() {
  const seleccion = document.getElementById("seleccion").value;

  if (validarSeleccion(seleccion)) {
    return seleccion;
  } else {
    return -1;
  }
}

//NO TOCAR
function handleConsultar() {
  //1. Obtengo  y valido los valores
  const seleccion = getSeleccion();
  if (seleccion == -1) {
    //Pintar mensjae de seleccion esta mal
  } else {
    //2. Consulto el producto
    const consulta = consultar(seleccion);

    //Pintar mensaje de consulta
  }
}

//NO TOCAR
function handleEnviar() {
  //1. Obtengo  y valido los valores
  const seleccion = getSeleccion();
  const dinero = getDinero();
  if (seleccion == -1) {
    //Pintar mensjae de seleccion esta mal
  } else if (dinero == -1) {
    //pintar mensaje se dinero esta mal
  } else {
    //2. Consulto si le alcanza la plata
    const isDineroOk = validarDinero(seleccion, dinero);

    if (!isDineroOk) {
      //pintar No le alcanza el dinero
    } else {
      //3. Valido si hay suficiente en el inventario
      const isInventarioOk = validarInventario(seleccion);

      if (!isInventarioOk) {
        //pintar No hay inventario suficiente
      } else {
        //4. Resto el inventario
        actualizarInventario(seleccion);

        //5. Calculo devueltas
        const devueltas = darDevueltas(seleccion, dinero);
        //pintar cambio

        //6. Buscar Producto
        const producto = buscarProducto(seleccion);
        //pintar producto
      }
    }
  }
}
