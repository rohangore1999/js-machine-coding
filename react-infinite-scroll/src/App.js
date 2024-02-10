import React, { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(50);
  const divs = [];

  for (let i = 0; i < count; i++) {
    divs.push(<div>{i + 1}</div>);
  }

/**
 * 
 * window.innerHeight represents the height of the visible part of the window (the viewport).
 * window.scrollY represents how far the user has scrolled down in the window.
 * window.document.body.offsetHeight represents the total height of the entire document (including the non-visible parts).
 * 
 */

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        window.document.body.offsetHeight - 3
      ) {
        setCount(count + 50);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, [count]);

  return <main>{divs}</main>;
};

export default App;
