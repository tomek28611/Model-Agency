import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from 'react-i18next';

 

const FAQS = () => {
  const { t, i18n } = useTranslation();
  
  return (
    <div className=" mt-10 md:py-10 bg-[#f6f5f4] w-full
        rounded-3xl
        
        ">
      <div className=" p-10 md:p-4 md:px-20">
        <div className="text-3xl md:text-7xl font-bold text-black">
         {t('faq_title')}
        </div>
        <div className="  font-semibold text-3xl md:text-6xl text-gradient bg-gradient-to-r from-emerald-600 to-blue-300 bg-clip-text text-transparent">
          {t('faq_subtitle')}
        </div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>{t('faq_free')}</AccordionTrigger>
            <AccordionContent>
              {t('faq_free_desc_1')}<br />

              {t('faq_free_desc_2')}<br />

              {t('faq_free_desc_3')}<br />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>{t('faq_how_to_start')}</AccordionTrigger>
            <AccordionContent>
              <p>{t('faq_how_to_start_desc_1')}</p>
              <p>{t('faq_how_to_start_desc_2')}</p>
              <p>{t('faq_how_to_start_desc_3')}</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>{t('faq_nude_photos')}</AccordionTrigger>
            <AccordionContent>
              <p>{t('faq_nude_photos_desc_1')}</p>
              <p>{t('faq_nude_photos_desc_2')}</p>
              <p>{t('faq_nude_photos_desc_3')}</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>{t('faq_what_we_offer')}</AccordionTrigger>
            <AccordionContent>
              <ul>
                <li>{t('faq_offer_strategy')}</li>
                <li>{t('faq_offer_support')}</li>
                <li>{t('faq_offer_management')}</li>
                <li>{t('faq_offer_growth_strategy')}</li>
                <li>{t('faq_offer_consulting')}</li>
                <li>{t('faq_offer_audit')}</li>
                <li>{t('faq_offer_content')}</li>
                <li>{t('faq_offer_ai_crm')}</li>
                <li>{t('faq_offer_acquisition')}</li>
                <li>{t('faq_offer_creation_help')}</li>
                <li>{t('faq_offer_academy')}</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>



      </div>
    </div>);
}

export default FAQS;