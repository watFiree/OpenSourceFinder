/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import * as flex from 'styled-components-flexbox-tooltip';

const Wrapper = styled.div`
  min-height: 20%;
  max-height: 40%;
  ${flex.CenterCenterColumn}
  margin: 1.1rem 0;
  img {
    height: 80px;
  }
`;

const UploadImageInput = ({ label = 'Chose avatar:', name, setFieldValue }) => {
  const [preview, setPreview] = useState('');
  const form = useRef(null);
  const handleUpload = () => {
    const image = form.current.files[0];
    setFieldValue(name, image);
    const reader = new FileReader();
    image ? reader.readAsDataURL(image) : setPreview('');
    reader.onloadend = () => setPreview(reader.result);
  };
  return (
    <Wrapper>
      <label htmlFor="img">{label}</label>
      <input id="img" name="img" type="file" accept="image/*" ref={form} onChange={handleUpload} />
      {preview ? <img src={preview} alt="Uploaded" /> : null}
    </Wrapper>
  );
};

export default UploadImageInput;
