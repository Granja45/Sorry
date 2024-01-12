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

        // Adjust position if it exceeds maximum width
        if (randomX + button.clientWidth > maxX) {
            randomX = maxX - button.clientWidth;
        }

        // Adjust position if it exceeds maximum height
        if (randomY + button.clientHeight > maxY) {
            randomY = maxY - button.clientHeight;
        }

        // Ensure at least 20 pixels away from the text box on all sides
        var minDistance = 20;

        if (
            randomX + button.clientWidth + minDistance > textBox.offsetLeft &&
            randomX - minDistance < textBox.offsetLeft + textBox.clientWidth &&
            randomY + button.clientHeight + minDistance > textBox.offsetTop &&
            randomY - minDistance < textBox.offsetTop + textBox.clientHeight
        ) {
            randomX = textBox.offsetLeft + textBox.clientWidth + minDistance;
            randomY = textBox.offsetTop + minDistance;
        }

        console.log('randomX', randomX);
        console.log('randomY', randomY);

    } while (
        // Check for overlap with text box
        (randomX >= textBox.offsetLeft - minDistance &&
        randomX <= textBox.offsetLeft + textBox.clientWidth + minDistance &&
        randomY >= textBox.offsetTop - minDistance &&
        randomY <= textBox.offsetTop + textBox.clientHeight + minDistance) ||
        // Check for overlap with "Yes" button
        (randomX >= yesButton.offsetLeft - minDistance &&
        randomX <= yesButton.offsetLeft + yesButton.clientWidth + minDistance &&
        randomY >= yesButton.offsetTop - minDistance &&
        randomY <= yesButton.offsetTop + yesButton.clientHeight + minDistance)
    );

    button.style.position = 'absolute';
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
}

function redirectToLove() {
    window.location.href = 'love.html';
}
