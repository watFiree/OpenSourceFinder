import React from 'react';
import styled from 'styled-components/macro';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import Text from '../atoms/Text';
import Icon from '../atoms/Icon';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.blackDark};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 48px;
  border-top: 5px solid ${({ theme }) => theme.purpleDark};
  height: 8vh;
`;

const Icons = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Footer = () => (
  <Wrapper>
    <Text size="1.2" color="gray">
      OpenSourceFinder - Created by Karol Piotrowicz
    </Text>
    <Icons>
      <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/hellocharlesp">
        <TwitterIcon fontSize="large" css={Icon} />
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/watFiree">
        <GitHubIcon fontSize="large" css={Icon} />
      </a>
    </Icons>
  </Wrapper>
);

export default Footer;
