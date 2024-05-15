import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './client/home';
import Navbar from './files/navbar';

function App() {
  return (
      <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Index />}>
        </Route>
      </Routes>
        <Navbar/>
    </BrowserRouter>
  );
}

export default App;
