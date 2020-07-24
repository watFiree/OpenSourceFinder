import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import OfferCard from '../../components/molecules/OfferCard';
import ApplicationCard from '../../components/molecules/ApplicationCard';
import Title from '../../components/atoms/Title';
import { FlexCenterColumn } from '../../helpers/cssFlex';
import { mapStateToProps } from '../../helpers/mapStateToProps';
import useProjectData from '../../hooks/useProjectData';
import { getOffer } from '../../redux/actions/getOffer';
import { getApplication } from '../../redux/actions/getApplication';

const Wrapper = styled.div`
  width: 100%;
  min-height: 60vh;
  height: 100%;
  display: flex;
  padding: 2% 0;
`;

const Container = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Flex = styled.div`
  width: 80%;
  ${FlexCenterColumn}
`;

const ProjectOffers = ({
  offersIds,
  applicationsIds,
  offers: reduxOffers,
  applications: reduxApplications,
  getOffer,
  getApplication,
}) => {
  const [offers] = useProjectData(offersIds, reduxOffers, getOffer);
  const [applications] = useProjectData(applicationsIds, reduxApplications.data, getApplication);
  return (
    <Wrapper>
      <Container>
        <Title size="1.8rem" margin="0 0 40px 0">
          Offers
        </Title>
        <Flex>
          {offers?.map((offer) => (
            <OfferCard key={offer._id} data={offer} />
          ))}
        </Flex>
      </Container>
      <Container>
        <Title size="1.8rem" margin="0 0 40px 0">
          Applications
        </Title>
        <Flex>
          {applications?.map((application) => (
            <ApplicationCard key={application._id} data={application} />
          ))}
        </Flex>
      </Container>
    </Wrapper>
  );
};

export default connect(mapStateToProps('offers', 'applications'), {
  getOffer,
  getApplication,
})(ProjectOffers);
