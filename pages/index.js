import Layout from '../components/Layout'
import Link from 'next/link'
import Grid from '@material-ui/core/Grid';
import ProjectCard from '../components/ProjectCard'

const Page = () => (
    <>
    <Grid container>
        <Grid item xs={12}>
            <Grid container justify="center">
                <ProjectCard title="The Odd City's Interactive Bridge"
                             blurb="Interactive bridge with animated lighting and sound synthesis."
                             cardImageSrc="/static/images/cards/interactive-bridge.jpeg"
                             cardImageTitle="Interactive Bridge"
                />

                <ProjectCard title='The "This Is How We Roll" portable game cabinet'
                             blurb="A popup game cabinet with dual trackballs."
                             cardImageSrc="/static/images/cards/game-cabinet.jpeg"
                             cardImageTitle="This is How We Roll"
                />


                <ProjectCard title="Trackball Robot Installations"
                             blurb="A series of popup interactive installations I created with Sphero robots with custom trackball controllers."
                             cardImageSrc="/static/images/cards/sphero.jpg"
                             cardImageTitle="Trackball Robot"
                />
            </Grid>
        </Grid>
    </Grid>
    </>
);

export default Layout(Page);