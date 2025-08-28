import {
  HeroSlider,
  TestimonialsBlock,
  PartnersBlock,
  ProjectsSectionSlider,
} from "@/components/organisms";
import { ServicesBlock } from "@/components/universal/ServicesBlock";
import { setRequestLocale } from "next-intl/server";

export default async function Home({
  params,
}: Readonly<{
  params: Promise<{ locale: "en" | "ua" | "pl" }>;
}>) {
  const { locale } = await params;
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
