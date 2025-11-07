// src/components/AnimatedCursor.jsx
import { useEffect, useState } from 'react';

const AnimatedCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const moveCursor = e => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    const mouseDown = () => setClicked(true);
    const mouseUp = () => setClicked(false);

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mousedown', mouseDown);
    document.addEventListener('mouseup', mouseUp);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mousedown', mouseDown);
      document.removeEventListener('mouseup', mouseUp);
    };
  }, []);

  return (
    <>
      {/* Outer Circle */}
      <div
        className={`hidden md:block fixed pointer-events-none rounded-full bg-[#c313b757] shadow-[0_0_25px_#c313b73c] transition-transform duration-150 ease-out animate-pulse ${
          clicked ? 'scale-150' : 'scale-100'
        }`}
        style={{
          left: position.x - 20,
          top: position.y - 20,
          width: 40,
          height: 40,
          zIndex: 9999,
        }}
      ></div>

      {/* Inner Dot */}
      <div
        className="fixed pointer-events-none bg-[#c313b7ce] rounded-full transition-transform duration-100 ease-out hidden md:block "
        style={{
          left: position.x - 5,
          top: position.y - 5,
          width: 10,
          height: 10,
          zIndex: 9999,
        }}
      ></div>
    </>
  );
};

export default AnimatedCursor;
