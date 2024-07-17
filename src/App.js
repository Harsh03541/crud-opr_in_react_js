import './App.css';
import Create from './Components/Create'
import Read from './Components/Read';  
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Update from './Components/Update';
// import Header from './Components/Header';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    
      {/* <p className='heading'>  </p> */}
      {/* <Header /> */}
      {/* <Route exact path="/header" element={<Header />}></Route> */}

      <Route exact path='/' element={<Create />} ></Route>
      <Route exact path='/read' element={<Read />} ></Route>
      <Route exact path='/update' element={<Update />}></Route> 
      
    </Routes>
    </BrowserRouter>
  );
}



export default App;