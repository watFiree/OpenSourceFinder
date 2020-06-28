import styled from 'styled-components';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const AddIcon = styled(AddCircleIcon)`
  color: ${({ theme, color }) => theme[color] || 'white'};
  height: ${({ size }) => size || '45%'};
  width: 30%;
  transition: opacity 0.3s ease;
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

export default AddIcon;
