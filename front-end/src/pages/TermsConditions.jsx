import React from "react";

const TermsConditions = () => {
  return (
    <div className="bg-black text-white min-h-screen py-12 px-6 sm:px-12 mt-15 mb-80">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gold mb-6 border-b border-gold pb-2">
          Terms and Conditions
        </h1>

        <p className="text-lg leading-relaxed mb-8">
          Welcome to{" "}
          <span className="text-gold font-semibold">Al-Hidaya Quran Academy</span>
          . By using our online Quran learning platform, you agree to comply
          with and be bound by the following Terms and Conditions.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gold mb-2">
              1. Acceptance of Terms
            </h2>
            <p className="text-base leading-relaxed">
              By accessing or using our platform, you agree to be bound by these
              terms. If you do not agree, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gold mb-2">
              2. User Responsibilities
            </h2>
            <p className="text-base leading-relaxed">
              You are responsible for maintaining the confidentiality of your
              login credentials and for all activities under your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gold mb-2">
              3. Course Content
            </h2>
            <p className="text-base leading-relaxed">
              All course materials are the intellectual property of [Your
              Institute Name] and are provided for personal, non-commercial use
              only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gold mb-2">
              4. Code of Conduct
            </h2>
            <p className="text-base leading-relaxed">
              Users must treat instructors and other learners with respect. Any
              form of harassment or inappropriate behavior will result in
              account suspension.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gold mb-2">
              5. Payment & Refund Policy
            </h2>
            <p className="text-base leading-relaxed">
              All course fees are non-refundable unless otherwise stated. Please
              review course details before making a purchase.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gold mb-2">
              6. Modifications
            </h2>
            <p className="text-base leading-relaxed">
              We reserve the right to modify or discontinue any part of the
              service at any time without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gold mb-2">
              7. Governing Law
            </h2>
            <p className="text-base leading-relaxed">
              These terms shall be governed by and construed in accordance with
              the laws of your jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gold mb-2">
              8. Contact Us
            </h2>
            <p className="text-base leading-relaxed">
              If you have questions about these Terms & Conditions, contact us
              at <span className="text-gold">support@[yourwebsite].com</span>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
