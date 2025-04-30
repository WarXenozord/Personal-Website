import { useContext, useRef, useEffect, useState } from 'react'
import { Card, Link, CardMedia, Box, Typography, Button} from '@mui/material'

import { useTheme } from '@mui/material/styles'
import { tokens } from '../../../util/theme.js'
import { LanguageContext, langPropsHome} from '../../../util/lang.js'
import { layoutStyles } from '../../../util/styles.js'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

//---Slider---// 
//TODO: better it up and add links
const cards = [1, 2, 3, 4, 5, 6];
const links = [
    "",
    "",
    "",
    "",
    "",
    "",
];
const animation = { duration: 40000, easing: (t) => t }

//common style
//TODO: refactor styles

//---Welcome Func---//
function Welcome(){ 
    //---Theme and lang props---//
    const {lang} = useContext(LanguageContext)
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const lProps = langPropsHome(lang)
    const isDark = theme.palette.mode === 'dark'

    //---Video Source---//
    const vidSrc = "/videos/" + (isDark ? "darkVid" : "lightVid")

    //---Slider---//
    const [sliderRef] = useKeenSlider({
        loop: true,
        slides: {
            perView: 5,
            spacing: 0,
        },
        breakpoints: {
            '(max-width: 1500px)': {
                slides: {
                  perView: 4,
                  spacing: 2,
                },
              },
            '(max-width: 1200px)': {
              slides: {
                perView: 3,
                spacing: 2,
              },
            },
            '(max-width: 900px)': {
                slides: {
                  perView: 2,
                  spacing: 2,
                },
            },
            '(max-width: 600px)': {
              slides: {
                perView: 1,
                spacing: 0,
              },
            },
        },
        renderMode: 'performance',
        drag: true,
        created(s) {
            s.moveToIdx(5, true, animation)
        },
        updated(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
        animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
    })

    //---Know More Button---//
    const seekRef = useRef(null);

    const seekAbout = () => {
        const yOffset = -50; // your navbar height
        const y =
          seekRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
      
        window.scrollTo({ top: y, behavior: 'smooth' });
    };

    //---ghost Header---//
    const headerRef = useRef(null);
    const [position, setPosition] = useState('static');
    const [initialOffset, setInitialOffset] = useState(null);

    useEffect(() => {
        const header = headerRef.current;
        if (!header) return;
    
        const offsetTop = header.getBoundingClientRect().top + window.scrollY;
        setInitialOffset(offsetTop);
    }, []);
  
    useEffect(() => {
      const handleScroll = () => {
        if (initialOffset == null) return;
  
        const scrollY = window.scrollY;
  
        if (scrollY < initialOffset - 105) {
            setPosition('normal');
        }
        else if (scrollY < initialOffset - 10) {
            setPosition('fixed');
        }
        else {
            setPosition('locked');
        }

      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [initialOffset]);
    
    const getStyle = () => {
      switch (position) {
        case 'fixed':
          return {
            position: 'fixed',
            left: '50%',
            transform: 'translateX(-50%)',
            top: '95px',
            zIndex: 1000,
          };
        case 'locked':
          return {
            position: 'relative',
            top: '50px',
          };
        default:
          return {
            position: 'relative',
            top: '-50px',
          }; // normal flow
      }
    };
      
    //---Welcome Component---//
    return (
        <Box component='section' id='welcome'>
            {/*---Background Video---*/}
            <Box
            sx={{
                width: '100%',
                height: '94vh',
                overflow: 'hidden',
            }}
            >
                <video
                    key={vidSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                >
                    <source src={vidSrc+".webm"} type="video/webm" />
                    <source src={vidSrc+".mp4"} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </Box>
            {/*---Main welcome page---*/}
            <Box
            sx={{
                width: '100%',
                height: '94vh',
                overflow: 'hidden',
                position: 'absolute',
                top: '6vh',
                margin: '0',
                padding: '10px 0',
                textAlign: 'center',
            }}>
                <Typography variant='h2' m='6vh 0 0 0' 
                color={colors.blue[500]} 
                sx={{
                    WebkitTextStroke: '0.5px black',
                }}>
                    {lProps.intro[0]}
                </Typography>
                <Typography variant='h1' m='1vh 0 0 0' 
                color='#ffffff' 
                sx={{
                    WebkitTextStroke: '0.5px black',
                }}>
                    Juan Libonatti
                </Typography>
                <Typography variant='h2' m='1vh 0 5vh 0' 
                color={colors.red[500]} 
                sx={{
                    WebkitTextStroke: '0.5px black',
                }}>
                    {lProps.intro[1]}
                </Typography>
                <Button onClick={seekAbout} sx={{
                    borderRadius: '30px',
                    border: 'solid',
                    borderColor: colors.grey[900],
                    marginBottom: '6vh',
                    fontSize: '1.6rem',
                    fontWeight: 'bold',
                    color: colors.grey[900],
                    padding: '0 20px',
                    backgroundColor: colors.primary[500] + '80',
                    textTransform: 'none',
                    '&:hover':{
                        backgroundColor: colors.primary[500]
                    }
                }}>
                    {lProps.button}
                </Button>
                <Box sx={[layoutStyles.gradEffect,layoutStyles.line]}></Box>
                <Box height='35vh' sx={{
                    backgroundColor: colors.primary[500] + "80"
                }}>
                    <div ref={sliderRef} className="keen-slider">
                        {cards.map((num) => (
                            <div className="keen-slider__slide" key={num} style={{
                                 minWidth: '200px'
                            }}>
                                <Card sx={{ 
                                        height: "33vh", 
                                        margin: '10px 10px',
                                        border: '2px solid rgba(255,255,255,0.3)',
                                }}>
                                    <CardMedia
                                        component="img"
                                            height="100%"
                                            image={"/images/" + num + ".webp"}
                                            alt="Project Thumbnail"
                                    />
                                    <Box
                                        sx={{
                                        position: 'relative',
                                        top: '-100%',
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        bgcolor: colors.grey[100] + '99',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        opacity: 0,
                                        transition: 'opacity 0.3s ease',
                                        '&:hover': {
                                            opacity: 1
                                        }
                                        }}
                                    >
                                        <Link
                                        href={links[num]}
                                        underline="none"
                                        sx={{
                                            height: '100%',
                                            width: '100%',
                                            fontWeight: 'bold',
                                            color: colors.grey[100],
                                            fontFamily: '"Chau Philomene One", sans-serif',
                                            fontSize: '1.4rem',
                                            WebkitTextStroke: '0.5px' + colors.grey[900],
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            transition: 'transform 0.3s ease',
                                            '&:hover':{
                                                color: colors.grey[100],
                                                transform: 'scale(1.15)',
                                            }
                                        }}
                                        >
                                        {lProps.cardText}
                                        </Link>
                                    </Box>
                                </Card>
                            </div>
                        ))}
                    </div>
                </Box>
                <Box sx={[layoutStyles.gradEffect,layoutStyles.line]}></Box>
            </Box>
            {/*---Starting of next section with ghost header---*/}
            <Box height='100px' 
            backgroundColor={colors.secondary[500]} 
            ref={seekRef}>
                <Typography variant='h3' 
                ref={headerRef}
                color='#ffffff'
                m = '0'
                sx={[getStyle(), {
                    WebkitTextStroke: '0.5px black',
                    textAlign: 'center'}
                ]}>
                    "AD ASTRA PER ASPERA"
                </Typography>
            </Box>
        </Box>
)}

export default Welcome