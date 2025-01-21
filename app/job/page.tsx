"use client";

import React, { useState } from "react";
import Link from "next/link";

const JobOffer = () => {
    const [selectedLanguage, setSelectedLanguage] = useState<string>("en");

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLang = event.target.value;
        setSelectedLanguage(selectedLang);
    };

    const languageLinks: { [key: string]: string } = {
        en: "/job",
        pl: "/job/pl",
        cz: "/job/cz",
    };

    return (
        <div className="bg-slate-100 text-gray-800 p-8 rounded-lg shadow-lg max-w-3xl mx-auto mt-10">
            <div className="bg-slate-200 p-4 rounded-2xl text-center mb-4">
                WhatsApp: +420 606 400 968 <br />
                Instagram: nerozza_modeling_agency
            </div>
            <div className="flex justify-end mb-4">
                <select
                    value={selectedLanguage}
                    onChange={handleLanguageChange}
                    className="p-2 rounded border border-gray-300 bg-white text-gray-800"
                >
                    <option value="en">English</option>
                    <option value="pl">Polski</option>
                    <option value="cz">Česky</option>
                </select>

                <Link
                    href={languageLinks[selectedLanguage]}
                    className="
           p-2 rounded border border-gray-300 bg-white text-gray-800
          "
                >
                    OK
                </Link>
            </div>



            <Link
                href="/contact"
                className="
          inline-flex h-12 animate-shimmer items-center justify-center 
          rounded-md border border-slate-400 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
          bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors
          focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2
          focus:ring-offset-slate-50
        "
            >
                Contact
            </Link>

            <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">
                Job Offer for OnlyFans Models
            </h1>
            <p className="text-lg text-center mb-6">
                <strong>Earn up to $25,000 per month!</strong>
            </p>
            <div className="space-y-6">
                <section>
                    <h2 className="text-xl font-semibold text-gray-700 mb-2">
                        What We Offer
                    </h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>
                            <span className="font-medium text-gray-800">
                                Earnings up to $25,000 per month
                            </span>{" "}
                            – with our strategy and support, your income will be at the
                            highest level.
                        </li>
                        <li>
                            <span className="font-medium text-gray-800">
                                Complete anonymity in your country
                            </span>{" "}
                            – your profile will only be visible in the USA.
                        </li>
                        <li>
                            <span className="font-medium text-gray-800">
                                Full profile management
                            </span>{" "}
                            – we handle social media, marketing strategy, and fan
                            communication so you can focus on creating content.
                        </li>
                        <li>
                            <span className="font-medium text-gray-800">
                                Professional support
                            </span>{" "}
                            – our team of experienced specialists will help you grow your
                            career safely and effectively.
                        </li>
                        <li>
                            <span className="font-medium text-gray-800">Flexibility</span> –
                            work whenever and however you want. We adapt to your preferences.
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-700 mb-2">
                        What We Expect
                    </h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>Commitment and openness to collaboration.</li>
                        <li>Creativity and willingness to engage with your fans.</li>
                        <li>Readiness to build your online presence.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-700 mb-2">
                        Why Work With Us?
                    </h2>
                    <p className="text-gray-600">
                        We are an experienced agency that takes care of every detail of your
                        career. From building your profile to promoting it and managing
                        daily tasks, we provide complete support. With us, you can succeed
                        without worrying about technicalities.
                    </p>
                </section>
            </div>

            <div className="mt-8 text-center">
                <p className="text-lg font-medium text-gray-800 mb-4">
                    Take the first step toward your dream career and start earning big
                    money with us!
                </p>
                <Link
                    href="/contact"
                    className="
            inline-flex h-12 animate-shimmer items-center justify-center 
            rounded-md border border-slate-400 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
            bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors
            focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2
            focus:ring-offset-slate-50
          "
                >
                    Contact
                </Link>

                <Link
                    href="/"
                    className="
            inline-flex h-12 animate-shimmer items-center justify-center 
            rounded-md border border-slate-400 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
            bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors
            focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2
            focus:ring-offset-slate-50
          "
                >
                    Home
                </Link>


            </div>


        </div>
    );
};

export default JobOffer;
