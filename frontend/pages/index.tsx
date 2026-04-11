import Head from "next/head";
import { Header } from "../src/components/layout/Header";


export default function HomePage() {
    return (
        <>
            <Head>
                <title>Росєйка</title>
            </Head>
            <Header />
        </>
    )
}