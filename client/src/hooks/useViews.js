import { useState } from 'react';
import { useDispatch } from 'react-redux';
import options from '../helpers/viewsNames';

const useViews = () => {
  const [view, setView] = useState(false);
  const dispatch = useDispatch();
  const clearForm = () => dispatch({ type: 'CLEAR_FORMS' });
  const closeView = () => {
    setView(null);
    clearForm();
  };

  return [view, setView, closeView, options];
};

export default useViews;
