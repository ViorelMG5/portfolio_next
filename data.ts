// Tech import
import reactIcon from "../../assets/svg_icons/react-logo-programming-svgrepo-com.svg";
import cssIcon from "../../assets/svg_icons/css-file-format-document-extension-file-format-svgrepo-com.svg";
import htmlIcon from "../../assets/svg_icons/html5-svgrepo-com.svg";
import figmaIcon from "../../assets/svg_icons/figma-svgrepo-com.svg";
import phpIcon from "../../assets/svg_icons/php-svgrepo-com.svg";
import javaScriptIcon from "../../assets/svg_icons/javascript-fill-svgrepo-com.svg";
import reduxIcon from "../../assets/svg_icons/redux.svg";
import tailwind from "../../assets/svg_icons/tailwind.svg";
import mui from "../../assets/svg_icons/mui.svg";
import tsIcon from "../../assets/svg_icons/ts.svg";
import bootstrap from "../../assets/svg_icons/bootstrap.svg";
import nextIcon from "../../assets/svg_icons/next.svg";
import firebaseIcon from "../../assets/svg_icons/firebase.svg";
import stripeIcon from "../../assets/svg_icons/stripe.svg";
import git from "../../assets/svg_icons/git.svg";
import recoil from "../../assets/svg_icons/recoil.svg";

// Pages import
import castingMac from "../../assets/images/casting/CastingMac.webp";
import castingPhone from "../../assets/images/casting/CastingPhone.webp";

import recoMac from "../../assets/images/reco/recoMac.webp";
import recoPhone from "../../assets/images/reco/recoPhone.webp";

import noteMac from "../../assets/images/note/noteMac.webp";
import notePhone from "../../assets/images/note/notePhone.webp";

import lantaniaMac from "../../assets/images/2lafel/2lafelMac.webp";
import lantaniaPhone from "../../assets/images/2lafel/2lafelPhone.webp";

import portfolioMac from "../../assets/images/portfolio/portfolioMac.webp";
import portfolioPhone from "../../assets/images/portfolio/portfolioPhone.webp";

import cabanaMac from "../../assets/images/cabana/cabanaMac.webp";
import cabanaPhone from "../../assets/images/cabana/cabanaPhone.webp";

import mmcMac from "../../assets/images/Mmc/mmcMac.webp";
import mmcPhone from "../../assets/images/Mmc/mmcPhone.webp";

import constructionMac from "../../assets/images/v3Construction/constructionMac.webp";
import constructionPhone from "../../assets/images/v3Construction/constructionPhone.webp";

import netflixMac from "../../assets/images/netflix/netflixDesktop.webp";
import netflixMobile from "../../assets/images/netflix/NetflixMobile.webp";

import instaMac from "../../assets/images/insta/instaDesktop.webp";
import instaMobile from "../../assets/images/insta/instaMobile.webp";

