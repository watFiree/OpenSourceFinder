import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import Select from '../molecules/SelectWithFormik';
import Wrapper from '../molecules/CreateFormWrapper';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import Title from '../atoms/Title';
import ErrorMessage from '../atoms/ErrorMessage';
import { FlexCenterAroundColumn } from '../../helpers/cssFlex';
import { createOffer } from '../../redux/actions/createOffer';
import { editOffer } from '../../redux/actions/editOffer';
import { mapStateToProps } from '../../helpers/mapStateToProps';
import useFormClose from '../../hooks/useFormClose';

const Form = styled.form`
  width: 80%;
  height: 80%;
  ${FlexCenterAroundColumn}
`;

const CreateOfferForm = ({
  forms: { createOfferForm },
  createOffer,
  editOffer,
  close,
  data,
  edit = false,
}) => {
  const [setSubmitted] = useFormClose(createOfferForm, close);
  const { projectId = '', _id: offerId = '', name = '', stack = [], desc = '' } = data;
  return (
    <Wrapper close={close}>
      <Title size="1.8rem">{edit ? 'Edit' : 'Create'} offer</Title>

      <Formik
        initialValues={{
          projectId,
          offerId,
          name,
          stack,
          desc,
        }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = 'Name is required !';
          }
          if (!values.stack.length) {
            errors.stack = 'Stack is required !';
          }
          return errors;
        }}
        onSubmit={(values) => {
          if (edit) {
            editOffer(values);
          } else {
            createOffer(values);
          }
          setSubmitted(true);
        }}
      >
        {({ values, errors, touched, setFieldValue, handleSubmit, handleBlur, handleChange }) => (
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
            <Select name="stack" value={values.stack} onChange={setFieldValue} />
            {errors.stack && touched.stack ? <ErrorMessage>{errors.stack}</ErrorMessage> : null}
            <Input
              label="Description"
              multiline
              fullWidth
              id="desc"
              name="desc"
              autoComplete="desc"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.desc}
            />
            {!createOfferForm.processing && createOfferForm.error ? (
              <ErrorMessage>{createOfferForm.error}</ErrorMessage>
            ) : null}
            <Button type="submit" fullWidth bg="purpleDark" width="100%">
              {edit ? 'Edit' : 'Create'}
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default connect(mapStateToProps('forms'), { createOffer, editOffer })(CreateOfferForm);
