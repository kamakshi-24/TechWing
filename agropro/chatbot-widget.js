// AgroPro Chatbot Widget - Simple and Reliable Version
(function() {
    'use strict';
    
    // Wait for DOM to be fully loaded
    function initChatbot() {
        console.log('Initializing AgroPro Chatbot Widget...');
        
        // Create the floating chat button
        const chatButton = document.createElement('div');
        chatButton.id = 'agropro-chat-button';
        chatButton.innerHTML = `
            <div class="chat-btn-content">
                <span class="chat-icon">🌱</span>
                <span class="chat-text">Ask AI</span>
            </div>
        `;
        
        // Create the chat interface
        const chatInterface = document.createElement('div');
        chatInterface.id = 'agropro-chat-interface';
        chatInterface.innerHTML = `
            <div class="chat-header">
                <h4>🌱 AgroPro AI Assistant</h4>
                <button class="close-btn" onclick="document.getElementById('agropro-chat-interface').style.display='none'">×</button>
            </div>
            <div class="chat-messages" id="chatMessages">
                <div class="message bot">
                    <div class="message-bubble">
                        Hello! I'm your farming AI assistant. How can I help you today?
                    </div>
                </div>
            </div>
            <div class="quick-questions">
                <button class="quick-btn" onclick="askQuickQuestion('Soil fertility')">Soil</button>
                <button class="quick-btn" onclick="askQuickQuestion('Pest control')">Pests</button>
                <button class="quick-btn" onclick="askQuickQuestion('Planting time')">Planting</button>
                <button class="quick-btn" onclick="askQuickQuestion('Watering')">Water</button>
            </div>
            <div class="chat-input">
                <input type="text" id="chatInput" placeholder="Ask a question..." onkeypress="if(event.key==='Enter') sendMessage()">
                <button onclick="sendMessage()">Send</button>
            </div>
        `;
        
        // Add styles
        const styles = `
            #agropro-chat-button {
                position: fixed;
                bottom: 20px;
                right: 20px;
                z-index: 10000;
                cursor: pointer;
                background: linear-gradient(135deg, #2f8f2f, #4CAF50);
                color: white;
                padding: 15px 20px;
                border-radius: 50px;
                box-shadow: 0 4px 15px rgba(0,0,0,0.3);
                transition: all 0.3s ease;
                font-family: Arial, sans-serif;
                font-weight: bold;
            }
            
            #agropro-chat-button:hover {
                transform: translateY(-2px);
                box-shadow: 0 6px 20px rgba(0,0,0,0.4);
            }
            
            .chat-btn-content {
                display: flex;
                align-items: center;
                gap: 8px;
            }
            
            .chat-icon {
                font-size: 18px;
            }
            
            .chat-text {
                font-size: 14px;
            }
            
            #agropro-chat-interface {
                position: fixed;
                bottom: 80px;
                right: 20px;
                width: 350px;
                height: 500px;
                background: white;
                border-radius: 15px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.2);
                display: none;
                flex-direction: column;
                overflow: hidden;
                z-index: 10000;
                font-family: Arial, sans-serif;
            }
            
            .chat-header {
                background: linear-gradient(135deg, #2f8f2f, #4CAF50);
                color: white;
                padding: 15px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            
            .chat-header h4 {
                margin: 0;
                font-size: 16px;
            }
            
            .close-btn {
                background: none;
                border: none;
                color: white;
                font-size: 24px;
                cursor: pointer;
                padding: 0;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .chat-messages {
                flex: 1;
                overflow-y: auto;
                padding: 15px;
                background: #f8f9fa;
            }
            
            .message {
                margin-bottom: 10px;
                display: flex;
            }
            
            .message.user {
                justify-content: flex-end;
            }
            
            .message.bot {
                justify-content: flex-start;
            }
            
            .message-bubble {
                max-width: 80%;
                padding: 10px 15px;
                border-radius: 18px;
                word-wrap: break-word;
                font-size: 14px;
            }
            
            .message.user .message-bubble {
                background: #007bff;
                color: white;
            }
            
            .message.bot .message-bubble {
                background: white;
                color: #333;
                border: 1px solid #e9ecef;
            }
            
            .quick-questions {
                padding: 10px 15px;
                background: white;
                border-top: 1px solid #e9ecef;
                text-align: center;
            }
            
            .quick-btn {
                display: inline-block;
                margin: 3px;
                padding: 6px 12px;
                background: #e9ecef;
                border: none;
                border-radius: 15px;
                color: #495057;
                cursor: pointer;
                font-size: 12px;
                transition: all 0.3s;
            }
            
            .quick-btn:hover {
                background: #2f8f2f;
                color: white;
            }
            
            .chat-input {
                padding: 15px;
                background: white;
                border-top: 1px solid #e9ecef;
            }
            
            .chat-input input {
                width: 100%;
                padding: 10px;
                border: 1px solid #ced4da;
                border-radius: 20px;
                font-size: 14px;
                margin-bottom: 10px;
                box-sizing: border-box;
            }
            
            .chat-input button {
                width: 100%;
                padding: 10px;
                background: #2f8f2f;
                border: none;
                border-radius: 20px;
                color: white;
                cursor: pointer;
                font-size: 14px;
            }
            
            .chat-input button:hover {
                background: #1e5f1e;
            }
        `;
        
        // Add styles to head
        const styleSheet = document.createElement('style');
        styleSheet.textContent = styles;
        document.head.appendChild(styleSheet);
        
        // Add elements to body
        document.body.appendChild(chatButton);
        document.body.appendChild(chatInterface);
        
        // Add click event to show chat
        chatButton.addEventListener('click', function() {
            chatInterface.style.display = 'flex';
            document.getElementById('chatInput').focus();
        });
        
        console.log('AgroPro Chatbot Widget initialized successfully!');
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initChatbot);
    } else {
        initChatbot();
    }
    
    // Global functions for the chat interface
    window.askQuickQuestion = function(question) {
        addMessage(question, true);
        
        setTimeout(() => {
            const response = getBotResponse(question);
            addMessage(response, false);
        }, 800);
    };
    
    window.sendMessage = function() {
        const input = document.getElementById('chatInput');
        const message = input.value.trim();
        
        if (message === '') return;
        
        addMessage(message, true);
        input.value = '';
        
        setTimeout(() => {
            const response = getBotResponse(message);
            addMessage(response, false);
        }, 1000);
    };
    
    function addMessage(message, isUser) {
        const chatMessages = document.getElementById('chatMessages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isUser ? 'user' : 'bot'}`;
        
        const bubble = document.createElement('div');
        bubble.className = 'message-bubble';
        bubble.textContent = message;
        
        messageDiv.appendChild(bubble);
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    function getBotResponse(question) {
        const q = question.toLowerCase();
        
        if (q.includes('soil') || q.includes('fertility')) {
            return "To improve soil fertility: Add compost, use cover crops, practice crop rotation, and test soil pH regularly.";
        }
        if (q.includes('pest') || q.includes('control')) {
            return "Natural pest control: Use companion planting, beneficial insects, neem oil, and physical barriers like row covers.";
        }
        if (q.includes('plant') || q.includes('time')) {
            return "Planting times vary by crop. Spring: tomatoes, peppers. Summer: fall vegetables. Fall: garlic, onions. Check local frost dates!";
        }
        if (q.includes('water') || q.includes('irrigation')) {
            return "Water deeply but less frequently. Early morning is best. Use mulch to retain moisture. Most vegetables need 1-2 inches per week.";
        }
        if (q.includes('hello') || q.includes('hi')) {
            return "Hello! I'm here to help with your farming questions. Ask me about soil, pests, planting, or watering!";
        }
        
        return "That's a great question! I can help with soil fertility, pest control, planting times, watering, and more. Try asking about a specific topic!";
    }
    
})();

