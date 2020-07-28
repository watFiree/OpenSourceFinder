import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PersonIcon from '@material-ui/icons/Person';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Button from '../atoms/Button';
import img from '../../assets/offer-view-background.jpg';
import { FlexCenterAround, FlexCenterAroundColumn, FlexCenter } from '../../helpers/cssFlex';
import Chip from '../atoms/Chip';
import Title from '../atoms/Title';
import Text from '../atoms/Text';
import Link from '../atoms/Link';
import ChipsWrapper from '../atoms/ChipsWrapper';
import List from '../molecules/List';
import options from '../../helpers/viewsNames';
import { removeProject } from '../../redux/actions/removeProject';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.blackDark};
  margin: 30px 0;
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

const Buttons = styled.div`
  height: 60%;
  width: 100%;
  ${FlexCenterAround}
`;

const Container = styled.div`
  height: 100%;
  width: 75%;
  ${FlexCenterAroundColumn}
`;

export const ProjectCard = ({ data }) => (
  <Wrapper>
    <Image src={img} />
    <Info>
      <Title size="2.1rem">{data.name}</Title>
      <Text color="gray">{data.about.biogram}</Text>
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
    <Link to={`project/${data._id}`}>
      <Button bg="purpleDark">See more</Button>
    </Link>
  </Wrapper>
);

const SimpleProjectCard = ({ data, admin, setProjectFnc, openFnc, removeProject, editProject }) => {
  const { userView, offerView, taskView } = options;
  const setView = (view) => {
    setProjectFnc(data);
    openFnc(view);
  };
  return (
    <Wrapper>
      <Image src={img} />
      <Container>
        <Title size="2.1rem">{data.name}</Title>
        <Buttons>
          <Link to={`/user/project/${data._id}`}>
            <Button bg="purpleDark">See more</Button>
          </Link>
          <List
            title="Add"
            options={[
              { placeholder: 'User', onClick: () => setView(userView) },
              { placeholder: 'Offer', onClick: () => setView(offerView) },
              { placeholder: 'Task', onClick: () => setView(taskView) },
            ]}
          />
          <Button bg="purpleDark" onClick={() => editProject(data)}>
            Edit
          </Button>
          <Button onClick={() => removeProject(data._id)} bg="error">
            {admin ? 'Remove' : 'Leave'}
          </Button>
        </Buttons>
      </Container>
    </Wrapper>
  );
};

export default connect(null, { removeProject })(SimpleProjectCard);
