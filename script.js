function randomizePosition() {
    var button = document.getElementById('noBtn');
    var textBox = document.querySelector('.container');
    var yesButton = document.getElementById('yesBtn');

    var maxX = window.innerWidth - button.clientWidth;
    var maxY = window.innerHeight - button.clientHeight;

    var randomX, randomY;

    do {
        randomX = Math.floor(Math.random() * maxX);
        randomY = Math.floor(Math.random() * maxY);
    } while (
        // Check for overlap with text box
        (randomX >= textBox.offsetLeft - button.clientWidth &&
        randomX <= textBox.offsetLeft + textBox.clientWidth &&
        randomY >= textBox.offsetTop &&
        randomY <= textBox.offsetTop + textBox.clientHeight) ||
        // Check for overlap with "Yes" button
        (randomX >= yesButton.offsetLeft - button.clientWidth &&
        randomX <= yesButton.offsetLeft + yesButton.clientWidth &&
        randomY >= yesButton.offsetTop &&
        randomY <= yesButton.offsetTop + yesButton.clientHeight)
    );

    button.style.position = 'absolute';
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
}


function redirectToLove() {
    window.location.href = 'love.html';
}
