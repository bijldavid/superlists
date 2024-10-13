window.addEventListener('scroll', function() {
    const videoSection = document.querySelector('.video');
    const videoPosition = videoSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
  
    // Check if the video is within the viewport
    if (videoPosition < windowHeight * 0.5) {
      videoSection.classList.add('trigger');
    } else {
      videoSection.classList.remove('trigger');
    }
  });

  window.addEventListener('scroll', function() {
    const slidesSection = document.querySelector('.slides');
    const pageBackground = document.querySelector('main');
    const slidesPosition = slidesSection.getBoundingClientRect().top;

    const windowHeight = window.innerHeight;
  
    // Check if the video is within the viewport
    if (slidesPosition < windowHeight * 0.8) {
      slidesSection.classList.add('trigger');
      pageBackground.classList.add('trigger');
    } else {
      slidesSection.classList.remove('trigger');
      pageBackground.classList.remove('trigger');
    }
  });
  