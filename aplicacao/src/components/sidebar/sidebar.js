import React, { useState } from 'react';
import './sidebar.css'; // Certifique-se de criar um arquivo CSS correspondente
import Formulario from '../../pages/forms';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useNavigate } from "react-router-dom";



const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate()
  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const naveguehome = () => {
    navigate('/edit-itens')
  };
  const navegueforms = ()=>{
    navigate('/forms')

  }
  return (
    <div className='sidebarops'>
      <div className={`sidebar ${isSidebarOpen ? 'close' : ''}`}>
      <div className="logo-details">
          <span>LUCY BOT</span>
          <hr></hr>
        </div>
        <ul>
          <li>
          <div className='sub-menu-sidebar' onClick={naveguehome}>
              <HomeIcon sx={{fontSize: '2.5vw'}}/>
          <span>Home</span>
          </div>
          </li>

          <li>
          <div className='sub-menu-sidebar' onClick={navegueforms}>
              <DashboardIcon sx={{fontSize: '2.5vw'}}/>
          <span>Forms</span>
          </div>
          </li>
          
          
        </ul>
        
      </div>
      
      <div className="home-content">
        <i className="bx bx-menu" onClick={handleSidebarToggle}></i>
      </div>
    </div>
  );
};

export default Sidebar;
