import { setRequestLocale } from "next-intl/server";
import { ServicesPageSections } from "./ServicesPageSections";

export default async function ServicesPage({
  params,
}: Readonly<{
  params: Promise<{ locale: "en" | "ua" | "pl" }>;
}>) {
  const { locale } = await params;
  // Enable static rendering
  setRequestLocale(locale);

  return (
    <main className="">
      <ServicesPageSections />
    </main>
  );
}
