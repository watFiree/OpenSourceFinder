import React from 'react';
import styled from 'styled-components';
import * as flex from 'styled-components-flexbox-tooltip';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';

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

const SendMessageInput = () => (
  <Wrapper>
    <Input type="text" id="message" name="message" placeholder="Type your message.." />
    <IconButton aria-label="send message">
      <StyledIcon fontSize="large" />
    </IconButton>
  </Wrapper>
);

export default SendMessageInput;
