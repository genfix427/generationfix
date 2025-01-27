import React from 'react';
import { Link } from 'react-router-dom';

const termsData = [
  {
    title: "Services Provided",
    content: (
      <>
        Generations Fix offers:
        <ul className="list-disc pl-6 mt-2">
          <li>
            IT hardware repair for <strong>smartphones, laptops, computers, tablets, POS systems, and gaming consoles</strong>.
          </li>
          <li>
            Networking solutions, including <strong>WiFi setup, server installations, and network security</strong>.
          </li>
          <li>
            Web design, development, and <strong>SEO</strong> services.
          </li>
          <li>
            Digital marketing, including <strong>Google Ads, social media marketing, and analytics</strong>.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Repair Services & Warranty",
    content: (
      <ul className="list-disc pl-6">
        <li>
          We provide a <strong>limited warranty</strong> on repairs for defects in parts or workmanship. Warranty periods vary by repair type.
        </li>
        <li>
          <strong>Water-damaged devices</strong> or previously tampered-with devices are not covered under warranty.
        </li>
        <li>
          We are <strong>not responsible for data loss</strong> during repairs. Customers should back up their data before service.
        </li>
        <li>
          If a device is <strong>deemed unrepairable</strong>, a diagnostic fee may apply.
        </li>
      </ul>
    ),
  },
  {
    title: "Payments & Refunds",
    content: (
      <ul className="list-disc pl-6">
        <li>
          Payments must be made <strong>in full</strong> before service completion, unless otherwise agreed.
        </li>
        <li>
          Digital marketing and web design services require an <strong>upfront deposit</strong> before work begins.
        </li>
        <li>
          Refunds are only provided if <strong>we fail to deliver the agreed-upon service</strong>. No refunds for completed repairs or marketing services.
        </li>
      </ul>
    ),
  },
  {
    title: "Pickup & Drop-Off Service",
    content: (
      <ul className="list-disc pl-6">
        <li>
          Customers must ensure the <strong>correct address</strong> is provided for pickup/drop-off.
        </li>
        <li>
          We are not liable for <strong>delays due to incorrect information or external factors</strong> (e.g., traffic, weather).
        </li>
        <li>
          If the customer is unavailable at the scheduled time, a <strong>rescheduling fee</strong> may apply.
        </li>
      </ul>
    ),
  },
  {
    title: "Website Design & Digital Marketing",
    content: (
      <ul className="list-disc pl-6">
        <li>
          Clients must provide <strong>accurate business details and branding materials</strong> for website and marketing projects.
        </li>
        <li>
          Website design projects include <strong>a limited number of revisions</strong>; additional changes may incur extra charges.
        </li>
        <li>
          We <strong>do not guarantee specific results</strong> (e.g., website ranking, ad performance) as marketing outcomes depend on various factors.
        </li>
        <li>
          Clients are responsible for <strong>ongoing ad spend</strong> on platforms like Google Ads and Meta.
        </li>
      </ul>
    ),
  },
  {
    title: "Limitation of Liability",
    content: (
      <ul className="list-disc pl-6">
        <li>
          Generations Fix is <strong>not responsible for indirect damages</strong>, such as business losses due to service interruptions.
        </li>
        <li>
          In no event shall our liability exceed the total amount paid for the service.
        </li>
      </ul>
    ),
  },
  {
    title: "Privacy & Data Protection",
    content: (
      <ul className="list-disc pl-6">
        <li>
          We respect customer privacy and will not share personal information without consent.
        </li>
        <li>
          Customers agree that we may collect necessary data for service fulfillment and improvement.
        </li>
      </ul>
    ),
  },
  {
    title: "Cancellations & Rescheduling",
    content: (
      <ul className="list-disc pl-6">
        <li>
          Repairs and service bookings may be <strong>rescheduled with at least 24 hours' notice</strong>.
        </li>
        <li>
          Digital marketing and web design contracts require a <strong>30-day notice</strong> for termination.
        </li>
      </ul>
    ),
  },
  {
    title: "Governing Law",
    content: (
      <p>
        These Terms are governed by the <strong>laws of the State of Florida, USA</strong>. Any disputes shall be resolved in <strong>Miami courts</strong>.
      </p>
    ),
  },
  {
    title: "Contact Information",
    content: (
      <p>
        For questions or concerns about these Terms, please contact us:
        <br />
        📞 <Link to="tel:17865056525" className='text-blue-600'>+1 (786) 505-6525</Link>
        <br />
        📧 <Link to="mailto:genfix427@gmail.com" className='text-blue-600'>genfix427@gmail.com</Link>
      </p>
    ),
  },
];

const TermsConditions = () => {
  return (
    <section className="max-w-5xl mx-auto py-16 px-6 bg-white">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
        <p className="text-lg text-gray-600">
          Welcome to <strong>Generations Fix</strong>! These Terms and Conditions ("Terms") govern your use of our services, including IT hardware repairs, networking solutions, web design, and digital marketing. By using our services, you agree to comply with these Terms.
        </p>
      </div>
      <div className="space-y-8">
        {termsData.map((term, index) => (
          <div key={index} className="border-b pb-4">
            <h2 className="text-xl font-semibold mb-2">{index + 1}. {term.title}</h2>
            <div className="text-gray-700 text-base">{term.content}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TermsConditions;
