const form = document.querySelector('form');
const input = document.querySelector('input');
const formButton = document.getElementById('formButton');
const weekProduct = document.getElementById('weekProduct');


function warning() {
  const warning = document.getElementById('warning');
  warning.classList.remove('warning-off');
  warning.classList.add('warning-on');

  setTimeout(() => {
    warning.classList.remove('warning-on');
    warning.classList.add('warning-off');
  }, 3000)
}

function removeProduct(id) {
  const listProduct = document.querySelector('#listProduct');
  const productForDelete = document.getElementById(id);
  listProduct.removeChild(productForDelete)

  warning()
}

input.addEventListener('input', () => {
  if (input.value.length >= 3) {
    formButton.removeAttribute('disabled')
  } else {
    formButton.setAttribute('disabled', true)
  }
})

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const weekProductValue = weekProduct.value

  const listProduct = document.querySelector('#listProduct');
  const product = document.createElement('li')
  product.classList.add('item');

  product.innerHTML = `
    <div class="checkbox-wrapper">
      <input type="checkbox">
      <div class="checkbox-img"></div>
    </div>
    <span>${weekProductValue}</span>
    <button  onclick="removeProduct('${weekProductValue}')"><img src="./assets/trash.svg" alt="Icon of Trash"></button>
  `
  product.setAttribute('id', weekProductValue)
  listProduct.appendChild(product);
})

