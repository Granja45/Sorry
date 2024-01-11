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
        (randomX >= textBox.offsetLeft - 20 &&
        randomX <= textBox.offsetLeft + textBox.clientWidth + 20 &&
        randomY >= textBox.offsetTop - 20 &&
        randomY <= textBox.offsetTop + textBox.clientHeight + 20) ||
        // Check for overlap with "Yes" button
        (randomX >= yesButton.offsetLeft - 20 &&
        randomX <= yesButton.offsetLeft + yesButton.clientWidth + 20 &&
        randomY >= yesButton.offsetTop - 20 &&
        randomY <= yesButton.offsetTop + yesButton.clientHeight + 20)
    );
    

    button.style.position = 'absolute';
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
}


function redirectToLove() {
    window.location.href = 'love.html';
}
