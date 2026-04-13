import { AboutMain } from "../layout/AboutMain";
import { HistoryMain } from "../layout/HistoryMain";
import { PostCardSection } from "../layout/PostcardSection";
import { WhyUs } from "../layout/WhyUs";

export function MainPage() {
    return (
        <main>
            <PostCardSection />
            <AboutMain />
            <HistoryMain />
            <WhyUs />
        </main>
    )
}