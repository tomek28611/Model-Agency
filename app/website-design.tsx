'use client'

import Image from "next/image"
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { PiAppStoreLogo, PiHeadsetFill, PiLock, PiMegaphone, PiMonitor, PiStorefront } from "react-icons/pi";
import { Ri24HoursLine } from "react-icons/ri";
import { MdContentPaste } from "react-icons/md";
import { GiLovers } from "react-icons/gi";
import { GrUserExpert } from "react-icons/gr";
import { IoCashOutline } from "react-icons/io5";
import i18n from "../i18n";
import "../i18n";
import { I18nextProvider } from "react-i18next";
import { useTranslation } from 'react-i18next';
import { Gb, Cz, De, Pl } from "react-flags-select";
import '../styles/globals.css';


export const projects = [
    {
        icon: <div className="bg-blue-100 p-4 rounded-full"><Ri24HoursLine  className="w-8 h-8 text-blue-600" /></div>,
        title: "24/7 Earn while you sleep!",
        description:
            " With us, you can make money 24/7 without having to be online all the time. Relax and watch your profits grow",

    },
    {
        icon: <div className="bg-blue-100 p-4 rounded-full"><MdContentPaste  className="w-8 h-8 text-blue-600" /></div>,
        title: "Empowering your content creation.",
        description:
            " Our team, backed by years of marketing and management experience, guarantees exponential growth and lasting popularity for your brand",

    },
    {
        icon: <div className="bg-blue-100 p-4 rounded-full"><GiLovers  className="w-8 h-8 text-blue-600" /></div>,
        title: "Always with you.",
        description:
            " You're part of the family, and we're here to support you every step of the way!",

    },
    {
        icon: <div className="bg-blue-100 p-4 rounded-full"><PiMegaphone className="w-8 h-8 text-blue-600" /></div>,
        title: "With years of industry experience",
        description:
            "We provide strategies that accelerate your success. Thanks to our expertise and support, we'll help you earn far more than you ever thought possible",

    },
    {
        icon: <div className="bg-blue-100 p-4 rounded-full"><GrUserExpert className="w-8 h-8 text-blue-600" /></div>,
        title: "With our expertise in marketing and management",
        description:
            "we'll help you maximize your earnings on OnlyFans. Our proven methods will ensure your income grows every single day.",

    },
    {
        icon: <div className="bg-blue-100 p-4 rounded-full"><IoCashOutline className="w-8 h-8 text-blue-600" /></div>,
        title: "Want to make real money? ",
        description:
            "We provide you with the tools, guidance, and strategies to turn your content into a steady stream of high earnings.",

    },
];

const WebsiteDesign = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className="text-white">
            <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
                <div className="text-4xl  md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50">
                   {t('bs1')} <br /> {t('bs2')}
                </div>
                <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto px-4">
                {t('b3')}
                </p>
            </div>

            <div className="max-w-5xl mx-auto px-8">
                <HoverEffect items={projects} />
            </div>

            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-10">
                <div className="grid gap-4">
                    <div>
                        <Image
                            width={500}
                            height={500}
                            priority
                            className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="" />
                    </div>
                    <div>
                        <Image
                            width={500}
                            height={500}
                            priority
                            className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="" />
                    </div>
                    <div>
                        <Image
                            width={500}
                            height={500}
                            priority
                            className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <Image
                            width={500}
                            height={500}
                            priority
                            className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" />
                    </div>
                    <div>
                        <Image
                            width={500}
                            height={500}
                            priority
                            className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="" />
                    </div>
                    <div>
                        <Image
                            width={500}
                            height={500}
                            priority
                            className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <Image
                            width={500}
                            height={500}
                            priority
                            className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="" />
                    </div>
                    <div>
                        <Image
                            width={500}
                            height={500}
                            priority
                            className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="" />
                    </div>
                    <div>
                        <Image
                            width={500}
                            height={500}
                            priority
                            className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <Image
                            width={500}
                            height={500}
                            priority
                            className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="" />
                    </div>
                    <div>
                        <Image
                            width={500}
                            height={500}
                            priority
                            className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="" />
                    </div>
                    <div>
                        <Image
                            width={500}
                            height={500}
                            priority
                            className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="" />
                    </div>
                </div>
            </div> */}
        </div>);
}

export default WebsiteDesign;