import Link from "next/link";
import { ArrowLeft, Mail, ExternalLink, Shield, Lock, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PrivacyPage() {
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
            Privacy <span className="text-[#ff0a54]">Policy</span>
          </h1>
          <p className="text-xl text-gray-300">
            Effective date: November 25th, 2024
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg max-w-none">
          <div className="bg-[#ff0a54]/5 border-l-4 border-[#ff0a54] p-6 rounded-r-lg mb-8">
            <p className="text-gray-700 mb-4">
              Welcome to the Catchme Privacy Policy (&quot;Policy&quot;). This
              policy explains how we collect, store, protect, and share your
              information, and with whom we share it.
            </p>
            <p className="text-gray-700 mb-0">
              We suggest you read this in conjunction with our
              <Link
                href="/terms"
                className="text-[#ff0a54] hover:underline font-semibold ml-1"
              >
                terms and conditions
              </Link>
              .
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Data Protection
              </h3>
              <p className="text-blue-800 text-sm">
                We protect your personal data with industry-standard security
                measures
              </p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <Lock className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-green-900 mb-2">
                Secure Storage
              </h3>
              <p className="text-green-800 text-sm">
                Your information is encrypted and stored securely on our servers
              </p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <Eye className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-purple-900 mb-2">
                Transparency
              </h3>
              <p className="text-purple-800 text-sm">
                We&apos;re transparent about what data we collect and how we use
                it
              </p>
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-6 border-b-2 border-[#ff0a54] pb-2">
              Who We Are
            </h2>
            <p className="text-gray-700 mb-4">
              The Catchme App is operated by the &quot;Catchme Group&quot; (also
              referred to in this policy as &quot;we&quot; or &quot;us&quot;) we
              are controllers of personal information collected and processed
              through the Catchme App.
            </p>
            <p className="text-gray-700 mb-4">
              You can email
              <a
                href="mailto:info@thecatchmeapp.co"
                className="text-[#ff0a54] hover:underline font-semibold ml-1"
              >
                info@thecatchmeapp.co{" "}
                <ExternalLink className="w-4 h-4 inline ml-1" />
              </a>
              to reach our designated personal data protection team.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-6 border-b-2 border-[#ff0a54] pb-2">
              1. COLLECTION OF INFORMATION
            </h2>

            <div className="space-y-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">
                  Registration Information
                </h3>
                <p className="text-gray-700 mb-4">
                  When you download the App and create an account, we may
                  collect certain information about you, such as:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Names</li>
                  <li>Email address</li>
                  <li>Student email address</li>
                  <li>Gender identity</li>
                  <li>Date of birth</li>
                  <li>Sexual preference</li>
                  <li>Photographs</li>
                  <li>Location</li>
                  <li>
                    Login information for social media accounts (Facebook, etc.)
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">
                  Profile Information
                </h3>
                <p className="text-blue-800 mb-4">
                  We recommend and encourage you to think carefully about the
                  information you disclose about yourself. We do not recommend
                  that you put sensitive information on your profile for other
                  users to see.
                </p>
                <p className="text-blue-800 text-sm mb-0">
                  <strong>Note:</strong> Email address and student email are
                  only visible to you unless you willingly add them to your
                  profile.
                </p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-900 mb-4">
                  Profile Verification Information
                </h3>
                <p className="text-green-800 mb-4">
                  For safety and security, we require Users to verify their
                  accounts and might ask for your student email. We want to
                  avoid fake Catchme accounts being created which can be used
                  for malicious activities.
                </p>
                <p className="text-green-800 text-sm mb-0">
                  <strong>Benefits of Verification:</strong> Verified students
                  enjoy full access to the app including access to discovery
                  page and unlimited swipes.
                </p>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-yellow-900 mb-4">
                  Geolocation Information
                </h3>
                <p className="text-yellow-800 mb-4">
                  If you have given Catchme access to your location, we will
                  collect information about your longitude and latitude to
                  personalize the App and make it easier for you to interact
                  with other Users.
                </p>
                <div className="bg-white rounded p-4">
                  <p className="text-yellow-900 font-semibold mb-2">
                    To turn off location access:
                  </p>
                  <ul className="list-disc list-inside text-yellow-800 text-sm space-y-1">
                    <li>
                      <strong>iPhone:</strong> Settings → Privacy → Location
                      Services → Catchme
                    </li>
                    <li>
                      <strong>Android:</strong> Settings → Location → Catchme →
                      Permissions → Location
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-purple-900 mb-4">
                  Customer Support
                </h3>
                <p className="text-purple-800 mb-4">
                  If you contact our Customer Support team via
                  <a
                    href="mailto:support@thecatchmeapp.co"
                    className="text-[#ff0a54] hover:underline font-semibold ml-1"
                  >
                    support@thecatchmeapp.co{" "}
                    <ExternalLink className="w-4 h-4 inline ml-1" />
                  </a>
                  , we will receive your email address and may track your IP
                  address.
                </p>
                <p className="text-purple-800 text-sm mb-0">
                  We will keep records of our communications with you, including
                  any complaints, for 2 years after deletion of your account.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-6 border-b-2 border-[#ff0a54] pb-2">
              2. USE OF YOUR INFORMATION
            </h2>

            <p className="text-gray-700 mb-6">
              Our main goal is to ensure your experience on Catchme is an
              enjoyable one. We may use your information to:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <div className="bg-[#ff0a54]/5 border border-[#ff0a54]/20 rounded-lg p-4">
                  <h4 className="font-semibold text-[#ff0a54] mb-2">
                    Service Delivery
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                    <li>Offer you our services and features</li>
                    <li>Personalize the App and content</li>
                    <li>Contact you with updates and new features</li>
                  </ul>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-600 mb-2">
                    Research & Analytics
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                    <li>Conduct research about app usage</li>
                    <li>Test new technologies and processes</li>
                    <li>Enhance and improve the App</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-600 mb-2">
                    Safety & Security
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                    <li>Resolve disputes and troubleshoot problems</li>
                    <li>Investigate fraud and protect legal rights</li>
                    <li>Protect Users and third parties from harm</li>
                  </ul>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-600 mb-2">
                    Marketing
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                    <li>Send promotional information (with consent)</li>
                    <li>Direct marketing communications</li>
                    <li>Survey participation invitations</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-[#ff0a54]/5 border border-[#ff0a54]/20 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-[#ff0a54] mb-4">
                Our Matching Algorithms
              </h3>
              <p className="text-gray-700 mb-4">
                TheCatchMeApp&apos;s mission is to facilitate student dating
                experience and create loving and equitable relationships. We
                have developed matching algorithms to predict your compatibility
                with other users.
              </p>
              <p className="text-gray-700 mb-4">
                We use the following data to generate recommendations:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                <li>Profile information (age, distance, gender)</li>
                <li>
                  School and interests to show potential users around your
                  preferences
                </li>
                <li>
                  App interaction data to suggest active and available users
                </li>
                <li>Device coordinates for proximity understanding</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-yellow-900 mb-4">
                Moderation Practices
              </h3>
              <p className="text-yellow-800 mb-4">
                We use a combination of automated systems and a team of
                moderators to monitor and review accounts that indicate breaches
                of our Terms and Conditions of Use.
              </p>
              <p className="text-yellow-800 text-sm mb-0">
                If you post anything inconsistent with our Terms and Conditions,
                we reserve the right to terminate or restrict access to your
                Account.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-6 border-b-2 border-[#ff0a54] pb-2">
              3. DISCLOSURE OF INFORMATION
            </h2>

            <p className="text-gray-700 mb-6">
              Our policy is to not disclose your Registration Information or
              personal data, except in limited circumstances:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 p-4 text-left font-semibold text-black">
                      Circumstances
                    </th>
                    <th className="border border-gray-300 p-4 text-left font-semibold text-black">
                      Data Disclosed
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-4 text-gray-700">
                      <strong>Service Providers</strong>
                      <br />
                      <span className="text-sm">
                        Trusted third parties performing functions for us
                      </span>
                    </td>
                    <td className="border border-gray-300 p-4 text-gray-700 text-sm">
                      This could include all data necessary for the service
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-4 text-gray-700">
                      <strong>Moderators</strong>
                      <br />
                      <span className="text-sm">
                        To monitor activity and approve content
                      </span>
                    </td>
                    <td className="border border-gray-300 p-4 text-gray-700 text-sm">
                      Name, registration details, profile information, student
                      email, photographs
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-4 text-gray-700">
                      <strong>Business Transfers</strong>
                      <br />
                      <span className="text-sm">
                        Mergers, acquisitions, reorganizations
                      </span>
                    </td>
                    <td className="border border-gray-300 p-4 text-gray-700 text-sm">
                      This could include all personal data that Catchme holds
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-4 text-gray-700">
                      <strong>Marketing Services</strong>
                      <br />
                      <span className="text-sm">
                        Third party advertising and measurement
                      </span>
                    </td>
                    <td className="border border-gray-300 p-4 text-gray-700 text-sm">
                      Device ID, estimated location, age, gender, app visit data
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-4 text-gray-700">
                      <strong>Anti-Spam and Anti-Fraud</strong>
                      <br />
                      <span className="text-sm">
                        Security team for blocking suspicious activities
                      </span>
                    </td>
                    <td className="border border-gray-300 p-4 text-gray-700 text-sm">
                      Email address, IP address, social network ID, name, user
                      agent string
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">
                Facebook Data Sharing
              </h3>
              <p className="text-blue-800 mb-4">
                Where we share data with Facebook as our Marketing Service
                Provider, you should contact Facebook if you wish to exercise
                your data protection rights.
              </p>
              <p className="text-blue-800 text-sm mb-0">
                Further information can be found in
                <a
                  href="https://en-gb.facebook.com/policy.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ff0a54] hover:underline font-semibold ml-1"
                >
                  Facebook Ireland&apos;s Data Policy{" "}
                  <ExternalLink className="w-4 h-4 inline ml-1" />
                </a>
                .
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-6 border-b-2 border-[#ff0a54] pb-2">
              4. WHAT OTHERS MAY SEE ABOUT YOU
            </h2>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
              <p className="text-yellow-900 font-semibold mb-4">
                Important: When using the Catchme App, you should assume that
                anything you post or submit may be publicly-viewable and
                accessible.
              </p>
              <p className="text-yellow-800 text-sm mb-0">
                We want our Users to be careful about posting information that
                may eventually be made public.
              </p>
            </div>

            <p className="text-gray-700 mb-4">
              Please be careful about posting sensitive details about yourself
              on your profile such as your religious denomination and health
              details. When you upload and choose to tell us sensitive
              information about yourself, you are explicitly consenting to our
              processing of this information and making it public to other
              Users.
            </p>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-red-900 mb-2">
                Profile Sharing
              </h4>
              <p className="text-red-800 text-sm mb-0">
                Your Catchme profile may be viewed and shared by Users with
                individuals who may or may not be users of the App. For example,
                a User may recommend you as a match by taking a screenshot of
                your profile picture and sharing it.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-6 border-b-2 border-[#ff0a54] pb-2">
              5. OUR POLICY TOWARDS AGE
            </h2>

            <div className="bg-[#ff0a54]/5 border border-[#ff0a54]/20 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                <strong>Age Requirement:</strong> You have to be at least 18
                years old to use Catchme.
              </p>
              <p className="text-gray-700 text-sm mb-0">
                Catchme does not knowingly collect any information about or
                market to children, minors or anyone under the age of 18. If we
                become aware that someone under 18 has registered with us, we
                will take steps to terminate that person&apos;s registration.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-6 border-b-2 border-[#ff0a54] pb-2">
              6. SECURITY
            </h2>

            <p className="text-gray-700 mb-6">
              Here at Catchme, we pride ourselves on taking all appropriate
              security measures to help protect your information against loss,
              misuse and unauthorized access, or disclosure.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-green-900 mb-4">
                  Our Security Measures
                </h4>
                <ul className="list-disc list-inside text-green-800 text-sm space-y-1">
                  <li>Secured servers using firewalls</li>
                  <li>Reasonable security measures for confidentiality</li>
                  <li>Industry-standard encryption protocols</li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-blue-900 mb-4">
                  Tips to Keep Your Data Secure
                </h4>
                <ul className="list-disc list-inside text-blue-800 text-sm space-y-1">
                  <li>Log out of your Account after use</li>
                  <li>Don&apos;t share your password with anyone</li>
                  <li>Change your password periodically</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <p className="text-yellow-900 text-sm mb-0">
                <strong>Disclaimer:</strong> No website, App or Internet
                transmission is ever completely 100% secure. We cannot guarantee
                that unauthorized access, hacking, data loss or other breaches
                will never occur. Any transmission is at your own risk.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-6 border-b-2 border-[#ff0a54] pb-2">
              7. LINKING OTHER ACCOUNTS TO CATCHME
            </h2>

            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-blue-900 mb-4">
                  Facebook Integration
                </h4>
                <p className="text-blue-800 mb-4">
                  When you sign in using your Facebook account, you give
                  permission to Facebook to share:
                </p>
                <ul className="list-disc list-inside text-blue-800 text-sm space-y-1">
                  <li>Name and profile picture</li>
                  <li>Email address (if available)</li>
                  <li>Date of birth</li>
                  <li>Profile photos</li>
                  <li>Gender</li>
                  <li>Page likes and current town/city</li>
                </ul>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-red-900 mb-4">
                  Gmail Integration
                </h4>
                <p className="text-red-800 mb-4">
                  If you register with Gmail, you give Google permission to
                  share:
                </p>
                <ul className="list-disc list-inside text-red-800 text-sm space-y-1">
                  <li>Google login credentials</li>
                  <li>Name (that can be edited by you)</li>
                  <li>Email address (linked to your Catchme account)</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-6 border-b-2 border-[#ff0a54] pb-2">
              8. YOUR RIGHTS
            </h2>

            <p className="text-gray-700 mb-6">
              Privacy laws applicable in the UK may give you the following
              rights:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-black mb-2">
                    Right to be informed
                  </h4>
                  <p className="text-gray-700 text-sm">
                    What personal data we process and why
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-black mb-2">
                    Right of access
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Request a copy of your data
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-black mb-2">
                    Right of rectification
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Have inaccurate data corrected
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-black mb-2">
                    Right to erasure
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Have your data deleted in certain circumstances
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-black mb-2">
                    Right to restrict processing
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Request processing is stopped but data retained
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-black mb-2">
                    Right to data portability
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Request data in machine-readable form
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-black mb-2">
                    Right to object
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Object to processing in certain circumstances
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-black mb-2">
                    Automated decision-making rights
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Ensure human intervention in automated decisions
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#ff0a54]/5 border border-[#ff0a54]/20 rounded-lg p-6 mb-6">
              <p className="text-gray-700 mb-4">
                If you want to exercise any of your rights, please email our
                Data Protection team at
                <a
                  href="mailto:info@thecatchmeapp.co"
                  className="text-[#ff0a54] hover:underline font-semibold ml-1"
                >
                  info@thecatchmeapp.co{" "}
                  <ExternalLink className="w-4 h-4 inline ml-1" />
                </a>
              </p>
              <p className="text-gray-700 text-sm mb-0">
                For your protection and the protection of all Users, we may need
                to request specific information from you to help us confirm your
                identity before we can answer requests.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-blue-900 mb-2">
                Complaints
              </h4>
              <p className="text-blue-800 mb-4">
                If you have a concern about how we have processed your request
                or personal data, contact us first. If we haven&apos;t resolved
                your concern, you have the right to make a complaint to the
                <a
                  href="http://www.ico.org.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ff0a54] hover:underline font-semibold ml-1"
                >
                  Information Commissioner&apos;s Office (ICO){" "}
                  <ExternalLink className="w-4 h-4 inline ml-1" />
                </a>
                , the UK supervisory authority for data protection issues.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-6 border-b-2 border-[#ff0a54] pb-2">
              9. DATA LOCATIONS
            </h2>
            <p className="text-gray-700 mb-4">
              The Catchme App will only collect student email data from UK
              students as the UK is our target for now. In subsequent years, we
              will be looking forward to expanding our regional operations.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <p className="text-green-800 text-sm mb-0">
                <strong>Coming Soon:</strong> If you are a student who wants to
                join this community but you are not in the UK territory, BE
                PATIENT WE ARE COMING TO YOU SOON!
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-6 border-b-2 border-[#ff0a54] pb-2">
              10. DATA RETENTION AND DELETION
            </h2>

            <p className="text-gray-700 mb-6">
              We keep your personal information only as long as we need it for
              the legal basis relied upon and as permitted by applicable law.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-semibold text-yellow-900 mb-4">
                Account Deletion Process
              </h4>
              <ul className="list-disc list-inside text-yellow-800 space-y-2 text-sm">
                <li>
                  When your Account is deleted, it is no longer viewable in the
                  App
                </li>
                <li>
                  For up to 30 days, it is possible to restore your Account if
                  accidentally deleted
                </li>
                <li>
                  After 30 days, we begin deleting your personal information
                  from our systems
                </li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-semibold text-red-900 mb-4">
                Exceptions to Deletion
              </h4>
              <p className="text-red-800 mb-4">
                We may keep information longer if:
              </p>
              <ul className="list-disc list-inside text-red-800 space-y-1 text-sm">
                <li>
                  We must keep it to evidence compliance with applicable law
                </li>
                <li>
                  There is an outstanding issue, claim or dispute requiring the
                  information
                </li>
                <li>
                  The information must be kept for legitimate business interests
                  (fraud prevention, safety)
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-black mb-2">
                Important Warning
              </h4>
              <p className="text-gray-700 text-sm mb-0">
                Even after you remove information from your profile or delete
                your Account, copies may still be viewable if previously shared
                with others. We cannot control this, nor do we accept liability
                for this.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-6 border-b-2 border-[#ff0a54] pb-2">
              11. CHANGES TO THIS POLICY
            </h2>
            <p className="text-gray-700 mb-4">
              As Catchme evolves, we may revise this Privacy Policy from time to
              time. If we make a material change, we will notify you via email
              or by posting a notice within Catchme.
            </p>
            <p className="text-gray-700 mb-4">
              If you have any questions, please send an email to
              <a
                href="mailto:info@thecatchmeapp.co"
                className="text-[#ff0a54] hover:underline font-semibold ml-1"
              >
                info@thecatchmeapp.co{" "}
                <ExternalLink className="w-4 h-4 inline ml-1" />
              </a>
            </p>
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
                  className="block text-gray-600 hover:text-[#ff0a54] transition-colors"
                >
                  Terms and Conditions
                </Link>
                <Link
                  href="/privacy"
                  className="block text-[#ff0a54] font-semibold"
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
          <h3 className="text-2xl font-bold mb-4">
            Questions About Your Privacy?
          </h3>
          <p className="mb-6">
            Our data protection team is here to help you understand how we
            handle your information.
          </p>
          <Button asChild className="bg-white text-[#ff0a54] hover:bg-gray-100">
            <a href="mailto:info@thecatchmeapp.co">
              <Mail className="w-4 h-4 mr-2" />
              Contact Data Protection Team
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
