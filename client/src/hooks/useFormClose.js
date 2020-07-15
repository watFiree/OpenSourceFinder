import { useState, useEffect } from 'react';

const useFormClose = (formData, closeFunction) => {
  const [submitted, setSubmitted] = useState(false);
  useEffect(() => {
    if (submitted && !formData.processing && !formData.error) closeFunction(null);
  }, [formData, submitted, closeFunction]);

  return [setSubmitted];
};

export default useFormClose;
