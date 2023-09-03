import getData from './get-data.js';
import renderGoods from './render-goods.js';
import { funcFilter } from './filters.js';
import { debounce } from './helpers.js';

const search = () => {
  const searchInput = document.querySelector('.search-wrapper_input');
  // 2.0 Программируем фильтр цен
  // 2.1 Сначала получим из вёрстки строки ввода минимальной цены фильтра и максимальной
  const minInput = document.querySelector('#min');
  const maxInput = document.querySelector('#max');
  // 3.1 Добавим также функцию сортировки товаров по акции, для этого получим инпут чекбокса
  const checkbox = document.querySelector('#discount-checkbox');
  // 3.3 Также получим элемент чекбокса, который связан с инпутом (кастомный чекбокс), чтобы на него вешать класс "checked" для появления галочки, при выборе.
  const checkMark = document.querySelector('.filter-check_checkmark');

  // 2.3 Также создадим похожую debounce функцию, как и с общим поиском, но уже по фильтрации цен. Укажем аргументами минимальную и максимальную цены.
  // 2.4 Однако searchFilter нужно будет немного переделать. Перейдём для этого в filters.js.
  // 2.5 В саму функцию фильтра цен будет передаваться дата (весь товар), минимальная и максимальная цена.
  // 3.4.1 Также добавим и атрибут для чекбокса «Акции» check с дефолтным значение «false».
  const debounceFunc = debounce(
    (min = '', max = '', checkValue = false, searchValue = '') => {
      getData().then((data) => {
        renderGoods(funcFilter(data, min, max, checkValue, searchValue));
      });
    },
    700
  );
  // 4.2 (Начало в filters.js) Добавим к знакомому debounceFunc() в атрибуты ещё searchInput.value, как и в другие функции тоже.
  searchInput.addEventListener('input', () =>
    debounceFunc(
      minInput.value,
      maxInput.value,
      checkbox.value,
      searchInput.value
    )
  );

  // 2.2 Повесим на каждый из них обработчики события.
  // 3.4.2 Также и сюда
  minInput.addEventListener('input', () =>
    debounceFunc(
      minInput.value,
      maxInput.value,
      checkbox.value,
      searchInput.value
    )
  );
  maxInput.addEventListener('input', () =>
    debounceFunc(
      minInput.value,
      maxInput.value,
      checkbox.value,
      searchInput.value
    )
  );
  // 3.2 На чекбокс повесим обработчик события, который по клику будет вешать класс, который отобразит галочку в чекбоксе.
  checkbox.addEventListener('input', () => {
    if (checkbox.checked) {
      checkMark.classList.add('checked');
    } else {
      checkMark.classList.remove('checked');
    }
    // 3.4.3 И сюда
    // 3.5.1 Также и добавим checkValue в filters.js
    debounceFunc(
      minInput.value,
      maxInput.value,
      checkbox.checked,
      searchInput.value
    );
  });
};

export default search;
