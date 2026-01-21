export function createNavBar() {
  const navBar = document.querySelector('#navBar');
  navBar.innerHTML = `
    <nav class="navbar">
      <div class="navbar-left">
        <div class="navbar-logo">
          <a href="#home">codesentinel</a>
        </div>
        <ul class="navbar-menu">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Experience</a></li>
          <li><a href="#skills">Resources</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <button class="nav-button">Get Started</button>
    </nav>
  `;

  const homeLink = document.querySelector('.navbar-logo a');
  if (homeLink) {
    homeLink.addEventListener('click', (e) => {
      e.preventDefault(); // stop default anchor
      window.scrollTo({
        top: 0,           // scroll to top
        behavior: 'smooth' // smooth scroll
      });
    });
  }



  const navLinks = document.querySelectorAll('.navbar-menu a');
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}