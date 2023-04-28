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
  let solarDuration = 800;
  let observerConfig = {
    root: null,
    rootMargin: '0px',
    threshold: [0, 0.25]
  };

  
  const solarElements = document.querySelectorAll('[data-solar]');
  solarElements.forEach(solarElement =>{
    solarElement.style.animationDuration = solarDuration + "ms";
  });
  

  document.addEventListener("DOMContentLoaded", function(){
    let observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        console.log(entry.target.style.animationDuration);
        if (entry.intersectionRatio > 0.15) {
            entry.target.classList.add('solar-animated');
            entry.target.classList.add('solar-animating');

            setTimeout(function(){ entry.target.classList.remove('solar-animating')}, solarDuration)
        } else {
            if (!entry.target.classList.contains('solar-animating') && entry.boundingClientRect.y > 0) {
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
