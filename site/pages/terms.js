import Link from "next/link";
import React from "react";
import MyHead from "../components/MyHead";

export const Terms = () => {
  return (
    <>
      <MyHead
        title="Terms and Conditions"
        description="Terms and Conditions for TypeFinance, These Terms and Conditions govern your use of Typefinance's website and services"
        image="https://typefinance.com/terms"
        url="https://typefinance.com/guides"
      />

      <div
        className="bg-white w-11/12 md:w-5/6 m-auto p-5 my-3 rounded-xl text-zinc-700"
        style={{ fontFamily: "Poppins" }}
      >
        <h1 className="font-bold text-3xl text-black ">Terms and Conditions</h1>
        <h4 className="font-bold pt-4 pb-1">Introduction: : </h4>

        <p>
          These Terms and Conditions ("Agreement") govern your use of
          Typefinance's website and services ("Service"). By using our Service,
          you agree to be bound by this Agreement, as well as our Privacy
          Policy, which is incorporated by reference.
        </p>
        <h4 className="font-bold pt-4 pb-1">Eligibility : </h4>
        <p>
          To use our Service, you must be at least 18 years old and have the
          legal capacity to enter into contracts. By using our Service, you
          represent and warrant that you meet these eligibility requirements.
        </p>
        <h4 className="font-bold pt-4 pb-1">User Accounts : </h4>
        <p>
          You may or may not need to create a user account to access certain
          features of our Service. You are responsible for maintaining the
          confidentiality of your account login information and for all
          activities that occur under your account. You agree to notify us
          immediately if you suspect unauthorized use of your account.
        </p>
        <h4 className="font-bold pt-4 pb-1">Investment Recommendations : </h4>
        <p>
          Our Service may provide investment recommendations based on your
          financial information. These recommendations are for informational
          purposes only and should not be construed as investment advice. You
          are solely responsible for any investment decisions you make.
        </p>
        <h4 className="font-bold pt-4 pb-1">Intellectual Property : </h4>
        <p>
          All content on our website, including text, graphics, logos, and
          images, is the property of Typefinance or its licensors and is
          protected by copyright and other intellectual property laws. You may
          not use or reproduce our content without our express written
          permission.
        </p>
        <h4 className="font-bold pt-4 pb-1">Prohibited Conduct : </h4>
        <p>
          You agree not to use our Service for any illegal or unauthorized
          purpose, or to engage in any conduct that violates this Agreement or
          our Privacy Policy. Prohibited conduct includes, but is not limited
          to, the following:
        </p>
          <ul>
            <li className="pl-3 pb-1">
              Posting or transmitting unauthorized commercial communications through our Service.</li>
            <li className="pl-3 pb-1">Interfering with or disrupting our Service or servers.</li>
            <li className="pl-3 pb-1">Harassing or impersonating other users.</li>
            <li className="pl-3 pb-1">Uploading or transmitting viruses or other malicious code.</li>
            <li className="pl-3 pb-1">
              Engaging in any other activity that is deemed inappropriate by
              Typefinance in its sole discretion.</li>
          </ul>
        <h4 className="font-bold pt-4 pb-1">Disclaimer of Warranties : </h4>
        <p>
          Our Service is provided on an "as is" and "as available" basis.
          Typefinance makes no warranties or representations, express or
          implied, regarding the operation or availability of our Service, or
          the accuracy, completeness, or reliability of any content or
          information provided through our Service. To the fullest extent
          permitted by law, Typefinance disclaims all warranties, express or
          implied, including but not limited to implied warranties of
          merchantability and fitness for a particular purpose.
        </p>
        <h4 className="font-bold pt-4 pb-1">Limitation of Liability : </h4>
        <p>
          To the fullest extent permitted by law, Typefinance shall not be
          liable for any indirect, incidental, special, or consequential damages
          arising out of or in connection with your use of our Service,
          including but not limited to damages for lost profits, goodwill, use,
          or data.
        </p>
        <h4 className="font-bold pt-4 pb-1">Indemnification : </h4>
        <p>
          You agree to indemnify and hold Typefinance, its affiliates, and their
          respective officers, directors, employees, and agents harmless from
          and against any claims, liabilities, damages, losses, and expenses,
          including reasonable attorneys' fees, arising out of or in connection
          with your use of our Service or your violation of this Agreement.
        </p>
        <h4 className="font-bold pt-4 pb-1">Governing Law : </h4>
        <p>
          This Agreement shall be governed by and construed in accordance with
          the laws of India. Any dispute arising out of or in
          connection with this Agreement shall be resolved exclusively in the
          courts of India.
        </p>
        <h4 className="font-bold pt-4 pb-1">Changes to Agreement : </h4>
        <p>
          We may update this Agreement from time to time. If we make material
          changes to the Agreement, we will notify you by email or by posting a
          notice on our website.
        </p>
        <h4 className="font-bold pt-4 pb-1">Contact Us : </h4>
        <p>
          If you have any questions or concerns about this Agreement, please
          contact us at <Link href="/contact" className="text-indigo-800">typefinance.com/contact. </Link>
        </p>
      </div>
    </>
  );
};

export default Terms;
