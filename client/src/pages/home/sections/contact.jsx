import { useContext, useState } from 'react'
import { Box, Typography, Button, TextField } from '@mui/material'

import { useTheme } from '@mui/material/styles'
import { tokens } from '../../../util/theme.js'
import { LanguageContext } from '../../../util/lang.js'
import { langPropsContact } from '../../../data/langProps.js'

function Contact() {

    //---Theme and lang props---//
    const { lang } = useContext(LanguageContext)
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const lProps = langPropsContact(lang)

    //---Common syles---//
    const inputSx = {
        backgroundColor: colors.secondary[500],
    }

    //---Form JSON---//
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // stop native submit
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            if (!res.ok) throw new Error('Submission failed');

            // success handling
            console.log('Success');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <Box component='section'
            id='contact'
            height='max(72vh, 600px)'>
            <Typography variant='h2'
                textAlign='center'
                m='25px 0 4vh 0'>
                {lProps.title}
            </Typography>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 3,
                    width: { xs: '90%', sm: '80%', md: '70%', lg: '50%' },
                    margin: '0 auto',
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    name="name"
                    placeholder={lProps.name}
                    value={form.name}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                    sx={inputSx}
                />
                <TextField
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                    sx={inputSx}
                />
                <TextField
                    name="message"
                    placeholder={lProps.message}
                    value={form.message}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={11}
                    sx={inputSx}
                />
                <Button
                    variant="contained"
                    type="submit"
                    sx={{
                        borderRadius: '30px',
                        fontSize: '1.6rem',
                        padding: '0 15px',
                        width: '20%',
                        alignSelf: 'center',
                        m: '1vh 0 20px 0',
                        textTransform: 'none',
                        backgroundColor: colors.grey[900],
                        color: colors.grey[100],
                        '&:hover': {
                            backgroundColor: colors.grey[600] + 'd0',
                        },
                    }}
                >
                    {lProps.send}
                </Button>
            </Box>
        </Box>
    )
}

export default Contact
