document.addEventListener("DOMContentLoaded", function () {
  const carouselContent = document.querySelector(".carousel-content");
  const items = document.querySelectorAll(".carousel-item");
  const prevButton = document.querySelector(".btn-prev-slide");
  const nextButton = document.querySelector(".btn-next-slide");

  let currentIndex = 0;
  const totalItems = items.length;

  function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselContent.style.transform = `translateX(${offset}%)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
  }

  nextButton.addEventListener("click", nextSlide);
  prevButton.addEventListener("click", prevSlide);

  let autoSlide = setInterval(nextSlide, 5000);
});
