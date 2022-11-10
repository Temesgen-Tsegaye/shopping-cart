import "./App.css";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Shope from "./Components/Shope";
import Shared from "./Components/Shared";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopeDetail from "./Components/ShopeItemsDetail";



const App = () => {

  
  return (
    <BrowserRouter>
      <Routes>
    
        <Route path="/" element={<Shared />}>
      
          <Route path="/shope" element={<Shope />}/>
          <Route path="shope/:ID" element={<ShopeDetail/>} />
          
          <Route path="/cart" element={<Cart />} />
          
          <Route index element={<Home />} />
         
          
        </Route>
       
      </Routes>
    </BrowserRouter>
  );
};

export default App;
