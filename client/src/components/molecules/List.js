import React, { useState } from 'react';
import styled from 'styled-components';
import MaterialList from '@material-ui/core/List';
import Collapse from '@material-ui/core/Collapse';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const StyledList = styled(MaterialList)`
  background-color: ${({ theme }) => theme.purpleLight};
  text-transform: uppercase;
  padding: 0;
  .MuiTypography-body1 {
    font-weight: 700;
    letter-spacing: 1px;
    font-size: 1rem;
  }
`;

const List = ({ title, options }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <StyledList>
      <ListItem button onClick={handleClick}>
        <ListItemText primary={title} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto">
        <StyledList component="div" disablePadding>
          {options?.map((option) => (
            <ListItem button>
              <ListItemText primary={option.placeholder} onClick={option.onClick} />
            </ListItem>
          ))}
        </StyledList>
      </Collapse>
    </StyledList>
  );
};

export default List;
