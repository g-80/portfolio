import blabla from "../../public/projects_preview/blablaevent.png";
import theChampionsShop from "../../public/projects_preview/the_champions_shop.png";
import battleship from "../../public/projects_preview/battleship.png";
import restaurantLandingPage from "../../public/projects_preview/restaurant_landing_page.png";
import wheresWaldo from "../../public/projects_preview/wheres_waldo.png";
import {
  SiReact,
  SiGraphql,
  SiMongodb,
  SiFirebase,
  SiNodeDotJs,
  SiJest,
} from "react-icons/si";

const iconSize = 16;

const tagsData = {
  react: {
    name: "React",
    cssClass: "tags_react",
    iconElement: <SiReact size={iconSize} />,
  },
  graphql: {
    name: "GraphQL",
    cssClass: "tags_graphql",
    iconElement: <SiGraphql size={iconSize} />,
  },
  mongodb: {
    name: "MongoDB",
    cssClass: "tags_mongodb",
    iconElement: <SiMongodb size={iconSize} />,
  },
  firebase: {
    name: "Firebase",
    cssClass: "tags_firebase",
    iconElement: <SiFirebase size={iconSize} />,
  },
  nodejs: {
    name: "node.js",
    cssClass: "tags_nodejs",
    iconElement: <SiNodeDotJs size={iconSize} />,
  },
  jest: {
    name: "Jest",
    cssClass: "tags_jest",
    iconElement: <SiJest size={iconSize} />,
  },
};

const projectsData = [
  {
    image: blabla,
    name: "BlaBlaEvent",
    description:
      "A reactJS app that lets users create and book events. I used GraphQL for the backend and MongoDB to store the data.",
    tags: [tagsData.react, tagsData.graphql, tagsData.nodejs, tagsData.mongodb],
    github: "https://github.com/g-80/event-app-graphql",
    link: null,
  },
  {
    image: theChampionsShop,
    name: "The Champions Shop",
    description:
      "A simple store that sells football shirts. Made with React and React Router.",
    tags: [tagsData.react],
    github: "https://github.com/g-80/the-champions-shop",
    link: "https://g-80.github.io/the-champions-shop/#/",
  },
  {
    image: battleship,
    name: "Battleship",
    description:
      "A battleship game made with React and Jest for testing the game logic. My most complex project so far that took me around a month. Jest was used for unit testing.",
    tags: [tagsData.react, tagsData.jest],
    github: "https://github.com/g-80/battleship",
    link: "https://g-80.github.io/battleship/",
  },
  {
    image: restaurantLandingPage,
    name: "Restaurant landing page",
    description:
      "A restaurant landing page made with React. The main aim of this project was to improve my CSS skills and make better responsive layouts.",
    tags: [tagsData.react],
    github: "https://g-80.github.io/responsive-landing-page/",
    link: "https://github.com/g-80/responsive-landing-page",
  },

  {
    image: wheresWaldo,
    name: "Where's Waldo",
    description:
      "A small game where the player has to find a few characters in an image and then submit the time taken. Created with React and Firebase for storing the time.",
    tags: [tagsData.react, tagsData.firebase],
    github: "https://github.com/g-80/Where-s-Waldo",
    link: "https://g-80.github.io/Where-s-Waldo/",
  },
];

export default projectsData;
