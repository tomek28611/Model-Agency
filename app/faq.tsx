import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"



const FAQS = () => {
    return ( 
        <div className=" mt-10 md:py-10 bg-[#f6f5f4] w-full
        rounded-3xl
        
        ">
          <div className=" p-10 md:p-4 md:px-20">
            <div className="text-3xl md:text-7xl font-bold text-black">
              Have questions ?
            </div>
            <div className="  font-semibold text-3xl md:text-6xl text-gradient bg-gradient-to-r from-emerald-600 to-blue-300 bg-clip-text text-transparent">
              Get answers.
            </div>
            <Accordion type="single" collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger>Can I check you out for free?</AccordionTrigger>
      <AccordionContent>
      YES! We don t charge a commission for the first period, only when you start earning well will we share the profit.<br/>

So you don t put any money in.<br/>

We are the ones who invest in you at the beginning.<br/>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>How to start ?</AccordionTrigger>
      <AccordionContent>
      We are happy to hear that!<br/>

Before we decide to work with you, we would like to get to know you. What is your motovation, do you have enough time and do you really want it. We want to know how we can best help you.<br/>

To check all this we have a free initial consultation.<br/>

Just book an initial call and we can get started.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>
    What if I do not want to show my nude photos ?
      </AccordionTrigger>
      <AccordionContent>
      This is an important consideration that everyone must answer for themselves.<br/>
       Our models should only go as far as they feel comfortable. Normal and erotic photos, are enough to test it in the beginning.<br/>
        To give the fans more exclusive content, nude photos are very helpful.<br/>
         Fans like to see this and are willing to pay more for this exclusive content.
        
      </AccordionContent>
    </AccordionItem>
  
    <AccordionItem value="item-4">
      <AccordionTrigger>
    What you can give me ?
        </AccordionTrigger>
      <AccordionContent>
      We offer an all-inclusive package that is specially customized for you:<br/>
– Viral strategy<br/>
– 24/7 chat support 4 fans<br/>
– OnlyFans Account Management<br/>
– Account growth strategy<br/>
– Social Media Consulting<br/>
– Account strategy (across all platforms)<br/>
– Account Audit (every week)<br/>
– Content management<br/>
– AI based Customer realation management<br/>
– Fan acquisition<br/>
– Advice and assistance with content creation<br/>
– “Only Fans Academy”<br/>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
  
  
          </div>
        </div> );
}
 
export default FAQS;