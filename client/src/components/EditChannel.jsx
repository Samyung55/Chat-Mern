import React, { useState } from 'react';
import { useChatContext } from 'stream-chat-react';

import { UserList } from './';
import { CloseCreateChannel } from '../assets/index';

const ChannelNameInput = ({ channelName = '', setChannelName }) => {
    