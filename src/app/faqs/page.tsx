"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Plus,
  Minus,
  HelpCircle,
  Users,
  Shield,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const faqData = [
  {
    category: "Getting Started",
    icon: HelpCircle,
    questions: [
      {
        question: "What is CatchMeApp and what does it do?",
        answer:
          "CatchMeApp is a mobile app designed specifically for students at universities and colleges to connect, build friendships, and potentially find romantic relationships within their academic community.",
      },
      {
        question: "How do I sign up for CatchMeApp?",
        answer:
          "Download the app from the App Store or Google Play store. Open the app and choose to register using your email address and password or a social media account (FACEBOOK).",
      },
      {
        question:
          "What information do I need to provide when creating a profile?",
        answer:
          "You'll need to provide basic information like name, age, and gender. You can also add academic information (student email, school, major, year), interests, and a self-description to showcase your personality.",
      },
      {
        question: "How can I keep my profile information private?",
        answer:
          "You can manage who can contact you by blocking specific users. Your email addresses are only visible to you unless you willingly add them to your profile.",
      },
    ],
  },
  {
    category: "Using the App",
    icon: Users,
    questions: [
      {
        question: "How do I find other users on the app?",
        answer:
          "You can use the filter function to find users based on various criteria like interests, major, year, or location. You can also browse through suggested profiles based on the app's matching algorithm.",
      },
      {
        question: "How does the matching algorithm work?",
        answer:
          "The algorithm considers your profile information, interests, and preferences to suggest compatible matches. You can also express your own preferences for the algorithm (e.g., prioritize academic interests like searching through discovery pages for users in the same school as you or search for users doing the same major as you on discovery page).",
      },
      {
        question: "How do I connect with other users?",
        answer:
          "If you're interested in someone, you can send them a message through the messaging system. You can also respond to messages received from other users.",
      },
      {
        question: "What features are included in the messaging system?",
        answer:
          "You can send and receive text messages, share pictures, and see message delivery status and typing indicators. You can also make video calls or voice calls with users you are interested in.",
      },
      {
        question:
          "What if I encounter inappropriate behavior from another user?",
        answer:
          "You can report inappropriate behavior and messages directly within the app through the dedicated reporting function. You can also block users from contacting you further.",
      },
    ],
  },
  {
    category: "Account Management & Safety",
    icon: Shield,
    questions: [
      {
        question: "Can I change my profile information after I create it?",
        answer:
          "Yes, you can edit your profile information, update your pictures, and change your password at any time within the app settings.",
      },
      {
        question: "Can I deactivate or delete my account?",
        answer:
          "Yes, you can permanently delete your account if you no longer want to use it.",
      },
      {
        question: "How does the app protect my privacy?",
        answer:
          "CatchMeApp takes user privacy seriously. We implement secure data storage practices and encryption protocols to protect your information.",
      },
    ],
  },
  {
    category: "Additional Features",
    icon: Settings,
    questions: [
      {
        question: "Does the app offer any premium features?",
        answer:
          "Yes, the app may offer optional premium features like profile boosts, advanced search filters and access to discovery pages. These features are typically available when your profile is verified.",
      },
      {
        question: "How do I get verified on the app?",
        answer:
          "You get verified by adding and confirming your student email. After that, your profile will receive a blue badge to showcase that you are a real student and a verified user of the app.",
      },
      {
        question: "Is the app free to use?",
        answer:
          "The app is generally free to use. However, users may be restricted in accessing some features if their profile is not verified. Therefore, to gain full access to all features on the app, users need to verify their profiles.",
      },
      {
        question: "Who can use the app?",
        answer:
          "The app is intended for students enrolled at universities and colleges. You may be required to verify your student status during registration. This will allow you full access to all features on CatchmeApp.",
      },
    ],
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg">
      <button
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-black">{question}</span>
        {isOpen ? (
          <Minus className="w-5 h-5 text-[#ff0a54] flex-shrink-0" />
        ) : (
          <Plus className="w-5 h-5 text-[#ff0a54] flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-gray-700 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQsPage() {
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
            Frequently Asked <span className="text-[#ff0a54]">Questions</span>
          </h1>
          <p className="text-xl text-gray-300">
            Find answers to common questions about CatchMeApp
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-12">
          <p className="text-lg text-gray-700 text-center mb-8">
            Can&apos;t find what you&apos;re looking for? Our support team is
            here to help!
          </p>
          <div className="text-center">
            <Button
              asChild
              className="bg-[#ff0a54] hover:bg-[#e00948] text-white"
            >
              <Link href="/support">Contact Support</Link>
            </Button>
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {faqData.map((category, categoryIndex) => (
            <section key={categoryIndex}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#ff0a54] rounded-xl">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black">
                  {category.category}
                </h2>
              </div>

              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => (
                  <FAQItem
                    key={faqIndex}
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Still Need Help Section */}
        <div className="bg-gradient-to-r from-[#ff0a54]/10 to-[#ff0a54]/5 rounded-2xl p-8 mt-16">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-black mb-4">
              Still Need Help?
            </h3>
            <p className="text-gray-700 mb-6">
              Our support team is available to help you with any questions or
              issues you might have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-[#ff0a54] hover:bg-[#e00948] text-white"
              >
                <Link href="/support">Support</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-[#ff0a54] text-[#ff0a54] hover:bg-[#ff0a54] hover:text-white"
              >
                <Link href="/community-guidelines">
                  View Community Guidelines
                </Link>
              </Button>
            </div>
          </div>
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
              <Link href="/faqs" className="block text-[#ff0a54] font-semibold">
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
                  className="block text-gray-600 hover:text-[#ff0a54] transition-colors"
                >
                  Community Guidelines
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
