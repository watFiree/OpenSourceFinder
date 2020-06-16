import React from 'react';
import styled from 'styled-components';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import SearchIcon from '@material-ui/icons/Search';
import Select from '@material-ui/core/Select';
import Header from '../components/organisms/Header';
import Button from '../components/atoms/Button';
import Title from '../components/atoms/Title';
import Input from '../components/atoms/Input';
import bgImage from '../assets/stars-background.jpg';
import Chip from '../components/atoms/Chip';

const Wrapper = styled.div`
  background-image: url(${bgImage});
  color: ${({ theme }) => theme.white};
  width: 100%;
  height: 300vh;
`;

const Hero = styled.div`
  padding-top: 10vh;
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    color: ${({ theme }) => theme.white};
    text-align: center;
    line-height: 130%;
    font-size: 3.6rem;
    letter-spacing: 1px;
    font-weight: ${({ theme }) => theme.bold};
    margin-bottom: 30px;
  }
`;

const FilterBox = styled.div`
  width: 100%;
  height: 50vh;
  background-color: ${({ theme }) => theme.blackLight};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Technologies = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`;

const FilterByTechnologies = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const StyledSearchIcon = styled(SearchIcon)`
  color: ${({ theme }) => theme.purpleDark};
`;

const StyledSelect = styled(Select)`
  width: 10%;
`;

const ProjectsView = () => {
  const [technologies, setTechnologies] = React.useState([]);

  const handleChange = (e) => {
    setTechnologies([...e.target.value]);
  };
  const handleDelete = (name) => {
    const newState = technologies.filter((item) => item !== name.toLowerCase());
    setTechnologies(newState);
  };

  const data = [
    {
      name: 'React',
      src: '/images/react.svg',
      color: '#427aa1',
    },
    {
      name: 'Node.js',
      src: '/images/nodejs.svg',
      color: '#008148',
    },
    {
      name: 'Angular',
      src: '/images/angular.svg',
      color: '#ef2917',
    },
  ];

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
  return (
    <Wrapper>
      <Header />
      <Hero>
        <p>START WITH YOUR PROJECT FOR FREE !</p>
        <Button bg="purpleDark">sign up now</Button>
      </Hero>
      <FilterBox>
        <Title as="h2" size="2.4">
          find project for you
        </Title>
        <Input
          placeholder="Project name"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <StyledSearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <FilterByTechnologies>
          <StyledSelect
            variant="filled"
            value={technologies}
            onChange={handleChange}
            labelId="demo-mutiple-name-label"
            id="technologies"
            MenuProps={menuProps}
            multiple
          >
            {data.map((item) => (
              <MenuItem value={item.name.toLowerCase()}>{item.name}</MenuItem>
            ))}
          </StyledSelect>
          <Technologies>
            {technologies.map((item) => (
              <Chip
                handleDelete={handleDelete}
                data={data.find((lang) => lang.name.toLowerCase() === item)}
              />
            ))}
          </Technologies>
        </FilterByTechnologies>
      </FilterBox>
    </Wrapper>
  );
};

export default ProjectsView;
