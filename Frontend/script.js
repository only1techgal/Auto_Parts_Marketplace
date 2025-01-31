// Example: Add interactivity for the search bar
document.querySelector('.search-bar button').addEventListener('click', function () {
    const searchQuery = document.querySelector('.search-bar input').value;
    alert(`You searched for: ${searchQuery}`);
    // You can add logic to filter parts based on the search query
  });
