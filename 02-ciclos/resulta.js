const PRODUCTOS = ["Coke", "Fanta", "Ice Te", "Cerveza", "Agua"];
const PRECIOS = [4, 4, 5, 8, 3];
const DISPONIBILIDAD = [10, 10, 10, 5, 0];

//Este metodo debe validar que se ingrese un valor numerico, mayor a 0 y menor a 50
function validarDinero(dinero) {
  return dinero && !isNaN(dinero) && dinero >= 1 && dinero <= 50;
}

//Este metodo debe validar que se ingrese un valor numerico, entre 0 y el tamaño del arreglo-1
function validarSeleccion(seleccion) {
  return seleccion && !isNaN(seleccion) && seleccion >= 0 && seleccion < PRODUCTOS.length;
}

//Este metodo debe buscar el producto de seleccion y devolver el nombre, precio y la cantidad disponible en formato: Producto: {Nombre} Precio: {Precio } Disponible: {cantidad}
function consultar(seleccion) {
  const producto = PRODUCTOS[seleccion];
  const precio = PRECIOS[seleccion];
  const cantidad = DISPONIBILIDAD[seleccion];

  return `Producto: ${producto} Precio: ${precio} Disponible: ${cantidad}`;
}

//Este metodo buscar el precio del producto seleccionado y valida si el valor de dinero es igual o superior al precio del producto
function validarPrecio(seleccion, dinero) {
  const precio = PRECIOS[seleccion];
  return dinero >= precio;
}

//Esta metodo debe buscar el precio del producto seleccionado y calcular las vueltas a darle conforme al dinero entregado
function darDevueltas(seleccion, dinero) {
  const precio = PRECIOS[seleccion];

  return dinero - precio;
}

//Este metodo debe buscar la cantidad disponible del producto selecionado y devolver si la cantidad disponible es mayor o igual a 1
function validarInventario(seleccion) {
  return DISPONIBILIDAD[seleccion] > 0;
}

//Este metodo debe disminuir en una unidad la cantidad disponible del producto seleccionado
function actualizarInventario(seleccion) {
  DISPONIBILIDAD[seleccion] -= 1;
}

//este metodo debe buscar el producto seleccionado y devolver el valor (Array: PRODUCTO)
function buscarProducto(seleccion) {
  return PRODUCTOS[seleccion];
}

export {
  validarDinero,
  validarSeleccion,
  consultar,
  validarPrecio,
  darDevueltas,
  validarInventario,
  actualizarInventario,
  buscarProducto,
  PRODUCTOS,
};
