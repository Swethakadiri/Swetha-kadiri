document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'Apples', price: 1.50 },
        { id: 2, name: 'Bananas', price: 0.75 },
        { id: 3, name: 'Carrots', price: 1.20 },
        { id: 4, name: 'Milk', price: 2.00 },
        { id: 5, name: 'Bread', price: 1.80 }
    ];

    const cart = [];

    const productsList = document.getElementById('products');
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    const checkoutButton = document.getElementById('checkout');

    function renderProducts() {
        productsList.innerHTML = products.map(product => `
            <li>
                ${product.name} - $${product.price.toFixed(2)}
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            </li>
        `).join('');
    }

    function renderCart() {
        cartItems.innerHTML = cart.map(item => `
            <li>
                ${item.name} - $${item.price.toFixed(2)} x ${item.quantity}
                <button onclick="removeFromCart(${item.id})">Remove</button>
            </li>
        `).join('');

        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        totalElement.textContent = total.toFixed(2);
    }

    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        const cartItem = cart.find(item => item.id === productId);
        if (cartItem) {
            cartItem.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        renderCart();
    }

    function removeFromCart(productId) {
        const itemIndex = cart.findIndex(item => item.id === productId);
        if (itemIndex > -1) {
            cart.splice(itemIndex, 1);
            renderCart();
        }
    }

    checkoutButton.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Your cart is empty.');
        } else {
            alert('Thank you for your purchase!');
            cart.length = 0;  // Clear the cart
            renderCart();
        }
    });

    renderProducts();
    renderCart(); // Initial render to show an empty cart
});
