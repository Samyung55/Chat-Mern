import React, { useState } from 'react';
import { MessageList, MessageInput, Thread, Window, useChannelActionContext, Avatar, useChannelStateContext, useChatContext } from 'stream-chat-react';

import { ChannelInfo } from '../assets/ChannelInfo';

export const GiphyContext = React.createContext({});

const ChannelInner = ({ setIsEditing }) => {
    const [giphyState, setGiphyState] = useState(false)
    const { sendMessage } = useChannelActionContext();
}