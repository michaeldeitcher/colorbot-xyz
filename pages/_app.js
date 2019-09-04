import React from 'react';
import App from 'next/app';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'

class MyApp extends App {
    componentDidMount() {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }

    render() {
        const { Component, pageProps, reduxStore } = this.props;
        return (
            <Provider store={reduxStore}>
                <ThemeProvider theme={theme(reduxStore.getState().muiThemeType)}>
                    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                    <CssBaseline />
                    <Component {...pageProps} />
                </ThemeProvider>
            </Provider>
        );
    }
}

export default withReduxStore(MyApp);
