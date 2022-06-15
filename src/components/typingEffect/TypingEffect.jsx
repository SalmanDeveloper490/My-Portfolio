import React from "react";
import { Typing } from "typing-effect-reactjs";

const TypingEffect = () => {
  return (
    <div>
      <Typing
        text={["Software Developer", "Full Stack Developer / Web Developer"]}
        smartBackspace
      />
    </div>
  );
};

export default TypingEffect;
