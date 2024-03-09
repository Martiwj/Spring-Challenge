import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Homesite.js'
import Code from './Pages/Code/code.js'

function App() {
  return (
    <> 
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<Home/>}/>
          <Route path = '/code' element = {<Code/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;