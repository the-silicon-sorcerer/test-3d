import "./App.css";

import { useState } from "react";

const srcs = [
  "https://i.ibb.co/rwQsN77/0001.jpg",
  "https://i.ibb.co/GRFqc0s/0002.jpg",
  "https://i.ibb.co/q0YnjBT/0003.jpg",
  "https://i.ibb.co/GsBZWrV/0004.jpg",
  "https://i.ibb.co/HTW19s7/0005.jpg",
  "https://i.ibb.co/nCnLpdB/0006.jpg",
  "https://i.ibb.co/P5HK3xM/0007.jpg",
  "https://i.ibb.co/pKP8dC1/0008.jpg",
  "https://i.ibb.co/zrtRztG/0009.jpg",
  "https://i.ibb.co/4ZpzWjY/0010.jpg",
  "https://i.ibb.co/MNw18pb/0011.jpg",
  "https://i.ibb.co/VqbrPzX/0012.jpg",
  "https://i.ibb.co/Ws09Zk1/0013.jpg",
  "https://i.ibb.co/6PN7C7p/0014.jpg",
  "https://i.ibb.co/xjySvFw/0015.jpg",
  "https://i.ibb.co/p2ZgHz1/0016.jpg",
  "https://i.ibb.co/rcXcMZL/0017.jpg",
  "https://i.ibb.co/prr8Gkt/0018.jpg",
  "https://i.ibb.co/7bDCktY/0019.jpg",
  "https://i.ibb.co/PmYHNzP/0020.jpg",
  "https://i.ibb.co/3rK0RLP/0021.jpg",
  "https://i.ibb.co/XSzvPC6/0022.jpg",
  "https://i.ibb.co/R4fKW5q/0023.jpg",
  "https://i.ibb.co/WnNDMxK/0024.jpg",
  "https://i.ibb.co/MkgPqYW/0025.jpg",
  "https://i.ibb.co/Drb2yWV/0026.jpg",
  "https://i.ibb.co/gF6kP1B/0027.jpg",
  "https://i.ibb.co/7V8vD7Z/0028.jpg",
  "https://i.ibb.co/VVrgpQP/0029.jpg",
  "https://i.ibb.co/WKkZM1w/0030.jpg",
  "https://i.ibb.co/sb53wTr/0031.jpg",
];

const App = () => {
  const [select, setSelect] = useState(1);
  const [active, setActive] = useState<number | undefined>(1);
  const [drag, setDrag] = useState(false);

  const images = [];

  for (let i = 0; i < srcs.length; i++) {
    const image = new Image();
    image.src = srcs[i];
    images.push(image);
  }

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
        src={srcs[`${select - 1}`]}
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
