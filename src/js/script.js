// Implementa la funcionalidad de la barra de búsqueda
document.querySelector('.search-bar input').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const products = document.querySelectorAll('.product-item');

    products.forEach(product => {
        const text = product.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
});
