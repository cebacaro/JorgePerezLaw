import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 ">
      <div className="justify-center items-center lg:w-[50vw] w-screen p-16 ">
        <h1 className="text-2xl w-full font-bold mb-4 items-center m-4 text-center justify-center">
          Privacy Policy
        </h1>
        <h2 className="text-xl w-full text-center font-semibold m-4">
          Effective Date: 10/23/2024
        </h2>

        <section className="max-h-[70vh] overflow-y-auto p-4 border border-gray-200 rounded ">
          <p className="text-lg m-4 text-justify">
            At Jorge Perez Law Firm, LLC, your privacy is very important to us.
            This privacy policy will outline how we collect data, use data, and
            protect any personal information provided to us by clients through
            our “Contact Us” form. By submitting your contact details on our
            website, you agree to the policy described below.
          </p>

          <h2 className="text-xl font-semibold m-4">
            1. Information Collected
          </h2>

          <p className="text-lg m-4">
            When submitting a message through our “Contact Us” form, we may
            collect the following information:{" "}
          </p>
          <p className="text-lg m-4 italic">
            No mobile information will be shared with third parties/affiliates
            for marketing/promotional purposes. All other categories exclude
            text messaging originator opt-in data and consent; this information
            will not be shared with any third parties.
          </p>

          <ul className="list-disc list-inside text-lg m-4 gap-4">
            <li className="text-lg ml-4">Name</li>
            <li className="text-lg ml-4">Email Address</li>
            <li className="text-lg ml-4">Phone Number</li>
            <li className="text-lg ml-4">
              Message (including any information provided)
            </li>
          </ul>

          <p className="text-lg m-4">
            In addition, we may collect non-personal information though tools
            like Google Analytics to better understand user interaction within
            our website.
          </p>

          <h2 className="text-xl font-semibold m-4">
            2. How We Use Your Information
          </h2>

          <p className="text-lg m-4">
            The information you provide will only be used in the following ways:
          </p>

          <ul className="list-disc list-inside text-lg m-4 gap-4">
            <li className="text-lg ml-4">
              To communicate with you regarding your case or inquiries
            </li>
            <li className="text-lg ml-4">
              To gather and collect documents needed for your case or services
            </li>
            <li className="text-lg ml-4">
              To provide you with updates on your case or services
            </li>
            <li className="text-lg ml-4">
              To contact you via Zoom for meetings or consultations, when
              necessary.
            </li>
            <li className="text-lg ml-4">
              To track website traffic and collect metrics to understand site
              performance and improve user experience
            </li>
          </ul>

          <h2 className="text-xl font-semibold m-4">
            3. No Third-Party Sharing
          </h2>

          <p className="text-lg m-4">
            We do not sell, rent, or share our personal data or information with
            any third party. Your contact details will only be used by our
            employees and authorized representatives to communicate with you
            regarding your case.{" "}
          </p>

          <p className="text-lg m-4">
            While we use Google Analytics to collect and track website
            performance, no personal information is shared with Google.{" "}
          </p>

          <p className="text-lg m-4">
            We may use Zoom to contact you for virtual meetings but only when
            necessary for case management and consultations. Any data shared
            during interactions will be handled according to Zoom’s privacy
            policy.
          </p>

          <h2 className="text-xl font-semibold m-4">4. Data Security</h2>

          <p className="text-lg m-4">
            We take reasonable steps to store your personal data and protect it
            from unauthorized access. However, no data transmission over the
            internet can be guaranteed to be 100% secure, and we cannot promise
            absolute protection of your data and information.
          </p>

          <h2 className="text-xl font-semibold m-4">5. Data Retention</h2>
          <p className="text-lg m-4">
            Your contact information will be retained only as long as needed to
            fulfill the purposes outlined in this policy
          </p>
          <h2 className="text-xl font-semibold m-4">6. Your Rights</h2>
          <p className="text-lg m-4">
            You have the right to request correction or deletion of your
            personal data at any time. If you wish to exercise this right,
            contact cbacaro@jorgeperezlaw.com.
          </p>
          <h2 className="text-xl font-semibold m-4">
            7. Updates to This Policy
          </h2>
          <p className="text-lg m-4">
            We may update this Privacy Policy periodically to reflect changes to
            our practice or legal requirements. Any updates will be posted on
            this page with a new effective date.
          </p>
          <h2 className="text-xl font-semibold m-4">8. Contact Us</h2>
          <p className="text-lg m-4">
            If you have any questions or concerns regarding this privacy policy,
            reach us at:
          </p>
          <p className="text-lg m-4">
            Jorge Perez Law Firm, LLC <br /> Email: cbacaro@jorgeperezlaw.com{" "}
            <br />
            Phone: (504) 315-2667
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
