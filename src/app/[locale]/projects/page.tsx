import "swiper/css";
import { setRequestLocale } from "next-intl/server";
import { ProjectsPageSections } from "./ProjectsPageSections";

export default function ProjectsPage({
  params: { locale },
}: Readonly<{
  params: { locale: "en" | "ua" | "pl" };
}>) {
  // Enable static rendering
  setRequestLocale(locale);

  return (
    <main className="">
      <ProjectsPageSections />
    </main>
  );
}
