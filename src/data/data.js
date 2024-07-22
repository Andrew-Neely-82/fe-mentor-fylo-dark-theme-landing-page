import Logo from "../assets/logo.svg";
import Access from "../assets/icon-access-anywhere.svg";
import Security from "../assets/icon-security.svg";
import Collaboration from "../assets/icon-collaboration.svg";
import AnyFile from "../assets/icon-any-file.svg";
import Productive from "../assets/illustration-stay-productive.png";
import Arrow from "../assets/icon-arrow.svg?react";
import Profile1 from "../assets/profile-1.jpg";
import Profile2 from "../assets/profile-2.jpg";
import Profile3 from "../assets/profile-3.jpg";
import Location from "../assets/icon-location.svg";
import Phone from "../assets/icon-phone.svg";
import Email from "../assets/icon-email.svg";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

export const fyloData = [
  {
    nav: { links: ["Features", "Team", "Sign In"] },
    hero: [
      {
        header: "All your files in one secure location, accessible anywhere.",
        p: "Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.",
        btn: "Get Started",
      },
    ],
    gridSection: {
      grid: [
        {
          icon: Access,
          alt: "Access",
          title: "Access your files, anywhere",
          p: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
        },
        {
          icon: Security,
          alt: "Security",
          title: "Security you can trust",
          p: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
        },
        {
          icon: Collaboration,
          alt: "Collaboration",
          title: "Real-time collaboration",
          p: "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
        },
        {
          icon: AnyFile,
          alt: "Any File",
          title: "Store any type of file",
          p: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
        },
      ],
    },
    seeHow: [
      {
        image: Productive,
        alt: "Productive Icon",
        title: "Stay productive, wherever you are",
        paragraph: [
          { p: "Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs." },
          {
            p: " Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
          },
        ],
        a: "See how Fylo works",
        SVG: Arrow,
      },
    ],
    cardsSection: [
      {
        review: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
        img: Profile1,
        user: "Satish Patel",
        role: "Founder & CEO, Huddle",
      },
      {
        review: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
        img: Profile2,
        user: "Bruce McKenzie",
        role: "Founder & CEO, Huddle",
      },
      {
        review: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
        img: Profile3,
        user: "Iva Boyd",
        role: "Founder & CEO, Huddle",
      },
    ],
    earlyAccessSection: [
      {
        title: "Get early access today",
        p: "It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.",
        btn: "Get Started For Free",
      },
    ],
    footer: [
      {
        logo: {
          img: Logo,
          alt: "Fylo icon",
        },
        location: {
          icon: Location,
          alt: "Location icon",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        },
        phone: {
          icon: Phone,
          alt: "Phone icon",
          text: "+1-543-123-4567",
        },
        email: {
          icon: Email,
          alt: "Email icon",
          text: "example@fylo.com",
        },
        nav1: { links: ["About Us", "Jobs", "Press", "Blog"] },
        nav2: { links: ["Contact Us", "Terms", "Privacy"] },
        social: [FacebookOutlinedIcon, TwitterIcon, InstagramIcon],
      },
    ],
  },
];
