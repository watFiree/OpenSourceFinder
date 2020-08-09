import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import Title from '../atoms/Title';
import SearchInput from '../atoms/SearchInput';

const StyledSearchIcon = styled(SearchIcon)`
  color: ${({ theme }) => theme.purpleDark};
`;

const FilterByName = ({ title, placeholder, handleChange }) => (
  <>
    <Title as="h2" size="2.4">
      {title}
    </Title>
    <SearchInput
      placeholder={placeholder}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <StyledSearchIcon />
          </InputAdornment>
        ),
      }}
      onChange={(e) => handleChange(e.target.value)}
    />
  </>
);

FilterByName.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

FilterByName.defaultProps = {
  title: 'Filter by name',
  placeholder: 'Project name',
};

export default FilterByName;
