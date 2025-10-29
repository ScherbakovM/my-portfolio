import React, { forwardRef } from "react";

const AnimatedButton = forwardRef(({ text = "Обо мне" }, ref) => {
  return (
    <div ref={ref} className="animated__button">
      <div className="animated__wrapper">
        <span className="text">{text}</span>
        <span className="clone">{text}</span>
      </div>
    </div>
  );
});

export default AnimatedButton;
