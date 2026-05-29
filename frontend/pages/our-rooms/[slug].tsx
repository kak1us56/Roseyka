import Head from "next/head";
import { Header } from "../../src/components/layout/Header";
import { Footer} from "../../src/components/layout/Footer";
import { RoomPageType } from "../../src/types/room";
import { loadRooms } from "../../src/api/rooms";
import { MainRoom } from "../../src/components/pages/MainRoom";


export default function RoomPage({ room }: { room: RoomPageType | null }) {
    return (
        <>
            <Head>
                <title>{room?.title}</title>
            </Head>
            <Header stroke={true} />
            <MainRoom room={room} />
            <Footer />
        </>
    )
}

export async function getServerSideProps(context: any) {
    const { slug } = context.params;

    try {
        const room = await loadRooms.getRoom(slug);

        return {
            props: { room },
        };
    } catch (e) {
        console.error(`Error for id ${slug}:`, e);
        return {
            notFound: true
        };
    }
}
