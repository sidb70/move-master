import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import Head from 'next/head'

export default function App({Component, pageProps}: AppProps) {

    return <>
        <WebsiteInfo/>
        <Component {...pageProps} />
    </>
}


const WebsiteInfo = () => {
    const description = "Page Description here for MoveMaster HomePage"

    return <Head>
        <title>MoveMaster | Home</title>
        <meta name="description" content={description}/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
    </Head>
}