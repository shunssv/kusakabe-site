import { useCallback, useState } from 'react';

export const useCounter = () => {
  //declare useState using destructuring assignment
  //first array: variable
  //second array: function for updating variable
  //add a value in the parentheses if you set a default
  const [count, setCount] = useState(1);
  const [isShow, setIsShow] = useState(true);
  const handleCounter = useCallback(
    (e) => {
      console.log(count);
      if (count < 10) {
        setCount((prevCount) => prevCount + 1);
      }
    },
    [count]
  );

  const handleDisplay = useCallback(() => {
    setIsShow((isShow) => !isShow);
  }, []);

  return {count, isShow, handleCounter, handleDisplay}
};