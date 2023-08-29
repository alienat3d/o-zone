const deleteData = () => {
  return fetch('http://localhost:3000/goods/25', {
    method: 'DELETE',
  })
  .then((response) => response.json());
};

export default deleteData;
