document.addEventListener("DOMContentLoaded", () => {
  const homeLink = document.getElementById("home-link");
  if (homeLink) {
    homeLink.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
});