"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { AlignJustify, X } from "lucide-react";
import GoogleTranslate from '@/components/GoogleTranslate';
import Image from "next/image";
import Link from "next/link";
import DropDownMenu from "./drop-down-menu";
import i18n from "../i18n";
import "../i18n";
import { I18nextProvider } from "react-i18next";
import { useTranslation } from 'react-i18next';
import { Gb, Cz, De, Pl } from "react-flags-select";
import '../styles/globals.css';
import { t } from "i18next";

interface NavbarProps {
  scrollToWebsiteDesign: () => void;
  scrollToGraphicDesign: () => void;
  scrollToShopifyStores: () => void;
  scrollToBrands: () => void;
  scrollToServices: () => void; // Define scrollToServices function
}

const Navbar = ({
  scrollToWebsiteDesign,
  scrollToGraphicDesign,
  scrollToShopifyStores,
  scrollToBrands,
  scrollToServices, // Add scrollToServices to props
}: NavbarProps) => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  const toggleDropDown = () => {
    setIsDropDownVisible(!isDropDownVisible);
  }; 

  const closeDropDown = () => {
    setIsDropDownVisible(false);
  };

  return (
    <div>
      <div className="p-6 md:p-10 flex items-center justify-between z-50">
        <div>
          <Link className="cursor-pointer" href="/">
            <Image
              priority
              src="/logo/logo.svg"
              alt="Logo"
              width={100}
              height={100}
              className="w-10 h-10 md:w-14 md:h-14"
            />
          </Link>
        </div>
        <div
          className="cursor-pointer hidden 
            md:flex space-x-10 items-center
             text-slate-300 text-center 
             bg-clip-text text-transparent 
             bg-gradient-to-b from-neutral-50
              to bg-neutral-400 bg-opacity-50"
        >
          {/* <div onClick={scrollToWebsiteDesign} className="hover:text-gray-50">
            Website Design
          </div>
          <div onClick={scrollToGraphicDesign} className="hover:text-gray-50">
            Graphic Design
          </div>

          <div onClick={scrollToShopifyStores} className="hover:text-gray-50">
            Shopify Stores
          </div>
          <div onClick={scrollToBrands} className="hover:text-gray-50">
            Brands
          </div>

          <Link href="/pricing" className="hover:text-gray-50">
            Pricing
          </Link> */}
        </div>

        <div className="flex md:hidden">
          {isDropDownVisible ? (
            // display an x icon when the drop is visible
            <div
              onClick={toggleDropDown}
              className="w-8 h-8 text-slate-300 cursor-pointer"
            >
              <X />
              <DropDownMenu
                onClose={closeDropDown}
                scrollToServices={scrollToServices} // Pass scrollToServices
              />
            </div>
          ) : (
            <AlignJustify
              onClick={toggleDropDown}
              className="w-8 h-8 text-slate-300 cursor-pointer"
            />
          )}
        </div>
        <div>
            <div className="col-md-6 text-center">
              <div className="flags flex  cursor-pointer items-center">
                <div>
                  <div onClick={() => i18n.changeLanguage("en")} className="">
                    <Gb className="flag" />
                  </div>

                </div>
                <div>
                  <div onClick={() => i18n.changeLanguage("cz")} className="">
                    <Cz className="flag" />
                  </div>

                </div>
                {/* <div>
                  <div onClick={() => i18n.changeLanguage("de")} className="">
                    <De className="flag" />
                  </div>

                </div> */}
                <div>
                  <div onClick={() => i18n.changeLanguage("pl")} className="">
                    <Pl className="flag" />
                  </div>

                </div>
              </div>


            </div>
          </div>

        <div className="hidden md:flex">
        <Link
            href="/job"
            className="mr-2
            inline-flex h-12 animate-shimmer items-center justify-center 
            rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
            bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors
             focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2
              focus:ring-offset-slate-50

            "
          >
            {t('jo')}
          </Link>
          <Link
            href="/contact"
            className="
            inline-flex h-12 animate-shimmer items-center justify-center 
            rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
            bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors
             focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2
              focus:ring-offset-slate-50

            "
          >
            Contact
          </Link>
        </div>
       
      </div>
    </div>
  );
};

export default Navbar;
