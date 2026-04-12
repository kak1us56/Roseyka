import { AboutMain } from "../layout/AboutMain";
import { HistoryMain } from "../layout/HistoryMain";
import { PostCardSection } from "../layout/PostcardSection";

export function MainPage() {
    return (
        <main>
            <PostCardSection />
            <AboutMain />
            <HistoryMain />
        </main>
    )
}