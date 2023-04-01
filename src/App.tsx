import "./App.css";

import { useState } from "react";

const App = () => {
  const [select, setSelect] = useState(1);
  const [active, setActive] = useState<number | undefined>(1);
  const [drag, setDrag] = useState(false);

  const genBound = () => {
    const gen = [];
    for (let i = 1; i <= 15; i++) {
      gen.push(
        <div
          key={i}
          className="bound"
          onMouseDown={() => {
            setActive(i);
          }}
          onMouseUp={() => {
            setActive(undefined);
          }}
          onMouseEnter={() => {
            setActive(i);
            if (drag && active && i > active) {
              if (select === 31) {
                setSelect(1);
              } else {
                setSelect(select + 1);
              }
            }
            if (drag && active && i < active) {
              if (select === 1) {
                setSelect(31);
              } else {
                setSelect(select - 1);
              }
            }
          }}
        ></div>
      );
    }
    return gen;
  };

  return (
    <div
      className="imageContainer"
      onMouseDown={() => setDrag(true)}
      onMouseUp={() => setDrag(false)}
      onMouseLeave={() => setDrag(false)}
    >
      <img
        src={`/src/assets/animation-test/00${
          select > 9 ? select : `0${select}`
        }.jpg`}
        onDragStart={() => {
          return false;
        }}
        draggable={false}
      />
      <div className="boundContainer">{genBound()}</div>
    </div>
  );
};

export default App;
