import React, { useState } from 'react';
import FAQimgGeneral from '../assets/images/faqGeneral.jpg';
import FAQimgRepair from '../assets/images/faqRepair.jpg';
import FAQimgIT from '../assets/images/faqIT.jpg';
import FAQimgWeb from '../assets/images/faqDM.jpg';

const faqData = [
  {
    category: 'General Questions',
    image: FAQimgGeneral,
    faqs: [
      {
        question: 'What services does Generations Fix offer?',
        answer: 'We provide a range of services, including smartphone, laptop, and POS system repairs, IT hardware solutions, networking services, website design, and digital marketing to help businesses grow.',
      },
      {
        question: 'Where is Generations Fix located?',
        answer: 'We are based in Miami and offer pickup and drop-off services for repairs, making it convenient for our customers.',
      },
      {
        question: 'Do you offer on-site repair services?',
        answer: 'Yes! We offer on-site troubleshooting for IT hardware and networking services. For device repairs, we also provide pickup and drop-off services.',
      },
    ],
  },
  {
    category: 'Repair Services',
    image: FAQimgRepair,
    faqs: [
      {
        question: 'What types of devices do you repair?',
        answer: 'We repair smartphones, laptops, computers, tablets, POS systems, gaming consoles, printers, and other IT hardware.',
      },
      {
        question: 'How long does a repair take?',
        answer: 'Most repairs are completed within 24 hours. However, complex issues may take longer, and we will inform you of the estimated time.',
      },
      {
        question: 'Do you use original replacement parts?',
        answer: 'Yes! We use high-quality, original, or OEM parts to ensure the best performance for your device.',
      },
      {
        question: 'Is there a warranty on repairs?',
        answer: 'Yes, we offer a limited warranty on most repairs. The warranty period depends on the type of repair and parts used.',
      },
      {
        question: 'What if my device is beyond repair?',
        answer: 'If your device is beyond repair, we will offer you alternative solutions, such as data recovery, device replacement recommendations, or trade-in options.',
      },
    ],
  },
  {
    category: 'IT Hardware & Networking Services',
    image: FAQimgIT,
    faqs: [
      {
        question: 'What IT hardware services do you provide?',
        answer: 'We offer hardware installation, troubleshooting, upgrades, server setup, data recovery, networking solutions, and structured cabling.',
      },
      {
        question: 'Can you set up a business network?',
        answer: 'Yes! We specialize in network setup, WiFi configuration, server installations, firewall security, and VPN solutions for businesses of all sizes.',
      },
      {
        question: 'Do you offer managed IT services?',
        answer: 'Yes, we provide IT support and maintenance plans to keep your business systems running smoothly.',
      },
    ],
  },
  {
    category: 'Web Design & Digital Marketing',
    image: FAQimgWeb,
    faqs: [
      {
        question: 'What web design services do you offer?',
        answer: 'We design and develop custom websites, e-commerce stores, business websites, and portfolio sites tailored to your needs.',
      },
      {
        question: 'Can you help me market my business online?',
        answer: 'Absolutely! We specialize in SEO, social media marketing, Google Ads, Google Analytics, and targeted digital campaigns to increase your brand visibility.',
      },
      {
        question: 'How do you ensure my business reaches the right audience?',
        answer: 'We use Google Ads, Meta (Facebook, Instagram, WhatsApp), SEO, Google Tag Manager, and targeted digital strategies to reach the right customers and boost your conversions.',
      },
      {
        question: 'How long does it take to design a website?',
        answer: ' A standard website takes 2-4 weeks, while more complex websites (e-commerce, custom features) may take longer.',
      },
      {
        question: 'Do you provide website maintenance?',
        answer: 'Yes, we offer website maintenance, updates, and security checks to ensure your website runs smoothly.',
      },
    ],
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null); // Track the currently open question

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the open index
  };

  return (
    <section className="">
      {faqData.map((section, sectionIndex) => (
        <div key={sectionIndex} className="container py-10">
          <div className="mb-10 text-center mx-5">
            <h2 className="heading">{section.category}</h2>
          </div>

          <div
            className={`flex flex-col md:flex-row gap-8 items-center mx-5 ${
              sectionIndex % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div className="flex-1 hidden md:block overflow-hidden">
              <img
                src={section.image}
                className="w-full rounded-xl hover:scale-105 transition-transform duration-300"
                alt={`${section.category} Illustration`}
              />
            </div>

            <div className="flex-1 space-y-4">
              {section.faqs.map((item, index) => (
                <AccordionItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openIndex === `${sectionIndex}-${index}`}
                  onToggle={() => handleToggle(`${sectionIndex}-${index}`)}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

const AccordionItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border rounded-xl shadow-md overflow-hidden transition-all duration-300 ease-in-out">
      <div
        className="border-2 border-gray-300 rounded-xl p-4 cursor-pointer flex justify-between items-center transition-all duration-300 ease-in-out"
        onClick={onToggle}
      >
        <h3 className="text-lg font-semibold">{question}</h3>
        <span
          className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        >
          ▼
        </span>
      </div>
      <div
        className={`overflow-hidden transition-max-height duration-500 ease-in-out ${isOpen ? 'max-h-40' : 'max-h-0'
          } bg-white border-t`}
      >
        <p className="p-4 text-gray-700">{answer}</p>
      </div>
    </div>
  );
};

export default FAQ;
