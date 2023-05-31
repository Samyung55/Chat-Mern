import React, { useState } from 'react';
import { useChatContext } from 'stream-chat-react';

import { UserList } from './Index';
import { CloseCreateChannel } from '../assets';

const ChannelNameInput = ({ channelName = '', setChannelName }) => {
    const handleChange = (event) => {
        event.preventDefault();

        setChannelName(event.target.value);
    }

    return (
        <div className="channel-name-input__wrapper">
           <p>Name</p>
           <input value={channelName} onChange={handleChange} placeholder='channel-name' />
           <p>Add Members</p> 
        </div>
    )
}

const CreateChannel = ({ createType, setIsCreating }) => {
    const { client, setActiveChannel } = useChatContext();

    const [selectedUsers, setSelectedUsers] = useState([client.userID || ''])
    const [channelName, setChannelName] = useState('')

    const createChannel = async (e) => {
        e.preventDefault();

        try {
            const newChannel = await client.channel(createType, channelName, {
                name: channelName, members: selectedUsers
            });
            await newChannel.watch()

            setChannelName('');
            setIsCreating(false);
            setSelectedUsers([client.userID]);
            setActiveChannel(newChannel);
        }
        catch (error) {
            console.log(error)
        }
    }

    
}