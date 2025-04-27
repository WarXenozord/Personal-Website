import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Entry from './sections/welcome.jsx'
import About from './sections/about.jsx'
import Capabilities from './sections/capabilities.jsx'
import Standout from './sections/standout.jsx'
import Contact from './sections/contact.jsx'

function Home(){ 
    const { search } = useLocation(); 
    useEffect(() => {
      const params = new URLSearchParams(search);
      const scrollTo = params.get('scrollTo'); 
      const yOffset = parseInt(params.get('offset'), 10) || -0; 
      if (scrollTo) {
        const element = document.getElementById(scrollTo);
        if (element) {
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    }, [search]);

    return (
        <>
          <Entry/>
          <About/>
          <Capabilities/>
          <Standout/>
          <Contact/>
        </>
)}

export default Home