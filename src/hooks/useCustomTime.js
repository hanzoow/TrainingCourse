import React, {useEffect, useState} from 'react';

const useCustomTimeHook = props => {
  const getCurrentTime = () => {
    let date = new Date();
    return (
      date.getHours() + ': ' + date.getMinutes() + ': ' + date.getSeconds()
    );
  };

  const [time, setTime] = useState({
    currentTime: getCurrentTime(),
    color: Math.floor(Math.random() * 16777215).toString(16),
  });

  useEffect(() => {
    setTimeout(() => {
      setTime({
        currentTime: getCurrentTime(),
        color: Math.floor(Math.random() * 16777215).toString(16),
      });
    }, 1000);
  });

  return [time];
};

export default useCustomTimeHook;
