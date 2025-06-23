import Link from "next/link";
import {
  ArrowLeft,
  Mail,
  ExternalLink,
  Shield,
  AlertTriangle,
  Users,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CommunityGuidelinesPage() {
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
            Community <span className="text-[#ff0a54]">Guidelines</span>
          </h1>
          <p className="text-xl text-gray-300">
            Creating a safe, inclusive, and respectful community
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg max-w-none">
          <div className="bg-[#ff0a54]/5 border-l-4 border-[#ff0a54] p-6 rounded-r-lg mb-8">
            <p className="text-gray-700 mb-0">
              Catchme is a space to make kind connections in a safe, inclusive,
              and respectful way. In order to enhance healthy relationships, we
              hold our members accountable for the way they treat each other.
              Our Community Guidelines help keep our members safe by making it
              clear what content and conduct is not acceptable (on our platform
              and off).
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Safety First
              </h3>
              <p className="text-blue-800 text-sm">
                Protecting our community is our top priority
              </p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-green-900 mb-2">
                Inclusive
              </h3>
              <p className="text-green-800 text-sm">
                Welcoming to all students regardless of background
              </p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <Heart className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-purple-900 mb-2">
                Respectful
              </h3>
              <p className="text-purple-800 text-sm">
                Treating everyone with kindness and respect
              </p>
            </div>
            <div className="text-center p-6 bg-yellow-50 rounded-lg">
              <AlertTriangle className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-yellow-900 mb-2">
                Authentic
              </h3>
              <p className="text-yellow-800 text-sm">
                Being genuine and honest in all interactions
              </p>
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-6 border-b-2 border-[#ff0a54] pb-2">
              Profile Guidelines
            </h2>

            <div className="space-y-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-red-900 mb-4">
                  Age Requirements
                </h3>
                <ul className="list-disc list-inside text-red-800 space-y-2">
                  <li>You need to be at least 18 years old to join Catchme</li>
                  <li>
                    Creating a profile that intentionally misrepresents you as
                    being under 18 is not allowed
                  </li>
                  <li>
                    We reserve the right to ask for your ID to verify your age
                  </li>
                  <li>
                    We&apos;ll block you from the platform if you&apos;re
                    underage
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">
                  Profile Photos
                </h3>
                <p className="text-blue-800 mb-4">
                  We want your profile to be your authentic self! That&apos;s
                  why we require at least two of your profile photos, with the
                  first photo depicting only you.
                </p>
                <div className="bg-white rounded p-4">
                  <h4 className="font-semibold text-red-900 mb-2">
                    We will restrict/block your account if you upload:
                  </h4>
                  <ul className="list-disc list-inside text-red-800 space-y-1 text-sm">
                    <li>
                      Profile photos that are heavily distorted or contain
                      exaggerated digital effects
                    </li>
                    <li>
                      Memes or photos with only — or primarily — text as a
                      profile photo
                    </li>
                    <li>Profile photos of children on their own</li>
                    <li>Profile photos with unclothed children</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-900 mb-4">
                  Names and Usernames
                </h3>
                <p className="text-green-800 mb-4">
                  Students/Members have to use their legal name or full name.
                  Usernames should be an authentic representation of the name
                  you use in everyday life.
                </p>
                <div className="bg-white rounded p-4">
                  <h4 className="font-semibold text-red-900 mb-2">
                    We do not permit:
                  </h4>
                  <ul className="list-disc list-inside text-red-800 space-y-1 text-sm">
                    <li>
                      Any words or phrases that violate our Community Guidelines
                    </li>
                    <li>
                      Using the name of a celebrity or fictional character
                    </li>
                    <li>
                      Words or characters including descriptive words, symbols
                      (e.g. $, *, @), emojis, numbers, or punctuation
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-6 border-b-2 border-[#ff0a54] pb-2">
              Content and Conduct Guidelines
            </h2>

            <div className="space-y-8">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-red-900 mb-4">
                  Nudity and Sexual Activity Content
                </h3>
                <p className="text-red-800 mb-0">
                  We don&apos;t permit nude, sexually explicit, or sexually
                  vulgar profile content. We also don&apos;t allow the
                  commercial exchange of any romantic or sexual activity,
                  content, or services, including attempts to sell, advertise,
                  or buy adult sexual content.
                </p>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-orange-900 mb-4">
                  Abusive Content
                </h3>
                <p className="text-orange-800 mb-4">
                  We don&apos;t allow content or behavior that makes any
                  individual or group feel harassed, bullied, or targeted. This
                  includes:
                </p>
                <ul className="list-disc list-inside text-orange-800 space-y-1 text-sm">
                  <li>Belittling, insulting, or intimidating behavior</li>
                  <li>
                    Making unsolicited comments about someone&apos;s appearance
                  </li>
                  <li>Engaging in emotional abuse</li>
                  <li>Blackmail</li>
                  <li>Repeated unwanted contact</li>
                  <li>Wishing, encouraging, or praising acts of violence</li>
                </ul>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-red-900 mb-4">
                  Child Sexual Exploitation, Abuse and Molestation
                </h3>
                <p className="text-red-800 mb-4">
                  <strong>Zero Tolerance Policy:</strong> We do not tolerate any
                  form of child sexual exploitation, molestation and abuse. We
                  don&apos;t allow content that sexualizes or endangers
                  children, real or fictional.
                </p>
                <p className="text-red-800 text-sm mb-0">
                  For the purposes of this policy, a child is anyone under the
                  age of 18. It&apos;s prohibited to upload, store, produce,
                  share, or entice anyone to share child sexual abuse material,
                  even if the intent is to express outrage or raise awareness
                  about this issue.
                </p>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-yellow-900 mb-4">
                  Commercial and Promotional Activity
                </h3>
                <p className="text-yellow-800 mb-0">
                  Our platform is not a marketplace. We don&apos;t allow using
                  Catchme for unsolicited commercial or promotional purposes.
                </p>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-purple-900 mb-4">
                  Controlled Goods and Substances
                </h3>
                <p className="text-purple-800 mb-4">
                  We don&apos;t allow members to use our platforms to buy, sell,
                  supply, distribute, or directly facilitate the purchase, sale,
                  supply, or distribution of illegal drugs and/or the misuse of
                  controlled goods and substances.
                </p>
                <p className="text-purple-800 text-sm mb-0">
                  This includes: e-cigarettes, marijuana, drug paraphernalia, or
                  the misuse of legal substances like prescription drugs,
                  tobacco, or alcohol.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Dangerous Organizations and Individuals
                </h3>
                <p className="text-gray-800 mb-0">
                  We don&apos;t permit organizations or individuals that
                  proclaim, glorify, condone, or are known to support a violent,
                  dangerous, or terrorist-based mission to have a presence on
                  Catchme.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">
                  Identity-Based Hate
                </h3>
                <p className="text-blue-800 mb-4">
                  We aim to foster a diverse and inclusive community on Catchme.
                  We prohibit content or behavior that promotes or condones
                  hate, dehumanization, degradation, or contempt against
                  marginalized or minoritized communities based on protected
                  attributes:
                </p>
                <ul className="list-disc list-inside text-blue-800 space-y-1 text-sm">
                  <li>Race/ethnicity</li>
                  <li>National origin/nationality/immigration status</li>
                  <li>Caste</li>
                  <li>Sex, gender identity or expression</li>
                  <li>Sexual orientation</li>
                  <li>Disability or serious health condition</li>
                  <li>Religion/belief</li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-900 mb-4">
                  Inauthentic Profiles
                </h3>
                <p className="text-green-800 mb-4">
                  Catchme celebrates authenticity, and we expect all our members
                  to represent themselves accurately on their profile.
                </p>
                <p className="text-green-800 text-sm mb-0">
                  We don&apos;t allow impersonation or misrepresentation on our
                  platform. This includes catfishing (creating an online persona
                  that isn&apos;t you) or falsely stating facts about yourself
                  including name, gender, age, and permanent location.
                </p>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-red-900 mb-4">
                  Physical and Sexual Violence
                </h3>
                <p className="text-red-800 mb-0">
                  We don&apos;t allow any content, imagery, or behavior that
                  commits or threatens credible acts of physical or sexual
                  violence. This includes physical stalking, using our platform
                  to assist exploitation or human trafficking, and sexual
                  assault of any kind.
                </p>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-orange-900 mb-4">
                  Scams and Theft
                </h3>
                <p className="text-orange-800 mb-0">
                  Catchme prohibits any scam or theft activity intended to
                  defraud or manipulate members out of financial or material
                  resources. This includes requesting financial support, lying
                  about your intentions for financial gain, or faking romantic
                  intentions to deceive members.
                </p>
              </div>

              <div className="bg-pink-50 border border-pink-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-pink-900 mb-4">
                  Sexual Harassment
                </h3>
                <p className="text-pink-800 mb-4">
                  Catchme prohibits sexual harassment. We consider sexual
                  harassment to be any non-physical, unwanted, and unwelcome
                  sexual behaviors between students/members.
                </p>
                <p className="text-pink-800 text-sm mb-0">
                  This includes cyberflashing (sharing unsolicited sexually
                  explicit images), in-person indecent exposure, sharing or
                  threatening to share sexual or intimate images without
                  consent, sending unwanted sexual comments or images, and
                  fetishization.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Spam
                </h3>
                <p className="text-gray-800 mb-0">
                  We do not permit any kind of unwanted or irrelevant content
                  sent in bulk or high frequency. This includes sharing
                  misleading links, creating excessive accounts causing
                  disruption, or having multiple active profiles to engage in
                  unwanted interactions.
                </p>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-red-900 mb-4">
                  Suicide and Self-Injury Promotion
                </h3>
                <p className="text-red-800 mb-4">
                  We care deeply about our member students and understand that
                  some may struggle with mental health, self-injury, suicidal
                  thoughts, substance use, or eating disorders.
                </p>
                <p className="text-red-800 text-sm mb-0">
                  While we allow members to share personal experiences with
                  these issues in a safe way, we don&apos;t allow any content
                  that depicts, promotes, glorifies, or assists in activities
                  that could lead to suicide, self-injury, or disordered eating
                  or body image.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-6 border-b-2 border-[#ff0a54] pb-2">
              Safety Reporting
            </h2>

            <div className="bg-[#ff0a54]/5 border border-[#ff0a54]/20 rounded-lg p-6 mb-6">
              <p className="text-gray-700 mb-4">
                <strong>Safety is a top priority at Catchme.</strong> We use a
                combination of human moderators and automated systems to monitor
                and review Catchme accounts for content that may be against our
                Community Guidelines, against our
                <Link
                  href="/terms"
                  className="text-[#ff0a54] hover:underline font-semibold ml-1"
                >
                  Terms and Conditions
                </Link>
                , or otherwise harmful.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-4">
                  How to Report
                </h3>
                <p className="text-green-800 mb-4">
                  Our members play a critical role in the safety of Catchme by
                  reporting content or behavior that may violate our Community
                  Guidelines.
                </p>
                <p className="text-green-800 text-sm mb-0">
                  If anything happens that makes you feel uncomfortable or
                  unsafe, we highly encourage you to Unmatch with or Report the
                  user.
                </p>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-yellow-900 mb-4">
                  False Reports
                </h3>
                <p className="text-yellow-800 mb-4">
                  Please consider that disagreeing with or disliking a member or
                  their content is not necessarily a reason to report them.
                </p>
                <p className="text-yellow-800 text-sm mb-0">
                  We may take action against a member if we&apos;ve found them
                  to be intentionally creating false or inappropriate reports
                  against other members solely based on their protected
                  attributes.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-6 border-b-2 border-[#ff0a54] pb-2">
              Enforcement Philosophy
            </h2>

            <p className="text-gray-700 mb-6">
              All students/members must comply with the platform rules described
              and referenced in our Community Guidelines. If you behave in a way
              that goes against TheCatchMeApp&apos;s Community Guidelines,
              values, or otherwise act in any way we believe to be potentially
              harmful to Catchme or its members, we may take a range of actions
              on your account.
            </p>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-red-900 mb-4">
                Potential Actions
              </h3>
              <p className="text-red-800 mb-4">
                When determining the penalty for violating our community
                guidelines, we consider a number of factors. For example, we
                may:
              </p>
              <ul className="list-disc list-inside text-red-800 space-y-1">
                <li>Issue a warning</li>
                <li>Ban the offending member from Catchme App</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">
                Off-Platform Conduct
              </h3>
              <p className="text-blue-800 mb-0">
                Your treatment towards others outside of the Catchme app can
                also result in action against your account. If we&apos;re made
                aware of harm between members on dates, meetups, via text
                message or other platforms, or relevant alleged criminal
                conduct, we may take action as if it happened on our platform.
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-yellow-900 mb-4">
                Law Enforcement Cooperation
              </h3>
              <p className="text-yellow-800 mb-0">
                When necessary, we also may cooperate with law enforcement to
                assist in potential criminal investigations related to member
                conduct.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-900 mb-4">
                Appeals Process
              </h3>
              <p className="text-green-800 mb-4">
                If you believe we&apos;ve made a mistake in taking action on
                your account or content, you can always contact us.
              </p>
              <Button
                asChild
                className="bg-[#ff0a54] hover:bg-[#e00948] text-white"
              >
                <a href="mailto:support@thecatchmeapp.co">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Support Team
                </a>
              </Button>
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
                  className="block text-gray-600 hover:text-[#ff0a54] transition-colors"
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
                  className="block text-[#ff0a54] font-semibold"
                >
                  Community Guidelines
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-[#ff0a54] to-[#e00948] rounded-2xl p-8 text-center text-white mt-12">
          <h3 className="text-2xl font-bold mb-4">Need to Report Something?</h3>
          <p className="mb-6">
            Our safety team is here to help keep our community safe and
            welcoming for everyone.
          </p>
          <Button asChild className="bg-white text-[#ff0a54] hover:bg-gray-100">
            <a href="mailto:support@thecatchmeapp.co">
              <Mail className="w-4 h-4 mr-2" />
              Report Safety Concern
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
