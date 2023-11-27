document.addEventListener('DOMContentLoaded', () => {
  const redHeaderElement = document.getElementById('red_header');

  redHeaderElement.addEventListener('click', () => {
    const headerElement = document.querySelector('header');
    headerElement.style.color = '#FF0000';
  });
});
