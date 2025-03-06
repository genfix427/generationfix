import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const privacyPolicyData = [
  {
    title: "Information We Collect",
    sections: [
      {
        subtitle: "A. Personal Information",
        content: (
          <ul className="list-disc pl-6">
            <li>Name, phone number, email address, and physical address for service requests.</li>
            <li>Payment details (processed securely via third-party providers).</li>
            <li>Business information (for website design and digital marketing services).</li>
          </ul>
        ),
      },
      {
        subtitle: "B. Device & Technical Information",
        content: (
          <ul className="list-disc pl-6">
            <li>Device details (model, serial number, issue description) for repairs.</li>
            <li>Network and system information for IT and networking services.</li>
            <li>Cookies, IP addresses, and analytics for website visitors and digital marketing campaigns.</li>
          </ul>
        ),
      },
    ],
  },
  {
    title: "How We Use Your Information",
    content: (
      <ul className="list-disc pl-6">
        <li>Provide <strong>IT repair, networking, web design, and digital marketing services</strong>.</li>
        <li>Communicate about <strong>appointments, service updates, and promotions</strong>.</li>
        <li>Process <strong>payments and invoices securely</strong>.</li>
        <li>Improve <strong>website performance and marketing campaigns</strong> using analytics.</li>
        <li>Ensure <strong>fraud prevention and security compliance</strong>.</li>
      </ul>
    ),
  },
  {
    title: "Data Protection & Security",
    content: (
      <ul className="list-disc pl-6">
        <li>We implement <strong>industry-standard security measures</strong> to protect your data.</li>
        <li>Payment processing is handled by <strong>secure third-party gateways</strong> (e.g., PayPal, Stripe).</li>
        <li>We do <strong>not store customer payment details</strong>.</li>
      </ul>
    ),
  },
  {
    title: "Third-Party Sharing",
    content: (
      <ul className="list-disc pl-6">
        <li>We do <strong>not sell, rent, or trade</strong> customer information. However, we may share necessary data with:</li>
        <li><strong>Delivery partners</strong> for device pickup and drop-off.</li>
        <li><strong>Marketing platforms</strong> (Google Ads, Meta) for targeted advertising.</li>
        <li><strong>IT service providers</strong> for web hosting, security, and cloud storage.</li>
      </ul>
    ),
  },
  {
    title: "Cookies & Tracking Technologies",
    content: (
      <ul className="list-disc pl-6">
        <li><strong>Google Analytics</strong> to monitor website traffic.</li>
        <li><strong>Google Ads & Meta Ads</strong> for remarketing campaigns.</li>
        <li><strong>Session cookies</strong> to improve user experience on our website.</li>
        <li>Users can <strong>opt out</strong> of cookies via browser settings.</li>
      </ul>
    ),
  },
  {
    title: "Your Rights & Choices",
    content: (
      <ul className="list-disc pl-6">
        <li><strong>Access and update</strong> your personal information.</li>
        <li><strong>Request deletion</strong> of your data, subject to legal and contractual obligations.</li>
        <li><strong>Opt out of marketing emails</strong> at any time.</li>
      </ul>
    ),
  },
  {
    title: "Data Retention",
    content: (
      <ul className="list-disc pl-6">
        <li>We retain customer data <strong>only as long as necessary</strong> for service fulfillment.</li>
        <li>Marketing and analytics data may be retained for <strong>up to 24 months</strong> for business insights.</li>
      </ul>
    ),
  },
  {
    title: "Children's Privacy",
    content: (
      <p>
        Our services are <strong>not intended for children under 13</strong>. We do not knowingly collect data from minors.
      </p>
    ),
  },
  {
    title: "Changes to this Policy",
    content: (
      <p>
        We may update this Privacy Policy as needed. Significant changes will be <strong>notified via email or website updates</strong>.
      </p>
    ),
  },
  {
    title: "Contact Us",
    content: (
      <p>
        For questions regarding this Privacy Policy, please contact us:
        <br />
        📞 <Link to="tel:17865056525" className='text-blue-600'>+1 (786) 505-6525</Link>
        <br />
        📧 <Link to="mailto:genfix427@gmail.com" className='text-blue-600'>genfix427@gmail.com</Link>
      </p>
    ),
  },
];

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - GenerationsFix</title>
        <meta
          name="keywords"
          content="Business IT Support Miami, IT Support Miami, Remote IT Support Miami"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <section className="max-w-5xl mx-auto py-16 px-6 bg-white">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-600">Effective Date: [Insert Date]</p>
          <p className="text-lg text-gray-600 mt-2">
            Generations Fix ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our <strong>IT hardware repair, networking, web design, and digital marketing services</strong>.
          </p>
        </div>
        <div className="space-y-8">
          {privacyPolicyData.map((section, index) => (
            <div key={index} className="border-b pb-4">
              <h2 className="text-xl font-semibold mb-2">{index + 1}. {section.title}</h2>
              {section.sections
                ? section.sections.map((subSection, subIndex) => (
                  <div key={subIndex} className="mb-4">
                    <h3 className="text-lg font-medium mb-2">{subSection.subtitle}</h3>
                    <div className="text-gray-700 text-base">{subSection.content}</div>
                  </div>
                ))
                : <div className="text-gray-700 text-base">{section.content}</div>}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;