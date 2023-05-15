import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/header/header';
import React, { Suspense } from 'react';

const Resource = React.lazy(() => import('./component/resource/resource'));
const Application = React.lazy(() => import('./component/application/application'));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <div className='marginTop1'>

      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' element={<Resource></Resource>}></Route>
        <Route path='/Application' element={<Application></Application>}></Route>
        <Route path='*' element={<>not found</>}></Route>
      </Routes>
      </Suspense>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
