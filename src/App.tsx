
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './paginas/home/Home';
import ListarCategoria from './components/Categorias/listarCategoria/ListarCategorias';
import DeletarCategoria from './components/Categorias/deletarCategoria/DeletarCategoria';







function App() {
  return (
   
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
             
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categoria" element={<ListarCategoria/>} />
              <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />

             
             
             

            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
       
  );
}
export default App;