import Layout from '../components/Layout'
import Link from 'next/link'
import Grid from '@material-ui/core/Grid';
import SpheroProjectCard from '../components/SpheroProjectCard'

const Page = () => (
    <>
    <Grid container spacing={2}>
        <Grid item xs={12}>
            <Grid container justify="center">
                <SpheroProjectCard/>
            </Grid>
        </Grid>
    </Grid>
    </>
);

export default Layout(Page);