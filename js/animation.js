// Intersection Observer to handle blur effect animation
document.addEventListener('DOMContentLoaded', () => {
  const blurElement = document.querySelector('.models_blur__eu9tQ');
  const screenElement = document.querySelector('.models_screen__wbS_4');
  
  if (!blurElement || !screenElement) return;
  
  
  // Remove the active class initially
  blurElement.classList.remove('models_active__MnGVf');
  screenElement.classList.remove('models_active__MnGVf');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add the active class when element comes into view
        blurElement.classList.add('models_active__MnGVf');
        screenElement.classList.add('models_active__MnGVf');
        // Optional: Stop observing after animation is triggered
        observer.unobserve(entry.target);
      }
    });
  }, {
    // Element becomes visible when it's 20% in view
    threshold: 0.2,
    // Start observing slightly before element comes into view
    rootMargin: '50px'
  });
  
  // Start observing the container element
  observer.observe(document.querySelector('.ios_modelsGraphic__QEX4D'));
}); 
