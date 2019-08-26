import Layout from '../../components/Layout'
import Link from 'next/link'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

const Page = () => (
    <>
    <Container>
        <Typography variant="h3" component="h1" style={{marginTop:'20px'}}>"This is How We Roll" Portable Game Cabinet</Typography>
        <Typography variant="h5" component="h2">A full size arcade cabinet built to fit in a hatchback. Featuring dual X-Arcade trackballs.</Typography>

    </Container>

    <Container style={{marginTop: '20px'}}>
        <img src="/static/images/projects/game-cabinet/fusion360.jpg"/>
        <Typography variant="h6" component="h6">Design Goals</Typography>
        <Typography variant="p" component="p">I wanted to challeng myself to create a design that required no screws to set up and that could fit into my hatchback. <br/> Using Fusion 360, I was able to design my cuts so I could puzzle piece into a solid structure. </Typography>
    </Container>
    </>
);

export default Layout(Page);