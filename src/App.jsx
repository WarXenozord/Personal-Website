import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'

import Header from './components/heading.jsx'
import Home from './pages/home/home.jsx'
import Portifolio from './pages/portifolio/portifolio.jsx'
import Footer from './components/footer.jsx'

import {ColorModeContext, useMode} from './util/theme.js'
import {CssBaseline, ThemeProvider} from '@mui/material'
import { LanguageContext, useLang } from './util/lang.js'

function App() {
  const [theme,colorMode] = useMode();
  const [langMode,lang] = useLang();

  return (
    <Router>
      <ColorModeContext.Provider value ={colorMode}>
        <ThemeProvider theme={theme}>
          <LanguageContext.Provider value={{langMode,lang}}>
            <CssBaseline />
            <Header />
            <Routes>
              <Route path = "/" element={<Home />}/>
              <Route path = "/portifolio" element={<Portifolio />}/>
            </Routes>
            <Footer />
          </LanguageContext.Provider>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </Router>
  )
}

export default App
