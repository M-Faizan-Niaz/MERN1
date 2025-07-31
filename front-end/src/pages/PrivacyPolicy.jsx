import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800 mb-90">
      <h1 className="text-4xl font-bold text-center text-black-800 mb-6">
        Privacy Policy
      </h1>
      <p className="text-sm text-center text-gray-500 mb-10">
        Last updated: July 20, 2025
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-black-600 mb-2">
          1. Who We Are
        </h2>
        <p>
          We are an online Islamic educational platform offering authentic
          Quranic courses, including Tafseer, Quran Ijazah, Tajweed, Qaida,
          Quran Reading, and Arabic Grammar.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-black-600 mb-2">
          2. Information We Collect
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Personal Info:</strong> Name, email address, contact number
          </li>
          <li>
            <strong>Learning Data:</strong> Course progress and completions
          </li>
          <li>
            <strong>Technical Info:</strong> IP address, browser, and device
            type
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-black-600 mb-2">
          3. How We Use Your Information
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Provide course access and track your learning</li>
          <li>Send updates and reminders</li>
          <li>Offer support and improve services</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-black-600 mb-2">
          4. Third-Party Services
        </h2>
        <p>
          We use secure, privacy-compliant third-party tools (like email and
          payment processors) which have limited and secured access to your
          data.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-black-600 mb-2">
          5. Cookies
        </h2>
        <p>
          We use cookies to remember sessions, track progress, and enhance user
          experience. You can manage cookie preferences through your browser.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-black-600 mb-2">
          6. Children’s Privacy
        </h2>
        <p>
          Our platform is suitable for all ages, but children under 13 should
          access it under parental guidance.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-black-600 mb-2">
          7. Data Security
        </h2>
        <p>
          We implement SSL encryption, secure login, and regular audits to
          safeguard your information.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-black-600 mb-2">
          8. Your Rights
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Access or correct your data</li>
          <li>Request data deletion</li>
          <li>Unsubscribe from emails</li>
        </ul>
        <p>
          Contact us at:{" "}
          <span className="text-black-700 font-medium">
            mfaizan4905@fmail.com
          </span>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-black-600 mb-2">
          9. Changes to Policy
        </h2>
        <p>
          This policy may be updated as needed. Any changes will be posted here
          with the new date.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-black-600 mb-2">
          10. Contact Us
        </h2>
        <p>If you have questions, reach us at:</p>
        <p className="mt-2">
          📧 <span className="font-medium">your.email@example.com</span>
          <br />
          📍 <span className="font-medium">City, Country</span>
        </p>
      </section>

      <p className="text-center text-black-700 font-semibold mt-12">
        🌙 May Allah reward you for seeking beneficial knowledge.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
