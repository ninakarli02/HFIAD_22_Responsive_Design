// Dies ist nur ein Beispiel. Sie müssen den Code an Ihre spezifische Situation anpassen.
var menuButton = document.querySelector('.menu-button');
var body = document.querySelector('body');

menuButton.addEventListener('click', function() {
    if (body.classList.contains('menu-open')) {
        body.classList.remove('menu-open');
    } else {
        body.classList.add('menu-open');
    }
});