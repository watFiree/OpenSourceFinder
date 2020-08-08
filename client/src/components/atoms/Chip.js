import React from 'react';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import MaterialChip from '@material-ui/core/Chip';

const Wrapper = styled(MaterialChip)`
  background-color: ${({ col }) => col};
  color: ${({ theme }) => theme.white};
  &:focus {
    background-color: ${({ col }) => col};
  }
`;

const Chip = ({ data, handleDelete }) => (
  <Wrapper
    label={data.name}
    col={data.color}
    onDelete={handleDelete ? () => handleDelete(data.name) : null}
    avatar={<Avatar src={data.src} />}
  />
);

export default Chip;
