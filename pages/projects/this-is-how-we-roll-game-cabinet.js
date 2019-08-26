import Layout from '../../components/Layout'
import Link from 'next/link'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Typography from '@material-ui/core/Typography'
import ReactPlayer from 'react-player'

const Page = () => (
    <>
    <Container>
        <Typography variant="h3" component="h1" style={{marginTop:'20px'}}>"This is How We Roll" Portable Game Cabinet</Typography>
        <Typography variant="h5" component="h2">A full size arcade cabinet built to fit in a hatchback. Featuring dual X-Arcade trackballs.</Typography>

    </Container>

    <Container style={{marginTop: '20px'}}>
        <Grid container>
            <Grid item xs={12} md={6}>
                <Grid container justify="center">
                    <img src="/static/images/projects/game-cabinet/fusion360.jpg"/>
                </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
                <Grid container justify="center">
                    <img src="/static/images/projects/game-cabinet/fusion360-2.jpg"/>
                </Grid>
            </Grid>
        </Grid>
        <Typography variant="h6" component="h6" style={{marginTop: '20px'}}>Design Goals</Typography>
        <Typography variant="body1" component="p">I wanted to challenge myself to create a design that required no screws to set up and that could fit into my hatchback. <br/> Using Fusion 360, I was able to design my cuts so I could puzzle piece into a solid structure. </Typography>
    </Container>

    <Container style={{marginTop: '20px'}}>
        <Grid container>
            <Grid item xs={12} md={6}>
                <Grid container justify="center">
                    <img src="/static/images/projects/game-cabinet/space-jelly.jpg"/>
                </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
                <Grid container justify="center">
                    <img src="/static/images/projects/game-cabinet/fits-in-hatch.jpg"/>
                </Grid>
            </Grid>
        </Grid>
    </Container>
    <Container>
        <Typography variant="h6" component="h6" style={{marginTop: '20px'}}>FUSE Makerspace</Typography>
        <Typography variant="body1" component="p">I took a two session Shotbot CNC class at FUSE Makerspace. We learned how to create a tool path using VCarve software and how to safely operate the Shopbot CNC router. Here is the Shopbot cutting out the sides of the cabinet.</Typography>
        <ReactPlayer url='https://vimeo.com/356059052' style={{marginTop: '10px'}}/>
    </Container>

    <Container>
        <Typography variant="h4" component="h4" style={{marginTop: '20px'}}>Game Titles</Typography>
        <Typography variant="body1" component="p">A number of cooperative and competitive games have been designed for the cabinet. Descriptions and video will be coming soon.</Typography>
        <List>
            <ListItem>This is How We Roll!</ListItem>
            <ListItem>Jack-o-Roll!</ListItem>
            <ListItem>Dr. Odds Voyage</ListItem>
            <ListItem>Space Jelly</ListItem>
            <ListItem>Snowflake Staircase</ListItem>
            <ListItem>Guardians of the Cave</ListItem>
            <ListItem>Journey to the Odd City Museum</ListItem>
        </List>
    </Container>
    </>
);

export default Layout(Page);