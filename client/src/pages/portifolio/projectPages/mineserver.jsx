import { Box, Typography, Grid } from "@mui/material";

import { useContext } from 'react';

import { useTheme } from '@mui/material/styles'
import { tokens } from '../../../util/theme.js'
import { LanguageContext } from '../../../util/lang.js'
import projects from "../../../data/projects.js";

import { A } from "../../../util/shortlink.jsx"
import NormalHeader from "./sections/normalHeader.jsx";

const projectLProps = (lang, c) => ({
    ...(lang === 'en' ? {
        introTitle: 'For learning purposes only, I swear!',
        intro: (
            <>
                MineServer is a DIY-crafted Minecraft-server orchestration stack: a spin-up-on-demand, auth-driven, firewall-guarded setup
                running on AWS EC2 and AWS Lambda. The idea is simple: the server stays off most of the time, only boots when someone actually
                wants to play, authorizes the requester’s IP, spins up the world, and shuts itself down once everyone’s gone.
                <br /><br />
                Why did I build it? For learning purposes, of course 😄! Also because I didn't want a 24/7 server burning money for just a few
                friends — and I wanted the freedom to use more powerful machines only when needed. Since the server runs in offline mode, the
                firewall setup had to be extra tight. I swear it wasn't <i>only</i> for gaming!
                <br /><br />
                Turns out building this is a legit multitask: Java for the plugin, JavaScript for Express + React, plus all the AWS work for
                Lambdas, firewall automation, and the auto-shutdown logic. A true all-in-one package.
            </>
        ),
        mainTitle: 'Two parts under the hood',
        main: (
            <>
                As mentioned before, the full stack is split into two apps. One lives on a lightweight 24/7 EC2 instance — the same kind that
                runs this website. The other runs on a more powerful EC2 instance that only boots when someone wants to play.
                <br /><br />
                <A c={c} href="https://github.com/WarXenozord/MineServerMainApp">MineServerMainApp</A> is a Node.js supervisor + auth service +
                MC server wrapper + firewall-whitelist manager. It handles launching the server, authorizing or revoking player IPs (via Lambda),
                and shutting everything down when nobody's online. It also hosts a PaperMC server with a custom authentication plugin for extra
                security and player-tracking.
                <br /><br />
                <A c={c} href="https://github.com/WarXenozord/MineServerWebApp">MineServerWebApp</A> is a small web front-end (Express + React/Vite)
                that serves as the login gate, “start server” button, and session manager. When a user logs in and requests access, it triggers
                the backend to boot the game server and whitelist the player's IP.
            </>
        ),
    } : {
        introTitle: 'Apenas para fins de aprendizado, eu juro!',
        intro: (
            <>
                "MineServer é uma stack que opera um servidor de Minecraft: um sistema de ligar sob-demanda, com autenticação de usuário
                e firewall rígido, rodando em AWS EC2 e AWS Lambda. A ideia é simples: o servidor fica desligado a maior parte do tempo,
                só inicia quando alguém realmente quer jogar, autoriza o IP do jogador, liga o servidor e desliga sozinho quando todo mundo sai.
                <br /><br />
                Por que eu fiz isso? Para estudar, obviamente 😄! Também porque eu não queria um servidor 24/7 torrando dinheiro para um punhado
                de amigos — e porque assim posso usar máquinas mais potentes apenas quando necessário. Como o servidor roda em modo offline,
                a configuração de firewall também precisava ser bem rígida. Eu juro que não foi <i>só</i> por causa de jogatina!
                <br /><br />
                No fim das contas, montar isso foi bem multitarefa: Java para o plugin, JavaScript para Express + React, além de todo
                o trabalho na AWS com Lambdas, automação do firewall e lógica de auto-desligamento. Um verdadeiro pacote tudo-em-um.
            </>
        ),
        mainTitle: 'Duas partes sob o capô',
        main: (
            <>
                Como já mencionado, a stack é dividida em duas aplicações. Uma vive em uma instância EC2 leve, ligada 24/7 — o mesmo tipo
                de instância que roda este site. A outra roda em uma instância EC2 mais potente que só é iniciada quando alguém quer jogar.
                <br /><br />
                <A c={c} href="https://github.com/WarXenozord/MineServerMainApp">MineServerMainApp</A> é um supervisor em Node.js +
                serviço de autenticação + wrapper do servidor MC + gerenciador da whitelist do firewall. Ele cuida de iniciar o servidor,
                autorizar ou revogar IPs dos jogadores (via Lambda) e desligar tudo quando ninguém está online. Também hospeda um servidor
                PaperMC com um plugin de autenticação personalizado para segurança extra e rastreamento de jogadores.
                <br /><br />
                <A c={c} href="https://github.com/WarXenozord/MineServerWebApp">MineServerWebApp</A> é um front-end simples (Express + React/Vite)
                que funciona como portal de login, botão de “iniciar servidor” e gerenciador de sessão. Quando o usuário faz login e pede acesso,
                ele aciona o backend para ligar o servidor e liberar o IP do jogador.
            </>
        ),
    })
})

export default function mineserverPage() {
    const { lang } = useContext(LanguageContext)
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const lProps = projectLProps(lang, colors)

    const proj = projects.find(project =>
        project.title.toLowerCase() === 'my aws mine server')
    return (<>
        <NormalHeader tagColors={colors.red[500]}
            title={proj.title}
            subtitle={proj.subtitle[lang]}
            tech={proj.tech}
        />

        <Grid container spacing={4} mt='30px'>
            <Grid size={{xs:12, sm:12,md:12,lg:6}}
            alignContent='center'>
                <Box component='img' 
                alt='motor burning at bench'
                src='/images/12.webp'
                width= {`${(100/(645/576 + 565/570) * 645/576).toPrecision(4)}%`}
                sx={{
                    borderRadius: '10px 0 0 10px',
                    borderLeft: '1.5px solid ' + colors.grey[900],
                    borderTop: '1.5px solid ' + colors.grey[900],
                    borderBottom: '1.5px solid ' + colors.grey[900],
                }}
                />
                <Box component='img' 
                alt='test bench'
                src='/images/12-2.webp'
                width= {`${(100/(645/576 + 565/570) * 565/570).toPrecision(4)}%`}
                sx={{
                    borderRadius: '0 10px 10px 0',
                    borderRight: '1.5px solid ' + colors.grey[900],
                    borderTop: '1.5px solid ' + colors.grey[900],
                    borderBottom: '1.5px solid ' + colors.grey[900],
                }}
                />
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6 }}>
                <Typography variant="h2" gutterBottom>{lProps.introTitle}</Typography>
                <Typography variant='body2' textAlign='justify'>
                    {lProps.intro}
                </Typography>
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6 }}>
                <Typography variant="h2" gutterBottom>{lProps.mainTitle}</Typography>
                <Typography variant='body2' textAlign='justify'>
                    {lProps.main}
                </Typography>
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6 }}
                alignContent='center'>
                <Box component='img'
                    alt='CCCC at unity'
                    src='/images/12-3.webp'
                    width='100%'
                    sx={{
                        borderRadius: '10px',
                        border: '1.5px solid ' + colors.grey[900],
                    }}
                />
            </Grid>
        </Grid>
    </>)
}