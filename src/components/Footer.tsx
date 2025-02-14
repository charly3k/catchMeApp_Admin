import React from "react";

const socialMedia = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/share/1Hx9fH6jph/?mibextid=wwXIfr",
  },
  {
    name: "Twitter",
    url: "https://x.com/thecatchmeapp?s=21",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/thecatchme_app/profilecard/?igsh=NmRzbmw4aTh6aXA=",
  },
];
const Footer = ({}) => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="font-bold">Community</p>
        {socialMedia.map((item, index) => (
          <p
            key={index}
            // onClick={() => openLinks(item.url)}
            className="text-blue-500 cursor-pointer hover:underline"
          >
            {item.name}
          </p>
        ))}
      </div>

      <div className="space-y-2">
        <p className="font-bold">Safety</p>
        <p
          // onClick={moveToFAQS}
          className="text-blue-500 cursor-pointer hover:underline"
        >
          FAQS
        </p>
      </div>

      <div className="space-y-2">
        <p className="font-bold">Legal</p>
        <p
          //  onClick={moveToPrivacyPolicy}
          className="text-blue-500 cursor-pointer hover:underline"
        >
          Privacy Policy
        </p>
        <p
          // onClick={moveToCommunityGuidelines}
          className="text-blue-500 cursor-pointer hover:underline"
        >
          Community Guidelines
        </p>
        <p
          //  onClick={moveToTerms}
          className="text-blue-500 cursor-pointer hover:underline"
        >
          Terms and Conditions
        </p>
      </div>
    </div>
  );
};

export default Footer;
