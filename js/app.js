'use strict';
/////// Font Size Changer
var fontSize = 100;
if (localStorage.getItem('fontSize')) {
    fontSize = parseInt(localStorage.getItem('fontSize'));
    document.body.style.fontSize = fontSize + '%';
}
var FONTSMALLER = document.querySelector('#font-smaller');
var FONTLARGER = document.querySelector('#font-larger');
var UPDATEFONTSIZE = function(e) {
    var elementAs = e.target;
    var value = elementAs.dataset.updateTextSize;
    fontSize += +value;
    document.body.style.fontSize = fontSize + '%';
    if (fontSize === 100) {
        localStorage.removeItem('fontSize');
    } else {
    localStorage.setItem('fontSize', fontSize.toString());
}
};
FONTSMALLER.addEventListener('click', UPDATEFONTSIZE);
FONTLARGER.addEventListener('click', UPDATEFONTSIZE);
////// Return to Top Button
var toTop = document.getElementById('to-top');
var GOTOTOP = function(e) {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    e.preventDefault();
};
if (toTop) {
    toTop.addEventListener('click', GOTOTOP);
} else {}
////// Politics Button on Profile
var politicsButton = document.querySelector('#hidden-politics-toggle');
var politicsContainer = document.querySelector('#hidden-politics');
var POLITICSTOGGLE = function() {
    if (politicsContainer.classList.contains('hidden')) {
        politicsContainer.classList.remove('hidden');
        politicsButton.setAttribute('aria-hidden', 'false');
        politicsButton.classList.add('animation');
    } else {
        politicsContainer.classList.add('hidden');
        politicsButton.setAttribute('aria-hidden', 'true');
        politicsButton.classList.remove('animation');
    }
};
if (politicsButton && politicsContainer) {
    politicsButton.addEventListener('click', POLITICSTOGGLE);
} else {};
