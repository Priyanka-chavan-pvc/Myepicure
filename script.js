// Initiate Bootstrap carousel auto-rotate
const reviewCarousel = document.getElementById('reviews-carousel');
if (reviewCarousel) {
  const carousel = new bootstrap.Carousel(reviewCarousel, {
    interval: 6000,
    ride: 'carousel'
  });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a.scrollto').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
// Optional: Auto-start carousel (not necessary if data-bs-ride="carousel" is added in HTML)
document.addEventListener('DOMContentLoaded', function () {
  const reviewCarousel = document.querySelector('#reviews-carousel');
  if (reviewCarousel) {
    const carousel = new bootstrap.Carousel(reviewCarousel, {
      interval: 5000, // Change slide every 5 seconds
      ride: 'carousel',
      pause: 'hover'
    });
  }
});


    document.addEventListener("DOMContentLoaded", function () {
        // Initialize AOS (Animate on Scroll)
        AOS.init({
            duration: 1000,
            once: true
        });

        // Optional: Add hover effect to menu media masks
        const masks = document.querySelectorAll(".media-item .mask");
        masks.forEach(mask => {
            mask.addEventListener("mouseenter", () => {
                mask.classList.add("hovered");
            });
            mask.addEventListener("mouseleave", () => {
                mask.classList.remove("hovered");
            });
        });
    });

  document.addEventListener("DOMContentLoaded", function () {
    const modalIds = ['#news-modal-1', '#news-modal-2', '#news-modal-3'];

    modalIds.forEach(function (id) {
      const modalEl = document.querySelector(id);
      if (modalEl) {
        modalEl.addEventListener('show.bs.modal', function () {
          console.log(`${id} modal is opening`);
        });
        modalEl.addEventListener('hidden.bs.modal', function () {
          console.log(`${id} modal is closed`);
        });
      }
    });
  });

