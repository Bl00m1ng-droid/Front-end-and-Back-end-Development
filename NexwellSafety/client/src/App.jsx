import { BrowserRouter, Routes,Route,Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import ContactUs from "./pages/ContactUs";

function App(){
  return(
    <BrowserRouter>
    <NavBar/>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/catalog" element={<Catalog/>}/>
      <Route path="/contactUs" element={<ContactUs/>} />
    </Routes>
    </BrowserRouter>
  );
};

export default App
