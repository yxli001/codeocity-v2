import { checker } from "./employeeChecker";
import webdev from "../images/webdev.jpg";
import javascript from "../images/js.png";
import webdevproject1 from "../images/web-dev-project-1.png";
import webdevproject2 from "../images/web-dev-project-2.png";
import advancedcssproject1 from "../images/advanced-css-project-1.png";
import advancedcssproject2 from "../images/advanced-css-project-2.png";
import dommanipulationproject1 from "../images/dom-manipulation-project-1.png";
import dommanipulationproject2 from "../images/dom-manipulation-project-2.png";
import dom from "../images/dom.png";
// import scratch from "../images/scratch-og.png";
import advancedCSS from "../images/advanced_css.png";

import type { Course } from "./types";

const courses: Array<Course> = [
  {
    id: 2,
    title: "Web Dev 1",
    price: 250,
    numClasses: 10,
    description:
      "Web Dev 1 is our recommended starter course for someone who is looking to try out coding. After completing this course, students will be able to create a fully-fledged website using HTML and CSS that will be accessible to anyone in the world! Students will also become familiar with development platforms like repl.it.",
    content: [
      "Introduction to how websites work",
      "Discuss what elements are",
      "How to display text",
      "How to display lists",
      "How to display links",
      "How to add buttons",
      "How to display images",
      "How to add tables",
      "How to add forms",
      "How to use divs",
      "The box model",
      "How to style your website",
      "How to add floats and clears",
    ],
    projects: [
      {
        link: "https://final-project-web-dev-1.brianmason3.repl.co",
        image: webdevproject1,
      },
      {
        link: "https://day-15.huichen10.repl.co/",
        image: webdevproject2,
      },
    ],
    image: webdev,
    video: "https://www.youtube.com/watch?v=yOiZifoQ9_U",
    times: ["Tuesday, Thursday : 7-8pm EDT"],
    teachers: checker("Web Dev 1"),
    madeFor: "middle schoolers",
    startsOn: "March 20th",
  },
  {
    id: 3,
    title: "Intro to JavaScript",
    price: 250,
    numClasses: 10,
    description:
      "In our Intro to JavaScript course, students will learn the basics of JavaScript syntax. Having experience with HTML or Java is required before beginning this course. It is highly recommended to take Web Dev 1 for those who have no experience.",
    content: [
      "What JavaScript is and why we use it",
      "Logging into the console",
      "Some best coding practices",
      "What data types are",
      "How to use variables",
      "How to get user input",
      "How to use if else statements",
      "How to use loops effectively",
      "Variable scopes",
      "How to use functions",
      "How to use arrays",
      "What objects are and how to use them",
    ],
    projects: [],
    image: javascript,
    times: ["Tuesday, Thursday 7-8pm"],
    video: "https://www.youtube.com/embed/e0-IRuJzqi0",
    teachers: checker("Intro to JavaScript"),
    madeFor: "middle schoolers",
    startsOn: "March 20th",
  },
  {
    id: 4,
    title: "Advanced CSS",
    price: 150,
    numClasses: 6,
    description:
      "This course teaches students to create advanced layouts on their websites using technologies such as flexbox, grid, and media queries in CSS. ",
    content: [
      "More CSS properties",
      "Flexbox",
      "Grid",
      "Responsive layout/media queries",
    ],
    projects: [
      {
        link: "https://photo-gallery.brianmason3.repl.co/",
        image: advancedcssproject1,
      },
      {
        link: "https://CSS-Day-7.brianmason3.repl.co",
        image: advancedcssproject2,
      },
    ],
    image: advancedCSS,
    times: ["Monday, Thursday : 7-8pm EDT"],
    video: "",
    teachers: checker("Advanced CSS"),
    madeFor: "middle schoolers",
    startsOn: "May 29th",
  },
  {
    id: 5,
    title: "DOM Manipulation",
    price: 250,
    numClasses: 10,
    description:
      "In this course, students will use JavaScript to manipulate a webpage. Students will select elements and change how they look based on what the user does. It is mandatory to know JavaScript, HTML, and CSS.",
    content: [
      "What the DOM is",
      "How to select elements",
      "How to modify elements",
      "How to use event listeners",
    ],
    projects: [
      {
        link: "https://Color-Picker-DOM-Manipulation.jujujams.repl.co",
        image: dommanipulationproject2,
      },
      {
        link: "https://Grocery-Bud-DOM-Manipulation.jujujams.repl.co",
        image: dommanipulationproject1,
      },
    ],
    image: dom,
    times: ["TBD"],
    video: "https://www.youtube.com/embed/n7zQiipRY70",
    teachers: checker("DOM Manipulation"),
    madeFor: "middle schoolers",
    startsOn: "March 20th",
  },
];

export const courseTree: Array<Array<Course>> = [
  [courses[0]],
  [courses[1]],
  [courses[2], courses[3]],
  [courses[4]],
];

export default courses;
