import { useState, useEffect } from 'react';

const useProjectData = (dataIds, reduxData, getFunction) => {
  const [state, setState] = useState([]);
  useEffect(() => {
    if (!dataIds.length) return () => console.log('no teams');
    dataIds.forEach((id) => {
      const alreadyInState = state.find((inState) => inState._id === id);
      if (alreadyInState) return () => console.log('no team here');
      const data = reduxData.find((redux) => redux._id === id);
      if (data && !alreadyInState) {
        setState((prev) => [...prev, data]);
      } else if (!data) {
        getFunction(id);
      }
    });
  }, [dataIds, reduxData, state, getFunction]);
  return [state];
};

export default useProjectData;
