"use client";
import { useState, useEffect } from 'react';
import type { User, Channel as StreamChannel } from 'stream-chat';
import { useCreateChatClient, Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';
import { useUser } from '@clerk/nextjs';
import 'stream-chat-react/dist/css/v2/index.css';

const apiKey = 'js7hnt7u44ev';
const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidXNlcl8zMk42SVFiSmJGUzBPR2FRcDJMdUJvTjFmdE0ifQ.-KlopR-xAvEESSCbxBEcu_NK3fKN6fXofLTABFijPXo';

const ClerkUser = useUser;

useEffect(() => {
  const userId = ClerkUser?.id;
  const userName = ClerkUser?.firstName;
  const [user, setUser] = useState<User | undefined>(undefined);
  if (isLoaded){
    const user: User = {
    id: userId,
    name: userName,
    image: `https://getstream.io/random_png/?name=${userName}`,
  }; 
  setUser(user);
}

}, [isLoaded])



const ChatForum = ({ slug }: ChatForumProps) => {
  const [channel, setChannel] = useState<StreamChannel>();
  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: userToken,
    userData: user,
  });

  useEffect(() => {
    if (!client) return;

    const channel = client.channel('messaging', slug, {
      image: 'https://getstream.io/random_png/?name=react',
      name: `Talk about ${slug}`,
      members: [userId],
    });

    setChannel(channel);
  }, [client]);

  if (!client) return <div>Setting up client & connection...</div>;

  return (
    <Chat client={client}>
      <Channel channel={channel}>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
};

export default ChatForum;