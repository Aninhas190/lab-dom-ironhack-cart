// ITERATION 1

function updateSubtotal(product) {
  
  //console.log('Calculating subtotal, yey!');

  //... your code goes here
  //extracting specific values from document
  const $price = product.querySelector('.price span').innerText;
  const $quantity = product.querySelector('.quantity input').valueAsNumber;
  //make the calculation for this function
  const subtotal = Number($price) * $quantity;
  //create variable where it would hold subtotal on the document
  let $subtotal = product.querySelector('.subtotal span');
  //return subtotal value to document
  $subtotal.innerText = subtotal;
   
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //const newConst = updateSubtotal(singleProduct);
  // end of test
  
    // ITERATION 2
  //... your code goes here
  const $allProducts = document.querySelectorAll('.product');
  //console.lo;
  let total = 0;

  for (let i = 0; i < $allProducts.length; i++) {
    total += updateSubtotal($allProducts[i]);
  }
  
  let $total = document.querySelector('#total-value span');

  $total.innerText = total;
  //return newsubtotal;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
