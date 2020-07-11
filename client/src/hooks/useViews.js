import { useState } from 'react';
import options from '../helpers/viewsNames';

const useViews = () => {
  const [view, setView] = useState(false);
  const closeView = () => setView(null);

  return [view, setView, closeView, options];
};

export default useViews;
