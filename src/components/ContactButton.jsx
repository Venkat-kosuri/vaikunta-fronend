import React, { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
const ContactButton = () => {
  useEffect(() => {
    const handleChatButtonClick = () => {
      const phoneNumber = "8618331760";
      const message = "Hi, I have a query about your vaikunta services.";

      const encodedMessage = encodeURIComponent(message);
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

      window.open(whatsappURL, "_blank");
    };

    const chatButton = document.getElementById("chat-button");
    chatButton.addEventListener("click", handleChatButtonClick);

    return () => {
      chatButton.removeEventListener("click", handleChatButtonClick);
    };
  }, []);

  return (
    <a
      href="#"
      id="chat-button"
      className="fixed bottom-20 right-8 bg-green-500 text-white text-2xl p-2 rounded-full shadow-lg transition-all duration-300 hover:bg-green-600"
    >
      <FaWhatsapp />
    </a>
  );
};

export default ContactButton;
