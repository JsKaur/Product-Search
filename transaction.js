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
  
  function openSortModal(sortType) {
    let sortOrderElement = document.getElementById('sortOrder');
    sortOrderElement.dataset.sortType = sortType; // Store sorting type
  
    let myModal = new bootstrap.Modal(document.getElementById('sortModal'), {
      keyboard: true
    });
  
    myModal.show();
  }
  
  function applySort() {
    let sortType = document.getElementById('sortOrder').dataset.sortType;
    let order = document.getElementById('sortOrder').value;
  
    // Call sorting function
    sortTable(sortType, order);
  
    // Hide modal properly
    let myModalEl = document.getElementById('sortModal');
    let modal = bootstrap.Modal.getInstance(myModalEl);
    if (modal) modal.hide();
  }
  
  function sortTable(column, order) {
    let table = document.getElementById("yourTableId"); // Replace with your table ID
    let rows = Array.from(table.querySelectorAll("tbody tr"));
  
    rows.sort((rowA, rowB) => {
      let cellA = rowA.querySelector(`[data-column="${column}"]`).innerText;
      let cellB = rowB.querySelector(`[data-column="${column}"]`).innerText;
  
      let aValue = parseFloat(cellA.replace(/[^0-9.]/g, "")); // Convert cost to number
      let bValue = parseFloat(cellB.replace(/[^0-9.]/g, ""));
  
      return order === "asc" ? aValue - bValue : bValue - aValue;
    });
  
    rows.forEach(row => table.querySelector("tbody").appendChild(row));
  }
  


  $(document).ready(function() {
    $(".expandIcon").click(function() {
        // Show the modal when the expand icon is clicked
        $('#expandModal').modal('show');
    });
});
