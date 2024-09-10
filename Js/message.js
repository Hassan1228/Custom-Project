document.getElementById('messageForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const input = e.target.querySelector('input');
    const message = input.value.trim();
    if (message) {
      // Append the new message to the chat window
      const messageDiv = document.createElement('div');
      messageDiv.className = 'message';
      messageDiv.innerHTML = `
        <div class="d-flex align-items-start">
          <img src="./assets/profile_icon.png" alt="Sender" class="rounded-circle me-2" style="width: 40px; height: 40px;">
          <div class="message-body">
            <h6 class="mb-1">You</h6>
            <p class="mb-0">${message}</p>
            <small>Just now</small>
          </div>
        </div>
      `;
      document.querySelector('.chat-window').appendChild(messageDiv);
  
      // Clear the input
      input.value = '';
      document.querySelector('.chat-window').scrollTop = document.querySelector('.chat-window').scrollHeight;
    }
  });
  