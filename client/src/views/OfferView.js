import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Wrapper from '../components/atoms/Wrapper';
import Title from '../components/atoms/Title';
import Text from '../components/atoms/Text';
import Link from '../components/atoms/Link';
import Button from '../components/atoms/Button';
import Header from '../components/organisms/Header';
import bgImage from '../assets/offer-view-background.jpg';
import { getOffer } from '../redux/actions/getOffer';
import { mapStateToProps } from '../helpers/mapStateToProps';
import { FlexCenterColumn, FlexCenterAround } from '../helpers/cssFlex';
import CreateApplicationForm from '../components/organisms/CreateApplicationForm';
import withAuth from '../hoc/withAuth';

const WrapperFlex = styled(Wrapper)`
  display: flex;
  justify-content: center;
  height: 100%;
`;

const ContentWrapper = styled.div`
  width: 60%;
  min-height: calc(100vh - 120px);
  height: 100%;
  background-color: ${({ theme }) => theme.blackLight};
  ${FlexCenterColumn};
`;

const Buttons = styled.div`
  width: 40%;
  padding: 10px;
  margin-right: 40px;
  display: flex;
  ${FlexCenterAround};
  align-self: flex-end;
`;

const OfferView = ({ offers, match, getOffer, user }) => {
  const [data, setData] = useState();
  const [formOpen, setFormOpen] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const { id } = match.params;
  useEffect(() => {
    const offer = offers.data.find((x) => x._id === id);
    if (!offer && offers.error) {
      setNotFound(true);
    } else if (!offer && !offers.loading) {
      getOffer(id);
    } else {
      setData(offer);
    }
  }, [offers, id, getOffer, data, setData, setNotFound]);
  const history = useHistory();
  if (notFound) {
    setTimeout(() => history.push('/'), 8000);
  }
  return (
    <WrapperFlex image={bgImage}>
      <Header />
      <ContentWrapper>
        {notFound && (
          <>
            <div>
              <Title size="2.1rem" color="error">
                Offer not found !
              </Title>
              <Text>You will be redirected in 8 seconds</Text>
            </div>
          </>
        )}
        {data && !notFound && (
          <>
            <h1>{data.name}</h1>
            <Text>{data.desc}</Text>
            <Buttons>
              {user.isAuth && (
                <Button size="medium" bg="purpleDark" onClick={() => setFormOpen((prev) => !prev)}>
                  Applicate
                </Button>
              )}
              <Link to={`/user/project/${data.project._id}`}>
                <Button size="medium" bg="purpleLight">
                  More about project
                </Button>
              </Link>
            </Buttons>
          </>
        )}
        {formOpen && <CreateApplicationForm offerId={id} close={() => setFormOpen(false)} />}
      </ContentWrapper>
    </WrapperFlex>
  );
};

export default connect(mapStateToProps('offers'), { getOffer })(withAuth(OfferView));
