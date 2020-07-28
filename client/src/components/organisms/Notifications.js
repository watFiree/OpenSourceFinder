import React, { useState } from 'react';
import styled from 'styled-components';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Notification from '../molecules/Notification';
import MailIcon from '../atoms/MailIcon';

const Wrapper = styled.div`
  width: 20vw;
  background-color: ${({ theme }) => theme.blackDark};
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ right }) => `calc(${right}px - 20vw )`};
  border-radius: 15px;
  border: 3px solid ${({ theme }) => theme.purpleDark};
  padding: 1% 0;
  font-size: 1.1rem;
`;

const Notifications = () => {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, right: 0 });
  const handleClick = (e) => {
    setOpen(true);
    const { top, right } = e.target.getBoundingClientRect();
    setPosition({ top: top + 10, right });
  };
  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div>
        <MailIcon onClick={handleClick} />
        {open && (
          <Wrapper top={position.top} right={position.right}>
            <Notification last={true}>You have been invited to "ProjectName"</Notification>
          </Wrapper>
        )}
      </div>
    </ClickAwayListener>
  );
};

export default Notifications;
