import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What services do you offer?",
    answer:
      "At Infinite Media, we specialize in editing both short and long forms of YouTube content, Instagram reels, corporate content, educational videos, and general social media content. Our services are tailored to meet the unique requirements of each platform and client, ensuring top-quality results that engage and inform your audience.",
  },
  {
    question: "How does the video editing process work?",
    answer:
      "Once you contact us with your video editing needs, we will discuss your project requirements and expectations. After that, you can upload your raw footage to our secure platform. Our professional editors will then begin the editing process, incorporating your feedback and revisions until the final product meets your satisfaction.",
  },
  {
    question: "What are your pricing models?",
    answer:
      "Our pricing depends on the complexity and length of the video project. We offer both per-project and hourly rates. For detailed pricing information, please contact us directly, and we will provide you with a customized quote based on your specific needs.",
  },
  {
    question: "How long does it take to edit a video?",
    answer:
      "The turnaround time for video editing depends on the complexity of the project and the length of the footage. Typically, smaller projects can be completed within a few days, whereas more complex edits may take longer. We always work to meet your deadlines and can offer expedited services if needed.",
  },
  {
    question: "Can I see examples of your past work?",
    answer:
      "Absolutely! You can view samples of our work on our website under the ‘Portfolio’ section. These examples showcase a variety of video styles and editing techniques.",
  },
  {
    question: "What file formats do you accept and deliver?",
    answer:
      "We accept most video file formats, including MP4, AVI, MOV, and more. Final videos can be delivered in a variety of formats as per your requirements, optimized for web, broadcast, or personal use.",
  },
  {
    question: "Is my footage secure with you?",
    answer:
      "Yes, your footage is completely secure. We use encrypted cloud storage for all files and only our professional editing team has access to your footage. We adhere to strict confidentiality and privacy policies to ensure your content remains protected.",
  },
  {
    question: "Do you offer revisions?",
    answer:
      "Yes, we offer revisions as per our editing packages. Typically, we provide a set number of revisions to ensure the final product aligns with your vision. Additional revisions can be made available at a nominal fee.",
  },
  {
    question: "How can I get started with my video editing project?",
    answer:
      "To start your video editing project with us, simply contact us through our website or give us a call. We’ll discuss your project details, establish a timeline, and guide you on how to upload your footage to get started.",
  },
  {
    question:
      "What makes Infinite Media different from other video editing companies?",
    answer:
      "At Infinite Media, we pride ourselves on our creativity, attention to detail, and customer-focused approach. Our team of experienced editors uses the latest tools and techniques to deliver high-quality video content that effectively communicates your message and engages your audience.",
  },
];

const FAQS = () => {
  return (
    <div className="mt-0 z-10 md:py-10 text-white min-w-[100vw] rounded-3xl">
      <div className="p-10 md:p-4 md:px-20 w-full">
       
        <div className="font-semibold text-3xl md:text-6xl bg-gradient-to-r from-emerald-600 to-blue-300 bg-clip-text text-transparent">
          FAQs
        </div>

        <Accordion type="single" className="w-full" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQS;
