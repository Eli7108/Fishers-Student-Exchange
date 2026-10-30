document.querySelectorAll('.filterButton').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    document.querySelectorAll('.filterContent').forEach(drop => {
      if (drop !== content) drop.style.display = 'none';
    });
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});

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

const savedItems = [];

  function addToList() {
    const input = document.getElementsByClassName('add').value;
    if (input.trim() === '') return; // Ignore empty input

    savedItems.push(input); // Save to array

    // Update the list in the DOM
    const list = document.getElementById('resultList');
    const newItem = document.createElement('li');
    newItem.textContent = input;
    list.appendChild(newItem);

    document.getElementsByClassName('add').value = ''; // Clear input
  }