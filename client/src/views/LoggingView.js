import React from 'react';
import styled from 'styled-components';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Input from '../components/atoms/Input';
import Button from '../components/atoms/Button';
import Checkbox from '../components/atoms/Checkbox';
import Title from '../components/atoms/Title';
import Link from '../components/atoms/Link';
import bgImage from '../assets/logging-background.jpg';
import { FlexCenterAroundColumn, FlexCenterColumn, FlexCenter } from '../helpers/cssFlex';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.blackDark};
  color: ${({ theme }) => theme.white};
  width: 100%;
  display: flex;
`;

const HeroImage = styled.img`
  height: 100vh;
`;

const FormWrapper = styled.div`
  width: 50%;
  height: 100vh;
  -webkit-box-shadow: -5px 0px 13px 1px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: -5px 0px 13px 1px rgba(0, 0, 0, 0.6);
  box-shadow: -5px 0px 13px 1px rgba(0, 0, 0, 0.6);
  ${FlexCenterColumn}
  p {
    margin: 20px 0;
    color: ${({ theme }) => theme.gray};
    font-weight: ${({ theme }) => theme.bold};
  }
`;

const Form = styled.form`
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
const LoggingView = () => {
  return (
    <Wrapper>
      <HeroImage src={bgImage} />
      <FormWrapper>
        <Form>
          <Title>Sign in</Title>
          <Input
            placeholder="Email address"
            required
            width="100%"
            id="email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <Input
            placeholder="Password"
            required
            width="100%"
            name="password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button type="submit" fullWidth bg="purpleDark" width="100%">
            Sign In
          </Button>
          <Links>
            <Link color="white" to="restart-password">
              {' '}
              Forget password?
            </Link>
            <Link color="white" to="/signup">
              Don&apos;t have an account? Sign up !{' '}
            </Link>
          </Links>
        </Form>
        <p> or Connect with social media</p>
      </FormWrapper>
    </Wrapper>
  );
};

export default LoggingView;
