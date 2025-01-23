'use client'

import { useState, useRef } from "react";
import Navbar from "@/components/navbar";
import SliderOne from "@/components/ui/slider";
import { Spotlight } from "@/components/ui/spotlight";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import WebsiteDesign from "./website-design";
import GraphicDesign from "./graphic-design";
import ShopifyStores from "./shopify-stores";
import Brands from "./brands";
import Services from "./services";
import FAQS from "./faq";
import { InfiniteMovingCardsDemo } from "./snippets/infinite-moving-card-snippet";
import i18n from "../i18n";
import "../i18n";
import { I18nextProvider } from "react-i18next";
import { useTranslation } from 'react-i18next';
import { Gb, Cz, De, Pl } from "react-flags-select";
import '../styles/globals.css';



export default function Home() {
  const { t, i18n } = useTranslation();
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  const websiteDesignRef = useRef<HTMLDivElement>(null);
  const graphicDesignRef = useRef<HTMLDivElement>(null);
  const shopifyStoresRef = useRef<HTMLDivElement>(null);
  const brandsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  const scrollToWebsiteDesign = () => {
    websiteDesignRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const scrollToGraphicDesign = () => {
    graphicDesignRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToShopifyStores = () => {
    shopifyStoresRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToBrands = () => {
    brandsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Function to scroll to Services section
  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <I18nextProvider i18n={i18n}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <title>Expert OnlyFans Management | Maximize Your Earnings </title>
          <meta name="description" content="Start earning big on OnlyFans with our expert management. We help you grow your fanbase, boost your earnings, and build your brand" />
          <link rel="cannonical" href="https://www.of-modelagency.pl/" />
          <link rel="apple-touch-icon" sizes="180x180" href="https://www.of-modelagency.pl/images/3.jpg" />
          <meta property="og:locale" content="en" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Start earning big on OnlyFans with our expert management. We help you grow your fanbase, boost your earnings, and build your brand" />
          <meta property="og:image" content="" />
          <meta property="og:image:alt" content="Start earning big on OnlyFans with our expert management. We help you grow your fanbase, boost your earnings, and build your brand" />
          <meta property="og:image:width" content="150" />
          <meta property="og:image:height" content="150" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:description" content="Start earning big on OnlyFans with our expert management. We help you grow your fanbase, boost your earnings, and build your brand" />
          <meta property="og:url" content="https://model-agency-mauve.vercel.app/" />
          <meta property="og:site_name" content="Expert OnlyFans Management" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Start earning big on OnlyFans with our expert management. We help you grow your fanbase, boost your earnings, and build your brand" />
          <meta name="twitter:image" content="https://www.of-modelagency.pl/images/3.jpg" />
          <meta name="twitter:image:alt" content="Start earning big on OnlyFans with our expert management. We help you grow your fanbase, boost your earnings, and build your brand"></meta>
          <meta name="twitter:description" content="Start earning big on OnlyFans with our expert management. We help you grow your fanbase, boost your earnings, and build your brand"></meta>

        </Head>
        <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">

          <Navbar
            scrollToWebsiteDesign={scrollToWebsiteDesign}
            scrollToGraphicDesign={scrollToGraphicDesign}
            scrollToShopifyStores={scrollToShopifyStores}
            scrollToBrands={scrollToBrands}
            scrollToServices={scrollToServices}
          />


          <Spotlight className="hidden md:flex md:-top-80 left-80  " fill="white" />
          <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
            <div className="text-4xl pb-5 md:text-7xl px-6 text-center  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">

              {t('findgirl')} <br /> {t('b2')}
            </div>
            <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto px-4">
              {t('b3')}
            </p>

            <Link
              href={"/contact"}
              className="cursor-pointer flex items-center justify-center border rounded-full w-48 p-2  mx-auto my-6 text-white "
            >
              {t('bk')}
            </Link>

            <div className="w-full pt-20">
              <SliderOne />
            </div>
            <div ref={websiteDesignRef}>
              <WebsiteDesign />
            </div>
            <div ref={graphicDesignRef}>
              <GraphicDesign />
            </div>
            <div ref={shopifyStoresRef}>
              <ShopifyStores />
            </div>
            {/* <div ref={brandsRef}>
          <Brands />
        </div> */}
            {/* <div id ='services'>
        <Services />
        </div> */}
            <InfiniteMovingCardsDemo />
            <FAQS />
          </div>
        </div>
      </I18nextProvider>

    </div>
  );
}
