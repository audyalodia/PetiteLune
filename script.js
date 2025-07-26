const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");
const btn = document.getElementById("topBtn");

window.onscroll = () => {
  if (document.documentElement.scrollTop > 100) {
    btn.style.display = "block";
  } 
  else {
    btn.style.display = "none";
  }
};

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
});