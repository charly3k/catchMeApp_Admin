import Link from "next/link";
import { ArrowLeft, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-black to-gray-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Terms & <span className="text-[#ff0a54]">Conditions</span>
          </h1>
          <p className="text-xl text-gray-300">
            Effective date: October 30th, 2024
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg max-w-none">
          <div className="bg-[#ff0a54]/5 border-l-4 border-[#ff0a54] p-6 rounded-r-lg mb-8">
            <p className="text-gray-700 mb-0">
              Welcome to Catchme Terms and Conditions of Use (these
              &quot;Terms&quot;). This is a contract between you and the Catchme
              Group and we want you to know your rights and our rights before
              you use the Catchme application (&quot;Catchme&quot; or the
              &quot;App&quot;). Please take a few moments to read these Terms
              before enjoying the App, because once you access, view or use the
              App, you are going to be legally bound by these Terms.
            </p>
          </div>

          <p className="text-gray-700 mb-6">
            Please also read our{" "}
            <Link
              href="/privacy"
              className="text-[#ff0a54] hover:underline font-semibold"
            >
              privacy policy
            </Link>{" "}
            to ensure you have an understanding of how we use personal
            information.
          </p>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <p className="text-gray-800 mb-0">
              <strong>Important:</strong> Section 11 of these Terms contains
              provisions governing how claims that you and Catchme Group have
              against each other are resolved. It contains an arbitration
              agreement that will require disputes between us to be submitted to
              binding and final arbitration with limited exceptions.
            </p>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-6 border-b-2 border-[#ff0a54] pb-2">
              1. CATCHME RULES
            </h2>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-black mb-4">
                Account Requirements
              </h3>
              <p className="text-gray-700 mb-4">
                Before you can use the App, you will need to register for an
                account (&quot;Account&quot;). In order to create an Account you
                must:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  be at least 18 years old or the age of majority to legally
                  enter into a contract under the laws of the United Kingdom
                </li>
                <li>
                  be legally permitted to use the App by the laws of the UK
                </li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
              <p className="text-red-800 mb-0">
                <strong>Age Verification:</strong> We monitor for underage use
                and we will terminate, suspend or ask you to verify your Account
                (providing Government issued ID) if we have reason to believe
                that you may be underage.
              </p>
            </div>

            <p className="text-gray-700 mb-4">
              You can create an Account via manual registration, with your gmail
              address or by using your Facebook login details. If you create an
              Account using your Facebook login details, you authorize us to
              access, display and use certain information from your Facebook
              account. For more information, please check out our{" "}
              <Link
                href="/privacy"
                className="text-[#ff0a54] hover:underline font-semibold"
              >
                privacy policy
              </Link>
              .
            </p>

            <p className="text-gray-700 mb-4">
              Unfortunately, we cannot allow you to use another person&apos;s
              Account or to share your Account with any other person without
              permission.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-semibold text-blue-900 mb-2">
                Account Deletion
              </h4>
              <p className="text-blue-800 mb-0">
                You can delete your Account at any time by going to the
                &apos;Settings&apos; page when you are logged in and clicking on
                the &apos;Delete account&apos; link. Your Account will be
                deleted immediately but it may take a little while for Your
                Content to be completely removed from the App.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-semibold text-black mb-2">
                Appeals Process
              </h4>
              <p className="text-gray-700 mb-4">
                If you believe that we&apos;ve made a mistake in taking action
                on your Account or Your Content, you have the option to appeal
                our decision within a six-month period. If you wish to appeal a
                decision, please start by reading the relevant section of our
                community guidelines.
              </p>
              <p className="text-gray-700 mb-0">
                If you still think there has been a mistake, the best way to
                appeal is to contact our
                <a
                  href="mailto:info@thecatchmeapp.co"
                  className="text-[#ff0a54] hover:underline font-semibold ml-1"
                >
                  info team <ExternalLink className="w-4 h-4 inline ml-1" />
                </a>
                (please explain why you are appealing our decision, and give as
                much detail as you can).
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-6 border-b-2 border-[#ff0a54] pb-2">
              2. TYPES OF CONTENT
            </h2>

            <p className="text-gray-700 mb-6">
              There are three types of content that you will be able to access
              on the App:
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-[#ff0a54]/5 border border-[#ff0a54]/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-[#ff0a54] mb-2">
                  Your Content
                </h3>
                <p className="text-gray-700 text-sm">
                  Content that you upload and provide
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-600 mb-2">
                  Member Content
                </h3>
                <p className="text-gray-700 text-sm">
                  Content that members/users provide
                </p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-600 mb-2">
                  Our Content
                </h3>
                <p className="text-gray-700 text-sm">
                  Content that the Catchme Group provides
                </p>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-red-900 mb-4">
                Prohibited Content
              </h3>
              <p className="text-red-800 mb-4">
                There is certain content we can&apos;t allow on Catchmeapp. You
                agree not to post content that:
              </p>
              <ul className="list-disc list-inside text-red-800 space-y-1 text-sm">
                <li>
                  is illegal or encourages, promotes or incites any illegal
                  activity
                </li>
                <li>is harmful to minors</li>
                <li>is defamatory or libelous</li>
                <li>
                  infringes any third party&apos;s rights (including
                  intellectual property rights and privacy rights)
                </li>
                <li>
                  contains language or imagery which could be deemed offensive
                </li>
                <li>
                  is obscene, pornographic, violent or otherwise may offend
                  human dignity
                </li>
                <li>is abusive, insulting or threatening, discriminatory</li>
                <li>
                  relates to commercial activities (including sales,
                  competitions and advertising)
                </li>
                <li>
                  involves the transmission of &quot;junk&quot; mail or
                  &quot;spam&quot;
                </li>
                <li>
                  impersonates or intends to deceive or manipulate a person
                </li>
                <li>
                  contains any malicious code designed to damage or disrupt any
                  software or hardware
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-6 border-b-2 border-[#ff0a54] pb-2">
              3. RESTRICTIONS ON THE APP
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-4">
                  You agree to:
                </h3>
                <ul className="list-disc list-inside text-green-800 space-y-2 text-sm">
                  <li>comply with all applicable laws</li>
                  <li>
                    use your real name and real age in creating your account
                  </li>
                  <li>
                    use the services in a safe, inclusive and respectful manner
                  </li>
                  <li>adhere to our community guidelines at all times</li>
                </ul>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-900 mb-4">
                  You agree that you will NOT:
                </h3>
                <ul className="list-disc list-inside text-red-800 space-y-2 text-sm">
                  <li>act in an unlawful or disrespectful manner</li>
                  <li>misrepresent your identity, age, or qualifications</li>
                  <li>disclose information without consent</li>
                  <li>stalk or harass any other user</li>
                  <li>use the App in any deceptive or manipulative way</li>
                  <li>submit manifestly unfounded appeals or reports</li>
                  <li>scrape or copy profiles and data from the services</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-semibold text-blue-900 mb-2">
                Reporting Abuse
              </h4>
              <p className="text-blue-800 mb-0">
                You can report any abuse or complain about Member Content by
                contacting us, outlining the abuse and/or complaint. You can
                also report a user directly in chat by clicking the &apos;Block
                & Report&apos; button.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-6 border-b-2 border-[#ff0a54] pb-2">
              4. PRIVACY
            </h2>
            <p className="text-gray-700 mb-4">
              For information about how the Catchme Group collects, uses, and
              shares your personal data, please check out our{" "}
              <Link
                href="/privacy"
                className="text-[#ff0a54] hover:underline font-semibold"
              >
                privacy policy
              </Link>
              . By using Catchme, you acknowledge that we may use such data in
              accordance with our privacy policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-6 border-b-2 border-[#ff0a54] pb-2">
              5. PUSH NOTIFICATIONS; LOCATION-BASED FEATURES
            </h2>
            <p className="text-gray-700 mb-4">
              We may provide you with emails, text messages, push notifications,
              alerts and other messages related to the App and/or the Catchme
              services. After downloading the App, you will be asked to accept
              or deny push notifications/alerts.
            </p>
            <p className="text-gray-700 mb-4">
              If you no longer wish to receive push notifications/alerts from
              the App, you may opt out by changing your notification settings on
              your mobile device. With respect to other types of messaging, you
              can unsubscribe by following the specific instructions included in
              such communications.
            </p>
            <p className="text-gray-700 mb-4">
              For more about how the App uses and retains your information,
              please read the
              <Link
                href="/privacy"
                className="text-[#ff0a54] hover:underline font-semibold ml-1"
              >
                privacy policy
              </Link>
              .
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-6 border-b-2 border-[#ff0a54] pb-2">
              6. DISCLAIMER
            </h2>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <p className="text-yellow-900 font-semibold mb-4">
                THE APP, SITE, OUR CONTENT, AND MEMBER CONTENT ARE ALL PROVIDED
                TO YOU &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT
                WARRANTY OF ANY KIND.
              </p>
              <p className="text-yellow-800 text-sm mb-0">
                We do not guarantee the compatibility of any matches. We do not
                make any warranties that the App will be uninterrupted, secure
                or error free. Your use of the App is at your own risk. You are
                solely responsible for your interactions with other members.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-6 border-b-2 border-[#ff0a54] pb-2">
              7. LIMITATION OF LIABILITY
            </h2>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <p className="text-red-900 font-semibold mb-4">
                NEITHER US NOR ANY OWNER WILL BE LIABLE FOR ANY DAMAGES ARISING
                OUT OF YOUR ACCESS TO OR USE OF THE APP.
              </p>
              <p className="text-red-800 text-sm mb-4">
                If you become dissatisfied in any way with the App, your sole
                and exclusive remedy is to stop your use of the App.
              </p>
              <p className="text-red-800 text-sm mb-0">
                If any portion of this limitation on liability is found to be
                invalid, our aggregate liability shall not exceed One Hundred
                Pounds Sterling (£100).
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-6 border-b-2 border-[#ff0a54] pb-2">
              8. INDEMNITY
            </h2>
            <p className="text-gray-700 mb-4">
              All the actions you make and information you post on Catchme
              remain your responsibility. Therefore, you agree to indemnify,
              defend, release, and hold us harmless from any third party claims
              arising as a result of:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>
                any negligent acts, omissions or willful misconduct by you
              </li>
              <li>your access to and use of the App</li>
              <li>the uploading or submission of Content to the App by you</li>
              <li>any breach of these Terms by you</li>
              <li>
                your violation of any law or of any rights of any third party
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-6 border-b-2 border-[#ff0a54] pb-2">
              9. COPYRIGHT INFRINGEMENT CLAIMS
            </h2>
            <p className="text-gray-700 mb-4">
              If you believe any content on Catchme infringes copyright, please
              submit a notification (&quot;Takedown Notice&quot;) to Catchme
              Group. The Takedown Notice must include:
            </p>
            <ul className="list-decimal list-inside text-gray-700 space-y-2 mb-6">
              <li>
                A physical or electronic signature of a person authorized to act
                on behalf of the copyright owner
              </li>
              <li>
                Identification of the copyrighted work claimed to have been
                infringed
              </li>
              <li>Identification of the material claimed to be infringing</li>
              <li>
                Information reasonably sufficient to permit us to contact you
              </li>
              <li>
                A statement that you have a good faith belief that use of the
                material is not authorized
              </li>
              <li>
                A statement that the information in the notification is accurate
              </li>
              <li>
                The Author of the original work must be the person making this
                complaint
              </li>
            </ul>
            <p className="text-gray-700 mb-4">
              Takedown Notices should be sent to Catchme Group at
              <a
                href="mailto:info@thecatchmeapp.co"
                className="text-[#ff0a54] hover:underline font-semibold ml-1"
              >
                info@thecatchmeapp.co{" "}
                <ExternalLink className="w-4 h-4 inline ml-1" />
              </a>
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-6 border-b-2 border-[#ff0a54] pb-2">
              11. DISPUTE RESOLUTION
            </h2>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
              <p className="text-yellow-900 font-semibold mb-4">
                ARBITRATION AGREEMENT - Please read carefully
              </p>
              <p className="text-yellow-800 text-sm mb-0">
                This Arbitration Agreement requires you and Catchme Group to
                resolve disputes by binding arbitration instead of in court, and
                limits the manner in which we may seek relief from each other.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-black mb-2">
                  When Does This Apply?
                </h4>
                <p className="text-gray-700 text-sm">
                  This applies to any disputes between you and Catchme Group
                  arising out of or relating to the Terms, your use of our App,
                  or any other aspect of your relationship with Catchme.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-black mb-2">
                  Notice of Dispute
                </h4>
                <p className="text-gray-700 text-sm">
                  Before beginning arbitration, you and Catchme Group agree to
                  first notify one another of the dispute in writing via Email
                  at least 60 days in advance of initiating an arbitration.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-black mb-2">
                  No Jury Trials
                </h4>
                <p className="text-gray-700 text-sm">
                  By agreeing to arbitration, YOU AND CATCHME ARE EACH AGREEING
                  TO WAIVE THEIR RIGHTS TO A JURY TRIAL.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-black mb-2">
                  Individual Basis Only
                </h4>
                <p className="text-gray-700 text-sm">
                  All claims and disputes MUST BE ARBITRATED ON AN INDIVIDUAL
                  BASIS AND NOT ON A CLASS OR COLLECTIVE BASIS.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-6 border-b-2 border-[#ff0a54] pb-2">
              12. TERMINATION AND REMEDIES
            </h2>
            <p className="text-gray-700 mb-4">
              You can delete your Account at any time by logging into the App,
              going to the &quot;Settings&quot; tab, and following the
              instructions to terminate your account.
            </p>
            <p className="text-gray-700 mb-4">
              Catchme Group reserves the right to warn you, deactivate your
              content, discontinue your Account, notify law enforcement
              authorities, and/or pursue any other action which Catchme Group
              deems appropriate if you breach these Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-6 border-b-2 border-[#ff0a54] pb-2">
              13. MISCELLANEOUS
            </h2>
            <p className="text-gray-700 mb-4">
              These Terms constitute the entire agreement between you and the
              Catchme Group. We reserve the right to modify, amend or change the
              Terms at any time. Changes will be posted on this page and we will
              indicate the Effective Date of the updates.
            </p>
            <p className="text-gray-700 mb-4">
              Your continued use of Catchme following any Change constitutes
              your acceptance of the Change. If you do not accept any Changes to
              the Terms, you should stop using Catchme immediately.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-6 border-b-2 border-[#ff0a54] pb-2">
              14. THE CATCHME GROUP
            </h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                The Terms constitute a binding legal agreement between you as
                user (&quot;you&quot;) and the Catchme Group (&quot;we&quot; or
                &quot;us&quot;).
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Located at:</strong>
                <br />
                86 highest street NDDC Road
                <br />
                Igbeku Amukpe Sapele NG-DE
              </p>
              <p className="text-gray-700 mb-0">
                If you have any questions, complaints or claims with respect to
                the App, please contact us at
                <a
                  href="mailto:info@thecatchmeapp.co"
                  className="text-[#ff0a54] hover:underline font-semibold ml-1"
                >
                  info@thecatchmeapp.co{" "}
                  <ExternalLink className="w-4 h-4 inline ml-1" />
                </a>
              </p>
            </div>
          </section>
        </div>

        {/* Footer Links */}
        <div className="border-t border-gray-200 pt-8 mt-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-lg font-semibold text-black mb-4">
                Community
              </h3>
              <div className="space-y-2">
                <a
                  href="https://www.facebook.com/share/1Hx9fH6jph/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-600 hover:text-[#ff0a54] transition-colors"
                >
                  Facebook <ExternalLink className="w-4 h-4 inline ml-1" />
                </a>
                <a
                  href="https://x.com/thecatchmeapp?s=21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-600 hover:text-[#ff0a54] transition-colors"
                >
                  Twitter <ExternalLink className="w-4 h-4 inline ml-1" />
                </a>
                <a
                  href="https://www.instagram.com/thecatchme_app/profilecard/?igsh=NmRzbmw4aTh6aXA="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-600 hover:text-[#ff0a54] transition-colors"
                >
                  Instagram <ExternalLink className="w-4 h-4 inline ml-1" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-4">Safety</h3>
              <Link
                href="/faqs"
                className="block text-gray-600 hover:text-[#ff0a54] transition-colors"
              >
                FAQs
              </Link>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-4">Legal</h3>
              <div className="space-y-2">
                <Link
                  href="/terms"
                  className="block text-[#ff0a54] font-semibold"
                >
                  Terms and Conditions
                </Link>
                <Link
                  href="/privacy"
                  className="block text-gray-600 hover:text-[#ff0a54] transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/community-guidelines"
                  className="block text-gray-600 hover:text-[#ff0a54] transition-colors"
                >
                  Community Guidelines
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-[#ff0a54] to-[#e00948] rounded-2xl p-8 text-center text-white mt-12">
          <h3 className="text-2xl font-bold mb-4">Have Questions?</h3>
          <p className="mb-6">
            Our support team is here to help you understand our terms and
            conditions.
          </p>
          <Button asChild className="bg-white text-[#ff0a54] hover:bg-gray-100">
            <a href="mailto:support@thecatchmeapp.co">
              <Mail className="w-4 h-4 mr-2" />
              Contact Support
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
