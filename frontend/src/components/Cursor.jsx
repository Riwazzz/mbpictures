import React, { useEffect, useState } from "react";

const Cursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isTarget, setIsTarget] = useState(false);
  const [label, setLabel] = useState("");

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    // when entering an element that (or its ancestor) has data-cursor
    const handleOver = (e) => {
      const t = e.target && e.target.closest && e.target.closest('[data-cursor]');
      if (t) {
        setLabel(t.getAttribute('data-cursor') || 'view');
        setIsTarget(true);
      }
    };
    const handleOut = (e) => {
      const t = e.target && e.target.closest && e.target.closest('[data-cursor]');
      if (t) {
        setIsTarget(false);
        setLabel('');
      }
    };

    document.addEventListener('mousemove', move);
    document.addEventListener('mouseover', handleOver);
    document.addEventListener('mouseout', handleOut);

    return () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', handleOver);
      document.removeEventListener('mouseout', handleOut);
    };
  }, []);

  const style = {
    left: pos.x,
    top: pos.y,
  };

  return (
    <div
      className={`custom-cursor visible ${isTarget ? 'is-target' : 'is-default'}`}
      style={style}
      aria-hidden
    >
      <span className="cursor-label">{isTarget ? label : ''}</span>
      <span className="cursor-ring" />
    </div>
  );
};

export default Cursor;
