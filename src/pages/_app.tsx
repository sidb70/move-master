
import type {AppProps} from 'next/app'
import GlobalStyle from "../components/globalstyles";
import Head from 'next/head';
import styled, {DefaultTheme, ThemeProvider} from "styled-components";

const theme: DefaultTheme = {
    colors: {
        background: '#121E2A',
        negative: '#F26F63',
        positive: '#36D97D',
        warning: '#F2C063',
        accent: '#35AAF2',
    },
    text: {
        primary: 'white',
        highlight: "#0075e0",
        secondary: "#40a9ff"
    }
}

const content = "Website Description!"

export default function App({Component, pageProps}: AppProps) {
    return <ThemeProvider theme={theme}>
        <WebsiteInfo/>
        <Container>
            <Component {...pageProps} />
        </Container>
    </ThemeProvider>
}

const WebsiteInfo = () => {
    return <>
        <Head>
            <title>Move Master Tracker</title>
            <meta name="description" content={content}/>
            <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
            <link rel="shortcut icon" href="/images/favicon.ico"/>
            <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
        </Head>
        <GlobalStyle/>
    </>
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`