export const ProjectsImages = [
  {
    macFrame: netflixMac,
    phoneFrame: netflixMobile,
    personalProject: true,

    title: "Netflix Clone",
    link: "https://netflix-tau-seven.vercel.app/",
    roles: ["Front-end development"],
    contribution: 100,
    gitLink: "https://github.com/ViorelMG5/netflix",
    description:
      "When you create an account it's gonna ask you for card details, just use a test card (ex:  4242 4242 4242 4242). Stripe is on test mode",
    technologies: [
      { git: git },
      { firebase: firebaseIcon },
      { stripe: stripeIcon },
      { ts: tsIcon },
      { react: reactIcon },
      { next: nextIcon },
      { js: javaScriptIcon },
      { recoil: recoil },
      { tailwind: tailwind },
      { mui: mui },
      { html: htmlIcon },
      { css: cssIcon },
    ],
  },
  {
    macFrame: instaMac,
    phoneFrame: instaMobile,
    personalProject: true,

    title: "Instagram Clone",
    link: "https://instagram-clone-beta-red.vercel.app/",
    roles: ["Front-end development"],
    contribution: 100,
    gitLink: "https://github.com/ViorelMG5/instagram_clone",
    description:
      "IN PROGRESS || Functionalities: Dark/light mode, Create user using email/password or facebook login, Custom username and profile picture,  Add posts, Add comments to posts,Like comments,  Like the posts,Getting recomandation to follow,  See own profile (See followers and following nr). Working on other features, will update it soon! ",
    technologies: [
      { git: git },
      { firebase: firebaseIcon },
      { ts: tsIcon },
      { react: reactIcon },
      { next: nextIcon },
      { js: javaScriptIcon },
      { recoil: recoil },
      { tailwind: tailwind },
      { mui: mui },
      { html: htmlIcon },
      { css: cssIcon },
    ],
  },
  {
    macFrame: castingMac,
    phoneFrame: castingPhone,
    title: "Agentia de Casting",
    link: "https://agentiadecasting.ro/",
    roles: ["Ux/ui design", "Front-end development"],
    contribution: 41,
    technologies: [
      { figma: figmaIcon },
      { js: javaScriptIcon },
      { php: phpIcon },
      { bootstrap: bootstrap },
      { html: htmlIcon },
      { css: cssIcon },
    ],
  },
  {
    macFrame: recoMac,
    phoneFrame: recoPhone,
    title: "Tv recommendation",
    personalProject: true,
    gitLink: "https://github.com/ViorelMG5/recommended_tv_shows",

    link: "https://recommended-tv-shows.vercel.app/",
    roles: ["Ux/ui design", "Front-end development"],
    contribution: 100,
    technologies: [
      { git: git },

      { react: reactIcon },
      { js: javaScriptIcon },
      { mui: mui },
      { html: htmlIcon },
      { css: cssIcon },
    ],
  },

  {
    title: "2LaFel",
    macFrame: lantaniaMac,
    link: "https://2lafel.ro/",
    phoneFrame: lantaniaPhone,
    roles: ["Front-end development"],
    contribution: 43,
    technologies: [
      { js: javaScriptIcon },
      { php: phpIcon },
      { bootstrap: bootstrap },
      { html: htmlIcon },
      { css: cssIcon },
    ],
  },
  {
    macFrame: noteMac,
    phoneFrame: notePhone,
    personalProject: true,
    title: "Note Manager",
    roles: ["Ux/ui design", "Front-end development"],
    contribution: 100,
    gitLink: "https://github.com/ViorelMG5/react-notes-manager",
    technologies: [
      // { figma: figmaIcon },
      { git: git },

      { react: reactIcon },
      { redux: reduxIcon },
      { js: javaScriptIcon },
      { mui: mui },
      { html: htmlIcon },
      { css: cssIcon },
    ],
  },
  {
    title: "Portfolio Website",
    macFrame: portfolioMac,
    phoneFrame: portfolioPhone,
    personalProject: true,
    roles: ["Ux/ui design", "Front-end development"],
    contribution: 100,
    technologies: [
      { git: git },

      { figma: figmaIcon },
      { react: reactIcon },
      { js: javaScriptIcon },
      { mui: mui },
      { html: htmlIcon },
      { css: cssIcon },
    ],
  },
  {
    title: "Millionaire Cats Club",
    macFrame: mmcMac,
    phoneFrame: mmcPhone,
    link: "https://millionairecatsclub.io/",
    roles: ["Ux/ui design", "Front-end development"],
    contribution: 100,
    technologies: [
      { figma: figmaIcon },
      { js: javaScriptIcon },
      { php: phpIcon },
      { bootstrap: bootstrap },

      { html: htmlIcon },
      { css: cssIcon },
    ],
  },
  {
    title: "Cabana Supporter",
    link: "https://cabanasupporter.ro/",
    macFrame: cabanaMac,
    phoneFrame: cabanaPhone,
    contribution: 67,
    roles: ["Front-end development"],
    technologies: [
      { js: javaScriptIcon },
      { php: phpIcon },
      { bootstrap: bootstrap },

      { html: htmlIcon },
      { css: cssIcon },
    ],
  },
  {
    title: "V3 Construction",
    // link: "https://cabanasupporter.ro/",
    macFrame: constructionMac,
    phoneFrame: constructionPhone,
    contribution: 95,
    roles: ["Front-end development"],
    technologies: [
      { js: javaScriptIcon },
      { php: phpIcon },
      { bootstrap: bootstrap },
      { html: htmlIcon },
      { css: cssIcon },
    ],
  },
];
