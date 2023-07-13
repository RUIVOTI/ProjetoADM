document.addEventListener('DOMContentLoaded', function () {
    var btnAjuda = document.getElementById('btnAjuda');
    var chatbotContainer = document.getElementById('chatbotContainer');
    var closeButton = document.getElementById('closeButton');
    var chatInput = document.getElementById('chatInput');
    var sendButton = document.getElementById('sendButton');
    var chatbotBody = document.getElementById('chatbotBody');

    btnAjuda.addEventListener('click', function () {
        chatbotContainer.style.display = 'block';
        sendMessage("Olá! Em que posso ajudar?🤖");
    });

    closeButton.addEventListener('click', function () {
        chatbotContainer.style.display = 'none';
    });

    sendButton.addEventListener('click', function () {
        var message = chatInput.value.trim();
        if (message !== '') {
            sendMessage(message);
            chatInput.value = '';
            setTimeout(function () {
                sendAutoReply();
            }, 1000);
        }
    });

    function sendMessage(message) {
        var messageElement = document.createElement('div');
        messageElement.classList.add('chatbot-message');
        messageElement.innerHTML = '<p>' + message + '</p>';
        chatbotBody.appendChild(messageElement);
        chatbotBody.scrollTop = chatbotBody.scrollHeight;
    }

    function sendAutoReply() {
        var messageElement = document.createElement('div');
        messageElement.classList.add('chatbot-message');
        messageElement.innerHTML = '<p>Claro posso te ajudar agora com isso</p>';
        chatbotBody.appendChild(messageElement);
        chatbotBody.scrollTop = chatbotBody.scrollHeight;
    }
});
