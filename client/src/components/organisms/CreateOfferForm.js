import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';
import { Formik } from 'formik';
import Wrapper from '../molecules/CreateFormWrapper';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import Title from '../atoms/Title';
import ErrorMessage from '../atoms/ErrorMessage';
import Select from '../atoms/Select';
import { FlexCenterAroundColumn } from '../../helpers/cssFlex';
import { createOffer } from '../../redux/actions/createOffer';
import { mapStateToProps } from '../../helpers/mapStateToProps';
import useFormClose from '../../hooks/useFormClose';

const Form = styled.form`
  width: 80%;
  height: 80%;
  ${FlexCenterAroundColumn}
`;

const CreateOfferForm = ({ forms: { createOfferForm }, createOffer, id, close }) => {
  const [setSubmitted] = useFormClose(createOfferForm, close);
  return (
    <Wrapper close={close}>
      <Title size="1.8rem">Create offer</Title>

      <Formik
        initialValues={{ id, name: '', stack: ['react'], desc: '' }}
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
          createOffer(values);
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
            <Select id="stack" name="stack" value={values.stack} multiple>
              <MenuItem value="react">react</MenuItem>
              <MenuItem value="node">node</MenuItem>
            </Select>
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
              Create
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default connect(mapStateToProps('forms'), { createOffer })(CreateOfferForm);
