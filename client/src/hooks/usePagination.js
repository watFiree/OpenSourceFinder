import { useState, useEffect } from 'react';

const usePagination = (pageNum, data, perPage = 4) => {
  const [projects, setProjects] = useState();
  useEffect(() => {
    const forPage = pageNum * perPage;
    const tempData = data.slice(forPage, forPage + perPage);
    setProjects(tempData);
  }, [data, pageNum, perPage]);

  const allPages = Math.ceil(data.length / perPage);

  return [projects, allPages];
};

export default usePagination;
