import {
  HeroSlider,
  TestimonialsBlock,
  PartnersBlock,
  ProjectsSectionSlider,
} from "@/components/organisms";
import { ServicesBlock } from "@/components/universal/ServicesBlock";
import { setRequestLocale } from "next-intl/server";

export default function Home({
  params: { locale },
}: Readonly<{
  params: { locale: "en" | "ua" | "pl" };
}>) {
  // Enable static rendering
  setRequestLocale(locale);

  return (
    <main className="flex flex-col items-center">
      <HeroSlider />
      <ServicesBlock />
      <ProjectsSectionSlider />
      <TestimonialsBlock />
      <PartnersBlock />
    </main>
  );
}
