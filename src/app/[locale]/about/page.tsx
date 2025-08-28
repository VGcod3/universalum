import "swiper/css";
import { CertificatesSlider } from "@/components/organisms/CertificatesSlider";
import { setRequestLocale } from "next-intl/server";
import { AboutPageSections } from "./AboutPageSections";

export default function AboutPage({
  params: { locale },
}: Readonly<{
  params: { locale: "en" | "ua" | "pl" };
}>) {
  // Enable static rendering
  setRequestLocale(locale);

  return (
    <main className="">
      <AboutPageSections />
      <CertificatesSlider />
    </main>
  );
}
