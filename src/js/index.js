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

const defaultOptions = {
  root: null,
  rootMargin: '0px',
  threshold: [0, 0.25],
  duration: '0.5s',
  delay: '0',
  easing: 'ease',
};

let options = { ...defaultOptions };

const setOptions = (settings) => {
  if (settings) {
    options = {
      ...options,
      ...settings,
    };
  }
};

function solarAnimations(settings = {}) {
  setOptions(settings);

  const applyAnimationStyles = (element) => {
    // Loop through options keys to set custom styles
    for (const key in options) {
      if (options.hasOwnProperty(key)) {
        const customValue = element.getAttribute(`data-solar-${key}`);
        element.style[
          `animation${key.charAt(0).toUpperCase() + key.slice(1)}`
        ] = customValue || options[key];
      }
    }
  };

  const observeElements = () => {
    const solarElements = document.querySelectorAll('[data-solar]');

    if (!solarElements.length) return;

    solarElements.forEach(applyAnimationStyles); // Apply animation styles to all elements

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const { target, intersectionRatio } = entry;
          if (intersectionRatio > options.threshold[0]) {
            target.classList.add('solar-animated');
          } else {
            target.classList.remove('solar-animated');
          }
        });
      },
      {
        root: options.root,
        rootMargin: options.rootMargin,
        threshold: options.threshold,
      }
    );

    solarElements.forEach((element) => observer.observe(element));
  };

  // Observe DOM mutations (e.g., React re-renders)
  const mutationObserver = new MutationObserver(observeElements);

  mutationObserver.observe(document.body, {
    childList: true,
    subtree: true,
  });

  // Initial observation for existing elements
  observeElements();
}

export default solarAnimations;
