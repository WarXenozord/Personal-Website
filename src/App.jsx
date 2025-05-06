import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'

import Header from './components/heading.jsx'
import Home from './pages/home/home.jsx'
import Portifolio from './pages/portifolio/portifolio.jsx'
import About from './pages/about/about.jsx'
import Footer from './components/footer.jsx'
import ViewPort from './components/viewport.jsx'
import {Sidebar, SidebarProvider} from './components/sidebar.jsx';

import {ColorModeContext, useMode} from './util/theme.js'
import {CssBaseline, ThemeProvider} from '@mui/material'
import { LanguageContext, useLang } from './util/lang.js'
import ScrollToTop from './util/scrollToTop.jsx'

function App() {
  const [theme,colorMode] = useMode();
  const [langMode,lang] = useLang();

  return (
    <Router>
      <ColorModeContext.Provider value ={colorMode}>
        <ThemeProvider theme={theme}>
          <LanguageContext.Provider value={{langMode,lang}}>
            <SidebarProvider>
              <CssBaseline />
              <ScrollToTop />
              <Header/>
              <Sidebar/>
              <ViewPort>
                <Routes>
                  <Route path = "/" element={<Home />}/>
                  <Route path = "/portifolio" element={<Portifolio />}/>
                  <Route path = "/about" element={<About />}/>
                </Routes>
                <Footer />
              </ViewPort>
            </SidebarProvider>
          </LanguageContext.Provider>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </Router>
  )
}

export default App
