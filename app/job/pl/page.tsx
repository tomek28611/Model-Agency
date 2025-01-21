"use client";

import React, { useState } from "react";
import Link from "next/link";

const JobOffer = () => {
    const [selectedLanguage, setSelectedLanguage] = useState<string>("pl");

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
        Oferta pracy dla modelki OnlyFans
      </h1>
      <p className="text-lg text-center mb-6">
        <strong>Zarabiaj nawet 50 000 zł miesięcznie!</strong>
      </p>
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Co oferujemy?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>
              <span className="font-medium text-gray-800">
                Zarobki nawet 100 000 zł miesięcznie
              </span>{" "}
              – dzięki naszej strategii i wsparciu Twoje zarobki będą na
              najwyższym poziomie.
            </li>
            <li>
              <span className="font-medium text-gray-800">
                Pełna anonimowość w Polsce
              </span>{" "}
              – Twój profil będzie widoczny wyłącznie w USA.
            </li>
            <li>
              <span className="font-medium text-gray-800">
                Kompleksowe zarządzanie Twoim profilem
              </span>{" "}
              – zajmujemy się prowadzeniem social mediów, strategią marketingową
              i komunikacją z fanami. Ty skupiasz się na tym, co najważniejsze.
            </li>
            <li>
              <span className="font-medium text-gray-800">
                Profesjonalna współpraca
              </span>{" "}
              – nasz zespół to doświadczeni specjaliści, którzy pomogą Ci
              rozwijać karierę w bezpieczny i efektywny sposób.
            </li>
            <li>
              <span className="font-medium text-gray-800">Elastyczność</span> –
              pracujesz, kiedy i jak chcesz. Wszystko dostosowujemy do Twoich
              preferencji.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Czego oczekujemy?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Zaangażowania i otwartości na współpracę.</li>
            <li>Kreatywności i chęci do tworzenia treści dla swoich fanów.</li>
            <li>Gotowości do budowania swojego wizerunku w internecie.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Dlaczego warto z nami pracować?
          </h2>
          <p className="text-gray-600">
            Jesteśmy agencją z wieloletnim doświadczeniem, która zadba o każdy
            szczegół Twojej kariery. Zapewniamy pełne wsparcie – od budowy
            profilu, przez promocję, aż po zarządzanie codziennymi zadaniami. Z
            nami osiągniesz sukces, nie martwiąc się o techniczne szczegóły.
          </p>
        </section>
      </div>

      <div className="mt-8 text-center">
        <p className="text-lg font-medium text-gray-800 mb-4">
          Zrób pierwszy krok do swojej kariery marzeń i zarabiaj z nami duże
          pieniądze!
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
