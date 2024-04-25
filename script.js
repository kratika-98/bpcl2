// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Get all dropdown toggles
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  
    // Add click event listeners to each dropdown toggle
    dropdownToggles.forEach(toggle => {
      toggle.addEventListener('click', function(event) {
        // Prevent default link behavior
        event.preventDefault();
        // Hide all dropdown menus
        hideDropdownMenus();
        // Display the dropdown menu of the clicked toggle
        this.nextElementSibling.style.display = 'block';
      });
    });
  
    // Function to hide all dropdown menus
    function hideDropdownMenus() {
      const dropdownMenus = document.querySelectorAll('.dropdown-menu');
      dropdownMenus.forEach(menu => {
        menu.style.display = 'none';
      });
    }
  
    // Get all dropdown options
    const dropdownOptions = document.querySelectorAll('.dropdown-menu a');
  
    // Add click event listeners to each dropdown option
    dropdownOptions.forEach(option => {
      option.addEventListener('click', function(event) {
        // Prevent default link behavior
        event.preventDefault();
        // Get the href attribute of the clicked option
        const page = this.getAttribute('href');
        // Simulate page navigation by updating the content
        document.getElementById('content').innerHTML = `<h2>You clicked on ${page}</h2>`;
        // Hide all dropdown menus after option selection
        hideDropdownMenus();
      });
    });
  });
  