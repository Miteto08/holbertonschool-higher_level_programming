(async () => {
  try {
    const response = await fetch('https://hellosalut.stefanbohacek.dev/?lang=fr');
    const data = await response.json();
    const helloElement = document.getElementById('hello');
    helloElement.textContent = data.hello;
  } catch (error) {
    console.error('Error fetching hello:', error);
  }
})();

