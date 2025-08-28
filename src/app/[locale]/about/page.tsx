import "swiper/css";
import { CertificatesSlider } from "@/components/organisms/CertificatesSlider";
import { setRequestLocale } from "next-intl/server";
import { AboutPageSections } from "./AboutPageSections";

export default async function AboutPage({
  params,
}: Readonly<{
  params: Promise<{ locale: "en" | "ua" | "pl" }>;
}>) {
  const { locale } = await params;
  // Enable static rendering
  setRequestLocale(locale);

  return (
    <main className="">
      <AboutPageSections />
      <CertificatesSlider />
    </main>
  );
}
