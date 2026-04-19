import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StudentsSection from "@/components/StudentsSection";
import GallerySection from "@/components/GallerySection";
import TestimonialSection from "@/components/TestimonialSection";
import TimelineSection from "@/components/TimelineSection";
import ContactSection from "@/components/ContactSection";
import MessagesSection from "@/components/MessagesSection";
import AudioPlayer from "@/components/AudioPlayer";

const Index = () => (
  <>
    <Header />
    <main>
      <HeroSection />
      <StudentsSection />
      <GallerySection />
      <TestimonialSection />
      <TimelineSection />
      <MessagesSection />
      <ContactSection />
    </main>
    <AudioPlayer />
  </>
);

export default Index;
