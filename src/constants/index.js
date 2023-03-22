import {
  mobile,
  backend,
  creator,
  web,
  typescript,
  reactjs,
  mongodb,
  somoveLogo,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "tools",
    title: "Tools",
  },
  {
    id: "blog",
    title: "Blog",
  },
];

const services = [
  {
    title: "20.000+ Scholarships",
    icon: web,
    subTitle:
      "The largest web3 gaming guild in Southeast Asia currently operates locally in 6 Southeast Asian countries.",
  },
  {
    title: "80+ Games Invested",
    icon: mobile,
    subTitle:
      "We are proud to support the top web3 games across all genres, providing them with capital, player liquidity & operational support.",
  },
  {
    title: "40.000+ Gamers",
    icon: backend,
    subTitle:
      "We are managing a group of top-performing gamers across the world to fight for earning rewards in multiple games.",
  },
  {
    title: "10 M Assets Under Management",
    icon: creator,
    subTitle:
      "Our treasury holds NFT assets, governance tokens of games, and stablecoins to support the web3 games with the highest potential.",
  },
];

const technologies = [
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
];

const tools = [
  {
    name: "Tool 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: somoveLogo,
    source_code_link: "https://github.com/",
  },
  {
    name: "Tool 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: somoveLogo,
    source_code_link: "https://github.com/",
  },
  {
    name: "Tool 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: somoveLogo,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, tools as projects };
