import { Box, Typography, Grid, Link } from "@mui/material";

import { useContext } from 'react';

import { useTheme } from '@mui/material/styles'
import { tokens } from '../../../util/theme.js'
import { LanguageContext } from '../../../util/lang.js'
import projects from "../../../data/projects.js";

import PicHeader from "./sections/picHeader.jsx";

const A = (props) => (
  <Link
    {...props}
    target="_blank"
    sx={{
      color: props.c.grey[900],
      fontWeight: 'bold',
      textDecoration: 'none',
      '&:hover': {
        color: props.c.red[500],
      },
      ...props.sx, // Allow overrides
    }}
  />
);

const projectLProps = (lang, c) => ({
    ...(lang === 'en' ? {  
        introTitle: 'Welcome to CurieSat',
        intro: (<> 
            By 2023, <A c={c} href="https://www.itacube.ita.br/">ITACube</A> was preparing to compete 
            in the second edition of the <A c={c} href="https://obsat.org.br/">Olimpíada Brasileira de Satélites - 
            OBSAT</A>. Although the team had previously built a project using the educational kit awarded in the first edition, 
            we still lacked a platform of our own. The Curie project was launched to develop the first satellite entirely built by ITACube.
            <br/><br/>
            Along with three other students — Bárbara Amaral, Julia Fernandes, and Paulo Vinicius — and our mentor, Joliver 
            Kozlowski, we began defining the satellite mission. We chose to measure ionizing radiation in the atmosphere, 
            as it aligned with research from ITA's physics department. The payload was thus set as a Geiger counter.
            <br/><br/>
            Being our first self-built satellite, the project came with many challenges and learning experiences. By the 
            time of the competition's in-person phase, we had assembled two fully functional models. Unfortunately, we placed 
            second in the regional phase and couldn't proceed to launch during the event. However, in April 2024, the satellite was <A
            c={c} href="https://www.itacube.ita.br/index.php/curiesat-finalmente-faz-seu-primeiro-voo/">launched by balloon</A>  by 
            our team, achieving all mission success criteria. As someone deeply involved, I hold a special place in my heart 
            for CurieSat — or “Curiezinho,” as we fondly call it.
        </>),
        curiesatV1: (<>
            I was tasked with developing both the hardware and firmware for the CubeSat. Once the mission objectives and system 
            requirements were clearly defined, I got to work. Since the satellite had to follow the 1U form factor required by the 
            competition, I proposed using a Heltec LoRa WiFi V2 as the core, as it integrates both an ESP32 MCU and a radio module 
            in a compact package. I then added a GY-87 IMU and barometric sensor, a NEO-6M GPS, and a simple power unit with a 
            step-up DC-DC converter and battery charger for in-field charging.
            <br/><br/>
            After assembling the circuit on a breadboard and validating each sensor interface, including the payload, I moved 
            on to the first prototype: CurieSat V1. I manufactured the PCBs using kiCAD and my CNC milling machine, and with the team's help, 
            assembled the satellite's internal structure for testing. Despite its crude appearance and some design flaws, 
            this first version was fully functional and helped uncover several hardware and operational issues before we 
            advanced to the next iteration.
        </>),
        curiesatV2: (<>
            The second version — currently used at ITACube — was manufactured through PCBWay, giving it a more professional look, 
            complete with custom artwork and sponsor logos. It also features a flexible strip antenna that can be positioned along 
            the inner walls of the casing, improving gain for ground-to-air transmissions.
            <br/><br/>
            In addition to helping design the boards, I developed the firmware using the ESP-IDF framework. I implemented watchdogs 
            and a FreeRTOS-based system with dedicated tasks for sensor data collection, telemetry transmission, and data logging, 
            significantly improving system robustness against sensor failures and runtime errors.
            <br/><br/>
            My final task was setting up a LoRa ground station. I used a simple setup: a Yagi directional antenna, another Heltec 
            LoRa WiFi V2 board, and a Python script running on a laptop. Binary packets received by the ESP32 were decoded into 
            JSON and sent over USB serial. A Python script on the computer processed this data to display measurements and calculate 
            the satellite's relative position and optimal antenna pointing direction.
        </>),
        finalTitle: "OBSat and Launch",
        final: (<>
            Near the end of the project, we participated in the regional stage of OBSAT, held at INATEL in Santa Rita do Sapucaí, Minas 
            Gerais. There, we presented our project and met teams from all over Brazil. It was an incredible learning opportunity — and 
            a lot of fun as well. Unfortunately, we finished in second place and couldn’t perform the official launch at the event.
            <br/><br/>
            But that wasn’t the end for our CurieSat! With support from ACA at IAE — an institute located on the same military base 
            as ITA — and help from Professor Tertuliano, we managed to launch our beloved CurieSat into the sky!
            <br/><br/>
            The results were outstanding! On its very first flight, CurieSat reached nearly 32 km in altitude, traveled more than 
            70 km, and maintained its telemetry link through most of the journey. We were also able to recover the satellite after 
            balloon burst and extract the full mission data from its SD card. A complete success!
        </>),
        aftermatch: "CurieSat will always be special...",
        end: (<>
            In the end, this satellite is one of the most rewarding projects I’ve worked on. It taught me a great deal about embedded 
            systems, radio telemetry, and board design. Be sure to check out the rest of the team: <A 
            c={c} href="https://www.linkedin.com/in/amaralb%C3%A1rbara/">Bárbara Amaral</A>, <A 
            c={c} href="https://www.linkedin.com/in/chrystian-jones-maia-campos-87783b208/">Chrystian Jones</A>, <A 
            c={c} href="https://www.linkedin.com/in/julia-fernandes-l-oliveira/">Julia Fernandes</A>, <A 
            c={c} href="https://www.linkedin.com/in/paulo-vinicius-ribeiro-silva-9a758a249/">Paulo Vinicius</A>, and <A 
            c={c} href="https://www.linkedin.com/in/joliver-kozlowski/">Joliver Koslowski</A>. They all did an outstanding job, 
            and their combined efforts are what made CurieSat what it is today.
            <br/><br/>
            I also co-authored some published papers about this plataform, check them out: <A 
            c={c} href="https://www.confea.org.br/midias/uploads-imce/contecc%202024/
            ELE/ARQUITETURA_DE_SOFTWARE_EMBARCADO_E_ENLACE_PARA_UM_CUBESAT_DE_
            LAN%C3%87AMENTO_VIA_BAL%C3%83O_ESTRATOSF%C3%89RICO.pdf">Arquitetura de Software Embarcado 
            de um Cubesat de Coleta de Dados de Radiação Ionizante Atmosférica</A>, <A 
            c={c} href="https://www.confea.org.br/midias/uploads-imce/contecc%202024/
            ELE/PROJETO_DE_HARDWARE_DE_UM_CUBESAT_PARA_LAN%C3%87AMENTO_VIA_
            BAL%C3%83O_ESTRATOSF%C3%89RICO.pdf">Projeto de Hardware e Isolamento de um Cubesat para Lançamento
            via Balão Estratosférico</A>, <A 
            c={c} href="https://sevenpublicacoes.com.br/editora/article/view/5516"> Stratospheric balloon platform 
            for experiments at altitudes up to 40 km.</A>
        </>),
      }:{  
        introTitle: 'Bem-vindo ao CurieSat',
        intro:  (<>
            Em 2023, a <A c={c} href="https://www.itacube.ita.br/">ITACube</A> se preparava para competir 
            na segunda edição da <A c={c} href="https://obsat.org.br/">Olimpíada Brasileira de Satélites – 
            OBSAT</A>. Embora a equipe já tivesse desenvolvido um projeto com o kit educacional recebido na primeira edição, 
            ainda não possuíamos uma plataforma própria. Foi então que nasceu o projeto Curie, com o objetivo de construir o 
            primeiro satélite totalmente desenvolvido pela ITACube.
            <br/><br/>
            Junto com outros três alunos — Bárbara Amaral, Julia Fernandes e Paulo Vinicius — e nosso mentor, Joliver 
            Kozlowski, começamos a definir a missão do satélite. Decidimos medir a radiação ionizante na atmosfera, tema abordado 
            em diversos artigos do departamento de física do ITA. Assim, o payload foi definido como um contador Geiger.
            <br/><br/>
            Sendo nosso primeiro satélite autoral, enfrentamos muitos desafios e aprendizados. Na fase presencial da competição, 
            conseguimos montar dois modelos totalmente funcionais. Infelizmente, ficamos em segundo lugar na fase regional da OBSAT 
            e não pudemos lançar o satélite no evento. No entanto, em abril de 2024, realizamos o <A 
            c={c} href="https://www.itacube.ita.br/index.php/curiesat-finalmente-faz-seu-primeiro-voo/">lançamento por balão</A> por conta própria, 
            atingindo todos os critérios de sucesso da missão. Como alguém que esteve profundamente envolvido no projeto, 
            CurieSat — ou “Curiezinho”, como gostamos de chamá-lo — ocupa um lugar especial no meu coração.)
        </>),
        curiesatV1: (<>
            Fiquei responsável pelo desenvolvimento do hardware e firmware do CubeSat. Assim que definimos os objetivos da missão 
            e os requisitos do sistema, iniciei os trabalhos. Como o formato exigido pela competição era 1U, propus utilizar a 
            Heltec LoRa WiFi V2 como base, pois integra um módulo de rádio e um microcontrolador ESP32 em uma placa compacta. Em 
            seguida, adicionei um sensor GY-87 (IMU e barômetro), um GPS NEO-6M e uma unidade de alimentação simples com conversor 
            DC-DC step-up e carregador de bateria para recarga em campo.
            <br/><br/>
            Após montar o circuito em protoboard e validar a comunicação com cada sensor, incluindo a carga útil, desenvolvi o 
            primeiro protótipo: o CurieSat V1. Fabriquei as PCBs na minha máquina CNC e, junto com a equipe, montamos a estrutura 
            interna do satélite para testes. Apesar de sua aparência rudimentar e alguns erros de projeto, essa primeira versão era 
            totalmente funcional e nos ajudou a identificar diversos problemas de hardware e operação antes de avançarmos para a 
            próxima iteração.
        </>),
        curiesatV2: (<>
            A segunda versão — atualmente usada na ITACube — foi fabricada através do serviço da PCBWay, conferindo ao projeto um visual 
            muito mais profissional, com artes personalizadas e logotipos dos patrocinadores. Ela também conta com uma antena flexível 
            tipo strip, que pode ser posicionada ao longo das paredes internas da carenagem, melhorando o ganho nas transmissões solo-ar.
            <br/><br/>
            Além de ajudar no design das placas, trabalhei no firmware da plataforma utilizando o framework ESP-IDF. Implementei watchdogs 
            e um sistema baseado em FreeRTOS, com tarefas dedicadas à coleta de dados dos sensores, envio de telemetria e armazenamento 
            local, o que tornou o sistema bem mais robusto contra falhas de sensores e erros em tempo de execução.
            <br/><br/>
            Minha última tarefa foi configurar uma estação terrestre para as transmissões via LoRa. Para isso, usei uma montagem 
            simples: uma antena direcional Yagi, outra placa Heltec LoRa WiFi V2 e um script Python rodando em um notebook. Os 
            pacotes binários recebidos pelo ESP32 eram decodificados em JSON e enviados via USB serial. No computador, um script 
            processava os dados para exibir as medições e calcular a posição relativa do satélite à estação terrestre, incluindo 
            a direção de apontamento da antena.
        </>),
        finalTitle: "OBSat e Lançamento",
        final: (<>
            Perto do fim do projeto, participamos da fase regional da OBSAT, realizada no INATEL, em Santa Rita do Sapucaí, Minas Gerais. 
            Lá, apresentamos nosso projeto e conhecemos equipes de várias partes do Brasil. Foi uma ótima oportunidade de aprendizado — e 
            também muito divertida. Infelizmente, ficamos em segundo lugar e não pudemos realizar o lançamento oficial no evento.
            <br/><br/>
            Mas essa não foi a última missão do nosso CurieSat! Com a ajuda do ACA, do IAE — instituto localizado na mesma base militar 
            que o ITA — e do professor Tertuliano, conseguimos lançar nosso querido CurieSat ao céu!
            <br/><br/>
            E os resultados foram impressionantes! Já no primeiro voo, o CurieSat alcançou quase 32 km de altitude, percorreu mais de 70 
            km e manteve o link de telemetria durante boa parte do trajeto. Além disso, conseguimos recuperar o satélite após o rompimento 
            do balão e extrair os dados detalhados da missão diretamente do cartão SD. Um sucesso total!
        </>),
        aftermatch: "CurieSat sempre será especial...",
        end: (<>
            No fim das contas, este satélite é um dos projetos mais gratificantes em que já trabalhei. Aprendi muito sobre sistemas 
            embarcados, telemetria por rádio e design de placas. Não deixe de conferir o trabalho do restante da equipe: <A 
            c={c} href="https://www.linkedin.com/in/amaralb%C3%A1rbara/">Bárbara Amaral</A>, <A 
            c={c} href="https://www.linkedin.com/in/chrystian-jones-maia-campos-87783b208/">Chrystian Jones</A>, <A 
            c={c} href="https://www.linkedin.com/in/julia-fernandes-l-oliveira/">Julia Fernandes</A>, <A 
            c={c} href="https://www.linkedin.com/in/paulo-vinicius-ribeiro-silva-9a758a249/">Paulo Vinicius</A>, and <A 
            c={c} href="https://www.linkedin.com/in/joliver-kozlowski/">Joliver Koslowski</A>. Todos fizeram um trabalho 
            incrível, e os esforços combinados deles deram vida ao nosso CurieSat como ele é hoje.
            <br/><br/>
            Eu também participei de alguns artigos publicados sobre essa plataforma: <A 
            c={c} href="https://www.confea.org.br/midias/uploads-imce/contecc%202024/
            ELE/ARQUITETURA_DE_SOFTWARE_EMBARCADO_E_ENLACE_PARA_UM_CUBESAT_DE_
            LAN%C3%87AMENTO_VIA_BAL%C3%83O_ESTRATOSF%C3%89RICO.pdf">Arquitetura de Software Embarcado 
            de um Cubesat de Coleta de Dados de Radiação Ionizante Atmosférica</A>, <A 
            c={c} href="https://www.confea.org.br/midias/uploads-imce/contecc%202024/
            ELE/PROJETO_DE_HARDWARE_DE_UM_CUBESAT_PARA_LAN%C3%87AMENTO_VIA_
            BAL%C3%83O_ESTRATOSF%C3%89RICO.pdf">Projeto de Hardware e Isolamento de um Cubesat para Lançamento
            via Balão Estratosférico</A>, <A 
            c={c} href="https://sevenpublicacoes.com.br/editora/article/view/5516"> Stratospheric balloon platform 
            for experiments at altitudes up to 40 km.</A>
        </>),
    })
})

