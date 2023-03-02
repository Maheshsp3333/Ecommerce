 
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


  // ==============  Delete Products From List ===================== //

  let deleteButton = document.getElementById('delete-button');
deleteButton.addEventListener('click', deleteSelectedProducts);

function deleteSelectedProducts() {
  // Get all the checkbox input elements
  let checkboxes = document.querySelectorAll('#product-list input[type="checkbox"]');

  // Loop through the checkboxes to find the checked ones
  for (let i = 0; i < checkboxes.length; i++) {
    let checkbox = checkboxes[i];
    if (checkbox.checked) {
      // Get the parent div element and delete it
      let productDiv = checkbox.closest('.product-card');
      productDiv.remove();
    }
  }
}

   // ==============  Filter Products From List ===================== //

   let categoryFilter = document.querySelector('#category-filter');
categoryFilter.addEventListener('change', filterProducts);

function filterProducts() {
  // Get the selected option element and its value
  let categoryFilter = document.querySelector('#category-filter');
  let categoryValue = categoryFilter.value;

  // Get all the product div elements
  let productDivs = document.querySelectorAll('#product-list .product-card');

  // Loop through the product divs to show or hide them based on the filter value
  for (let i = 0; i < productDivs.length; i++) {
    let productDiv = productDivs[i];
    let productCategory = productDiv.getAttribute('data-category');

    if (categoryValue === '' || productCategory === categoryValue) {
      productDiv.style.display = 'block';
    } else {
      productDiv.style.display = 'none';
    }
  }
}
