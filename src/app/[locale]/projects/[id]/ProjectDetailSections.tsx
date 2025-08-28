/* eslint-disable @next/next/no-img-element */
"use client";

import { ProjectGallery } from "@/components/organisms/ProjectsGallery";
import { useTranslations } from "next-intl";

export const ProjectDetailSections = () => {
  const t = useTranslations();

  return (
    <>
      <HeaderSection t={t} />
    </>
  );
};

const HeaderSection = ({ t }: { t: ReturnType<typeof useTranslations> }) => {
  return (
    <>
      <img
        src="/photo/Hero4.jpg"
        alt="Projects"
        className="object-cover object-center w-full h-[23rem] md:h-[35rem] lg:h-[40rem]"
      />
      <section className="container mx-auto mt-10 mb-10 md:mb-15 flex flex-col gap-6 md:gap-10 px-4 md:px-0 text-grayscale-black">
        <h1 className="text-headline-5 md:text-headline-3">
          {t("pages.projects.detail.title")}
        </h1>
        <div className="flex flex-col gap-3">
          <h6 className="text-body-1 md:text-headline-6">
            {t("pages.projects.detail.description1")}
          </h6>
          <h6 className="text-body-1 md:text-headline-6">
            {t("pages.projects.detail.description2")}
          </h6>
        </div>
        <div className="flex gap-2">
          <img src="/icons/MapPin.svg" alt="Pin" className="h-8 w-8" />
          <p className="text-subtitle-1 md:text-headline-5">
            {t("pages.projects.detail.location")}
          </p>
        </div>
      </section>
      <ProjectGallery />
    </>
  );
};
