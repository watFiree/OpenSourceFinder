import React from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Input from '../components/atoms/Input';
import Button from '../components/atoms/Button';
import Checkbox from '../components/atoms/Checkbox';
import Title from '../components/atoms/Title';
import Link from '../components/atoms/Link';
import ErrorMessage from '../components/atoms/ErrorMessage';
import bgImage from '../assets/logging-background.jpg';
import Text from '../components/atoms/Text';
import Logo from '../components/molecules/Logo';
import LoadingCircle from '../components/atoms/LoadingCircle';
import { FlexCenterAroundColumn, FlexCenterColumn, FlexCenter } from '../helpers/cssFlex';
import { signUser } from '../redux/actions/signUser';
import GoogleButton from '../components/atoms/GoogleButton';
import GithubButton from '../components/atoms/GithubButton';
import TwitterButton from '../components/atoms/TwitterButton';
import { mapStateToProps } from '../helpers/mapStateToProps';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.blackDark};
  color: ${({ theme }) => theme.white};
  width: 100%;
  display: flex;
`;

const Hero = styled.div`
  background-image: url(${({ image }) => image});
  background-size: cover;
  position: relative;
  height: 100vh;
  width: 50%;
  padding-left: 75px;
  ${FlexCenter}
`;

const FormWrapper = styled.div`
  width: 50%;
  height: 100vh;
  -webkit-box-shadow: -5px 0px 13px 1px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: -5px 0px 13px 1px rgba(0, 0, 0, 0.6);
  box-shadow: -5px 0px 13px 1px rgba(0, 0, 0, 0.6);
  ${FlexCenterColumn}
  ${Text} {
    margin: 20px 0;
  }
`;

const Form = styled.form`
  margin-top: 20%;
  height: 50%;
  width: 90%;
  ${FlexCenterAroundColumn}
  align-items: flex-start;
`;

const Links = styled.div`
  width: 100%;
  ${FlexCenter}
  justify-content: space-between;
`;

const SocialMedias = styled.div`
  width: 30%;
  ${FlexCenterColumn}
  height: 30%;
`;

const LoggingView = ({ match, user, signUser }) => {
  const pageType = match.path.slice(1);
  const titleText = `${pageType[0].toUpperCase()}${pageType.slice(1, 4)} ${pageType.slice(4)}`;
  return (
    <Wrapper>
      {user.isAuth && <Redirect to="/" />}
      <Hero image={bgImage}>
        <Logo to="/" />
      </Hero>
      <FormWrapper>
        <Formik
          initialValues={{ name: '', email: '', password: '', remember: false }}
          validate={(values) => {
            const errors = {};
            if (pageType === 'signup') {
              if (!values.name) {
                errors.name = 'Name is required';
              } else if (values.name.length < 4) {
                errors.name = 'Name has to have at least 4 characters';
              }
            }
            if (!values.email) {
              errors.email = 'Email is required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
              errors.email = 'Invalid email address';
            }

            if (!values.password) {
              errors.password = 'Password is equired';
            } else if (values.password.length < 6) {
              errors.password = 'Password has to have at least 6 characters';
            }
            return errors;
          }}
          onSubmit={(values) => {
            signUser(values, pageType);
          }}
        >
          {({ values, errors, touched, handleSubmit, handleBlur, handleChange }) => (
            <Form onSubmit={handleSubmit}>
              <Title>{titleText}</Title>
              {pageType === 'signup' && (
                <Input
                  label="Name"
                  fullWidth
                  id="name"
                  name="name"
                  autoComplete="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
              )}
              {touched.name && errors.name ? <ErrorMessage>{errors.name}</ErrorMessage> : null}
              <Input
                label="Email address"
                fullWidth
                id="email"
                name="email"
                autoComplete="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {touched.email && errors.email ? <ErrorMessage>{errors.email}</ErrorMessage> : null}
              <Input
                label="Password"
                fullWidth
                name="password"
                type="password"
                id="password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                autoComplete="current-password"
              />
              {touched.password && errors.password ? (
                <ErrorMessage>{errors.password}</ErrorMessage>
              ) : null}
              <FormControlLabel
                control={
                  <Checkbox
                    id="remember"
                    onChange={handleChange}
                    value={values.remember}
                    color="primary"
                  />
                }
                label="Remember me"
              />
              {user.error && !user.isAuth && (
                <ErrorMessage>
                  {user.error.message ? user.error.message : 'Invalid email or password !'}
                </ErrorMessage>
              )}
              <Button type="submit" fullWidth bg="purpleDark" width="100%">
                {user.loading && <LoadingCircle color="white" size="1.8rem" />}
                {titleText}
              </Button>
              <Links>
                <Link color="white" to="restart-password">
                  {' '}
                  Forget password?
                </Link>
                {pageType === 'signin' ? (
                  <Link color="white" to="/signup">
                    Don&apos;t have an account? Sign up !{' '}
                  </Link>
                ) : (
                  <Link color="white" to="/signin">
                    Have an account? Sign in !{' '}
                  </Link>
                )}
              </Links>
            </Form>
          )}
        </Formik>
        <Text color="gray" weight="bold">
          or Connect with social media
        </Text>
        <SocialMedias>
          <GoogleButton />
          <TwitterButton />
          <GithubButton />
        </SocialMedias>
      </FormWrapper>
    </Wrapper>
  );
};

export default connect(mapStateToProps('user'), { signUser })(LoggingView);
