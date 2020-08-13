import React, { useRef } from 'react';
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
`;

const ChatBox = () => {
  const scroll = useRef(null);
  React.useEffect(() => {
    scroll.current.scrollTop = scroll.current.scrollHeight;
  }, []);
  return (
    <Wrapper>
      <Messages ref={scroll}>
        <Message
          isCurrentUser={typeof 1 === typeof 2}
          data={{ image: '/icons/angular.svg', text: 'Hello world !', name: 'Me' }}
        />
        <Message
          data={{ image: '/icons/angular.svg', text: 'Hello world !', name: 'Szymon Ratowski' }}
        />
        <Message
          data={{ image: '/icons/angular.svg', text: 'Hello world !', name: 'Szymon Ratowski' }}
        />
        <Message
          data={{ image: '/icons/angular.svg', text: 'Hello world !', name: 'Szymon Ratowski' }}
        />{' '}
        <Message
          data={{ image: '/icons/angular.svg', text: 'Hello world !', name: 'Szymon Ratowski' }}
        />
        <Message
          data={{ image: '/icons/angular.svg', text: 'Hello world !', name: 'Szymon Ratowski' }}
        />
        <Message
          data={{ image: '/icons/angular.svg', text: 'Hello world !', name: 'Szymon Ratowski' }}
        />
        <Message
          data={{ image: '/icons/angular.svg', text: 'Hello world !', name: 'Szymon Ratowski' }}
        />
        <Message
          data={{ image: '/icons/angular.svg', text: 'Hello world !', name: 'Szymon Ratowski' }}
        />
        <Message
          data={{ image: '/icons/angular.svg', text: 'Hello world !', name: 'Szymon Ratowski' }}
        />
        <Message
          data={{ image: '/icons/angular.svg', text: 'Hello world !', name: 'Szymon Ratowski' }}
        />
        <Message
          data={{ image: '/icons/angular.svg', text: 'Hello world !', name: 'Szymon Ratowski' }}
        />
        <Message
          data={{ image: '/icons/angular.svg', text: 'Hello world !', name: 'Szymon Ratowski' }}
        />
      </Messages>
      <SendMessageInput />
    </Wrapper>
  );
};

export default ChatBox;
