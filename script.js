function randomizePosition() {
    var button = document.getElementById('noBtn');
    var maxWidth = window.innerWidth - button.clientWidth;
    var maxHeight = window.innerHeight - button.clientHeight;

    // Dimensions of text box and "Yes" button
    var container = document.querySelector('.container');
    var textBoxWidth = container.clientWidth;
    var textBoxHeight = container.clientHeight;
    var yesButtonWidth = document.getElementById('yesBtn').clientWidth;
    var yesButtonHeight = document.getElementById('yesBtn').clientHeight;

    // Adjusting the available width and height considering text box and "Yes" button
    maxWidth = maxWidth - Math.max(textBoxWidth, yesButtonWidth);
    maxHeight = maxHeight - Math.max(textBoxHeight, yesButtonHeight);

    var randomX = Math.floor(Math.random() * maxWidth);
    var randomY = Math.floor(Math.random() * maxHeight);

    button.style.position = 'absolute';
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
}

function redirectToLove() {
    window.location.href = 'love.html';
}
