import React from "react";
import { BrowserRouter, Form, Route, Routes } from "react-router-dom";
import Formulario from "./pages/forms";
import Login from "./pages/login";
import Carregando from "./components/Carregando";
import TableUI from "./components/card-imv";
import  Dashboard  from './pages/dashbord';
import ListaImoveis from "./pages/dashbord";
import EditFormulario from "./pages/edit";



function App() {
  return (
    <BrowserRouter>
    
        
          <Routes>
            {/* Componente da tela inicial */}
          <Route index element={<Login/>} />
          {/* Componente de uma rota específica */}
          <Route path="forms" element={<Formulario/>} />
          <Route path="edit-itens" element={<Dashboard/>} />
          <Route path="element" element={<ListaImoveis/>} />
          <Route path="/edit/:id" element={<EditFormulario />} />
          </Routes>
        
    
    
    </BrowserRouter>
    
  );
}

export default App;