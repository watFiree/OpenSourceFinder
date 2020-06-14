import { css } from 'styled-components';

const Icon = css`
  color: ${({ theme }) => theme.gray};
  transition: 0.1s;
  &:hover {
    color: ${({ theme }) => theme.white};
    cursor: pointer;
  }
`;

export default Icon;
