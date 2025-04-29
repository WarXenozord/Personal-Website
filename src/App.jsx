import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'

import Header from './components/heading.jsx'
import Home from './pages/home/home.jsx'
import Portifolio from './pages/portifolio/portifolio.jsx'
import Footer from './components/footer.jsx'
import Sidebar from './components/sidebar.jsx'

import {ColorModeContext, useMode} from './util/theme.js'
import {Box, CssBaseline, ThemeProvider} from '@mui/material'
import { LanguageContext, useLang } from './util/lang.js'

function App() {
  const [theme,colorMode] = useMode();
  const [langMode,lang] = useLang();
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => setOpen(prev => !prev);

  return (
    <Router>
      <ColorModeContext.Provider value ={colorMode}>
        <ThemeProvider theme={theme}>
          <LanguageContext.Provider value={{langMode,lang}}>
            <CssBaseline />
            <Header open={open} toggleSidebar={toggleSidebar}/>
            <Sidebar open={open}/>
            <Box sx={{
              width: open ? '85vw': '100vw',
              ml: open ? '15vw': '0', 
              transition: 'all 0.3s ease'}}>
              <Routes>
                <Route path = "/" element={<Home />}/>
                <Route path = "/portifolio" element={<Portifolio />}/>
              </Routes>
              <Footer />
            </Box>
          </LanguageContext.Provider>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </Router>
  )
}

export default App
