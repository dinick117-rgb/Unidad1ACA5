export interface Producto {
    id: number
    nombre: string
    imagen: string
    precio: number
}

export const productos: Producto[] = [
    {
        id: 1,
        nombre: "Playera SpheraSound",
        imagen: "/merch/playera.jpg",
        precio: 350
    },
    {
        id: 2,
        nombre: "Sudadera oficial",
        imagen: "/merch/sudadera.jpg",
        precio: 650
    },
    {
        id: 3,
        nombre: "Tote bag",
        imagen: "/merch/tote-bag.jpg",
        precio: 180
    },
    {
        id: 4,
        nombre: "Gorra SpheraSound",
        imagen: "/merch/gorra.jpg",
        precio: 250
    },
    {
        id: 5,
        nombre: "Termo del festival",
        imagen: "/merch/termo.jpg",
        precio: 220
    },
    {
        id: 6,
        nombre: "Pulsera oficial",
        imagen: "/merch/pulsera.jpg",
        precio: 100
    }
]