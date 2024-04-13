// Components

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Breadcrumbs from "./components/Breadcrumbs";

const App = () => {
  // Based on url (from useLocation) it will show
  return (
    <BrowserRouter>
      <Breadcrumbs />

      <Routes>
        <Route path="/"></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
