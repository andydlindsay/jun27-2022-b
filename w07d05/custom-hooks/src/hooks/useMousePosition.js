import {useEffect, useState} from 'react';

const useMousePosition = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveHandler = (event) => {
      setCoords({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener('mousemove', moveHandler);

    const cleanup = () => {
      document.removeEventListener('mousemove', moveHandler);
    };

    return cleanup;
  }, []);

  return coords;
};

export default useMousePosition;
