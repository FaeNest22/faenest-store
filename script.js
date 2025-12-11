
const input = document.getElementById('searchInput');
const products = document.querySelectorAll('#productList .product');

input.addEventListener('keyup', function() {
    const filter = input.value.toLowerCase();
    products.forEach(product => {
        if (product.dataset.name.toLowerCase().includes(filter)) {
            product.style.display = 'inline-block';
        } else {
            product.style.display = 'none';
        }
    });
});
