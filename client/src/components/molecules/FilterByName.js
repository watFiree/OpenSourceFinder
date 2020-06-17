import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import Title from '../atoms/Title';
import Input from '../atoms/Input';

const StyledSearchIcon = styled(SearchIcon)`
  color: ${({ theme }) => theme.purpleDark};
`;

const FilterByName = ({ title, placeholder }) => {
  return (
    <>
      <Title as="h2" size="2.4">
        {title}
      </Title>
      <Input
        placeholder={placeholder}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <StyledSearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};

FilterByName.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
};

FilterByName.defaultProps = {
  title: 'Filter by name',
  placeholder: 'Project name',
};

export default FilterByName;
