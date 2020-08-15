import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import * as flex from 'styled-components-flexbox-tooltip';
import { connect } from 'react-redux';
import ChatBox from '../../components/organisms/ChatBox';
import { getChat } from '../../redux/actions/getChat';
import { mapStateToProps } from '../../helpers/mapStateToProps';

const io = require('socket.io-client');
const socket = io('http://localhost:6969');

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  ${flex.CenterCenterColumn}
`;

const Chat = ({ chatId, chats, user, getChat }) => {
  const [chat, setChat] = useState({});
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const currentChat = chats.data.find((x) => x._id === chatId);
    if (currentChat) {
      setChat(currentChat);
      setMessages(currentChat.messages);
      socket.emit('joined chat', { chatId, user });
    } else if (!chats.loading) {
      getChat(chatId);
    }
  }, [chatId, user, chats, getChat]);

  useEffect(() => {
    socket.on('messages', (data) => {
      setMessages((prevState) => [...prevState, data.message]);
    });
    return () => socket.emit('disconnect', { chatId, user });
  }, []);

  return (
    <Wrapper>
      <ChatBox messages={messages} chatId={chatId} />
    </Wrapper>
  );
};

export default connect(mapStateToProps('chats', 'user'), { getChat })(Chat);
