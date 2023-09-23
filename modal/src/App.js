import React, { useState } from "react";

// Components
import Modal from "./components/Modal";

const App = () => {
  const [modal, setModal] = useState(true);

  return (
    <>
      <button onClick={() => setModal(true)}>show Modal</button>

      <Modal show={modal} onClose={() => setModal(false)} />
    </>
  );
};

export default App;
