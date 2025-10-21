window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Initialize AOS
AOS.init();

// Get button
const backToTop = document.getElementById("backToTop");

// Show button when user scrolls down
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.remove("hidden");
    backToTop.classList.add("block");
  } else {
    backToTop.classList.remove("block");
    backToTop.classList.add("hidden");
  }
});

// Easing function (easeInOutCubic)
function easeInOutCubic(t) {
  return t < 0.5
    ? 4 * t * t * t
    : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

// Scroll animation
function scrollToTop(duration) {
  const start = window.scrollY;
  const startTime = performance.now();

  function animateScroll(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = easeInOutCubic(progress);

    window.scrollTo(0, start * (1 - ease));

    if (elapsed < duration) {
      requestAnimationFrame(animateScroll);
    }
  }

  requestAnimationFrame(animateScroll);
}

// On click
function backTop() {
  scrollToTop(600); // duration in ms
}