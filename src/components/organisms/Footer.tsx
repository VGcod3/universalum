/* eslint-disable @next/next/no-img-element */
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export const FooterBlock = () => {
  const t = useTranslations();
  return (
    <footer className="bg-primary-dark w-full">
      <div className="container mx-auto text-center grid grid-cols-8 lg:grid-cols-12 px-4 md:px-0 pt-16 gap-4 h-full text-grayscale-white">
        <div className="lg:col-span-4 col-span-full flex flex-col md:flex-row lg:flex-col gap-7 lg:gap-4">
          <div className="flex w-full max-w-60 items-start">
            <img
              src="/logo/Universalum.png"
              alt="Universalum Logo"
              className=" object-contain max-w-30"
            />
            <img
              src="/logo/TGD.png"
              alt="TGD Logo"
              className=" object-contain max-w-30"
            />
          </div>
          <h5 className="md:text-headline-5 text-subtitle-1 text-left">
            {t("footer.description")}
          </h5>
        </div>
        <div className="col-span-full md:col-span-2 h-full flex flex-col gap-6 items-start">
          <h3 className="text-headline-5 md:text-headline-3">
            {t("common.menu")}
          </h3>
          <ul className="list-none flex flex-col gap-2 md:gap-3 text-left text-subtitle-1 md:text-heading-6">
            <li>
              <Link href="/">{t("navigation.home")}</Link>
            </li>
            <li>
              <Link href="/about">{t("navigation.about")}</Link>
            </li>
            <li>
              <Link href="/projects">{t("navigation.projects")}</Link>
            </li>
            <li>
              <Link href="/services">{t("navigation.services")}</Link>
            </li>
            <li>
              <Link href="/about#certificates">{t("common.certificates")}</Link>
            </li>
          </ul>
        </div>
        <div className=" col-span-full md:col-span-4 h-full flex flex-col gap-6 items-start text-left">
          <h3 className="text-headline-5 md:text-headline-3">
            {t("common.address")}
          </h3>
          <h6 className="text-subtitle-2 md:text-headline-6">
            {t("footer.actualAddress")}
            <br />
            {t("footer.actualAddressValue")}
          </h6>
          <h6 className="text-subtitle-2 md:text-headline-6">
            {t("footer.legalAddress")}
            <br />
            {t("footer.legalAddressValue")}{" "}
          </h6>
        </div>
        <div className="col-span-full md:col-span-2 h-full gap-6 flex flex-col text-left">
          <h3 className="text-headline-5 md:text-headline-3">
            {t("common.contacts")}
          </h3>
          <div className="flex flex-col items-start gap-4">
            <h6 className="text-subtitle-2 md:text-headline-6">
              <a href="tel:+380934634946" className="hover:underline">
                +38 (093) 463-49-46
              </a>
            </h6>
            <h6 className="text-subtitle-2 md:text-headline-6">
              <a href="tel:+380501330506" className="hover:underline">
                +38 (050) 133-05-06
              </a>
            </h6>
            <h6 className="text-subtitle-2 md:text-headline-6">
              <a href="mailto:universalum@ukr.net" className="hover:underline">
                universalum@ukr.net
              </a>
            </h6>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/share/1AtZtnT29v/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <img
                  src="/socials/facebook.svg"
                  alt="Facebook"
                  className="w-10 h-10"
                />
              </a>
              <a
                href="https://wa.me/380934634946"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <img
                  src="/socials/whatsapp.svg"
                  alt="WhatsApp"
                  className="w-10 h-10"
                />
              </a>
              <a
                href="https://www.instagram.com/tov_universalum?igsh=MTNlcmhpYzJmZHpnOQ=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <img
                  src="/socials/instagram.svg"
                  alt="Instagram"
                  className="w-10 h-10"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full container mx-auto px-4 md:px-0 border-t border-t-grayscale-white py-6 mt-4">
        <p className="body-2 md:body-1 text-center md:text-left text-grayscale-white">
          {t("common.allRightsReserved")}
        </p>
      </div>
    </footer>
  );
};
