document.addEventListener('DOMContentLoaded', () => {
  const upTextElement = document.getElementById('update_header');

  upTextElement.addEventListener('click', () => {
    const upElement = document.querySelector("header").textContent = "New Header!!!";
  });
});
