function openChat() {
    document.getElementById('chat-box').style.display = 'block';
}

function closeChat() {
    document.getElementById('chat-box').style.display = 'none';
}

function sendMessage() {
    var input = document.getElementById('chat-input');
    var text = input.value;
    if (text == '') return;
    var messages = document.getElementById('chat-messages');
    messages.innerHTML += '<p>' + text + '</p>';
    input.value = '';
}