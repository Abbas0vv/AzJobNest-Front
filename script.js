  const isAuthenticated = false; // bunu backend-dən gələn cookie/tokenlə təyin edə bilərsən

  const protectedRoutes = ["/Projects", "/Messages", "/Jobs/Post", "/Freelancers"];
  const currentPath = window.location.pathname;

  if (!isAuthenticated && protectedRoutes.includes(currentPath)) {
    window.location.href = "/Account/Login";
  }

  const icons = document.querySelectorAll('.animated-icons i');

icons.forEach(icon => {
    const left = Math.floor(Math.random() * 91); // 0% - 90%
    const fontSize = (Math.random() * 1.5 + 1.5).toFixed(1); // 1.5rem - 3.0rem
    const delay = Math.floor(Math.random() * 20); // 0s - 19s

    icon.style.left = `${left}%`;
    icon.style.fontSize = `${fontSize}rem`;
    icon.style.animationDelay = `${delay}s`;
});

  window.addEventListener('load', () => {
    setTimeout(() => {
      document.getElementById('preloader').style.display = 'none';

      const main = document.getElementById('main-content');
      main.style.display = 'block';
      setTimeout(() => {
        main.style.opacity = '1';
      }, 50);
    }, 2000);
  });