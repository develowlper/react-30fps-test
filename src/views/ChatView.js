import React from "react";
import ChatMessages from "../components/ChatMessages";

console.log(ChatMessages)

const ChatView = () => {

  const [BotMessages, UserMessages, Story] = ChatMessages();

  console.log(Story)

  return (
    <div>
      <div>
        {Story}
      </div>
      <ul>
        {BotMessages.map(msg => (
          <li>{msg}</li>
        ))}
      </ul>
      <div>
        <ul>
          {UserMessages.map(msg => (
            <li>{msg}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChatView;
