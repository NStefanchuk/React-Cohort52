import { useState, useEffect, useDebugValue } from 'react';

function useWindowSize(label = 'Window') {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useDebugValue(`${label}: ${size.width}x${size.height}`);
  return size;
}

export default useWindowSize;
