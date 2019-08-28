import Layout from '../../components/Layout'
import Link from 'next/link'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    topContainer: {
        height: '1000px',
        backgroundImage: 'url(/static/images/cards/interactive-bridge.jpg)'
    }
});


const Page = () => {
    const classes = useStyles();
    return (
    <>
    <Container maxWidth="md" className={classes.topContainer}>
        <Typography variant="h3" component="h1" style={{marginTop:'20px'}}>Odd City's <br/> Interactive Bridge</Typography>
        <Typography variant="h5" component="h2">There is a presence underfoot. </Typography>

    </Container>
    </>
    )
};

export default Layout(Page);