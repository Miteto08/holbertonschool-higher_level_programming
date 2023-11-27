document.addEventListener('DOMContentLoaded', () => {
  const toggleHeaderElement = document.getElementById('toggle_header');

  toggleHeaderElement.addEventListener('click', () => {
    const headerElement = document.querySelector('header');
    headerElement.classList.toggle("green");
    headerElement.classList.toggle("red");
  });
});
