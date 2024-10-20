//Interacción de modal carrito de compras
// const myModal = document.getElementById('myModal')
// const myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', () => {
//   myInput.focus()
// })


//Lógica del carrito de compras
const productosSeleccionados = [];

// Seleccionar todos los botones de selección
const botonesSeleccionar = document.querySelectorAll('.select-product');

botonesSeleccionar.forEach(boton => {
  boton.addEventListener('click', () => {
    const producto = boton.closest('.product-item, .shirt-item, .figure-item');

    // Obtener los datos del producto a partir de los atributos de datos
    const nombre = producto.dataset.name;
    const descripcion = producto.dataset.description;
    const precio = producto.dataset.price;

    // Crear un objeto con los datos del producto
    const nuevoProducto = {
      nombre,
      descripcion,
      precio
    };

    // Agregar el producto al arreglo de productos seleccionados
    productosSeleccionados.push(nuevoProducto)
    actualizarCarrito();

    console.log('Productos seleccionados:', productosSeleccionados);
  });
});

function actualizarCarrito() {
    const listaProductos = document.getElementById('lista-productos');
    listaProductos.innerHTML = '';

    let total = 0;

    productosSeleccionados.forEach(producto => {
        const li = document.createElement('li');
        li.textContent = `${producto.nombre} - $${producto.precio}`;
        listaProductos.appendChild(li);

        // Agregar el precio del producto al total
        total += parseFloat(producto.precio);
    });

    // Mostrar el total en un elemento HTML (por ejemplo, con un id="total-carrito")
    const totalElement = document.getElementById('total-carrito');
    totalElement.textContent = `Total: $${total.toLocaleString('es-ES')}`;
}