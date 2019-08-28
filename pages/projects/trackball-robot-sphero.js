import Layout from '../../components/Layout'
import Link from 'next/link'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles';
import ReactPlayer from 'react-player'

const styles = theme => ({
    sectionContainer: {
        marginTop: '20px'
    },
    imgContainer: {
        '& img, & p': {
            margin: 'auto',
            padding: '10px 0',
            [theme.breakpoints.down('md')]: {
                maxWidth: '90vw'
            },
        }
    }
});


const Page = (props) => {
    const { classes } = props;
    return (
    <>
    <Container maxWidth="md">
        <Typography variant="h3" component="h1" style={{marginTop:'20px'}}>Trackball Robot Sphero Installations</Typography>
        <Typography variant="h5" component="h2">Sphero is a Bluetooth 4.0 controlled robot ball. Controlling it using a old school arcade trackball was an interaction that needed to happen.</Typography>
    </Container>

    <Container className={classes.sectionContainer}>
        <Typography variant="h4" component="h6" className={classes.sectionContainer}>Project: Tower at the End of Time</Typography>
        <Typography variant="body1" component="p">Roll over six bridges to make it to the Tower at the End of Time!</Typography>
        <Typography variant="h5" component="body1">Emerge - ShowOff 5.0 - Time Travel - Science Fair and Talent Show - April 9, 2016</Typography>
        <Grid container>
            <Grid item xs={12} lg={5}>
                <Grid container className={classes.imgContainer}>
                    <img src="/static/images/projects/sphero/tateot.jpg"/>
                </Grid>
            </Grid>
            <Grid item xs={12} lg={7}>
                <Grid container className={classes.imgContainer}>
                    <ReactPlayer url='https://vimeo.com/356282422' style={{margin: '10px auto', maxWidth: '90vw'}}/>
                </Grid>
            </Grid>
        </Grid>
    </Container>

    <Container className={classes.sectionContainer}>
        <Typography variant="h4" component="h6" className={classes.sectionContainer}>Project: Volcano Run!</Typography>
        <Typography variant="body1" component="p">Teams race around two active volcanoes!</Typography>
        <Typography variant="h5" component="body1">Danger Carnival - Dinosaur Jungle - September 17, 2016</Typography>

        <Grid container>
            <Grid item xs={12} lg={5}>
                <Grid container className={classes.imgContainer}>
                    <img src="/static/images/projects/sphero/vol-run-sign.jpg"/>
                </Grid>
            </Grid>
            <Grid item xs={12} lg={7}>
                <Grid container className={classes.imgContainer}>
                    <ReactPlayer url='https://vimeo.com/184030516' style={{margin: '10px auto', maxWidth: '90vw'}}/>
                </Grid>
            </Grid>
        </Grid>
    </Container>

    <Container className={classes.sectionContainer}>
        <Typography variant="h4" component="h6" className={classes.sectionContainer}>Project: Rollerbox • Bump!</Typography>
        <Typography variant="body1" component="p">Play offense. Roll over active goal buttons to score.</Typography>
        <Typography variant="body1" component="p">Play defense. Keep your opponent from scoring.</Typography>

        <Grid container>
            <Grid item xs={12} lg={5}>
                <Grid container className={classes.imgContainer}>
                    <img src="/static/images/projects/sphero/rollerbox.jpg"/>
                </Grid>
            </Grid>
            <Grid item xs={12} lg={7}>
                <Grid container className={classes.imgContainer}>
                    <ReactPlayer url='https://vimeo.com/234761658' style={{margin: '10px auto', maxWidth: '90vw'}}/>
                </Grid>
            </Grid>
        </Grid>
    </Container>
    </>
)};

export default Layout(withStyles(styles)(Page));