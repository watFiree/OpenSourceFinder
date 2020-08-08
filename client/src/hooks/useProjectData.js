import { useState, useEffect } from 'react';

const useProjectData = (dataIds, reduxData, getFunction) => {
  console.log(dataIds);
  const [state, setState] = useState([]);
  useEffect(() => {
    if (reduxData.deleted && state?.find((inState) => inState._id === reduxData.deleted)) {
      setState((prev) => [...prev.filter((x) => x._id !== reduxData.deleted)]);
    }
    if (dataIds.length && dataIds.length > reduxData.fetching) {
      dataIds.forEach((id) => {
        const alreadyInState = state?.find((inState) => inState._id === id);
        if (!alreadyInState) {
          const data = reduxData?.data.find((redux) => redux._id === id);
          if (data) {
            setState((prev) => [...prev, data]);
          } else {
            getFunction(id);
          }
          return () => setState([]);
        }
      });
    }
  }, [dataIds, reduxData, state, getFunction]);
  return [state];
};

export default useProjectData;
