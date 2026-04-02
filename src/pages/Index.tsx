import FloatingPetals from "@/components/FloatingPetals";
import HeroSection from "@/components/HeroSection";
import VideoWall from "@/components/VideoWall";
import ReasonsSection from "@/components/ReasonsSection";
import MemoryGallery from "@/components/MemoryGallery";
import LoveLetter from "@/components/LoveLetter";
import ClosingSection from "@/components/ClosingSection";

const Index = () => {
  return (
    <div className="grain-overlay">
      <FloatingPetals />
      <HeroSection />
      <VideoWall />
      <ReasonsSection />
      <MemoryGallery />
      <LoveLetter />
      <ClosingSection />
    </div>
  );
};

export default Index;
