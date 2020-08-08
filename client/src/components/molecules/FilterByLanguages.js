import React, { useState } from 'react';
import styled from 'styled-components';
import { MenuItem } from '@material-ui/core';
import Chip from '../atoms/Chip';
import Title from '../atoms/Title';
import Select from '../atoms/Select';
import ChipsWrapper from '../atoms/ChipsWrapper';
import languagesData from '../../helpers/languagesData';

const Wrapper = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const menuProps = {
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left',
  },
  transformOrigin: {
    vertical: 'top',
    horizontal: 'left',
  },
  getContentAnchorEl: null,
};

const FilterByLanguages = () => {
  const [technologies, setTechnologies] = useState([]);

  const handleChange = (e) => {
    setTechnologies([...e.target.value]);
  };
  const handleDelete = (name) => {
    const newState = technologies.filter((item) => item !== name.toLowerCase());
    setTechnologies(newState);
  };

  return (
    <Wrapper>
      <Title as="h2" margin="20px">
        filter by languages
      </Title>
      <Select
        labelId="select"
        variant="filled"
        value={technologies}
        onChange={handleChange}
        id="technologies"
        MenuProps={menuProps}
        multiple
      >
        {languagesData.map((item) => (
          <MenuItem key={item.name} value={item.name.toLowerCase()}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
      <ChipsWrapper>
        {technologies.map((item) => (
          <Chip
            key={item.name}
            handleDelete={handleDelete}
            data={languagesData.find((lang) => lang.name.toLowerCase() === item)}
          />
        ))}
      </ChipsWrapper>
    </Wrapper>
  );
};

export default FilterByLanguages;
