function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function loadContent(page) {
  fetch(page)
    .then(response => response.text())
    .then(data => {
      document.getElementById('main-content').innerHTML = data;
    }).catch(err => console.log(err));
}

// Load default page or about section initially
window.onload = () => loadContent('about.html');
