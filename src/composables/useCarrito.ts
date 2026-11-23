import {
    carrito,
    cantidadProductos,
    totalCarrito,
    agregarProducto,
    aumentarCantidad,
    disminuirCantidad,
    eliminarProducto,
    vaciarCarrito
} from "../data/carrito"

export function useCarrito() {
    return {
        carrito,
        cantidadProductos,
        totalCarrito,
        agregarProducto,
        aumentarCantidad,
        disminuirCantidad,
        eliminarProducto,
        vaciarCarrito
    }
}