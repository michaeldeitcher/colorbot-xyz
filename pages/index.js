import Layout from '../components/Layout'
import Link from 'next/link'
import Grid from '@material-ui/core/Grid';
import ProjectCard from '../components/ProjectCard'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { NextSeo } from 'next-seo';

const Page = () => (
    <>
    <NextSeo
        title="Colorbot.xyz / Michael Deitcher's Projects"
        description=""
    />

    <Container maxWidth="md">
        <Typography variant="h3" component="h1" style={{marginTop:'20px'}}>Hi I'm Michael.</Typography>
        <Typography variant="h5" component="h2">I am an artist/maker/programmer who enjoys creating and sharing interactive experiences. I'm working on documenting these projects. It's a work in progress.</Typography>

    </Container>

    <Grid container>
        <Grid item xs={12}>
            <Grid container justify="center">
                <ProjectCard title="The Odd City's Interactive Bridge"
                             blurb="Interactive bridge with animated lighting and sound synthesis."
                             cardImageSrc="/static/images/cards/interactive-bridge.jpg"
                             cardImageTitle="Interactive Bridge"
                             href="/projects/odd-city-interactive-bridge"
                />

                <ProjectCard title='The "This Is How We Roll" portable game cabinet'
                             blurb="A popup game cabinet with dual trackballs."
                             cardImageSrc="/static/images/cards/game-cabinet.jpg"
                             cardImageTitle="This is How We Roll"
                             href="/projects/this-is-how-we-roll-game-cabinet"
                />


                <ProjectCard title="Trackball Robot Installations"
                             blurb="A series of popup interactive installations I created with Sphero robots with custom trackball controllers."
                             cardImageSrc="/static/images/cards/sphero.jpg"
                             cardImageTitle="Trackball Robot"
                             href="/projects/trackball-robot-sphero"
                />
            </Grid>
        </Grid>
    </Grid>
    </>
);

export default Layout(Page);