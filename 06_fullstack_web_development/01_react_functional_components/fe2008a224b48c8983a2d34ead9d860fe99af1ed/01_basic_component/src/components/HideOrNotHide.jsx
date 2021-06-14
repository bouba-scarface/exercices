import React, { useState } from "react";

export const HideOrNotHide = () => {
  const [text, setText] = React.useState(true);
  return (
    <div>
      <button onClick={() => setText(!text)}> {text ? "Hide Content" : "Reveal Content"}</button>
      {text ? <p>Hello world</p> : null}
    </div>
  );
};
