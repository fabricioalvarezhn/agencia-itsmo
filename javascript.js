
  const slides = document.querySelector('.slides');
  let index = 0;

  setInterval(() => {
    index = (index + 1) % 3; // 3 imágenes
    slides.style.transform = `translateX(-${index * 100}%)`;
  }, 3000); // cambia cada 3 segundos

