window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

AOS.init();