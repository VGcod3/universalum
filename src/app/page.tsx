import { HeroSlider, ProjectsSection } from "@/components/organisms";
import { ServicesBlock } from "@/components/universal/ServicesBlock";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <HeroSlider />
      <ServicesBlock />
      <ProjectsSection />
    </main>
  );
}
