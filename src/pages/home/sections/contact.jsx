import { useContext } from 'react'
import { Box, Typography, Button, TextField } from '@mui/material'

import { useTheme } from '@mui/material/styles'
import { tokens } from '../../../util/theme.js'
import { LanguageContext, langPropsContact} from '../../../util/lang.js'

function Contact(){ 

    //---Theme and lang props---//
    const {lang} = useContext(LanguageContext)
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const lProps = langPropsContact(lang) 

    //---Common syles---//
    const inputSx = {
        backgroundColor: colors.secondary[500],
    }

    return(
        <Box component='section' id='contact'>
            <Typography variant='h2'
            textAlign='center'
            m='25px 0'>
                {lProps.title}
            </Typography>
            <Box
            component="form"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2, // space between fields
                width: '50%',
                margin: '0 auto', // center on page
            }}
            noValidate
            autoComplete="off"
            >
                <TextField
                    placeholder={lProps.name}
                    variant="outlined"
                    fullWidth
                    sx={inputSx}
                />
                <TextField
                    placeholder="Email"
                    variant="outlined"
                    fullWidth
                    sx={inputSx}
                />
                <TextField
                    placeholder={lProps.message}
                    variant="outlined"
                    fullWidth
                    multiline
                    sx={inputSx}
                    rows={4}
                />
                <Button 
                variant="contained" 
                sx={{
                    borderRadius: '30px',
                    fontSize: '1.2rem',
                    padding: '0 15px',
                    width: '20%',
                    alignSelf: 'center',
                    m:'5px 0 20px 0',
                    textTransform:'none' ,
                    backgroundColor:colors.grey[900],
                    color:colors.grey[100],
                    '&:hover':{
                        backgroundColor:colors.grey[600] + 'd0'
                    },
                }}
                type="submit">
                    {lProps.send}
                </Button>
            </Box>
        </Box>
    )
}

export default Contact
