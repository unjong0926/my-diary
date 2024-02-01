import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './views/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/main" element={<Main></Main>}></Route>
    </Routes>
  </BrowserRouter>
);
