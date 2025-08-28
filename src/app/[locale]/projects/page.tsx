import "swiper/css";
import { setRequestLocale } from "next-intl/server";
import { ProjectsPageSections } from "./ProjectsPageSections";

export default async function ProjectsPage({
  params,
}: Readonly<{
  params: Promise<{ locale: "en" | "ua" | "pl" }>;
}>) {
  const { locale } = await params;
  // Enable static rendering
  setRequestLocale(locale);

  return (
    <main className="">
      <ProjectsPageSections />
    </main>
  );
}
