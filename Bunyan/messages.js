document.addEventListener("DOMContentLoaded", function () {
    const contacts = document.querySelectorAll(".contact");
    const chatUserName = document.getElementById("chat-user-name");
    const chatMessages = document.querySelector(".chat-messages");
    const messageInput = document.getElementById("messageInput");
    const sendMessageBtn = document.getElementById("sendMessage");
    const searchInput = document.getElementById("searchContacts"); // Search Input

    // Handle contact selection
    contacts.forEach(contact => {
        contact.addEventListener("click", () => {
            contacts.forEach(c => c.classList.remove("active"));
            contact.classList.add("active");

            const userName = contact.querySelector("h4").textContent;
            chatUserName.textContent = userName;

            // Simulate fetching previous messages
            chatMessages.innerHTML = `
                <div class="message received">
                    <p>Hey, is the apartment still available?</p>
                    <span class="timestamp">10:30 AM</span>
                </div>
            `;
        });
    });

    // Handle message sending
    sendMessageBtn.addEventListener("click", sendMessage);
    messageInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            sendMessage();
        }
    });

    function sendMessage() {
        const messageText = messageInput.value.trim();

        if (messageText !== "") {
            const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

            // Create message bubble
            const newMessage = document.createElement("div");
            newMessage.classList.add("message", "sent");
            newMessage.innerHTML = `
                <p>${messageText}</p>
                <span class="timestamp">${currentTime}</span>
            `;

            // Append message
            chatMessages.appendChild(newMessage);
            chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll to the latest message

            // Clear input field
            messageInput.value = "";
        }
    }

    // Search contacts function
    searchInput.addEventListener("input", function () {
        const searchText = searchInput.value.toLowerCase();

        contacts.forEach(contact => {
            const userName = contact.querySelector("h4").textContent.toLowerCase();
            if (userName.includes(searchText)) {
                contact.style.display = "flex"; // Show matching contact
            } else {
                contact.style.display = "none"; // Hide non-matching contacts
            }
        });
    });
});
