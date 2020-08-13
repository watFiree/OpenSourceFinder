import React, { useContext } from 'react';
import styled from 'styled-components';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { ProjectNavigationContext } from '../../context/ProjectNavigationContext';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.blackDark};
  width: 100%;
  margin: 30px 0 0 0;
  -webkit-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.6);
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.6);
`;

const StyledTabs = styled(Tabs)`
  height: 100%;
  color: ${({ theme }) => theme.white};
  .MuiTab-root {
    height: 100%;
  }
  .MuiTab-textColorPrimary {
    color: ${({ theme }) => theme.white};
  }
  .MuiTab-textColorPrimary.Mui-selected {
    color: ${({ theme }) => theme.white};
  }
  .PrivateTabIndicator-colorPrimary-2 {
    background-color: ${({ theme }) => theme.purpleDark};
  }
  .PrivateTabIndicator-root-1 {
    height: 5px;
  }
`;

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const ProjectNavigation = () => {
  const { page, setPage } = useContext(ProjectNavigationContext);
  const handleChange = (event, newValue) => {
    setPage(newValue);
  };

  return (
    <Wrapper>
      <StyledTabs
        value={page}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Menu" {...a11yProps(0)} />
        <Tab label="Users" {...a11yProps(1)} />
        <Tab label="Offers" {...a11yProps(2)} />
        <Tab label="Tasks" {...a11yProps(3)} />
        <Tab label="Chat" {...a11yProps(4)} />
      </StyledTabs>
    </Wrapper>
  );
};

export default ProjectNavigation;
