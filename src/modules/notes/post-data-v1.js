const postData = () => {
  // 2.1 Для демонстрации метода POST изменим наш fetch на новый. (из: https://jsonplaceholder.typicode.com/guide/ "Creating a resource")
  // 2.2 Теперь наш метод fetch() принимает один обязательный аргумент - URL с запросом на сервер, но также принимает и второй аргумент в виде объекта с настройками данного запроса. Здесь свойствами мы определяем, что именно мы будем отправлять. "method: 'POST'" - значит мы будем отправлять информацию, некое тело запроса, свойство "body" и "headers", которые указываются специально для сервера JSONplaceholder, т.к. он ожидает именно такое хедеры. И если их не будет, возможно возникнет ошибка.
  // 2.3 В "body" мы помещаем метод JSON.stringify(), который преобразует объект в строку и потом этот объект в виде строки будет отправлен по URL-запросу в первом аргументе метода fetch().
  return fetch('https://o-zone-fake-default-rtdb.europe-west1.firebasedatabase.app/goods.json', {
    method: 'POST',
    body: JSON.stringify({
      title: 'Ведьмак 3',
      price: 2222,
      sale: false,
      img: './img/goods/the-witcher-3-wild-hunt.jpg',
      hoverImg: './img/goods/the-witcher-3-wild-hunt.jpg',
      category: 'Игры и софт',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.json()); // 2.4 Однако ответ нам точно также обработать.
};

// export default postData;

// 3.1 Итак, мы создали уже два отдельных модуля getData & postData, которые можем вызывать из любого другого модуля.
// ? Кроме get & post запросов, есть ещё put, patch & delete. Delete - удаляет, put - полностью заменяет запись, а patch - видоизменяет.
