import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';

const LoadingCircle = styled(CircularProgress)`
  margin-right: 20px;
  .MuiCircularProgress {
    color: ${({ theme, color }) => theme[color]};
  }
`;

export default LoadingCircle;
