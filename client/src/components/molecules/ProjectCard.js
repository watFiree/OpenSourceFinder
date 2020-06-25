import React from 'react';
import styled from 'styled-components';
import PersonIcon from '@material-ui/icons/Person';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Button from '../atoms/Button';
import img from '../../assets/offers-background.jpg';
import { FlexCenterAround, FlexCenterAroundColumn, FlexCenter } from '../../helpers/cssFlex';
import Chip from '../atoms/Chip';
import Title from '../atoms/Title';
import Text from '../atoms/Text';
import Link from '../atoms/Link';
import ChipsWrapper from '../atoms/ChipsWrapper';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.blackDark};
  margin-top: 40px;
  width: 90%;
  height: 220px;
  border-radius: 40px;
  border: 3px solid ${({ theme }) => theme.purpleLight};
  ${FlexCenterAround}
`;

const Info = styled.div`
  height: 100%;
  width: 60%;
  ${FlexCenterAroundColumn}
`;

const Image = styled.img`
  border-radius: 50%;
  height: 150px;
  width: 150px;
`;

const Icons = styled.div`
  height: 30%;
  width: 100%;
  ${FlexCenter}
  p {
    font-size: 1.4rem;
    margin-left: 20px;
  }
`;

const Divider = styled.div`
  background-color: white;
  margin: 0 50px;
  height: 70%;
  width: 2px;
  opacity: 0.4;
`;

const ProjectCard = ({ data }) => (
  <Wrapper>
    <Image src={img} />
    <Info>
      <Title size="2.1rem">{data.name}</Title>
      <Text>{data.about.desc}</Text>
      <Icons>
        <PersonIcon fontSize="large" /> <p>{data.users.length}</p>
        <Divider />
        <PersonAddIcon fontSize="large" /> <p>{data.offers.length}</p>
      </Icons>
      <ChipsWrapper height="30%" width="100%">
        {data.stack.map((item) => (
          <Chip key={item} data={{ name: item, src: '/images/react.svg', color: '#427aa1' }} />
        ))}
        <Chip
          data={{
            name: 'React',
            src: '/images/react.svg',
            color: '#427aa1',
          }}
        >
          react
        </Chip>
      </ChipsWrapper>
    </Info>
    <Link to={`project/${data.name}`}>
      <Button bg="purpleDark">See more</Button>
    </Link>
  </Wrapper>
);

export default ProjectCard;
