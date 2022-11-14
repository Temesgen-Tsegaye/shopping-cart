import "./App.css";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Shope from "./Components/Shope";
import Shared from "./Components/Shared";
import { BrowserRouter, Routes, Route,HashRouter } from "react-router-dom";
import ShopeDetail from "./Components/ShopeItemsDetail";



const App = () => {

  
  return (
    <HashRouter>
      <Routes>
    
        <Route path="/" element={<Shared />}>
      
          <Route path="/shope" element={<Shope />}/>
          <Route path="shope/:ID" element={<ShopeDetail/>} />
          
          <Route path="/cart" element={<Cart />} />
          
          <Route index element={<Home />} />
         
          
        </Route>
       
      </Routes>
    </HashRouter>
  );
};

export default App;
