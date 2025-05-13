const button = document.getElementById('themeBtn');

// Load stored theme on page load
window.onload = function () {
  const savedColor = localStorage.getItem('themeColor');
  if (savedColor) {
    document.body.style.backgroundColor = savedColor;
  }
};

button.addEventListener('click', () => {
  const color = '#add8e6'; // Light blue
  document.body.style.backgroundColor = color;
  
  // Store in localStorage
  localStorage.setItem('themeColor', color);

  // Add animation class
  button.classList.add('animate');

  // Remove animation class after it ends so it can be triggered again
  setTimeout(() => {
    button.classList.remove('animate');
  }, 400);
});