export default function CuriesatPage() {
    const {lang} = useContext(LanguageContext)
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const lProps = projectLProps(lang, colors)
        
    const proj = projects.find(project => 
    project.title.toLowerCase() === 'curiesat')
    return(
    <>
        <PicHeader 
        cover = '7-2.webp' 
        title={proj.title}
        subtitle={proj.subtitle[lang]}
        tech={proj.tech}
        />
    
        {/* Details */}
        <Grid container spacing={4} mt='30px'>
            <Grid size={{xs:12, sm:12,md:12,lg:6}}
            alignContent='center'>
                <Box
                component="iframe"
                width="100%"
                src="https://www.youtube.com/embed/5uXqzX9373M?si=lVP3JQBIwUq-vy0r"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                sx={{ borderRadius: 2,
                    aspectRatio: '16 / 9',
                    borderColor: colors.grey[900]
                 }}
                />
            </Grid>
            <Grid size={{xs:12, sm:12,md:12,lg:6}}>
                <Typography variant="h2" gutterBottom>{lProps.introTitle}</Typography>
                <Typography variant='body2' textAlign='justify'>
                    {lProps.intro}
                </Typography>
            </Grid>
            <Grid size={{xs:12, sm:12,md:12,lg:6}}>
                <Typography variant="h2" textAlign='right' gutterBottom>CurieSat V1</Typography>
                <Typography variant='body2' textAlign='justify'>
                    {lProps.curiesatV1}
                </Typography>
            </Grid>
            <Grid size={{xs:12, sm:12,md:12,lg:6}}
            display='flex'
            justifyContent='center'
            alignItems='center'>
                <Box component='img' 
                alt='curiesatV1'
                src='/images/7-4.webp'
                width='61.03%'
                sx={{
                    borderRadius: '10px 0 0 10px',
                    borderLeft: '1.5px solid ' + colors.grey[900],
                    borderTop: '1.5px solid ' + colors.grey[900],
                    borderBottom: '1.5px solid ' + colors.grey[900],
                }}
                />
                <Box component='img' 
                alt='milling board'
                src='/images/7-5.webp'
                width='38.97%'
                sx={{
                    borderRadius: '0 10px 10px 0',
                    borderRight: '1.5px solid ' + colors.grey[900],
                    borderTop: '1.5px solid ' + colors.grey[900],
                    borderBottom: '1.5px solid ' + colors.grey[900],
                }}
                />
            </Grid>
            <Grid size={{xs:12, sm:12,md:12,lg:6}}
            alignContent='center'>
                <Box component='img' 
                alt='mission patch'
                src='/images/7-3.webp'
                width='50%'
                />
                <Box component='img' 
                alt='curiesatV2 exploded'
                src='/images/7-6.webp'
                width='50%'
                />
            </Grid>
            <Grid size={{xs:12, sm:12,md:12,lg:6}}>
                <Typography variant="h2" gutterBottom>CurieSat V2</Typography>
                <Typography variant='body2' textAlign='justify'>
                    {lProps.curiesatV2}
                </Typography>
            </Grid>
            <Grid size={{xs:12, sm:12,md:12,lg:6}}>
                <Typography variant="h2"  textAlign='right' gutterBottom>
                    {lProps.finalTitle}
                </Typography>
                <Typography variant='body2' textAlign='justify'>
                    {lProps.final}
                </Typography>
            </Grid>
            <Grid size={{xs:12, sm:12,md:12,lg:6}}
            alignContent='center'>
                <Box component='img' 
                alt='presenting at OBSAT'
                src='/images/7-7.webp'
                width='73.773%'
                sx={{
                    borderRadius: '10px 0 0 10px',
                    borderLeft: '1.5px solid ' + colors.grey[900],
                    borderTop: '1.5px solid ' + colors.grey[900],
                    borderBottom: '1.5px solid ' + colors.grey[900],
                }}
                />
                <Box component="video"
                autoPlay
                muted
                loop
                src='/videos/launchVid.mp4'
                width='26.227%'
                aria-label="Launching video"
                sx={{
                    borderRadius: '0 10px 10px 0',
                    borderRight: '1.5px solid ' + colors.grey[900],
                    borderTop: '1.5px solid ' + colors.grey[900],
                    borderBottom: '1.5px solid ' + colors.grey[900],
                }}
                />
            </Grid>
        </Grid>
        <Box display='flex' flexDirection='column' alignItems='center'>
            <Typography variant="h2" mt='30px' textAlign='center' gutterBottom>
                {lProps.aftermatch}
            </Typography>

            <Typography variant='body2' textAlign='justify' width='70%'>
                {lProps.end}
            </Typography>
        </Box>
    </>
    )
}
