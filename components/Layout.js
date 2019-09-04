import React, { useEffect } from "react";
import Header from './Header';
import Head from 'next/head'
import { initGA, logPageView } from '../lib/analytics'
import Container from '@material-ui/core/Container'

const withLayout = Page => {
    return () => {
        useEffect(() => {
            if (!window.GA_INITIALIZED) {
                initGA();
                window.GA_INITIALIZED = true;
            }
            logPageView();
        });
        return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <link rel="icon" type="image/png" sizes="64x64" href="/static/favicon/favicon-64x64.png"/>
            </Head>

            <Header />
            <div style={{minHeight: '80vh', maxWidth: '100vw', overflow: 'hidden'}}>
                <Page />
            </div>
            <Container style={{textAlign: 'center', height: '60px'}}>
                © 2019 Colorbot.xyz, all rights reserved.
            </Container>
            <style jsx global>{`
              body {
              }
            `}</style>
        </>
    )}
};

export default withLayout;