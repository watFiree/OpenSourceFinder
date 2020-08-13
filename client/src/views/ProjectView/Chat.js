import React from 'react';
import styled from 'styled-components';
import * as flex from 'styled-components-flexbox-tooltip';
import ChatBox from '../../components/organisms/ChatBox';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  ${flex.CenterCenterColumn}
`;

const Chat = () => {
  return (
    <Wrapper>
      <ChatBox />
    </Wrapper>
  );
};

export default Chat;
