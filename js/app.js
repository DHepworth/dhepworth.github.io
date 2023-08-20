'use strict';
console.log('Welcome to the site. Please enjoy this cookie. 🍪');
/////// Light/Dark Mode Changer
var LIGHTBUTTON = document.querySelector('#lightButton');
var DARKBUTTON = document.querySelector('#darkButton');
var SYSTEMBUTTON = document.querySelector('#systemButton');
var THEMESTYLES = document.querySelectorAll('meta[name="theme-color"');
var BODYHOME = document.querySelector('body.home');
var systemLight = window.matchMedia('(prefers-color-scheme: light)');
var systemDark = window.matchMedia('(prefers-color-scheme: dark)');
var LIGHTCOLORHOME = 'hsl(0, 0%, 98%)';
var DARKCOLORHOME = 'hsl(0, 0%, 10%)';
var LIGHTCOLOR = 'hsl(0, 0%, 98%)';
var DARKCOLOR = 'hsl(0, 0%, 10%)';
if (localStorage.getItem('theme') == 'light' && BODYHOME) {
    THEMESTYLES.forEach(function (e) {
        e.setAttribute('content', LIGHTCOLORHOME);
    });
}
else if (localStorage.getItem('theme') == 'dark' && BODYHOME) {
    THEMESTYLES.forEach(function (e) {
        e.setAttribute('content', DARKCOLORHOME);
    });
}
else if (localStorage.getItem('theme') == 'light' && !BODYHOME) {
    THEMESTYLES.forEach(function (e) {
        e.setAttribute('content', LIGHTCOLOR);
    });
}
else if (localStorage.getItem('theme') == 'dark' && !BODYHOME) {
    THEMESTYLES.forEach(function (e) {
        e.setAttribute('content', DARKCOLOR);
    });
}
var SETLIGHTTHEME = function () {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    if (BODYHOME) {
        THEMESTYLES.forEach(function (e) {
            e.setAttribute('content', LIGHTCOLORHOME);
        });
    }
    else {
        THEMESTYLES.forEach(function (e) {
            e.setAttribute('content', LIGHTCOLOR);
        });
    }
};
var SETDARKTHEME = function () {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    if (BODYHOME) {
        THEMESTYLES.forEach(function (e) {
            e.setAttribute('content', DARKCOLORHOME);
        });
    }
    else {
        THEMESTYLES.forEach(function (e) {
            e.setAttribute('content', DARKCOLOR);
        });
    }
};
var RESETTHEME = function () {
    document.documentElement.removeAttribute('data-theme');
    localStorage.removeItem('theme');
    if (systemLight.matches && BODYHOME) {
        THEMESTYLES.forEach(function (e) {
            e.setAttribute('content', LIGHTCOLORHOME);
        });
    }
    else if (systemDark.matches && BODYHOME) {
        THEMESTYLES.forEach(function (e) {
            e.setAttribute('content', DARKCOLORHOME);
        });
    }
    else if (systemLight.matches && !BODYHOME) {
        THEMESTYLES.forEach(function (e) {
            e.setAttribute('content', LIGHTCOLOR);
        });
    }
    else if (systemDark.matches && !BODYHOME) {
        THEMESTYLES.forEach(function (e) {
            e.setAttribute('content', DARKCOLOR);
        });
    }
};
LIGHTBUTTON.addEventListener('click', SETLIGHTTHEME);
DARKBUTTON.addEventListener('click', SETDARKTHEME);
SYSTEMBUTTON.addEventListener('click', RESETTHEME);
//////// Font Changer
var SERIFBUTTON = document.querySelector('#serifButton');
var SANSSERIFBUTTON = document.querySelector('#sansSerifButton');
if (localStorage.getItem('font-family') == 'sans-serif') {
    document.body.classList.add('sans-serif');
}
;
var SANSSERIFFONT = function () {
    localStorage.setItem('font-family', 'sans-serif');
    document.body.classList.add('sans-serif');
};
var SERIFFONT = function () {
    localStorage.removeItem('font-family');
    document.body.classList.remove('sans-serif');
};
SANSSERIFBUTTON.addEventListener('click', SANSSERIFFONT);
SERIFBUTTON.addEventListener('click', SERIFFONT);
/////// Font Size Changer
var fontSize = 100;
if (localStorage.getItem('fontSize')) {
    fontSize = parseInt(localStorage.getItem('fontSize'));
    document.body.style.fontSize = fontSize + '%';
}
var FONTSMALLER = document.querySelector('#fontSmaller');
var FONTLARGER = document.querySelector('#fontLarger');
var FONTRESET = document.querySelector('#fontReset');
var UPDATEFONTSIZE = function (e) {
    var elementAs = e.target;
    var value = elementAs.dataset.updateTextSize;
    fontSize += +value;
    document.body.style.fontSize = fontSize + '%';
    localStorage.setItem('fontSize', fontSize.toString());
};
var RESETFONTSIZE = function () {
    fontSize = 100;
    document.body.style.fontSize = fontSize + '%';
    localStorage.removeItem('fontSize');
};
FONTSMALLER.addEventListener('click', UPDATEFONTSIZE);
FONTLARGER.addEventListener('click', UPDATEFONTSIZE);
FONTRESET.addEventListener('click', RESETFONTSIZE);
/////// Emoji Color Changer
var emojiChanger = document.querySelectorAll('.emojiHover');
emojiChanger.forEach(function (emoji) {
    emoji.addEventListener('mouseover', emojiSaturate);
    emoji.addEventListener('mouseleave', emojiDesaturate);
    function emojiSaturate(e) {
        var elementAs = e.target.dataset.id;
        document.getElementById(elementAs).classList.add('saturate');
    }
    function emojiDesaturate(e) {
        var elementAs = e.target.dataset.id;
        document.getElementById(elementAs).classList.remove('saturate');
    }
});
////// Return to Top Button
var toTop = document.getElementById('toTop');
var GOTOTOP = function (e) {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    e.preventDefault();
};
if (toTop) {
    toTop.addEventListener('click', GOTOTOP);
}
else {
}
////// Toggle Navigation Button
var nav = document.querySelector('nav');
var toggleNav = document.querySelector('#toggleNav');
if (localStorage.getItem('nav') == 'hidden' || !localStorage.getItem('nav')) {
    nav.classList.add('hidden');
    toggleNav.classList.remove('visible');
    toggleNav.classList.add('hidden');
    toggleNav.innerHTML = 'Aa';
    toggleNav.setAttribute('aria-label', 'Show controls');
}
else if (localStorage.getItem('nav') == 'visible') {
    nav.classList.remove('hidden');
    toggleNav.classList.remove('hidden');
    toggleNav.classList.add('visible');
    toggleNav.innerHTML = '&#x2715;';
    toggleNav.setAttribute('aria-label', 'Hide controls');
}
var TOGGLENAVIGATION = function () {
    if (nav.classList.contains('hidden')) {
        nav.classList.remove('hidden');
        nav.setAttribute('aria-hidden', 'false');
        localStorage.setItem('nav', 'visible');
        toggleNav.innerHTML = '&#x2715;';
        toggleNav.classList.remove('hidden');
        toggleNav.classList.add('visible');
        toggleNav.setAttribute('aria-label', 'Hide controls');
    }
    else {
        nav.classList.add('hidden');
        nav.setAttribute('aria-hidden', 'true');
        localStorage.setItem('nav', 'hidden');
        toggleNav.innerHTML = 'Aa';
        toggleNav.classList.remove('visible');
        toggleNav.classList.add('hidden');
        toggleNav.setAttribute('aria-label', 'Show controls');
    }
};
toggleNav.addEventListener('click', TOGGLENAVIGATION);
////// What Is This? Button
var whatIsThisDialog = document.getElementById('whatIsThisDialog');
var whatIsThisButton = document.getElementById('whatIsThisButton');
var whatIsThisCloseButton = document.getElementById('whatIsThisCloseButton');
whatIsThisButton.addEventListener("click", function () {
    whatIsThisDialog.showModal();
});
whatIsThisCloseButton.addEventListener("click", function () {
    whatIsThisDialog.close();
});
////// Politics Button on Profile
var politicsButton = document.querySelector('#hiddenPoliticsToggle');
var politicsContainer = document.querySelector('#hiddenPolitics');
var POLITICSTOGGLE = function () {
    if (politicsContainer.classList.contains('hidden')) {
        politicsContainer.classList.remove('hidden');
        politicsButton.setAttribute('aria-hidden', 'false');
        politicsButton.classList.add('animation');
    }
    else {
        politicsContainer.classList.add('hidden');
        politicsButton.setAttribute('aria-hidden', 'true');
        politicsButton.classList.remove('animation');
    }
};
if (politicsButton && politicsContainer) {
    politicsButton.addEventListener('click', POLITICSTOGGLE);
}
else {
}
;
