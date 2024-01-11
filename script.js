function randomizePosition() {
    var button = document.getElementById('noBtn');
    var maxWidth = window.innerWidth - button.clientWidth;
    var maxHeight = window.innerHeight - button.clientHeight;

    // Dimensions of text box and "Yes" button
    var textBox = document.querySelector('.container');
    var textBoxWidth = textBox.clientWidth;
    var yesButtonWidth = document.getElementById('yesBtn').clientWidth;

    // Adjusting the available width considering text box and "Yes" button
    maxWidth = maxWidth - textBoxWidth - yesButtonWidth;

    // Flag to check if the new position overlaps with other elements
    var overlap = true;

    while (overlap) {
        var randomX = Math.floor(Math.random() * maxWidth);
        var randomY = Math.floor(Math.random() * maxHeight);

        // Check for overlap with text box
        if (
            randomX > textBox.offsetLeft &&
            randomX < textBox.offsetLeft + textBoxWidth &&
            randomY > textBox.offsetTop &&
            randomY < textBox.offsetTop + textBox.clientHeight
        ) {
            continue; // Overlaps with text box, regenerate position
        }

        // Check for overlap with "Yes" button
        var yesButton = document.getElementById('yesBtn');
        if (
            randomX > yesButton.offsetLeft &&
            randomX < yesButton.offsetLeft + yesButtonWidth &&
            randomY > yesButton.offsetTop &&
            randomY < yesButton.offsetTop + yesButton.clientHeight
        ) {
            continue; // Overlaps with "Yes" button, regenerate position
        }

        // No overlap, break the loop
        overlap = false;
    }

    button.style.position = 'absolute';
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
}

function redirectToLove() {
    window.location.href = 'love.html';
}
