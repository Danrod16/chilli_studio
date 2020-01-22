const initUpdateNavbarOnScroll = () => {
  const navbar = document.querySelector('.nav');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight) {
        navbar.classList.add('nav-blue');
      } else {
        navbar.classList.remove('nav-blue');
      }
    });
  }
}

export { initUpdateNavbarOnScroll };
