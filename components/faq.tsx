import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"



const FAQS = () => {
    return ( 
        <div className=" mt-0 md:py-10 text-white w-3/4
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
      <AccordionTrigger>What is your turnaround time</AccordionTrigger>
      <AccordionContent>
      Our standard turnaround time for video editing projects is typically 1-3 business days. However, the exact time may vary depending on the complexity and length of the project. We strive to deliver high-quality results within a reasonable timeframe to meet our clients' needs.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>How do you handle revisions?</AccordionTrigger>
      <AccordionContent>
       We offer a certain number of revisions as part of our editing packages to ensure that the final product meets your expectations. Once we deliver the initial draft, you can review it and request revisions based on specific changes or adjustments you'd like to make. 
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>
      What file formats do you support?
      </AccordionTrigger>
      <AccordionContent>
      We support a wide range of file formats to accommodate different needs and preferences. Some of the common file formats we work with include MP4, MOV, AVI, WMV, MKV, and more. 
        
      </AccordionContent>
    </AccordionItem>
  
  </Accordion>
  
  
          </div>
        </div> );
}
 
export default FAQS;