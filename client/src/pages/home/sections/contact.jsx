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
    const [status, setStatus] = useState(null); // null | 'success' | 'error'

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
    const handleSubmit = async (e) => {
        e.preventDefault(); // stop native submit
        if (!validateEmail(form.email)) {
            setStatus('error');
            alert('Please enter a valid email');
            setTimeout(() => setStatus(null), 3000);
            return;
        }
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            if (res.status === 429) {
                console.log('Too many requests. Please try again later.');
                throw new Error('429');
            }

            if (!res.ok) throw new Error('Submission failed');

            setStatus('success');
        } catch (err) {
            if(err.message == '429'){
                setStatus('wait');
                console.error(err);
            }
            else {
                setStatus('error');
                console.error(err);
            }
        }

        setTimeout(() => setStatus(null), 3000);
    };

    return (
        <Box component='section'
            id='contact'
            height='max(72vh, 600px)'>
            <Typography variant='h2'
                fontSize={{xs: '1.4rem', sm:'2.5rem'}}
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
                autoComplete="off"
            >
                <TextField
                    name="name"
                    required
                    placeholder={lProps.name}
                    value={form.name}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                    sx={inputSx}
                />
                <TextField
                    name="email"
                    type="email"
                    required
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                    sx={inputSx}
                />
                <TextField
                    name="message"
                    required
                    placeholder={lProps.message}
                    value={form.message}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={11}
                    sx={inputSx}
                />
                <input type="text" name="honeypot" style={{ display: 'none' }} />
                {status && (
                    <Typography
                        align="center"
                        sx={{
                            color: status === 'success' ? 'green' : 'red',
                            fontSize: '1.1rem',
                        }}
                    >
                        {status === 'success' ? 'Message sent successfully!' : 
                        status === 'wait' ? 'Too many requests, please wait.':
                        'Failed to send message.'}
                    </Typography>
                )}
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
