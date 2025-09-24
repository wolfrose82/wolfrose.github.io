document.getElementById('yr').textContent = new Date().getFullYear();

const products = document.querySelectorAll('.open-product');
const modal = document.getElementById('product-modal');
const closeBtn = modal.querySelector('.close');

const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalPrice = document.getElementById('modal-price');
const paypalItemName = document.getElementById('paypal-item-name');
const paypalItemPrice = document.getElementById('paypal-item-price');

products.forEach(btn => {
  btn.addEventListener('click', e => {
    const card = e.target.closest('.product');
    const data = JSON.parse(card.dataset.product);
    modalImg.src = data.img;
    modalTitle.textContent = data.title;
    modalDesc.textContent = data.desc;
    modalPrice.textContent = '$' + data.price;
    paypalItemName.value = data.title;
    paypalItemPrice.value = data.price;
    modal.classList.remove('hidden');
  });
});

closeBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
});

window.addEventListener('click', e => {
  if (e.target === modal) {
    modal.classList.add('hidden');
  }
});
