function randomizePosition() {
    var button = document.getElementById('noBtn');
    var maxWidth = window.innerWidth - button.clientWidth;
    var maxHeight = window.innerHeight - button.clientHeight;

    // Dimensions of text box and "Yes" button
    var textBox = document.querySelector('.container');
    var textBoxWidth = textBox.clientWidth;
    var yesButton = document.getElementById('yesBtn');
    var yesButtonWidth = yesButton.clientWidth;

    // Adjusting the available width considering text box and "Yes" button
    maxWidth = maxWidth - textBoxWidth - yesButtonWidth;

    // Generate a new position that does not overlap with text box and "Yes" button
    var randomX = Math.floor(Math.random() * maxWidth);
    var randomY = Math.floor(Math.random() * maxHeight);

    // Check for overlap with text box
    if (
        randomX > textBox.offsetLeft - button.clientWidth &&
        randomX < textBox.offsetLeft + textBoxWidth &&
        randomY > textBox.offsetTop &&
        randomY < textBox.offsetTop + textBox.clientHeight
    ) {
        randomX = textBox.offsetLeft + textBoxWidth; // Adjust X position to the right of the text box
    }

    // Check for overlap with "Yes" button
    if (
        randomX > yesButton.offsetLeft - button.clientWidth &&
        randomX < yesButton.offsetLeft + yesButtonWidth &&
        randomY > yesButton.offsetTop &&
        randomY < yesButton.offsetTop + yesButton.clientHeight
    ) {
        randomX = yesButton.offsetLeft + yesButtonWidth; // Adjust X position to the right of the "Yes" button
    }

    button.style.position = 'absolute';
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
}


function redirectToLove() {
    window.location.href = 'love.html';
}
