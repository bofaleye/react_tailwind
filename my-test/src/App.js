import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Table from './component/Table';
import HomePage from './home/home-page';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path={"/"} element={<HomePage />} />
         <Route path={"/bill-info"} element={<Table />} />
         </Routes>
        </BrowserRouter>
    </div>)
}

export default App;