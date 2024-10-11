document.getElementById('send-button').addEventListener('click', function() {
    const input = document.getElementById('message-input');
    const message = input.value;

    if (message.trim() === '') {
        return; // Don't send empty messages
    }

    const messagesContainer = document.getElementById('messages');
    const newMessage = document.createElement('div');
    newMessage.className = 'bg-blue-100 p-2 my-1 rounded-lg';
    newMessage.innerText = message;

    messagesContainer.appendChild(newMessage);
    input.value = ''; // Clear the input
    messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll to the bottom
});
