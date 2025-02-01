function handleSearch() {
    console.log('Search button clicked');
    const searchBar = document.getElementById('search-bar');
    // Toggle visibility of the search bar
    searchBar.classList.toggle('d-none');
  }


  document.addEventListener("DOMContentLoaded", function () {
    var popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    popoverTriggerList.forEach(function (popoverTriggerEl) {
      new bootstrap.Popover(popoverTriggerEl);
    });
  });
  
  
  