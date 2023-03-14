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
  let checkboxes = document.querySelectorAll(
    '#product-list input[type="checkbox"]'
  );
 

  // Loop through the checkboxes to find the checked ones
  for (let i = 0; i < checkboxes.length; i++) {
    let checkbox = checkboxes[i];
    console.log(checkbox)
    if (checkbox.checked) {
      let productName = prompt("Edit Product Name");
      let productPrice = prompt("Edit Product Price");
      if (productName != null && productPrice != null) {
        checkbox.closest(".product-card").children[2].innerHTML = productName;
        checkbox.closest(".product-card").children[3].innerHTML =
          "$" + productPrice;
      }
    }
  }
}

let editButton_tab = document.getElementById("edit-button-tab");
editButton_tab.addEventListener("click", editSelectedProducts_tab);

function editSelectedProducts_tab() {
  // Get all the checkbox input elements
  let checkboxes = document.querySelectorAll(
    '#product-list input[type="checkbox"]'
  );
 

  // Loop through the checkboxes to find the checked ones
  for (let i = 0; i < checkboxes.length; i++) {
    let checkbox = checkboxes[i];
    console.log(checkbox)
    if (checkbox.checked) {
      let productName = prompt("Edit Product Name");
      let productPrice = prompt("Edit Product Price");
      if (productName != null && productPrice != null) {
        checkbox.closest(".product-card-tab").children[2].innerHTML = productName;
        checkbox.closest(".product-card-tab").children[3].innerHTML =
          "$" + productPrice;
      }
    }
  }
}

// =============== Add Product To The Cart ==========================//

let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

// open cart
cartIcon.onclick = () => {
  cart.classList.add("active");
};

// close cart
closeCart.onclick = () => {
  cart.classList.remove("active");
};

// cart working

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

// making function

function ready() {
  // remove item cart
  var removeCartButtons = document.getElementsByClassName("cart-remove");

  for (var i = 0; i < removeCartButtons.length; i++) {
    var button = removeCartButtons[i];
    button.addEventListener("click", removeCartItem);
  }

  // Quantity changes
  var quantityInputs = document.getElementsByClassName("cart-quantity");
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }
}

// remove from cart
function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updatetotal();
}
// quantity change

function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updatetotal();
}

//  =============== Add To Cart Items ======================= //

function addSelectedProducts() {
  // Get all the checkbox input elements
  let checkboxes = document.querySelectorAll(
    '#product-list input[type="checkbox"]'
  );
  // Loop through the checkboxes to find the checked ones
  for (let i = 0; i < checkboxes.length; i++) {
    let checkbox = checkboxes[i];
    if (checkbox.checked) {
      let pname = checkbox.closest(".product-card").children[2].innerHTML;
      let pricename = checkbox.closest(".product-card").children[3].innerHTML;
      let productimg = checkbox.closest(".product-card").children[1].src;

      // var cart = document.getElementsByClassName(".cart-content")|| [];
      // var isProductInCart = false;
      // for (var i = 0; i < cart.length; i++) {
      //   if (
      //     cart[i].name === pname &&
      //     cart[i].price === pricename &&
      //     cart[i].image === productimg
      //   ) {
      //     isProductInCart = true;
      //     break;
      //   }
      // }
      // if (!isProductInCart) {
      //   cart.push(cartShopBox);
      // }

      var cartShopBox = document.createElement("div");

      cartShopBox.innerHTML = `
            <div class="cart-box">
            <img src="${productimg}" alt="" class="cart-img">
            <div class="detail-box">
              <div class="cart-product-title">${pname}</div>
              <div class="cart-price">${pricename}</div>
              <input type="number" value="1" class="cart-quantity">
            </div>
            
            <i class="fa fa-trash cart-remove" aria-hidden="true"></i>
          </div> `;

      cartShopBox
        .getElementsByClassName("cart-remove")[0]
        .addEventListener("click", removeCartItem);
      cartShopBox
        .getElementsByClassName("cart-quantity")[0]
        .addEventListener("change", quantityChanged);

      // add cart item to cart
      var cartItems = document.querySelector(".cart-content");
      cartItems.appendChild(cartShopBox);
    }
  }
  updatetotal();
}

// update total

function updatetotal() {
  var cartContent = document.getElementsByClassName("cart-content")[0];
  var cartBoxes = cartContent.getElementsByClassName("cart-box");
  var total = 0;
  for (var i = 0; i < cartBoxes.length; i++) {
    var cartBox = cartBoxes[i];
    var priceElement = cartBox.getElementsByClassName("cart-price")[0];
    var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
    var price = parseFloat(priceElement.innerText.replace("$", ""));
    var quantity = quantityElement.value;
    total = total + price * quantity;

    // if price contain same

    total = Math.round(total * 100) / 100;

    document.getElementsByClassName("total-price")[0].innerText = "$" + total;
  }
}

// =============== Add Product End =================================//
