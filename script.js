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
        (randomX >= textBox.offsetLeft - 5 &&
        randomX <= textBox.offsetLeft + textBox.clientWidth + 5 &&
        randomY >= textBox.offsetTop - 5 &&
        randomY <= textBox.offsetTop + textBox.clientHeight + 5) ||
        // Check for overlap with "Yes" button
        (randomX >= yesButton.offsetLeft - 5 &&
        randomX <= yesButton.offsetLeft + yesButton.clientWidth + 5 &&
        randomY >= yesButton.offsetTop - 5 &&
        randomY <= yesButton.offsetTop + yesButton.clientHeight + 5)
    );
    

    button.style.position = 'absolute';
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
}


function redirectToLove() {
    window.location.href = 'love.html';
}
