import Home from "./pages/home/HomePage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact={true} path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
