import React, { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(50);
  const divs = [];

  for (let i = 0; i < count; i++) {
    divs.push(<div>{i + 1}</div>);
  }

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

  return <main>{divs.map((div) => div)}</main>;
};

export default App;
