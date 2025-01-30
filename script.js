// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  darkModeToggle.querySelector('i').classList.toggle('fa-sun');
});

// Product Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');

    // Update active button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Filter products
    productCards.forEach(card => {
      const category = card.getAttribute('data-category');
      if (filter === 'all' || category === filter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Shopping Cart
const cart = document.getElementById('cart');
const cartItems = document.getElementById('cart-items');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const product = button.closest('.product-card');
    const productName = product.querySelector('h3').innerText;

    const cartItem = document.createElement('li');
    cartItem.innerText = productName;
    cartItems.appendChild(cartItem);

    cart.classList.add('show');
  });
});