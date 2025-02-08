function toggleDetails(id) {
    const details = document.getElementById(id);
    const button = document.querySelector(`button[data-target='${id}']`);
    if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block';
        button.textContent = 'Show Less';
    } else {
        details.style.display = 'none';
        button.textContent = 'Show Details';
    }
}

function addToCart(productName, productPrice) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: productName, price: productPrice });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} has been added to your cart!`);
    window.location.href = "cart.html"; // Redirect to the cart page
  }

function addToCart(productName) {
    alert(productName + " added to cart!");
    window.location.href = "cart.html"; // Redirect to the cart page
}

