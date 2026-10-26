import Banner from "@/components/Home/Banner";
import ReadyToStart from "@/components/Home/ReadyToStart";
import Testimonials from "@/components/Home/Testimonials";
import WhyChoose from "@/components/Home/WhyChoose";

export default function Home() {
  return (
    <>
      <main className="flex flex-1 flex-col">
        <Banner />
        <WhyChoose />
        <Testimonials />
        <ReadyToStart />
      </main>
    </>
  );
}
