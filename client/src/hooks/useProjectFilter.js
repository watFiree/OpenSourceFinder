import { useState, useEffect } from 'react';

const useProjectFilter = (reduxData) => {
  const [projects, setProjects] = useState([]);
  const [filteredName, setFilteredName] = useState('');
  const [filteredLanguages, setFilteredLanguages] = useState([]);

  useEffect(() => {
    setProjects(reduxData.data);
  }, [reduxData.data]);

  const handleFilterByName = (name) => {
    setFilteredName(name);
    if (name === '' && !filteredLanguages.length) {
      setProjects(reduxData.data);
    } else if (name) {
      const rgx = new RegExp(name);
      setProjects(projects.filter((project) => project.name.toLowerCase().match(rgx)));
    } else if (!name && filteredLanguages.length) {
      setProjects(
        reduxData.data.filter((project) =>
          filteredLanguages.every((lang) => project.stack.includes(lang))
        )
      );
    }
  };

  const handleFilterByLanguage = (languages) => {
    setFilteredLanguages(languages);
    if (filteredName === '' && !languages.length) {
      setProjects(reduxData.data);
    } else if (languages.length) {
      setProjects(
        projects.filter((project) => languages.every((lang) => project.stack.includes(lang)))
      );
    } else if (filteredName && !languages.length) {
      const rgx = new RegExp(filteredName);
      setProjects(reduxData.data.filter((project) => project.name.toLowerCase().match(rgx)));
    }
  };
  return [projects, handleFilterByName, handleFilterByLanguage];
};

export default useProjectFilter;
