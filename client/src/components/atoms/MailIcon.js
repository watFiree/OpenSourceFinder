import React from 'react';
import styled from 'styled-components/macro';

import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Badge from '@material-ui/core/Badge';
import Icon from './Icon';

const Mail = styled(MailOutlineIcon)`
  ${Icon}
  position: relative;
  &::before {
    position: absolute;
    content: ' ';
    height: 50px;
    width: 50px;
    background-color: red;
    border-radius: 50%;
    z-index: 100;
  }
`;

const Dot = styled(Badge)`
  span {
    background-color: ${({ theme }) => theme.purpleDark};
  }
`;

const MailIcon = () => (
  <Dot variant="dot">
    <Mail />
  </Dot>
);

export default MailIcon;
