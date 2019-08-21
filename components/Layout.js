import Header from './Header';
import Head from 'next/head'
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from '../src/theme';

const withLayout = Page => {
    return () => (
        <MuiThemeProvider theme={theme}>
            <Head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
            </Head>

            <Header />
            <Page />
            <style jsx global>{`
              body {
              }
            `}</style>
        </MuiThemeProvider>
    )
};

export default withLayout;