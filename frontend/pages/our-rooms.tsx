import Head from "next/head";
import { Header } from "../src/components/layout/Header";
import { Footer} from "../src/components/layout/Footer";
import { MainRooms } from "../src/components/pages/MainRooms";


export default function OurRoomsPage() {
    return (
        <>
            <Head>
                <title>Наші номери</title>
            </Head>
            <Header stroke={true} />
            <MainRooms />
            <Footer />
        </>
    )
}