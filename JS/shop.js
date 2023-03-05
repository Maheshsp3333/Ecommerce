function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// ==============  Delete Products From List ===================== //

let deleteButton = document.getElementById("delete-button");
deleteButton.addEventListener("click", deleteSelectedProducts);

function deleteSelectedProducts() {
  // Get all the checkbox input elements
  let checkboxes = document.querySelectorAll(
    '#product-list input[type="checkbox"]'
  );

  // Loop through the checkboxes to find the checked ones
  for (let i = 0; i < checkboxes.length; i++) {
    let checkbox = checkboxes[i];
    if (checkbox.checked) {
      // Get the parent div element and delete it
      let productDiv = checkbox.closest(".product-card");
      productDiv.remove();
    }
  }
}

// ==============  Filter Products From List ===================== //

let categoryFilter = document.querySelector("#category-filter");
categoryFilter.addEventListener("click", filterProducts);

function filterProducts() {
  // Get the selected option element and its value
  let categoryFilter = document.querySelector("#category-filter");
  let categoryValue = categoryFilter.value;

  // Get all the product div elements
  let productDivs = document.querySelectorAll("#product-list .product-card");

  // Loop through the product divs to show or hide them based on the filter value
  for (let i = 0; i < productDivs.length; i++) {
    let productDiv = productDivs[i];
    let productCategory = productDiv.getAttribute("data-category");

    if (categoryValue === "" || productCategory === categoryValue) {
      productDiv.style.display = "block";
    } else {
      productDiv.style.display = "none";
    }
  }
}

// ======================== Search bar Open ======================= //

function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}

const searchInput = document.getElementById("search-input");
searchInput.addEventListener("keyup", search);

function search() {
  // Get the user's search query
  const query = document.getElementById("search-input").value.toLowerCase();

  // Loop through each product div and show/hide based on search query
  const products = document.querySelectorAll(".product-card");
  products.forEach((product) => {
    const name = product.getAttribute("data-name").toLowerCase();
    if (name.includes(query)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}

// ============== Select All Checkbox ==================//

function selectAll() {
  const checkboxItems = document.querySelectorAll('input[type="checkbox"]');
  let allSelected = true;

  checkboxItems.forEach((item) => {
    if (!item.checked) {
      allSelected = false;
      item.checked = true;
    }
  });

  if (allSelected) {
    checkboxItems.forEach((item) => {
      item.checked = false;
    });
  }
}

// ===================== Edit Product Details =====================//

let editButton = document.getElementById("edit-button");
editButton.addEventListener("click", editSelectedProducts);

function editSelectedProducts() {
  // Get all the checkbox input elements
  let checkboxes = document.querySelectorAll('#product-list input[type="checkbox"]');

  // Loop through the checkboxes to find the checked ones
  for (let i = 0; i < checkboxes.length; i++) {
    let checkbox = checkboxes[i];
    if (checkbox.checked) {
      let productName = prompt("Edit Product Name");
      let productPrice = prompt("Edit Product Price");
      if (productName != null && productPrice != null) {
        checkbox.closest(".product-card").children[2].innerHTML = productName;
        checkbox.closest(".product-card").children[3].innerHTML = "$"+productPrice;
      }
    }
  }
}
