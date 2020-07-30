import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import * as flex from 'styled-components-flexbox-tooltip';
import { Formik } from 'formik';
import Logo from '../components/molecules/Logo';
import BackgroundWrapper from '../components/atoms/Wrapper';
import Input from '../components/atoms/Input';
import Title from '../components/atoms/Title';
import Button from '../components/atoms/Button';
import ErrorMessage from '../components/atoms/ErrorMessage';
import bgImage from '../assets/forgot-password-view-background.jpg';

const BackgroundWrapperFlex = styled(BackgroundWrapper)`
  padding: 0;
  ${flex.CenterCenterColumn}
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  margin-top: 1.4rem;
  width: 30vw;
  height: 40vh;
  background-color: ${({ theme }) => theme.blackDark};
  border-radius: 1.8rem;
  padding: 1.1rem;
  ${flex.CenterAroundColumn};
  form {
    height: 60%;
    width: 60%;
    ${flex.CenterBetweenColumn};
  }
`;

const ForgotPasswordView = ({ history }) => (
  <BackgroundWrapperFlex image={bgImage}>
    <Logo />
    <Wrapper>
      <Title size="1.8rem">Recover password</Title>
      <Formik
        initialValues={{ email: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Email required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setStatus, resetForm }) => {
          axios
            .post('/user/forgot', values)
            .then(() => history.push('/'))
            .catch((err) => {
              resetForm();
              setStatus(err.response.data.message);
            });
        }}
      >
        {({ values, errors, status, touched, handleSubmit, handleBlur, handleChange }) => (
          <form onSubmit={handleSubmit}>
            {console.log(status)}
            <Input
              label="Email"
              fullWidth
              id="email"
              title="email"
              autoComplete="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {status && !errors.email ? <ErrorMessage>{status}</ErrorMessage> : null}
            {errors.email && touched.email ? <ErrorMessage>{errors.email}</ErrorMessage> : null}
            <Button bg="purpleDark" type="submit">
              Send me an email
            </Button>
          </form>
        )}
      </Formik>
    </Wrapper>
  </BackgroundWrapperFlex>
);

export default ForgotPasswordView;
