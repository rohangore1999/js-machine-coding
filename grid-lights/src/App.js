import React, { useState } from "react";
import Cell from "./components/Cell";

import "./index.css";

const App = () => {
  // each row define cell row
  // 1 means cell present, 0 means no cell for that particular row and col
  const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];

  const [order, setOrder] = useState([]);
  const [isDeactivated, setIsDeactivated] = useState(false);

  const deactivateCell = () => {
    setIsDeactivated(true); // to disable the button

    // we have to deactivete in reverse order of order state
    const timer = setInterval(() => {
      setOrder((ogOrder) => {
        const copyOrder = ogOrder.slice(); // creating the copy of order to perform manipulation
        copyOrder.pop(); // removing from last

        // checking for empty order
        if (copyOrder.length === 0) {
          // clear interval
          clearInterval(timer);
          setIsDeactivated(false);
        }

        return copyOrder;
      });
    }, 300);
  };

  const activateCell = (index) => {
    const newOrder = [...order, index];

    setOrder(newOrder);

    // checking for all cells active, if yes then starting to deactivate in reverse
    // filter(Boolean) -> removing 0's as for 0 we dont maintain index in newOrder.
    if (newOrder.length === config.flat().filter(Boolean).length) {
      deactivateCell();
    }
  };

  return (
    <div className="wrapper">
      {/* {config.flat()} -> [1,1,1,1,0,1,1,1,1*/}
      <div
        className="grid"
        // repeat columns(make grid to 3 cols)
        style={{ gridTemplateColumns: `repeat(${config[0].length}, 1fr)` }}
      >
        {config.flat().map((value, idx) =>
          value ? (
            <Cell
              key={idx}
              label={`Cell ${idx}`}
              filled={order.includes(idx)}
              onClick={() => activateCell(idx)}
              // Disabling the button so that it should not listen to click
              isDisabled={order.includes(idx) || isDeactivated}
            />
          ) : (
            <span />
          )
        )}
      </div>
    </div>
  );
};

export default App;
