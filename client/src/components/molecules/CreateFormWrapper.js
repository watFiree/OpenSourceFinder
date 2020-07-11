import React from 'react';
import styled from 'styled-components';
import ClearIcon from '@material-ui/icons/Clear';

//
const Wrapper = styled.div`
  position: absolute;
  position: fixed;
  top: 25%;
  background-color: ${({ theme }) => theme.blackDark};
  margin-left: auto;
  margin-right: auto;
  left: ${({ width }) =>
    width
      ? `calc(50% - ${width?.slice(0, 2) / 2 + width?.slice(2)} - 20px)`
      : 'calc(50% - 20vw - 20px)'};
  width: ${({ width }) => width || '40vw'};
  height: ${({ height }) => height || '50vh'};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  padding: 10px;
  border: 2px solid ${({ theme }) => theme.purpleLight};
`;

const LeaveIcon = styled(ClearIcon)`
  position: absolute;
  top: 10px;
  right: 10px;
  color: ${({ theme }) => theme.white || 'white'};
  font-size: 1.8rem;
  &:hover {
    cursor: pointer;
  }
`;

const CreateFormWrapper = ({ children, height, width, close }) => (
  <Wrapper height={height} width={width}>
    <LeaveIcon onClick={close} />
    {children}
  </Wrapper>
);

export default CreateFormWrapper;
