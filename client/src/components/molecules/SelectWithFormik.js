import React from 'react';
import styled from 'styled-components';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '../atoms/Select';
import languagesData from '../../helpers/languagesData';

const StyledSelect = styled(Select)`
  padding: 0 0.9rem;
  width: 30%;
  height: 15%;
`;

const SelectWithFormik = ({ name, value, onChange }) => (
  <StyledSelect
    id={name}
    name={name}
    value={value}
    onChange={(e) => {
      onChange(name, e.target.value);
    }}
    multiple
  >
    {languagesData.map((language) => (
      <MenuItem value={language.name.toLowerCase()}>{language.name}</MenuItem>
    ))}
  </StyledSelect>
);

export default SelectWithFormik;
