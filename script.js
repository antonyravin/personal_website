window.onload = function() {
    const greetingElement = document.getElementById('greeting');
    const hours = new Date().getHours();

    let greetingMessage;

    if (hours < 12) {
        greetingMessage = 'Good Morning!';
    } else if (hours < 18) {
        greetingMessage = 'Good Afternoon!';
    } else {
        greetingMessage = 'Good Evening!';
    }

    greetingElement.innerText = greetingMessage;
};
