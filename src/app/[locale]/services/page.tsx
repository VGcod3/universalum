import { setRequestLocale } from "next-intl/server";
import { ServicesPageSections } from "./ServicesPageSections";

export default function ServicesPage({
  params: { locale },
}: Readonly<{
  params: { locale: "en" | "ua" | "pl" };
}>) {
  // Enable static rendering
  setRequestLocale(locale);

  return (
    <main className="">
      <ServicesPageSections />
    </main>
  );
}
