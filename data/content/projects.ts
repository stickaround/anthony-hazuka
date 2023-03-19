import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "EvolveMEP Foresite",
    desc: "Save thousands of hours in labor field by managing your operation.",
    img: "/static/projects/evolve_foresite.jpg",
    link: "https://https://foresite.evolvemep.com/",
    github: "https://github.com/braydentw/learn.theyei",
    tags: ["React", "TypeScript", "GraphQL", "MUI", "Node.js", "PostgreSQL", "AWS Amplify"],
  },
  {
    id: 1,
    title: "SkyScanner",
    desc: "Quickly scan all your favorite travel sites and plan your travel course.",
    img: "/static/projects/skyscanner.jpg",
    link: "https://skyscanner.com",
    github: "https://github.com/braydentw/learn.theyei",
    tags: ["React", "NextJS", "TypeScript", "Tailwind CSS", "Django", "MySQL", "Firebase"],
  },
  {
    id: 2,
    title: "SmartMint",
    desc: "Mint your tokens without any code.",
    img: "/static/projects/smartmint.jpg",
    link: "https://learn.theyei.org/",
    github: "https://github.com/braydentw/learn.theyei",
    tags: ["React", "NextJS", "ChakraUI", "Solidity", "Node.js", "PostgreSQL", "AWS S3", "AWS Amplify"],
  },
  {
    id: 3,
    title: "Learn.TheYEI",
    desc: "All the resources you will need to get a boost into economics.",
    img: "/static/projects/yei-learn.png",
    link: "https://learn.theyei.org/",
    github: "https://github.com/braydentw/learn.theyei",
    tags: ["React", "NextJS", "TailwindCSS", "CSS", "Firebase"],
  },
  {
    id: 4,
    title: "BuildFaster",
    desc: "Beautiful HTML templates ready-made for your next landing page.",
    img: "/static/projects/buildfaster.png",
    link: "https://buildfaster.co/",
    tags: ["HTML", "CSS", "Javascript", "Gumroad"],
  },
  {
    id: 5,
    title: "React Emoji Search",
    desc: "1800+ emojis at your fingertips. Ready-to-use with just a simple copy+paste.",
    img: "/static/projects/react-emoji-search.png",
    link: "https://react-emoji-search.braydentw.vercel.app/",
    github: "https://github.com/braydentw/react-emoji-search",
    tags: ["React", "CSS", "JSON"],
  },
  {
    id: 6,
    title: "BitcoinTemp",
    desc: "A fun way to check the price of bitcoin! Cloudy days, sunny days, and Bitcoin Storms!",
    img: "/static/projects/bitcointemp.png",
    link: "https://bitcointemp.com",
    tags: ["React", "NextJS", "SCSS", "API"],
  },
  {
    id: 7,
    title: "Create HTML Boilerplate",
    desc: "Generate a vanilla HTML boilerplate in a flash!",
    img: "/static/projects/create-html-boilerplate.png",
    github: "https://github.com/BraydenTW/create-html-boilerplate",
    tags: ["Node", "Javascript", "NPM", "HTML"],
  },
  {
    id: 8,
    title: "8 Ball in your CLI",
    desc: "An 8 ball simulation in your CLI built with Rust!",
    img: "/static/projects/8ball-rust.png",
    github: "https://github.com/BraydenTW/8ball-rust",
    tags: ["Rust", "CLI", "Game"],
  },
  {
    id: 9,
    title: "DontLeaveMe 😭",
    desc: "Beg for users to stay on your website.",
    img: "/static/projects/dontleaveme.png",
    link: "https://github.com/BraydenTW/dontleaveme/",
    tags: ["Javascript", "NPM"],
  },
  {
    id: 10,
    title: "Madlibs",
    desc: "A simple version of Madlibs built for the web!",
    img: "/static/projects/madlibs.png",
    link: "https://fillemin.netlify.app/",
    github: "https://github.com/braydentw/madlibs",
    tags: ["HTML", "CSS", "Javascript"],
  },
];

export const allTags = []

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default projects