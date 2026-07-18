import Banner from "@/components/Banner";
import FeaturedJobs from "@/components/Featured";
import StatsSection from "@/components/StatsSection";

export default function Home() {
  return (
    <div>
      <Banner/>
      <StatsSection/>
      <FeaturedJobs/>
    </div>
  );
}
