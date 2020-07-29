import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Header from '../components/organisms/Header';
import BackgroundLoading from '../components/molecules/BackgroundLoading';
import SimpleOfferCard from '../components/molecules/SimpleOfferCard';
import BackgroundWrapper from '../components/atoms/Wrapper';
import Title from '../components/atoms/Title';
import Text from '../components/atoms/Text';
import bgImage from '../assets/project-view-background.jpg';
import { FlexCenterColumn, FlexCenterAroundColumn } from '../helpers/cssFlex';
import { mapStateToProps } from '../helpers/mapStateToProps';
import { getProject } from '../redux/actions/getProject';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 60vh;
  margin-top: 3.4rem;
  padding: 2.1rem;
  background-color: ${({ theme }) => theme.blackLight};
  ${FlexCenterColumn};
  justify-content: flex-start;
`;

const Offers = styled.div`
  width: 100%;
  height: 80%;
  ${FlexCenterAroundColumn};
`;

const PublicProjectView = ({ match, projects, getProject }) => {
  const {
    params: { id },
  } = match;
  const [data, setData] = useState();
  useEffect(() => {
    const currentProject = projects.data.find((project) => project._id === id);
    if (!currentProject && !projects.error && projects.fetching < 1) {
      getProject(id);
    } else if (currentProject) {
      setData(currentProject);
    }
    return () => console.log('not - found');
  }, [projects, setData, getProject, id]);

  return (
    <BackgroundWrapper image={bgImage}>
      <Header />
      <Wrapper>
        {data ? (
          <>
            <Title as="h2" size="2.1rem">
              {data.name}
            </Title>
            <Text color="gray" margin="1.8rem 0">
              {data.about?.desc}
            </Text>
            <Offers>
              <Title as="h2" size="1.8rem" margin="0 0 1.4rem 0">
                OFFERS
              </Title>
              {data.offers?.map((offer) => (
                <SimpleOfferCard name={offer.name} id={offer._id} />
              ))}
            </Offers>{' '}
          </>
        ) : (
          <BackgroundLoading color="purpleLight" />
        )}
      </Wrapper>
    </BackgroundWrapper>
  );
};

export default connect(mapStateToProps('projects'), { getProject })(PublicProjectView);
