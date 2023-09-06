import getData from './get-data.js';
import renderGoods from './render-goods.js';
import { categoryFilter } from './filters.js';
// 1.0 Реализуем по клику на кнопке "Каталог" и выборе нужной пользователю категории, фильтрацию всего товара по категориям этого товара.
const catalogue = () => {
  // 1.1 Сперва получим саму кнопку кнопки "Каталог".
  const catalogueButton = document.querySelector('.catalog-button > button');
  const catalogueModal = document.querySelector('.catalog');
  // 1.3.1 Также нам необходимо получить наш список категорий. Это li’шки с каким-то текстом внутри себя.
  const catalogueCategories = document.querySelectorAll('.catalog li');
  // 1.2.1 Повесим обработчик события на эту кнопку. И по клику на неё нам необходимо показывать маленькое модальное окно.
  // 1.2.2 Также нам необходимо закрывать данное модальное окно.
  // ? Обычно здесь делают какой-то класс и добавляют его при помощи toggle(), но данный класс не предусмотрен вёрсткой, и т.к. мы работаем на этом интенсиве с JS, то используем здесь несколько костыльный способ, который однако может пригодится где-нибудь ещё.
  // 1.2.3 Создадим техническую изменяемую переменную isOpen...
  let isOpen = false;

  catalogueButton.addEventListener('click', () => {
    // 1.2.4 ...и по каждому клику мы будем менять значение этой переменной на противоположное.
    isOpen = !isOpen;
    // 1.2.5 Далее мы будем проверять, если isOpen равен true, тогда мы будем давать модальному окну свойство display: block;, в противном случае убирать его.
    if (isOpen) {
      catalogueModal.style.display = 'block';
    } else {
      catalogueModal.style.display = '';
    }
  });
  // 1.3.2 Теперь переберём все эти элементы и повесим обработчики события. И по клику на каждую из li’шек категорий нам необходимо получить их текстовое содержимое.
  // 1.4 Теперь задача параллельно запускать фильтрацию данных и их получение. Для этого возьмём из search.js функцию getData() и вызовем её по клику. (не забываем импортировать getData() & renderGoods())
  // 1.5 Также нам требуется создать новую функцию в filters.js [categoryFilter()]
  catalogueCategories.forEach(category => {
    category.addEventListener('click', () => {
      const content = category.textContent;

      getData().then((data) => {
        renderGoods(categoryFilter(data, content));
      });
    });
  });
};

export default catalogue;
