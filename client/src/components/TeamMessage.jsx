import React from 'react';
import { useMessageContext } from 'stream-chat-react';

const TeamMessage = () => {
  const { message } = useMessageContext();

  return <div key={message.id}>{message.text}</div>;
};

export default TeamMessage;
