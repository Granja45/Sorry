function randomizePosition() {
    var button = document.getElementById('noBtn');
    var maxWidth = window.innerWidth - button.clientWidth;
    var maxHeight = window.innerHeight - button.clientHeight;

    var randomX = Math.floor(Math.random() * maxWidth);
    var randomY = Math.floor(Math.random() * maxHeight);

    button.style.position = 'absolute';
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
}
