import { useCallback, useState } from 'react';

export const useInputList = () => {
  const [text, setText] = useState('');
  const [array, setArray] = useState([]);
  const handleInput = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert('type within 5 letters!');
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const handleList = useCallback(() => {
    setArray((prevArray) => {
      if (prevArray.some((item) => item === text)) {
        alert('you have added it already!');
        return prevArray;
      }
      return [...prevArray, text];
    });
  }, [text]);

  return {text, array, handleInput, handleList}
};
