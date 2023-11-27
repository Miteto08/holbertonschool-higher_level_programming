document.addEventListener('DOMContentLoaded', () => {
  const redHeaderElement = document.getElementById('red_header');

  redHeaderElement.addEventListener('click', () => {
    const headerElement = document.querySelector('header');
    headerElement.classList.add("red");
  });
});
