import { ref, computed } from "vue"
import type { Producto } from "./producto"

export interface ProductoCarrito {
    producto: Producto
    cantidad: number
}

// Estado compartido del carrito
export const carrito = ref<ProductoCarrito[]>([])

// Agregar un producto
export function agregarProducto(producto: Producto) {
    const productoExistente = carrito.value.find(
        item => item.producto.id === producto.id
    )

    if (productoExistente) {
        productoExistente.cantidad++
    } else {
        carrito.value.push({
            producto,
            cantidad: 1
        })
    }
}

// Aumentar cantidad
export function aumentarCantidad(id: number) {
    const producto = carrito.value.find(
        item => item.producto.id === id
    )

    if (producto) {
        producto.cantidad++
    }
}

// Disminuir cantidad
export function disminuirCantidad(id: number) {
    const producto = carrito.value.find(
        item => item.producto.id === id
    )

    if (producto) {
        producto.cantidad--

        if (producto.cantidad <= 0) {
            eliminarProducto(id)
        }
    }
}

// Eliminar producto
export function eliminarProducto(id: number) {
    const posicion = carrito.value.findIndex(
        item => item.producto.id === id
    )

    if (posicion !== -1) {
        carrito.value.splice(posicion, 1)
    }
}

// Vaciar carrito
export function vaciarCarrito() {
    carrito.value.splice(0, carrito.value.length)
}

// Calcular cantidad total de productos
export const cantidadProductos = computed(() => {
    return carrito.value.reduce(
        (total, item) => total + item.cantidad,
        0
    )
})

// Calcular precio total
export const totalCarrito = computed(() => {
    return carrito.value.reduce(
        (total, item) =>
            total + item.producto.precio * item.cantidad,
        0
    )
})