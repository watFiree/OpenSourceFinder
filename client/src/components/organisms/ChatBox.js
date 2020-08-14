import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import * as flex from 'styled-components-flexbox-tooltip';
import SendMessageInput from '../molecules/SendMessageInput';
import Message from '../molecules/Message';

const Wrapper = styled.div`
  width: 50%;
  height: 75vh;
  background-color: ${({ theme }) => theme.blackDark};
  ${flex.CenterBetweenColumn};
  padding: 1.1rem 0;
`;

const Messages = styled.div`
  width: 100%;
  height: 90%;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const ChatBox = ({ chatId, messages }) => {
  const scroll = useRef(null);
  useEffect(() => {
    scroll.current.scrollTop = scroll.current.scrollHeight;
  }, [messages]);
  return (
    <Wrapper>
      <Messages ref={scroll}>
        {messages?.map((message, index) => (
          <Message isCurrentUser={index % 2 === 0} data={message} />
        ))}
      </Messages>
      <SendMessageInput chatId={chatId} />
    </Wrapper>
  );
};

export default ChatBox;
