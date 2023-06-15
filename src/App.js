
import './App.css';
import './style/style.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import HomeArray from './components/Array/homeArray';
import ArrayMethods from './components/Array/ArrayMethods';

function App() {



  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomeArray /> }/>
        <Route path='/arrayMethods' element={<ArrayMethods />} />
        {/* <Route path='/editemployee/:id' element={<AddEmployee />} />
        <Route path='/viewemployee/:id' element={<ViewEmployee />} />
        <Route path='/userList' element={<UserDashboard />} /> */}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;