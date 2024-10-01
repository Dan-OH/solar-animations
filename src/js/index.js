/*
   _____       __
  / ___/____  / /___ ______
  \__ \/ __ \/ / __ `/ ___/
 ___/ / /_/ / / /_/ / /
/____/\____/_/\__,_/_/
    ___          _                 __  _
   /   |  ____  (_)___ ___  ____ _/ /_(_)___  ____  _____
  / /| | / __ \/ / __ `__ \/ __ `/ __/ / __ \/ __ \/ ___/
 / ___ |/ / / / / / / / / / /_/ / /_/ / /_/ / / / (__  )
/_/  |_/_/ /_/_/_/ /_/ /_/\__,_/\__/_/\____/_/ /_/____/
*/

import '../styles/main.scss';

function solarAnimations() {
  const observerConfig = {
    root: null,
    rootMargin: '0px',
    threshold: [0, 0.25],
  };

  const animateElements = () => {
    const solarElements = document.querySelectorAll('[data-solar]');

    let observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0.15) {
          entry.target.classList.add('solar-animated');
        } else {
          if (entry.boundingClientRect.y > 0) {
            entry.target.classList.remove('solar-animated');
          }
        }
      });
    }, observerConfig);

    solarElements.forEach((element) => {
      observer.observe(element);
    });
  };

  // Initialize animation observer after each DOM mutation (React renders, etc.)
  const mutationObserver = new MutationObserver(() => {
    animateElements();
  });

  // Observe DOM changes on the document body to detect new React renders
  mutationObserver.observe(document.body, {
    childList: true,
    subtree: true,
  });

  // Initial animation call in case elements are already in the DOM
  animateElements();
}

export default solarAnimations;
