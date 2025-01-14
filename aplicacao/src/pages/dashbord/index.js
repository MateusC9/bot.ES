import React from 'react';
import './index.css'; // Importe o arquivo de estilo que contém as regras CSS
import Sidebar from '../../components/sidebar/sidebar';
import Team from '../../components/Team';
import { Button } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Barradepesquisa from '../../components/barradepesquisa';
import { useNavigate } from "react-router-dom";

function ListaImoveis() {
  const navigate = useNavigate()
  const handleAddforms = (id) => {
    
    navigate(`/forms`);
  };
  return (
    <>

    <section className='section-edit-itens'>
          <Sidebar/>
            
            <div className='container-actions'>
            <div className="title-forms">
              <h1>Imóveis Cadastrados</h1>
              <hr></hr>
            </div>

              
              <div className='search-container'>
                <Barradepesquisa/>
              </div>
              <div className='add-button'><Button onClick={handleAddforms}   variant="contained" ><AddBoxIcon/> Adicionar  </Button></div>
            

                <Team/>
            </div>

    </section>
      
    </>
  );
}

export default ListaImoveis;
