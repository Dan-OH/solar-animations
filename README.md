# Solar Animations
Lightweight and simple animate on scroll

## Getting Started
### Installing
Install package:
```
npm i solar-animations
```

Import script, styles and initialize:
```js
import solarAnimations from 'solar-animations';
import 'solar-animations/dist/solar-animations.min.css';
// ..
solarAnimations();
```

### Usage
Add `data-solar` attributes to elements you want animated
```html
<div data-solar="fade-up"></div>
```

## Options
### Available Animations
#### Fade Animations
* fade
* fade-up
* fade-down
* fade-left
* fade-right
* fade-up-left
* fade-up-right
* fade-down-left
* fade-down-right

#### Slide Animations
* slide
* slide-up
* slide-down
* slide-left
* slide-right
* slide-up-left
* slide-up-right
* slide-down-left
* slide-down-right

#### Flip Animations
* flip-up
* flip-down
* flip-left
* flip-right

#### Zoom Animations
* Zoom In
  * zoom-in
  * zoom-in-up
  * zoom-in-down
  * zoom-in-left
  * zoom-in-right
  * zoom-in-up-left
  * zoom-in-up-right
  * zoom-in-down-left
  * zoom-in-down-right

* Zoom Out
  * zoom-out
  * zoom-out-up
  * zoom-out-down
  * zoom-out-left
  * zoom-out-right
  * zoom-out-up-left
  * zoom-out-up-right
  * zoom-out-down-left
  * zoom-out-down-right
