/* eslint-disable @next/next/no-img-element */
import { setRequestLocale } from "next-intl/server";
import { ProjectDetailSections } from "./ProjectDetailSections";

import "swiper/css";

export default function ProjectDetailPage({
  params: { locale },
}: Readonly<{
  params: { locale: "en" | "ua" | "pl" };
}>) {
  // Enable static rendering
  setRequestLocale(locale);

  return (
    <main className="">
      <ProjectDetailSections />
    </main>
  );
}
