import Hero from "@/components/Home";
import UpcomingFeatures from "@/components/UpcomingFeatures";
import WhyChoose from "@/components/WhyChoose";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <WhyChoose />
      <UpcomingFeatures />
    </div>
  );
}
