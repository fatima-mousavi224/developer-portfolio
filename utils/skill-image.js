import css from "../app/assets/svg/skills/css.svg";
import figma from "../app/assets/svg/skills/figma.svg";
import git from "../app/assets/svg/skills/git.svg";
import html from "../app/assets/svg/skills/html.svg";
import javascript from "../app/assets/svg/skills/javascript.svg";
import nextJS from "../app/assets/svg/skills/nextJS.svg";
import react from "../app/assets/svg/skills/react.svg";
import tailwind from "../app/assets/svg/skills/tailwind.svg";
import typescript from "../app/assets/svg/skills/typescript.svg";
import mongoDB from '../app/assets/svg/skills/mongoDB.svg';

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "html":
      return html;

    case "css":
      return css;

    case "javascript":
      return javascript;

    case "typescript":
      return typescript;

    case "react":
      return react;

    case "next js":
      return nextJS;

    case "tailwind":
      return tailwind;

    case "git":
      return git;

    case "figma":
      return figma;
    case "figma":
      return figma;
    case "mongodb":
      return mongoDB;
    default:
      break;
  }
};
