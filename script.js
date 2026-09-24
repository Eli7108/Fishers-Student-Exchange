document.querySelectorAll('.hamburgButton').forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
      document.querySelectorAll('.hamburgContent').forEach(drop => {
        if (drop !== content) drop.style.display = 'none';
      });
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});