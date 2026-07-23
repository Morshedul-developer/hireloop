import Banner from "@/components/Banner";
import FeaturedJobs from "@/components/Featured";
import StatsSection from "@/components/StatsSection";
import PopularSection from "@/components/Popular";

export default function Home() {
  return (
    <div>
      <Banner/>
      <StatsSection/>
      <FeaturedJobs/>
      <PopularSection/>
    </div>
  );
}
