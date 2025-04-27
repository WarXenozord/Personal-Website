import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Entry from './welcome.jsx'
import About from './about.jsx'
import Capabilities from './capabilities.jsx'
import Standout from './standout.jsx'
import Contact from './contact.jsx'

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