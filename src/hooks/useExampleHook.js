import React, {useEffect, useState} from 'react';

const dumpDataStudent = [
  {
    id: 1,
    name: 'Sinh',
    isOnline: false,
  },
  {
    id: 2,
    name: 'Phuong',
    isOnline: true,
  },
  {
    id: 3,
    name: 'Quan',
    isOnline: true,
  },
];

const useExampleHook = props => {
  console.log('propspropspropsprops');
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    props.isFocused && setIsLoading(true);
  }, [props.isFocused]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return [isLoading];
};

export default useExampleHook;
