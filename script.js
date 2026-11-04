// Opens options for filtering the items
document.querySelectorAll('.filterButton').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    document.querySelectorAll('.filterContent').forEach(drop => {
      if (drop !== content) drop.style.display = 'none';
    });
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});

// Opens dropdown for the login and cart
document.querySelectorAll('.loginButton').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    document.querySelectorAll('.loginContent').forEach(drop => {
      if (drop !== content) drop.style.display = 'none';
    });
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});

document.querySelectorAll('.cartButton').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    document.querySelectorAll('.cartContent').forEach(drop => {
      if (drop !== content) drop.style.display = 'none';
    });
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});

// Array to store shopping cart items
let shoppingCart = [];

// Function to add an item to the shopping cart
function addToList(value) {
    if (!value.trim()) return;

    const list = document.getElementById('resultList');
    const item = document.createElement('li');
    item.textContent = value;
    list.appendChild(item);

    // Log the updated cart (for debugging)
    console.log("Item added:", item);
    console.log("Shopping Cart:", shoppingCart);

    // Optionally, update the UI (e.g., cart count)
    updateCartCount();
}

document.querySelectorAll('.add').forEach(button => {
  button.addEventListener('click', function () {
    const name = this.closest('.box').querySelector('.itemName');
    const value = name.textContent;
    addToList(value);
  });
});

// Function to update the cart count in the UI
function updateCartCount() {
    const cartCountElement = document.getElementById("cart-count");
    if (cartCountElement) {
        cartCountElement.textContent = shoppingCart.length;
    }
}

// Select all filter buttons and the boxes
const filterButtons = document.querySelectorAll('.filterContent button');
const boxes = document.querySelectorAll('.box');

// Add click event listeners to each filter button
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.id; // Get the category from the button's ID

        // Loop through all boxes and toggle their visibility
        boxes.forEach(box => {
            if (category === 'all' || box.dataset.category === category) {
                box.style.display = 'block';
            } else {
                box.style.display = 'none';
            }
        });
    });
});