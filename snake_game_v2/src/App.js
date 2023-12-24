import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout/Layout";
import Snake from "./pages/Snake";
import Page404 from "./pages/Page404";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="snake" element={<Snake/>}/>
            <Route path="*" element={<Page404/>}/>
          </Routes>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
