import { cn } from "@/lib/utils";
import Image from "next/image";
import { useTranslations } from "next-intl";

const partnerImages = [
  {
    path: "/partners/partner1.png",
    width: 160,
    height: 160,
  },
  {
    path: "/partners/partner2.png",
    width: 160,
    height: 160,
  },
  {
    path: "/partners/partner3.png",
    width: 106,
    height: 106,
  },
  {
    path: "/partners/partner4.png",
    width: 106,
    height: 106,
  },
  {
    path: "/partners/partner5.png",
    width: 106,
    height: 106,
  },
  {
    path: "/partners/partner6.png",
    width: 133,
    height: 49,
  },
  {
    path: "/partners/partner7.png",
    width: 133,
    height: 45,
  },
  {
    path: "/partners/partner8.png",
    width: 160,
    height: 50,
  },
  {
    path: "/partners/partner9.png",
    width: 160,
    height: 83,
  },
  {
    path: "/partners/partner10.png",
    width: 133,
    height: 37,
  },
  {
    path: "/partners/partner11.png",
    width: 160,
    height: 72,
  },
  {
    path: "/partners/partner12.png",
    width: 160,
    height: 80,
  },
];

export const PartnersBlock = () => {
  const t = useTranslations();
  return (
    <div className="py-15 w-full px-3 md:px-0">
      <div className="container mx-auto w-full flex flex-col gap-10">
        <div className="flex flex-col gap-2 md:gap-4">
          <div className="flex gap-1 items-center">
            <div className="h-3 w-3 rounded-full bg-accent-orange" />
            <p className="text-body-2 md:text-body-1 text-grayscale-black">
              {t("common.ourPartners")}
            </p>
          </div>
          <h2 className="text-headline-4 md:text-headline-3 lg:text-headline-3 max-w-3xl lg:max-w-4xl">
            {t("common.partnersDescription")}
          </h2>
        </div>
        <div className="grid grid-cols-4 ">
          {partnerImages.map((image, index) => (
            <div
              key={index}
              className={cn(
                "sm:col-span-2 md:col-span-1 col-span-full h-40 flex justify-center items-center w-full",
                index % 4 !== 0 &&
                  "md:border-l-grayscale-gray2 md:border-l-[0.67px]",
                index < 8 && "md:border-b-grayscale-gray2 md:border-b-[0.67px]"
              )}
            >
              <Image
                width={image.width}
                height={image.height}
                src={image.path}
                alt="Partner"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
