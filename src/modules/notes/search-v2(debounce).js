import getData from '../get-data.js';
import renderGoods from '../render-goods.js';
import { searchFilter } from '../filters.js';
import { debounce } from '../helpers.js';

const search = () => {
  const searchInput = document.querySelector('.search-wrapper_input');
  // 1.9 (Начало в helpers.js) Здесь при каждом событии "input", т.е. вводе символов в наше поле, вызывается функция getData(), которая получает данные и каким-то образом отфильтровывает их.
  // 1.10 Создадим ещё одну функцию, куда мы поместим уже созданную функцию debounce, не забудем импортировать её из helpers.js (кстати, достаточно начать вводить, потом выбрать нужное из контекстного меню и редактор сам добавит импорт функции).
  // 1.11 debounce() примет в себя callback-функцию, куда мы переместим вызов отправки запроса на сервер и получения данных getData().
  // 1.12 Также обратим внимание, что мы заменили callback в слушателе события в searchInput на результат функции debounceSearch(), а evt. target.value переместили в саму debounceSearch(). [см. notes/search-v1.js для пред. версии]
  // 1.13 Итак, у нас есть новая функция, в которую мы завернули функцию debounce(), которая принимает объект события ввода и callback-функцию получения данных.
  const debounceSearch = debounce((evt) => {
    getData().then((data) => {
      renderGoods(searchFilter(data, evt.target.value));
    });
  }, 700);
  // 1.14 Теперь при каждом вводе символа в searchInput мы запускаем функцию debounceSearch(), которая запускает debounce(), та в свою очередь начинает делать таймауты и если 700 мс прошло, то callback-функция с getData() будет вызвана и пойдёт запрос на сервер, придёт ответ, запустится фильтрация searchFilter() и отобразятся карточки товаров renderGoods().
  searchInput.addEventListener('input', debounceSearch);
};

export default search;
