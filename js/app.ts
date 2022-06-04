'use strict';

console.log('Welcome to the site. Please enjoy this cookie. 🍪');

/////// Light/Dark Mode Changer

const LIGHTBUTTON: Element = document.querySelector('#lightButton');
const DARKBUTTON: Element = document.querySelector('#darkButton');
const SYSTEMBUTTON: Element = document.querySelector('#systemButton');
const THEMESTYLES = document.querySelectorAll('meta[name="theme-color"');
const BODYHOME = document.querySelector('body.home');

let systemLight: MediaQueryList = window.matchMedia('(prefers-color-scheme: light)');
let systemDark: MediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');

const LIGHTCOLORHOME: string = 'hsl(0, 0%, 98%)'
const DARKCOLORHOME: string = 'hsl(0, 0%, 10%)'

const LIGHTCOLOR: string = 'hsl(0, 0%, 98%)'
const DARKCOLOR: string = 'hsl(0, 0%, 10%)'

if (localStorage.getItem('theme') == 'light' && BODYHOME) {
  THEMESTYLES.forEach((e) => {
    e.setAttribute('content', LIGHTCOLORHOME);
  });
} else if (localStorage.getItem('theme') == 'dark' && BODYHOME) {
  THEMESTYLES.forEach((e) => {
    e.setAttribute('content', DARKCOLORHOME);
  });
} else if (localStorage.getItem('theme') == 'light' && !BODYHOME) {
  THEMESTYLES.forEach((e) => {
    e.setAttribute('content', LIGHTCOLOR);
  });
} else if (localStorage.getItem('theme') == 'dark' && !BODYHOME) {
  THEMESTYLES.forEach((e) => {
    e.setAttribute('content', DARKCOLOR);
  });
}

const SETLIGHTTHEME = function () {
  document.documentElement.setAttribute('data-theme', 'light');
  localStorage.setItem('theme', 'light');
  if (BODYHOME) {
    THEMESTYLES.forEach((e) => {
      e.setAttribute('content', LIGHTCOLORHOME);
    });
  } else {
    THEMESTYLES.forEach((e) => {
      e.setAttribute('content', LIGHTCOLOR);
    });
  }
};

const SETDARKTHEME = function () {
  document.documentElement.setAttribute('data-theme', 'dark');
  localStorage.setItem('theme', 'dark');
  if (BODYHOME) {
    THEMESTYLES.forEach((e) => {
      e.setAttribute('content', DARKCOLORHOME);
    });
  } else {
    THEMESTYLES.forEach((e) => {
      e.setAttribute('content', DARKCOLOR);
    });
  }
};

const RESETTHEME = function () {
  document.documentElement.removeAttribute('data-theme');
  localStorage.removeItem('theme');
  if (systemLight.matches && BODYHOME) {
    THEMESTYLES.forEach((e) => {
      e.setAttribute('content', LIGHTCOLORHOME);
    });
  } else if (systemDark.matches && BODYHOME) {
    THEMESTYLES.forEach((e) => {
      e.setAttribute('content', DARKCOLORHOME);
    });
  } else if (systemLight.matches && !BODYHOME) {
    THEMESTYLES.forEach((e) => {
      e.setAttribute('content', LIGHTCOLOR);
    });
  } else if (systemDark.matches && !BODYHOME) {
    THEMESTYLES.forEach((e) => {
      e.setAttribute('content', DARKCOLOR);
    });
  }
};

LIGHTBUTTON.addEventListener('click', SETLIGHTTHEME);
DARKBUTTON.addEventListener('click', SETDARKTHEME);
SYSTEMBUTTON.addEventListener('click', RESETTHEME);

/////// Font Size Changer

let fontSize: number = 100;

if (localStorage.getItem('fontSize')) {
  fontSize = parseInt(localStorage.getItem('fontSize'));
  document.body.style.fontSize = fontSize + '%';
}

const FONTSMALLER: Element = document.querySelector('#fontSmaller');
const FONTLARGER: Element = document.querySelector('#fontLarger');
const FONTRESET: Element = document.querySelector('#fontReset');

const UPDATEFONTSIZE = function (e: Event): void {
  const elementAs = e.target as HTMLButtonElement;
  const value = elementAs.dataset.updateTextSize;
  fontSize += +value;
  document.body.style.fontSize = fontSize + '%';
  localStorage.setItem('fontSize', fontSize.toString());
};

const RESETFONTSIZE = function (e: Event): void {
  fontSize = 100;
  document.body.style.fontSize = fontSize + '%';
  localStorage.removeItem('fontSize');
};

FONTSMALLER.addEventListener('click', UPDATEFONTSIZE);
FONTLARGER.addEventListener('click', UPDATEFONTSIZE);
FONTRESET.addEventListener('click', RESETFONTSIZE);

/////// Emoji Color Changer

let emojiChanger: NodeListOf<Element> = document.querySelectorAll('.emojiHover');

emojiChanger.forEach((emoji) => {
  emoji.addEventListener('mouseover', emojiSaturate);
  emoji.addEventListener('mouseleave', emojiDesaturate);

  function emojiSaturate(e: MouseEvent) {
    const elementAs = (e.target as HTMLElement).dataset.id;
    document.getElementById(elementAs).classList.add('saturate');
  }

  function emojiDesaturate(e: MouseEvent) {
    const elementAs = (e.target as HTMLElement).dataset.id;
    document.getElementById(elementAs).classList.remove('saturate');
  }
});

////// Return to Top Button

let toTop: HTMLElement = document.getElementById('toTop');

const GOTOTOP = function (e: Event) {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  e.preventDefault();
};

if (toTop) {
  toTop.addEventListener('click', GOTOTOP);
} else {
}

////// Toggle Navigation Button

let nav: Element = document.querySelector('nav');
let toggleNav: Element = document.querySelector('#toggleNav');

if (localStorage.getItem('nav') == 'hidden') {
  nav.classList.add('hidden');
  toggleNav.classList.remove('visible');
  toggleNav.classList.add('hidden');
  toggleNav.innerHTML = 'Show controls';
  toggleNav.setAttribute('aria-label', 'Show controls');
} else if (localStorage.getItem('nav') == 'visible' || !localStorage.getItem('nav')) {
  nav.classList.remove('hidden');
  toggleNav.classList.remove('hidden');
  toggleNav.classList.add('visible');
  toggleNav.innerHTML = 'Hide controls';
  toggleNav.setAttribute('aria-label', 'Hide controls');
}

const TOGGLENAVIGATION = function () {
  if (nav.classList.contains('hidden')) {
    nav.classList.remove('hidden');
    localStorage.setItem('nav', 'visible');
    toggleNav.innerHTML = 'Hide controls';
    toggleNav.classList.remove('hidden');
    toggleNav.classList.add('visible');
    toggleNav.setAttribute('aria-label', 'Hide controls');
  } else {
    nav.classList.add('hidden');
    localStorage.setItem('nav', 'hidden');
    toggleNav.innerHTML = 'Show controls';
    toggleNav.classList.remove('visible');
    toggleNav.classList.add('hidden');
    toggleNav.setAttribute('aria-label', 'Show controls');
  }
};

toggleNav.addEventListener('click', TOGGLENAVIGATION);
