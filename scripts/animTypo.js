'use strict';

const app = {

  chars:  ['Design', 'Coding', 'Impact', 'Evolve', 'Change', 'Styled', 'Vision', 'Pixels', 'Layout', 'Mobile', 'Refine', 'Expert', 'Intent', 'Freedom', 'Explore', 'Vibrant', 'Delight', 'Graphic', 'Express', 'Develop', 'Innovate', 'Creative', 'Responsive', 'User-Centric', 'Frontend', 'Simplify', 'Dynamic', 'Adaptive', 'Progressive', 'Interactive', 'Intuitive', 'Elegant', 'Fluid', 'Optimize', 'Craft', 'User-Experience', 'Tech', 'Trend', 'Inspire', 'Angular', 'React', 'Vue', 'UI/UX', 'Prototype', 'Iterate', 'Passionate', 'Quality', 'Pixel-Perfect', 'Collaborate'],

  fonts: [
    'Playfair Display',    
    'Roboto Slab',
    'Josefin Sans',
    'poppins'
  ],

  init() {
    WebFont.load({
      google: {
        families: [
          'Playfair Display:900',
          'Roboto Slab:900',
          'Josefin Sans:100',
          'poppins:100'
        ]
      },
      active: app.initApp,
    });
  },


  initApp() {
    app.container = document.createElement('div');
    app.container.className = 'animationContainer';
    document.body.appendChild(app.container);
    window.setInterval(app.add, 100);
  },

  add () {
    const element = document.createElement('span');
    app.container.appendChild(element);
    app.animate(element);
  },

  animate (element) {
    const character = app.chars[Math.floor(Math.random() * app.chars.length)];
    const duration = Math.floor(Math.random() * 15) + 1;
    const offset = Math.floor(Math.random() * (50 - duration * 2)) + 3;
    const size = 10 + (15 - duration);

    const shades = [
        '#82ebe0', // Turquoise
        // '#6ce7db',
        '#82ebe0',
        // '#82ebe0',
        '#6ce7db',
        // '#40e0d0',
        '#1eb6a7',
        '#ff00ff', // Magenta
        '#9c75ff' 
    ];

    const randomColor = shades[Math.floor(Math.random() * shades.length)];

    const selectedFont = app.fonts[Math.floor(Math.random() * app.fonts.length)];


    const opacityAmount = 1 - (duration / 15);
    const brightnessAmount = 1 - (duration / 15) * 0;

    element.style.cssText = `left:${offset}vw; transform: translateX(-50%); font-size:${size}px; animation-duration:${duration}s; color:${randomColor}; font-family: ${selectedFont}; filter: opacity(${opacityAmount}) brightness(${brightnessAmount})`;
    element.innerHTML = character;
    window.setTimeout(app.remove, duration * 1000, element);
  },

  remove (element) {
    element.parentNode.removeChild(element);
  },
};

document.addEventListener('DOMContentLoaded', app.init);
