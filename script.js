function randomizePosition() {
    var button = document.getElementById('noBtn');
    var maxWidth = window.innerWidth - button.clientWidth;
    var maxHeight = window.innerHeight - button.clientHeight;

    // Dimensions and positions of text box and "Yes" button
    var container = document.querySelector('.container');
    var containerRect = container.getBoundingClientRect();

    var textBoxWidth = container.clientWidth;
    var textBoxHeight = container.clientHeight;
    var textBoxTop = containerRect.top;
    var textBoxLeft = containerRect.left;

    var yesButton = document.getElementById('yesBtn');
    var yesButtonRect = yesButton.getBoundingClientRect();
    var yesButtonWidth = yesButtonRect.width;
    var yesButtonHeight = yesButtonRect.height;
    var yesButtonTop = yesButtonRect.top;
    var yesButtonLeft = yesButtonRect.left;

    // Adjusting the available width and height considering text box and "Yes" button
    maxWidth = maxWidth - textBoxWidth - yesButtonWidth;
    maxHeight = maxHeight - Math.max(textBoxHeight, yesButtonHeight);

    // Random positions within adjusted bounds
    var randomX = Math.floor(Math.random() * maxWidth);
    var randomY = Math.floor(Math.random() * maxHeight);

    // Adjust positions to avoid overlapping with text box and "Yes" button
    randomX += Math.max(textBoxLeft + textBoxWidth, yesButtonLeft + yesButtonWidth);
    randomY += Math.max(textBoxTop, yesButtonTop + yesButtonHeight);

    button.style.position = 'absolute';
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
}

function redirectToLove() {
    window.location.href = 'love.html';
}
