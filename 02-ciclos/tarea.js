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

export {
  validarDinero,
  validarSeleccion,
  consultar,
  validarPrecio,
  darDevueltas,
  validarInventario,
  actualizarInventario,
  buscarProducto,
};
