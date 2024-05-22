import {BrowserRouter, Routes, Route } from "react-router-dom";

// Page
import Home from "./page/Home";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
