import { setRequestLocale } from "next-intl/server";
import { ProjectDetailSections } from "./ProjectDetailSections";

import "swiper/css";

export default async function ProjectDetailPage({
  params,
}: Readonly<{
  params: Promise<{ locale: "en" | "ua" | "pl"; id: string }>;
}>) {
  const { locale } = await params;
  // Enable static rendering
  setRequestLocale(locale);

  return (
    <main className="">
      <ProjectDetailSections />
    </main>
  );
}
