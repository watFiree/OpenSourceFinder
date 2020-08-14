import React from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  margin: 1.4rem 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  ${({ isCurrentUser }) =>
    isCurrentUser === true &&
    css`
      justify-content: flex-end;
    `}
`;

const UserImg = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin: 0 1rem;
`;

const UserText = styled.div`
  position: relative;
  min-height: 25px;
  background-color: ${({ theme }) => theme.gray};
  border-radius: 15px;
  font-size: 1rem;
  padding: 0.6rem 0.8rem;
  color: ${({ theme }) => theme.blackDark};
  &:before {
    position: absolute;
    content: ${({ name }) => (name ? `"${name}"` : '')};
    font-size: 0.8rem;
    color: ${({ theme }) => theme.gray};
    height: 5px;
    width: 100%;
    top: -15px;
    left: 5px;
  }
  ${({ isCurrentUser }) =>
    isCurrentUser === true &&
    css`
      color: ${({ theme }) => theme.white};
      background-color: ${({ theme }) => theme.purpleLight};
      &:before {
        content: '';
      }
    `}
`;

const Message = ({ isCurrentUser, data }) => {
  return (
    <Wrapper isCurrentUser={isCurrentUser}>
      {isCurrentUser ? (
        <>
          <UserText isCurrentUser={isCurrentUser}>{data.text}</UserText>
          <UserImg
            src={data.userImage.trim() ? data.userImage : '/images/img.png'}
            alt={data.userName}
          />
        </>
      ) : (
        <>
          <UserImg src={data.userImage} alt={data.userName} />
          <UserText isCurrentUser={isCurrentUser} name={data.userName}>
            {data.text}
          </UserText>{' '}
        </>
      )}
    </Wrapper>
  );
};

export default Message;
