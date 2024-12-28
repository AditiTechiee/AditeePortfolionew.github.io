/* Reset some default styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

/* Chat container style */
.chat-container {
    width: 100%;
    max-width: 350px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    display: flex;
    flex-direction: column;
    height: 400px;
}

/* Chat header with user icon and title */
.chat-header {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
}

.chat-header .user-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
}

.chat-header .chat-title {
    font-weight: bold;
    font-size: 18px;
}

/* Message box where chat messages are displayed */
.chat-box {
    flex-grow: 1;
    overflow-y: auto;
    margin-bottom: 15px;
    padding-right: 10px;
}

/* Style for individual messages */
.message {
    padding: 10px;
    margin: 5px;
    border-radius: 8px;
    max-width: 80%;
    word-wrap: break-word;
}

/* User's message style */
.user-message {
    background-color: #e0f7fa;
    align-self: flex-end;
}

/* Bot's message style */
.bot-message {
    background-color: #f1f1f1;
    align-self: flex-start;
}

/* Input box and send button styling */
.input-box {
    display: flex;
    justify-content: space-between;
}

.input-box input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 10px;
    font-size: 14px;
}

.input-box button {
    padding: 10px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
}

.input-box button:hover {
    background-color: #0056b3;
}

/* Ensure the chat-box scrolls to the latest message */
.chat-box {
    display: flex;
    flex-direction: column-reverse;
}
