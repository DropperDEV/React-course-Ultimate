import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product"
import Pricing from "./pages/Pricing"
import Homepage from "./pages/Homepage"
import PageNotFound from "./pages/PageNotFound"
import AppLayout from './pages/AppLayout';



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="product" element={<Product/>}/>
        <Route path="pricing" element={<Pricing/>}/>
        <Route path="/" element={<Homepage/>}/>
        <Route path="*" element={<PageNotFound/>}/>
        <Route path="app" element={<AppLayout/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
