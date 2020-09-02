import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import SideNavbar from './components/SideNavbar.jsx';
import TopNavbar from './components/TopNavbar.jsx';
import EmailDisplay from './components/EmailDisplay.jsx';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <TopNavbar />
      <SideNavbar />
      <EmailDisplay />
    </React.Fragment>
  );
}

export default App;



