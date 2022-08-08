import Homepage from './pages/Homepage'
import Products from './pages/Products'
import Stores from './pages/Stores'
import Blog from './pages/Blog'
import Faq from './pages/Faq'
import StoreOwn from './pages/StoreOwn'
import Articles from './pages/Blog/Articles'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/glasses-website' element={<Homepage/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/stores' element={<Stores/>}></Route>
        <Route path='/stores/details' element={<StoreOwn/>}></Route>
        <Route path='/storesOwn' element={<StoreOwn/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/blog/article' element={<Articles/>}></Route>
        <Route path='/FAQ' element={<Faq/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
