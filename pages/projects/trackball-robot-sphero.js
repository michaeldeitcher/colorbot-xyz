import Layout from '../../components/Layout'
import Link from 'next/link'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import ReactPlayer from 'react-player'

const useStyles = makeStyles({
    sectionContainer: {
        marginTop: '20px'
    },
    imgContainer: {
        '& img, & p': {
            margin: 'auto',
            padding: '10px 0'
        }
    }
});


const Page = () => {
    const classes = useStyles();
    return (
    <>
    <Container maxWidth="md">
        <Typography variant="h3" component="h1" style={{marginTop:'20px'}}>Trackball Robot Sphero Installations</Typography>
        <Typography variant="h5" component="h2">Sphero is a Bluetooth 4.0 controlled robot ball. Controlling it using a old school arcade trackball was an interaction that needed to happen.</Typography>
    </Container>

    <Container className={classes.sectionContainer}>
        <Typography variant="h6" component="h6" className={classes.sectionContainer}></Typography>
        <Typography variant="body1" component="p">.</Typography>
        <Grid container>
            <Grid item xs={12} lg={5}>
                <Grid container className={classes.imgContainer}>
                    <img src="/static/images/projects/sphero/tateot.jpg"/>
                </Grid>
            </Grid>
            <Grid item xs={12} lg={7}>
                <Grid container className={classes.imgContainer}>
                    <Typography variant="body1" component="p">Roll over six bridges to make it to the Tower at the End of Time!</Typography>
                    <ReactPlayer url='https://vimeo.com/356282422' style={{margin: '10px auto', maxWidth: '90vw'}}/>
                    <Typography variant="body1" component="p">Emerge - ShowOff 5.0 - Time Travel - Science Fair and Talent Show</Typography>
                    <Typography variant="body1" component="p">April 9, 2016</Typography>
                </Grid>
            </Grid>
        </Grid>
    </Container>

    <Container className={classes.sectionContainer}>
        <Typography variant="h6" component="h6" className={classes.sectionContainer}></Typography>
        <Typography variant="body1" component="p">.</Typography>
        <Grid container>
            <Grid item xs={12} lg={5}>
                <Grid container className={classes.imgContainer}>
                    <img src="/static/images/projects/sphero/vol-run-sign.jpg"/>
                </Grid>
            </Grid>
            <Grid item xs={12} lg={7}>
                <Grid container className={classes.imgContainer}>
                    <Typography variant="body1" component="p">Teams race around two active volcanoes!</Typography>
                    <ReactPlayer url='https://vimeo.com/184030516' style={{margin: '10px auto', maxWidth: '90vw'}}/>
                    <Typography variant="body1" component="p">Danger Carnival - Dinosaur Jungle</Typography>
                    <Typography variant="body1" component="p">September 17, 2016</Typography>
                </Grid>
            </Grid>
        </Grid>
    </Container>
    </>
)};

export default Layout(Page);