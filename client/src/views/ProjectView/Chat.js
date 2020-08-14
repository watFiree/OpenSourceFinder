import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import * as flex from 'styled-components-flexbox-tooltip';
import { connect } from 'react-redux';
import ChatBox from '../../components/organisms/ChatBox';
import { getChat } from '../../redux/actions/getChat';
import { mapStateToProps } from '../../helpers/mapStateToProps';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  ${flex.CenterCenterColumn}
`;

const Chat = ({ chatId, chats, getChat }) => {
  const [chat, setChat] = useState({});
  useEffect(() => {
    const currentChat = chats.data.find((x) => x._id === chatId);
    if (currentChat) {
      setChat(currentChat);
    } else if (!chats.loading) {
      getChat(chatId);
    }
  }, [chatId, chats, getChat]);
  return (
    <Wrapper>
      <ChatBox messages={chat?.messages} chatId={chatId} />
    </Wrapper>
  );
};

export default connect(mapStateToProps('chats'), { getChat })(Chat);
