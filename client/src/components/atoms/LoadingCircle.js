import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';

const LoadingCircle = styled(CircularProgress)`
  margin: ${({ margin }) => margin || 0};
  circle {
    color: ${({ theme, color }) => theme[color] || 'white'};
  }
`;

export default LoadingCircle;
