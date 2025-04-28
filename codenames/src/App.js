import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Board from './Board';

function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path= "/" element = {<Board/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
