import './App.css'
import Header from './components/heading.jsx'
import Home from './pages/home/home.jsx'
import Footer from './components/footer.jsx'
import {ColorModeContext, useMode} from './util/theme.js'
import {CssBaseline, ThemeProvider} from '@mui/material'
import { LanguageContext, useLang } from './util/lang.js'

function App() {
  const [theme,colorMode] = useMode();
  const [langMode,lang] = useLang();

  return (
    <ColorModeContext.Provider value ={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LanguageContext.Provider value={{langMode,lang}}>
          <Header />
          <Home />
          <Footer />
        </LanguageContext.Provider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
