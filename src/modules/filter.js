import getData from './get-data.js';
import renderGoods from './render-goods.js';
import { priceFilter, hotSaleFilter } from './filters.js';

const filter = () => {
  const minInput = document.querySelector('#min');
  const maxInput = document.querySelector('#max');
  const checkboxInput = document.querySelector('#discount-checkbox');
  const checkboxMark = document.querySelector('.filter-check_checkmark');

  minInput.addEventListener('input', () => {
    getData().then((data) => {
      renderGoods(priceFilter(hotSaleFilter(data, checkboxInput.checked), minInput.value, maxInput.value));
    });
  });

  maxInput.addEventListener('input', () => {
    getData().then((data) => {
      renderGoods(priceFilter(hotSaleFilter(data, checkboxInput.checked), minInput.value, maxInput.value));
    });
  });

  checkboxInput.addEventListener('change', () => {
    if (checkboxInput.checked) {
      checkboxMark.classList.add('checked');
    } else {
      checkboxMark.classList.remove('checked');
    }

    getData().then((data) => {
      renderGoods(priceFilter(hotSaleFilter(data, checkboxInput.checked), minInput.value, maxInput.value));
    });
  });
};

export default filter;
