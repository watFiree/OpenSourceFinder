import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import styled from 'styled-components';

const AccountIcon = styled(AccountCircleIcon)`
  color: ${({ theme, color }) => theme[color] || theme.gray};
  font-size: ${({ size }) => `${size}rem` || '1.4 rem'};
  transition: 0.1s;
  &:hover {
    color: ${({ theme }) => theme.white};
    cursor: pointer;
  }
`;

export default AccountIcon;
