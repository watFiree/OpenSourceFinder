import MailOutlineIcon from '@material-ui/icons/MailOutline';
import styled from 'styled-components';

const MailIcon = styled(MailOutlineIcon)`
  color: ${({ theme, color }) => theme[color] || theme.gray};
  transition: 0.1s;
  &:hover {
    color: ${({ theme }) => theme.white};
    cursor: pointer;
  }
`;

export default MailIcon;
