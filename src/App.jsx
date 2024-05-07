import { useState } from 'react';

import './App.css';
import { router } from './router/ROUTER';
import { RouterProvider } from 'react-router-dom';
import MainProvaider from './context/MainProvaider';
function App() {

  return (
    <>

      <MainProvaider>
        <RouterProvider router={router} />
      </MainProvaider>
    </>
  )
}

export default App
