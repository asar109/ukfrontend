import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddUser from "./AddUser";
import Detail from "./Detail";
import IELTSResults from "./IELTSResults";


function App() {
  return (
    <>
     
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<IELTSResults />} />
            <Route path="/adduser" element={<AddUser />} />
            <Route path="/detail" element={<Detail />} />
          </Routes>
        </BrowserRouter>
     
    </>
  );
}

export default App;
