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

Version: 1.0.0
Author: DanDun
*/

import '../styles/main.scss';

function solarAnimations() {
  const solarElements = document.querySelectorAll('[data-solar]');

  document.addEventListener("DOMContentLoaded", function(){
    const observerConfig = {
      root: null,
      rootMargin: '0px',
      threshold: [0, 0.25]
    };

    let observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0.15) {
          entry.target.classList.add('solar-animated');
        } else {
          if (entry.boundingClientRect.y > 0) {
            entry.target.classList.remove('solar-animated');
          }
        }
      });
    }, observerConfig);
    
    solarElements.forEach(element => {
      observer.observe(element);
    });
  });
};

export default solarAnimations;
