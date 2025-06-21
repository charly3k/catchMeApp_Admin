import CatchMe from "@/assets/CatchMe";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { faAppleAlt, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Download,
  Mail,
  User,
  Shield,
  Camera,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CatchMeAppGuide() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white text-black">
        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
              CREATE YOUR ACCOUNT ON
            </h1>
            <div className="flex items-center mb-8 justify-center">
              <CatchMe />{" "}
              <h2 className="text-2xl  sm:text-5xl md:text-6xl font-extrabold  bg-gradient-to-r from-[#ff0a54] to-[#ff0a54]/80 bg-clip-text text-transparent">
                THECATCHMEAPP
              </h2>
            </div>

            <div className="w-24 h-1 bg-[#ff0a54] mx-auto rounded-full"></div>
          </div>

          {/* Introduction */}
          <Card className="mb-12 border-[#ff0a54]/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="bg-gradient-to-r from-[#ff0a54]/5 to-transparent">
              <CardTitle className="text-2xl font-bold text-black flex items-center gap-2">
                <div className="w-2 h-8 bg-[#ff0a54] rounded-full"></div>
                Introduction
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-lg leading-relaxed text-black">
                Welcome to TheCatchMeApp, your campus&apos;s go-to social space
                for meeting new people, making connections, and catching
                unforgettable vibes. Signing up is quick and easy. Just follow
                the steps below and you&apos;ll be in the loop in no time.
              </p>
            </CardContent>
          </Card>

          {/* Step-by-Step Guide */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-black">
              Step-by-Step Guide
            </h2>

            <div className="space-y-8">
              {/* Step 1 */}
              <Card className="border-[#ff0a54]/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[#ff0a54]/40">
                <CardHeader className="bg-gradient-to-r from-[#ff0a54]/5 to-transparent">
                  <CardTitle className="flex items-center gap-3 text-xl text-black">
                    <div className="w-10 h-10 bg-[#ff0a54] rounded-full flex items-center justify-center text-white font-bold">
                      1
                    </div>
                    <Download className="w-6 h-6 text-[#ff0a54]" />
                    Download the App
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-2 text-black">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#ff0a54] rounded-full"></div>
                      Visit the App Store (iOS) or Google Play (Android).
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#ff0a54] rounded-full"></div>
                      Or Search for &quot;TheCatchMeApp&quot;.
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#ff0a54] rounded-full"></div>
                      Tap Download or Install.
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Step 2 */}
              <Card className="border-[#ff0a54]/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[#ff0a54]/40">
                <CardHeader className="bg-gradient-to-r from-[#ff0a54]/5 to-transparent">
                  <CardTitle className="flex items-center gap-3 text-xl text-black">
                    <div className="w-10 h-10 bg-[#ff0a54] rounded-full flex items-center justify-center text-white font-bold">
                      2
                    </div>
                    <User className="w-6 h-6 text-[#ff0a54]" />
                    Launch the App
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-2 text-black">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#ff0a54] rounded-full"></div>
                      Open the app once it&apos;s installed.
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#ff0a54] rounded-full"></div>
                      Tap &quot;Login&quot; or &quot;Sign Up&quot;.
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Step 3 */}
              <Card className="border-[#ff0a54]/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[#ff0a54]/40">
                <CardHeader className="bg-gradient-to-r from-[#ff0a54]/5 to-transparent">
                  <CardTitle className="flex items-center gap-3 text-xl text-black">
                    <div className="w-10 h-10 bg-[#ff0a54] rounded-full flex items-center justify-center text-white font-bold">
                      3
                    </div>
                    <Mail className="w-6 h-6 text-[#ff0a54]" />
                    Choose Sign-Up Method
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="mb-4 text-black font-medium">
                    You can sign up with:
                  </p>
                  <ul className="space-y-2 text-black ml-4">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 border-2 border-[#ff0a54] rounded-full"></div>
                      Your email address and,
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 border-2 border-[#ff0a54] rounded-full"></div>
                      Your first and last name
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 border-2 border-[#ff0a54] rounded-full"></div>
                      or use your Apple ID or Google Account to sign up (if
                      available)
                    </li>
                    <div className="flex justify-center">
                      <div className="relative">
                        <Image
                          src="/img/get-started/IMG_6965.webp"
                          alt="Email verification process showing inbox with verification code"
                          width={400}
                          height={300}
                          className="rounded-lg border-2 border-[#ff0a54]/20 shadow-lg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#ff0a54]/10 to-transparent rounded-lg"></div>
                      </div>
                    </div>
                  </ul>
                </CardContent>
              </Card>

              {/* Step 4 */}
              <Card className="border-[#ff0a54]/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[#ff0a54]/40">
                <CardHeader className="bg-gradient-to-r from-[#ff0a54]/5 to-transparent">
                  <CardTitle className="flex items-center gap-3 text-xl text-black">
                    <div className="w-10 h-10 bg-[#ff0a54] rounded-full flex items-center justify-center text-white font-bold">
                      4
                    </div>
                    <Shield className="w-6 h-6 text-[#ff0a54]" />
                    Verify Your Identity
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-2 text-black mb-6">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#ff0a54] rounded-full"></div>
                      Enter your student email address (recommended for access
                      to student-only features)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#ff0a54] rounded-full"></div>
                      Enter the code sent to your student email
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#ff0a54] rounded-full"></div>
                      Check your inbox/spam for the confirmation code.
                    </li>
                  </ul>
                  <div className="flex justify-center">
                    <div className="relative">
                      <Image
                        src="/img/get-started/IMG_6966.webp"
                        alt="Email verification process showing inbox with verification code"
                        width={400}
                        height={300}
                        className="rounded-lg border-2 border-[#ff0a54]/20 shadow-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#ff0a54]/10 to-transparent rounded-lg"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Step 5 */}
              <Card className="border-[#ff0a54]/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[#ff0a54]/40">
                <CardHeader className="bg-gradient-to-r from-[#ff0a54]/5 to-transparent">
                  <CardTitle className="flex items-center gap-3 text-xl text-black">
                    <div className="w-10 h-10 bg-[#ff0a54] rounded-full flex items-center justify-center text-white font-bold">
                      5
                    </div>
                    <Camera className="w-6 h-6 text-[#ff0a54]" />
                    Create Your Profile
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="mb-4 text-black font-medium">Add your:</p>
                  <ul className="space-y-2 text-black ml-4 mb-6">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 border-2 border-[#ff0a54] rounded-full"></div>
                      Date of birth
                    </li>
                    <div className="flex justify-center">
                      <div className="relative">
                        <Image
                          src="/img/get-started/IMG_6967.webp"
                          alt="Email verification process showing inbox with verification code"
                          width={400}
                          height={300}
                          className="rounded-lg border-2 border-[#ff0a54]/20 shadow-lg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#ff0a54]/10 to-transparent rounded-lg"></div>
                      </div>
                    </div>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 border-2 border-[#ff0a54] rounded-full mt-2"></div>
                      <span>
                        Add Profile photo (you must upload at least 2 photos,
                        and your first photo must be a picture of you to prevent
                        your account from being deactivated. Also, any obscene
                        photo will lead to deactivation and/or deletion of your
                        account according to our terms and conditions)
                      </span>
                    </li>

                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 border-2 border-[#ff0a54] rounded-full"></div>
                      Select your Gender
                    </li>
                    <div className="flex justify-center">
                      <div className="relative">
                        <Image
                          src="/img/get-started/IMG_6969.webp"
                          alt="Email verification process showing inbox with verification code"
                          width={400}
                          height={300}
                          className="rounded-lg border-2 border-[#ff0a54]/20 shadow-lg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#ff0a54]/10 to-transparent rounded-lg"></div>
                      </div>
                    </div>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 border-2 border-[#ff0a54] rounded-full"></div>
                      Select your gender preferences (who you would like to see)
                    </li>
                    <div className="flex justify-center">
                      <div className="relative">
                        <Image
                          src="/img/get-started/IMG_6970.webp"
                          alt="Email verification process showing inbox with verification code"
                          width={400}
                          height={300}
                          className="rounded-lg border-2 border-[#ff0a54]/20 shadow-lg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#ff0a54]/10 to-transparent rounded-lg"></div>
                      </div>
                    </div>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 border-2 border-[#ff0a54] rounded-full"></div>
                      Select Campus/university name, course of study and level
                    </li>
                    <div className="flex justify-center">
                      <div className="relative">
                        <Image
                          src="/img/get-started/IMG_6971.webp"
                          alt="Email verification process showing inbox with verification code"
                          width={400}
                          height={300}
                          className="rounded-lg border-2 border-[#ff0a54]/20 shadow-lg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#ff0a54]/10 to-transparent rounded-lg"></div>
                      </div>
                    </div>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 border-2 border-[#ff0a54] rounded-full"></div>
                      Select your interest (you must make at least three (3)
                      selections)
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Step 6 */}
              <Card className="border-[#ff0a54]/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[#ff0a54]/40">
                <CardHeader className="bg-gradient-to-r from-[#ff0a54]/5 to-transparent">
                  <CardTitle className="flex items-center gap-3 text-xl text-black">
                    <div className="w-10 h-10 bg-[#ff0a54] rounded-full flex items-center justify-center text-white font-bold">
                      6
                    </div>
                    <CheckCircle className="w-6 h-6 text-[#ff0a54]" />
                    Done!
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-2 text-black">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#ff0a54] rounded-full mt-2"></div>
                      <span>
                        You will be navigated to your home swipe screen.
                        You&apos;re now ready to explore TheCatchMeApp!
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#ff0a54] rounded-full mt-2"></div>
                      <span>
                        Navigate to your profile to update other features like
                        height, religion, zodiac sign, bio etc. This increases
                        your visibility and chance of finding your date, friend
                        or study partner.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#ff0a54] rounded-full mt-2"></div>
                      <span>
                        Start liking profiles, catching up with students around
                        you online. Also, as a verified student, please utilize
                        the discovery page to search for other students through
                        school, courses of study and study level, across UK
                        universities students on TheCatchMeApp.
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <Separator className="my-12 bg-gradient-to-r from-transparent via-[#ff0a54]/30 to-transparent h-px" />

          {/* FAQs */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-black flex items-center gap-3">
              <div className="w-2 h-8 bg-[#ff0a54] rounded-full"></div>
              FAQs
            </h2>
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-r from-[#ff0a54]/5 to-transparent rounded-lg border border-[#ff0a54]/10">
                <h3 className="text-lg font-semibold mb-2 text-[#ff0a54]">
                  Q: Do I need to be a student to join?
                </h3>
                <p className="text-black">
                  A: Yes, TheCatchMeApp is designed for students, and university
                  verification may be required.
                </p>
              </div>
              <div className="p-6 bg-gradient-to-r from-[#ff0a54]/5 to-transparent rounded-lg border border-[#ff0a54]/10">
                <h3 className="text-lg font-semibold mb-2 text-[#ff0a54]">
                  Q: I didn&apos;t receive a verification code. What should I
                  do?
                </h3>
                <p className="text-black">
                  A: Check your spam folder. If it&apos;s not there, tap
                  &quot;Resend code&quot; on the app.
                </p>
              </div>
              <div className="p-6 bg-gradient-to-r from-[#ff0a54]/5 to-transparent rounded-lg border border-[#ff0a54]/10">
                <h3 className="text-lg font-semibold mb-2 text-[#ff0a54]">
                  Q: Can I change my profile later?
                </h3>
                <p className="text-black">
                  A: Absolutely. Go to your profile settings to update photos,
                  bio, or interests anytime.
                </p>
              </div>
            </div>
          </div>

          <Separator className="my-12 bg-gradient-to-r from-transparent via-[#ff0a54]/30 to-transparent h-px" />

          {/* Troubleshooting Tips */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-black flex items-center gap-3">
              <div className="w-2 h-8 bg-[#ff0a54] rounded-full"></div>
              Troubleshooting Tips
            </h2>
            <div className="bg-gradient-to-r from-[#ff0a54]/5 to-transparent p-6 rounded-lg border border-[#ff0a54]/10">
              <ul className="space-y-3 text-black">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#ff0a54] rounded-full mt-2"></div>
                  <span>
                    App won&apos;t download? Check your device storage and
                    internet connection.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#ff0a54] rounded-full mt-2"></div>
                  <span>
                    Verification issues? Double-check the email or number you
                    entered.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#ff0a54] rounded-full mt-2"></div>
                  <span>
                    Stuck during sign-up? Restart the app or contact
                    support@thecatchmeapp.co
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-12 bg-gradient-to-r from-transparent via-[#ff0a54]/30 to-transparent h-px" />

          {/* Call-to-Action */}
          <div className="text-center bg-gradient-to-r from-[#ff0a54]/5 via-transparent to-[#ff0a54]/5 p-12 rounded-2xl border border-[#ff0a54]/10">
            <h2 className="text-3xl font-bold mb-6 text-black">
              Call-to-Action
            </h2>
            <p className="text-xl mb-8 text-black">
              Ready to connect with your campus like never before?
            </p>
            <Button
              //size="lg"
              className="bg-[#ff0a54] text-white hover:bg-[#ff0a54]/90 px-8 py-4 text-xs lg:text-lg font-semibold shadow-lg"
            >
              Download TheCatchMeApp Now
            </Button>

            <div className="flex flex-col lg:flex-row w-full gap-10 justify-center mt-6 ">
              <Link
                href={
                  "https://play.google.com/store/apps/details?id=com.boogie2k.catchmeappfrontend"
                }
                target="_blank"
                className="flex flex-row bg-white py-2.5 px-3.5 gap-7   rounded-4xl justify-around shadow-lg shadow-black/50 self-center md:self-start  hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <FontAwesomeIcon
                  style={{ width: 48, height: 48, color: "black" }}
                  icon={faPlay}
                />
                <div className="flex flex-col">
                  <p className="font-dmSans text-black">available on</p>
                  <p className="font-raleway text-black">Google Play</p>
                </div>
              </Link>
              <Link
                target="_blank"
                href={
                  "https://apps.apple.com/gb/app/thecatchmeapp/id6738162941"
                }
                className="flex flex-row bg-white py-2.5 px-3.5 gap-7 rounded-4xl justify-around shadow-lg shadow-black/50 self-center md:self-start  hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <FontAwesomeIcon
                  style={{ width: 48, height: 48, color: "black" }}
                  icon={faAppleAlt}
                />
                <div className="flex flex-col">
                  <p className="font-dmSans text-black">available on</p>
                  <p className="font-raleway text-black">App store</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
