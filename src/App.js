import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import CustomizedMenus from './components/SideNavbar.jsx';
import './App.css';
import TopNavbar from './components/TopNavbar.jsx';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <TopNavbar />
      <CustomizedMenus />
    </React.Fragment>
  );
}

export default App;



