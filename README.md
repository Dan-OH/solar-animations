# Solar Animations

Lightweight and simple animate on scroll

## Getting Started

### Installing

Install package:

```
npm i solar-animations
```

Import script, styles and initialize:

```javascript
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

You can customize the animation options by passing an object to the `solarAnimations` function. The available options are:

- `root`: The element that is used as the viewport for checking visibility (default is `null`).
- `rootMargin`: Margin around the root (default is `'0px'`).
- `threshold`: A single number or an array of numbers indicating at what percentage of the target's visibility the observer's callback should be executed (default is `[0, 0.25]`).
- `duration`: Duration of the animation (default is `'0.5s'`).
- `delay`: Delay before the animation starts (default is `'0'`).
- `easing`: Easing function for the animation (default is `'ease'`).

Example of setting custom options:

```javascript
solarAnimations({
  duration: '1s',
  delay: '0.2s',
  easing: 'ease-in-out',
});
```

## Available Animations

The library supports various animations categorized as follows:

### Fade Animations
- fade
- fade-up
- fade-down
- fade-left
- fade-right
- fade-up-left
- fade-up-right
- fade-down-left
- fade-down-right

### Slide Animations
- slide
- slide-up
- slide-down
- slide-left
- slide-right
- slide-up-left
- slide-up-right
- slide-down-left
- slide-down-right

### Flip Animations
- flip-up
- flip-down
- flip-left
- flip-right

### Zoom Animations
- zoom-in
- zoom-in-up
- zoom-in-down
- zoom-in-left
- zoom-in-right
- zoom-in-up-left
- zoom-in-up-right
- zoom-in-down-left
- zoom-in-down-right
- zoom-out
- zoom-out-up
- zoom-out-down
- zoom-out-left
- zoom-out-right
- zoom-out-up-left
- zoom-out-up-right
- zoom-out-down-left
- zoom-out-down-right

## License

This project is licensed under the ISC License.
