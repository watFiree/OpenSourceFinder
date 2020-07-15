import React from 'react';
import styled from 'styled-components';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Title from '../atoms/Title';
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import { FlexCenterAroundColumn, FlexCenterAround } from '../../helpers/cssFlex';

const Wrapper = styled(ExpansionPanel)`
  width: 80%;
  background-color: ${({ theme }) => theme.blackDark};
  padding: 10px;
  align-items: center;
  .MuiSvgIcon-root {
    color: ${({ theme }) => theme.white};
    font-size: 2.4rem;
  }
  .MuiIconButton-root {
    color: ${({ theme }) => theme.white};
    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
`;

const Heading = styled.div`
  margin-left: 10px;
  width: 30%;
  height: 100%;
  ${FlexCenterAroundColumn};
  align-items: flex-start;
`;

const Content = styled(ExpansionPanelDetails)`
  ${FlexCenterAroundColumn}
`;

const Flex = styled.div`
  display: flex;
`;

const Contributors = styled.div`
  width: 30%;
  div {
    ${FlexCenterAroundColumn};
  }
`;

const Buttons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    width: 50%;
    ${FlexCenterAround};
  }
`;

const TaskCard = ({ data, expanded, handleChange, number }) => {
  return (
    <Wrapper expanded={expanded === `panel${number}`} onChange={handleChange(`panel${number}`)}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel${number}-content`}
        id={`panel${number}-header`}
      >
        <Heading>
          <Title size="2.1rem">{data.title}</Title>
          <Text color="gray" size="1.1rem">
            {data.updatedAt}
          </Text>
        </Heading>
        <Heading>
          <Text color="gray">Status:</Text>
          <Text color="gray">{data.status}</Text>
        </Heading>
      </ExpansionPanelSummary>
      <Content>
        <Flex>
          <Text width="70%" margin="20px 0">
            {data.content}
          </Text>
          <Contributors>
            <Title size="1.6rem" margin="20px 0">
              CONTRIBUTORS
            </Title>
            <div>
              {data.contributors.map((contributor) => (
                <Text key={contributor.name} color="gray">
                  {contributor.name}
                </Text>
              ))}
            </div>
          </Contributors>
        </Flex>
        <Buttons>
          <Text size="1.1rem" color="gray">
            {data.expiration && <>Should be done until : {new Date(data.expiration).toString()}</>}
          </Text>

          <div>
            <Button size="small" bg="purpleDark">
              Done
            </Button>
            <Button size="small" bg="purpleLight">
              Take
            </Button>
            <Button size="small" bg="purpleLight">
              Edit
            </Button>
            <Button size="small" bg="error">
              Delete
            </Button>
          </div>
        </Buttons>
      </Content>
    </Wrapper>
  );
};

export default TaskCard;
