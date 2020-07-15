import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import Wrapper from '../molecules/CreateFormWrapper';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import Title from '../atoms/Title';
import ErrorMessage from '../atoms/ErrorMessage';
import { FlexCenterAroundColumn } from '../../helpers/cssFlex';
import { inviteUser } from '../../redux/actions/inviteUser';
import { mapStateToProps } from '../../helpers/mapStateToProps';
import useFormClose from '../../hooks/useFormClose';

const Form = styled.form`
  width: 80%;
  height: 80%;
  ${FlexCenterAroundColumn}
`;

const InviteUserForm = ({
  projectId,
  projectName,
  inviteUser,
  close,
  forms: { inviteUserForm },
}) => {
  const [setSubmitted] = useFormClose(inviteUserForm, close);
  return (
    <Wrapper height="25vh" close={close}>
      <Title size="1.8rem">Add user</Title>

      <Formik
        initialValues={{ name: '', projectId, projectName, inviteUserForm }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = 'Name is required !';
          }
          return errors;
        }}
        onSubmit={(values, actions) => {
          inviteUser(values);
          setSubmitted(true);
        }}
      >
        {({ values, errors, touched, handleSubmit, handleBlur, handleChange }) => (
          <Form onSubmit={handleSubmit}>
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
            {errors.name && touched.name ? <ErrorMessage>{errors.name}</ErrorMessage> : null}
            {!inviteUserForm.processing && inviteUserForm.error ? (
              <ErrorMessage>{inviteUserForm.error}</ErrorMessage>
            ) : null}
            <Button type="submit" fullWidth bg="purpleDark" width="100%">
              Invite
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default connect(mapStateToProps('forms'), { inviteUser })(InviteUserForm);
