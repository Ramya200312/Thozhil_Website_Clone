import React from 'react';
import Footer from './Footer';

const Footer1 = () => {
  const mainTitle = "Join our mailing list to receive the news & latest trends";
  const subscribeButtonText = "Subscribe Now";

  const sections = [
    {
      title: "About Our Website",
      items: [
        { text: "Thozhil", href: "#" },
        { text: "Find your relevant career that matches your skills and passion.", href: "#" }
      ]
    },
    {
      title: "About Us",
      items: [
        { text: "Home", href: "/" },
        { text: "Full-time Jobs", href: "/jobs/fulltime" },
        { text: "Part-time Jobs", href: "/jobs/parttime" },
        { text: "Full-time Internships", href: "/internships/fulltime" },
        { text: "Part-time Internships", href: "/internships/parttime" },
        { text: "How It Works", href: "/HowItWorks" },
        { text: "FAQ", href: "/FAQ" }
      ]
    },
    {
      title: "Useful Links",
      items: [
        { text: "Our Mission", href: "#" },
        { text: "Our Vision", href: "#" },
        { text: "FAQ", href: "#" },
        { text: "Privacy Policy", href: "#" },
        { text: "Terms & Conditions", href: "#" },
        { text: "Cancellation Policy", href: "#" }
      ]
    },
    {
      title: "Join Us",
      items: [
        { text: "Email: info@thozhil.co.in", href: "mailto:info@thozhil.co.in" },
        { text: "Customer Support: +91 784 592 1063", href: "tel:+917845921063" }
      ]
    }
  ];

  const developedBy = "Developed By Oneyes Infotech Solutions";
  const copyright = "Copyright © 2023 Thozhil. All Rights Reserved.";

  return (
    <div>
      <Footer 
        mainTitle={mainTitle}
        subscribeButtonText={subscribeButtonText}
        sections={sections}
        developedBy={developedBy}
        copyright={copyright}
      />
    </div>
  );
};

export default Footer1;
