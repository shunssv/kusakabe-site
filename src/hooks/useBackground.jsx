import { useEffect } from 'react';

export const useBackground = () => {
  useEffect(() => {
    //run when mounting
    document.body.style.backgroundColor = 'gray';
  
    //run when unmounting
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);
}