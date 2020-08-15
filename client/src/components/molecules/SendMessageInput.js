import React, { useRef } from 'react';
import styled from 'styled-components';
import * as flex from 'styled-components-flexbox-tooltip';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import { mapStateToProps } from '../../helpers/mapStateToProps';
import { sendMessage } from '../../redux/actions/sendMessage';

const io = require('socket.io-client');
const socket = io('http://localhost:6969');

const Wrapper = styled.form`
  width: 80%;
  height: 10%;
  ${flex.CenterBetween}
`;

const Input = styled.input`
  width: 95%;
  height: 10%;
  min-height: 2.6rem;
  font-size: 1rem;
  padding: 0.6rem;
  border-radius: 15px;
  outline: none;
  border: none;
  box-sizing: border-box;
  color: ${({ theme }) => theme.blackDark};
  background-color: ${({ theme }) => theme.gray};
`;

const StyledIcon = styled(({ ...props }) => <SendIcon {...props} />)`
  color: ${({ theme }) => theme.purpleLight};
`;

const SendMessageInput = ({ user, chatId, sendMessage }) => {
  const input = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      chatId,
      text: input.current.value,
      userImage: '',
      userName: user.name,
      createdAt: new Date().toISOString(),
    };
    socket.emit('send message', data);
    sendMessage(data);
    input.current.value = '';
  };
  return (
    <Wrapper onSubmit={handleSubmit}>
      <Input
        type="text"
        id="message"
        name="message"
        ref={input}
        placeholder="Type your message.."
      />
      <IconButton type="submit" aria-label="send message">
        <StyledIcon fontSize="large" />
      </IconButton>
    </Wrapper>
  );
};

export default connect(mapStateToProps('user'), { sendMessage })(SendMessageInput);
