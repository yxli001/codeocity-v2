import { checker } from "./employeeChecker";
import webdev from "../images/webdev.jpg";
import javascript from "../images/js.png";
import webdevproject1 from "../images/web-dev-project-1.png";
import webdevproject2 from "../images/web-dev-project-2.png";
import advancedcssproject1 from "../images/advanced-css-project-1.png";
import advancedcssproject2 from "../images/advanced-css-project-2.png";
import dommanipulationproject1 from "../images/dom-manipulation-project-1.png";
import dommanipulationproject2 from "../images/dom-manipulation-project-2.png";
import pythonproject1 from "../images/python-project-1.png";
import pythonproject2 from "../images/python-project-2.jpg";
import pythonproject3 from "../images/python-project-3.png";
import pythonproject4 from "../images/python-project-4.png";
import python from "../images/python.jpg";
import advancedCSS from "../images/advanced_css.png";

import type { Course } from "./types";

const courses: Array<Course> = [
  {
    id: 2,
    title: "Web Dev 1",
    price: 300,
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
    times: [
      "Tuesday, Thursday : 7-8pm EDT",
      "Private Lesson",
      "Monday, Wednesday : 7-8pm EDT",
    ],
    teachers: checker("Web Dev 1"),
    madeFor: "middle schoolers",
    startsOn: "June 26th",
    endsOn: "July 28th",
  },
  {
    id: 3,
    title: "Intro to JavaScript",
    price: 300,
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
    times: ["Tuesday, Thursday 7-8pm", "Private Lesson"],
    video: "https://www.youtube.com/embed/e0-IRuJzqi0",
    teachers: checker("Intro to JavaScript"),
    madeFor: "middle schoolers",
    startsOn: "June 26th",
    endsOn: "July 28th",
  },
  {
    id: 4,
    title: "Advanced CSS",
    price: 300,
    numClasses: 10,
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
    times: ["Tuesday, Thursday : 7-8pm EDT", "Private Lesson"],
    video: "",
    teachers: checker("Advanced CSS"),
    madeFor: "middle schoolers",
    startsOn: "June 26th",
    endsOn: "July 28th",
  },
  {
    id: 5,
    title: "Intro to Python",
    price: 300,
    numClasses: 10,
    description:
      "In this course, students will learn the basics of Python! Students will start by working with the Python turtle module and create beautiful artwork. After learning the basics, students will then dive deeper into material and begin to build more complex projects!",
    content: [
      "What a programming language is and why we use Python",
      "How to make drawings using Python Turtle!",
      "Basic python concepts including variables, loops, and if statements!",
      "Intermediate python concepts including functions and lists!",
      "Build 5+ projects to solidify knowledge of concepts!",
    ],
    projects: [
      {
        link: "",
        image: pythonproject1,
      },
      {
        link: "",
        image: pythonproject2,
      },
      {
        link: "",
        image: pythonproject3,
      },
      {
        link: "",
        image: pythonproject4,
      },
    ],
    image: python,
    times: ["Monday, Wednesday : 7-8pm EDT", "Private Lesson"],
    video: "https://www.youtube.com/embed/n7zQiipRY70",
    teachers: checker("DOM Manipulation"),
    madeFor: "middle schoolers",
    startsOn: "June 26th",
    endsOn: "July 28th",
  },
];

export const courseTree: Array<Array<Course>> = [
  [courses[0]],
  [courses[1]],
  [courses[2], courses[3]],
  [courses[4]],
];

export default courses;
