import type {AppProps} from 'next/app'
import GlobalStyle from "../components/globalstyles";
import Head from 'next/head';
import styled, {DefaultTheme, ThemeProvider} from "styled-components";
import User, {InitialUser} from '@/Typings/user';
import {createContext, useState} from 'react';

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

const content = "Unlock the full potential of your fitness journey with our innovative app. " +
    "Not only will it analyze your 3D pose to give you real-time feedback on your form and technique, " +
    "but it will also generate a customized workout plan tailored to your needs. Track your progress with our user states page, " +
    "featuring a body heat map and recovery percentages, and stay motivated with our built-in streak tracker. " +
    "Get in the best shape of your life with our cutting-edge technology and personalized approach to fitness."

export const UserContext = createContext({} as { user: User, setUser: any });

export default function App({Component, pageProps}: AppProps) {
    const [user, setUser] = useState<User>(InitialUser)

    return <ThemeProvider theme={theme}>
        <WebsiteInfo/>
        <Container>
            <UserContext.Provider value={{user, setUser}}>
                <Component {...pageProps} />
            </UserContext.Provider>
        </Container>
    </ThemeProvider>
}

const WebsiteInfo = () => {
    return <>
        <Head>
            <title>MoveMaster | Home</title>
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
  overflow-x: hidden;
`