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
import { createApplication } from '../../redux/actions/createApplication';
import { mapStateToProps } from '../../helpers/mapStateToProps';
import useFormClose from '../../hooks/useFormClose';

const Form = styled.form`
  width: 80%;
  height: 80%;
  ${FlexCenterAroundColumn}
`;

const CreateApplicationForm = ({
  forms: { createApplicationForm },
  createApplication,
  offerId,
  close,
}) => {
  const [setSubmitted] = useFormClose(createApplicationForm, close);
  return (
    <Wrapper close={close} height="30vh">
      <Title size="1.8rem">Create Application</Title>

      <Formik
        initialValues={{ offerId, desc: '' }}
        onSubmit={(values) => {
          createApplication(values);
          setSubmitted(true);
        }}
      >
        {({ values, errors, touched, handleSubmit, handleBlur, handleChange }) => (
          <Form onSubmit={handleSubmit}>
            <Input
              label="About you"
              helperText="optional"
              multiline
              fullWidth
              id="desc"
              name="desc"
              autoComplete="desc"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            {errors.name && touched.name ? <ErrorMessage>{errors.name}</ErrorMessage> : null}
            {!createApplicationForm.processing && createApplicationForm.error ? (
              <ErrorMessage>{createApplicationForm.error}</ErrorMessage>
            ) : null}
            <Button type="submit" fullWidth bg="purpleDark" width="100%">
              Create
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default connect(mapStateToProps('forms'), { createApplication })(CreateApplicationForm);
