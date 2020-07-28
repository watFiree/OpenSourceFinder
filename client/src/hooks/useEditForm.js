import { useState } from 'react';

const useEditForm = () => {
  const [editing, setEditing] = useState(false);
  const [editingData, setEditingData] = useState({});

  const handleEditStart = (data) => {
    setEditingData(data);
    setEditing(true);
  };

  const handleEditEnd = () => {
    setEditingData({});
    setEditing(false);
  };

  return [editing, editingData, handleEditStart, handleEditEnd];
};

export default useEditForm;
