'use strict';
console.log('Welcome to the site. Please enjoy this cookie. 🍪');
var fontSize = 100;
var fontStore = 'false';
if (localStorage.getItem('fontSize')) {
    fontSize = parseInt(localStorage.getItem('fontSize'));
    document.body.style.fontSize = fontSize + '%';
}
var FONTSMALLER = document.getElementById('font-smaller');
var FONTLARGER = document.getElementById('font-larger');
var FONTSAVE = document.getElementById('font-save');
var updateFontSize = function (e) {
    var elementAs = e.target;
    var value = elementAs.dataset.updateTextSize;
    fontSize += +value;
    document.body.style.fontSize = fontSize + '%';
    if (fontSize === 100) {
        localStorage.removeItem('fontSize');
        localStorage.removeItem('fontStore');
    }
};
var saveFontSize = function () {
    if (FONTSAVE.checked === true) {
        localStorage.setItem('fontSize', fontSize.toString());
        localStorage.setItem('fontStore', 'true');
    }
    if (FONTSAVE.checked === false) {
        localStorage.removeItem('fontSize');
        localStorage.removeItem('fontStore');
    }
};
if (localStorage.getItem('fontStore')) {
    if (fontStore = 'true') {
        FONTSAVE.checked = true;
    }
}
FONTSMALLER.addEventListener('click', updateFontSize);
FONTLARGER.addEventListener('click', updateFontSize);
FONTSAVE.addEventListener('click', saveFontSize);
var toTop = document.getElementById('to-top');
var GOTOTOP = function (e) {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    e.preventDefault();
};
if (toTop) {
    toTop.addEventListener('click', GOTOTOP);
}
var POLITICSBUTTON = document.getElementById('hidden-politics-toggle');
var POLITICSCONTAINER = document.getElementById('hidden-politics');
var politicsToggle = function () {
    if (POLITICSCONTAINER.classList.contains('hidden')) {
        POLITICSCONTAINER.classList.remove('hidden');
        POLITICSBUTTON.setAttribute('aria-hidden', 'false');
        POLITICSBUTTON.classList.add('animation');
    }
    else {
        POLITICSCONTAINER.classList.add('hidden');
        POLITICSBUTTON.setAttribute('aria-hidden', 'true');
        POLITICSBUTTON.classList.remove('animation');
    }
};
if (POLITICSBUTTON && POLITICSCONTAINER) {
    POLITICSBUTTON.addEventListener('click', politicsToggle);
}
;
