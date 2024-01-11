function randomizePosition() {
    var button = document.getElementById('noBtn');
    var maxWidth = window.innerWidth - button.clientWidth;
    var maxHeight = window.innerHeight - button.clientHeight;

    // Dimensions of text box and "Yes" button
    var textBoxWidth = document.querySelector('.container').clientWidth;
    var yesButtonWidth = document.getElementById('yesBtn').clientWidth;

    // Adjusting the available width considering text box and "Yes" button
    maxWidth = maxWidth - textBoxWidth - yesButtonWidth;

    var randomX = Math.floor(Math.random() * maxWidth);
    var randomY = Math.floor(Math.random() * maxHeight);

    button.style.position = 'absolute';
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
}

function redirectToLove() {
    window.location.href = 'love.html';
}
