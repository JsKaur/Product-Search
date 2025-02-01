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
  
  

 


function sortTable(column) {
  let table = document.querySelector(".table tbody");
  let rows = Array.from(table.querySelectorAll("tr"));

  let columnIndex;
  switch (column) {
      case "image":
          columnIndex = 1;
          break;
      case "category":
          columnIndex = 2;
          break;
      case "serviceName":
          columnIndex = 3;
          break;
      case "cost":
          columnIndex = 4;
          break;
      case "status":
          columnIndex = 5;
          break;
  }

  rows.sort((rowA, rowB) => {
      let cellA = rowA.children[columnIndex].textContent.trim().toLowerCase();
      let cellB = rowB.children[columnIndex].textContent.trim().toLowerCase();

      return cellA.localeCompare(cellB, undefined, { numeric: true });
  });

  table.innerHTML = "";
  rows.forEach(row => table.appendChild(row));
}
