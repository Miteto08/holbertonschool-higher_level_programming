document.addEventListener('DOMContentLoaded', () => {
  const addItemElement = document.getElementById('add_item');

  addItemElement.addEventListener('click', () => {
    const listElement = document.querySelector(".my_list");
    const newLiElement = document.createElement('li');
    newLiElement.textContent = 'Item';
    listElement.appendChild(newLiElement);
  });
});
