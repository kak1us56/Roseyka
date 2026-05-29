import Head from "next/head";
import { Header } from "../src/components/layout/Header";
import { MainPage } from "../src/components/pages/MainPage";
import { Footer} from "../src/components/layout/Footer";


export default function HomePage() {
    return (
        <>
            <Head>
                <title>Росєйка</title>
            </Head>
            <Header stroke={false} />
            <MainPage />
            <Footer />
        </>
    )
}