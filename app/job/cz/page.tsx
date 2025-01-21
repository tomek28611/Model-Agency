"use client";

import React, { useState } from "react";
import Link from "next/link";

const JobOffer = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("cz");

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
        Nabídka práce pro modelky OnlyFans
      </h1>
      <p className="text-lg text-center mb-6">
        <strong>Vydělejte až 250 000 Kč měsíčně!</strong>
      </p>
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Co nabízíme?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>
              <span className="font-medium text-gray-800">
                Výdělky až 250 000 Kč měsíčně
              </span>{" "}
              – díky naší strategii a podpoře můžete dosáhnout maximálních
              příjmů.
            </li>
            <li>
              <span className="font-medium text-gray-800">
                Úplná anonymita v Česku
              </span>{" "}
              – váš profil bude viditelný pouze v USA.
            </li>
            <li>
              <span className="font-medium text-gray-800">
                Kompletní správa vašeho profilu
              </span>{" "}
              – postaráme se o sociální sítě, marketingovou strategii i
              komunikaci s fanoušky. Vy se můžete soustředit jen na tvorbu
              obsahu.
            </li>
            <li>
              <span className="font-medium text-gray-800">
                Profesionální podpora
              </span>{" "}
              – náš tým zkušených specialistů vám pomůže budovat kariéru
              bezpečně a efektivně.
            </li>
            <li>
              <span className="font-medium text-gray-800">Flexibilita</span> –
              pracujete, kdy a jak chcete. Přizpůsobíme se vašim potřebám.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Co očekáváme?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Závazek a ochotu spolupracovat.</li>
            <li>Kreativitu a chuť tvořit obsah pro své fanoušky.</li>
            <li>Připravenost budovat svůj online profil.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Proč pracovat s námi?
          </h2>
          <p className="text-gray-600">
            Jsme zkušená agentura, která se postará o každý detail vaší kariéry.
            Zajistíme vše od tvorby profilu, přes jeho propagaci, až po každodenní
            správu. S námi můžete dosáhnout úspěchu, aniž byste se museli starat
            o technické záležitosti.
          </p>
        </section>
      </div>

      <div className="mt-8 text-center">
        <p className="text-lg font-medium text-gray-800 mb-4">
          Udělejte první krok k vysněné kariéře a začněte s námi vydělávat
          velké peníze!
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
