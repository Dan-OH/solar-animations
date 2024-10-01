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

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const { target, intersectionRatio } = entry;
        if (intersectionRatio > 0.15) {
          target.classList.add('solar-animated');
        } else {
          target.classList.remove('solar-animated');
        }
      });
    }, observerConfig);

    solarElements.forEach((element) => observer.observe(element));
  };

  // Observe DOM mutations (e.g., React re-renders)
  const mutationObserver = new MutationObserver(animateElements);

  mutationObserver.observe(document.body, {
    childList: true,
    subtree: true,
  });

  // Initial animation for existing elements
  animateElements();
}

export default solarAnimations;
