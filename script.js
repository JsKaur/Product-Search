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
  
  

 


// function sortTable(column) {
//   let table = document.querySelector(".table tbody");
//   let rows = Array.from(table.querySelectorAll("tr"));

//   let columnIndex;
//   switch (column) {
//       case "image":
//           columnIndex = 1;
//           break;
//       case "category":
//           columnIndex = 2;
//           break;
//       case "serviceName":
//           columnIndex = 3;
//           break;
//       case "cost":
//           columnIndex = 4;
//           break;
//       case "status":
//           columnIndex = 5;
//           break;
//   }

//   rows.sort((rowA, rowB) => {
//       let cellA = rowA.children[columnIndex].textContent.trim().toLowerCase();
//       let cellB = rowB.children[columnIndex].textContent.trim().toLowerCase();

//       return cellA.localeCompare(cellB, undefined, { numeric: true });
//   });

//   table.innerHTML = "";
//   rows.forEach(row => table.appendChild(row));
// }

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
