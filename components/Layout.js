import Header from './Header';
import Head from 'next/head'
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from '../src/theme';

const withLayout = Page => {
    return () => (
        <MuiThemeProvider theme={theme}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <link rel="icon" type="image/png" sizes="64x64" href="/static/favicon/favicon-64x64.png"/>
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