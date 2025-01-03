import {
  RiFacebookBoxLine,
  RiInstagramLine,
  RiQuestionMark,
  RiShoppingCartLine,
  RiTwitterXLine,
  RiUser2Line,
} from "@remixicon/react";

export const footer_links = [
  {
    label: "Socials",
    links: [
      {
        name: "Instagram",
        url: "https://instagram.com/home",
        icon: RiInstagramLine,
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/",
        icon: RiFacebookBoxLine,
      },
      { name: "Twitter", url: "https://x.com/home", icon: RiTwitterXLine },
    ],
  },
  {
    label: "Useful Links",
    links: [
      { name: "Contact Us", url: "/contact", icon: null },
      { name: "About Us", url: "/about", icon: null },
      { name: "Return Policy", url: "/about", icon: null },
      { name: "Service Center", url: "/about", icon: null },
      { name: "Black Friday", url: "/about", icon: null },
    ],
  },
];

export const header_icons = [
  { name: "Account", url: "", icon: RiUser2Line },
  { name: "Cart", url: "", icon: RiShoppingCartLine },
  { name: "Help", url: "", icon: RiQuestionMark },
];
