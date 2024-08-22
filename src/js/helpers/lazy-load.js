function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = entry.target;

      if (target.dataset.src) {
        target.src = target.dataset.src;
      }
      target.classList.remove('lazy-bg');

      observer.unobserve(target);
    }
  });
}

const elementsWithBackground = document.querySelectorAll('.lazy-bg');

const observer = new IntersectionObserver(handleIntersection);

elementsWithBackground.forEach(el => observer.observe(el));