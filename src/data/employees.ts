import brian from "../images/brian_mason.jpg";
import yixuan from "../images/yixuan_li_2.jpg";
import colin from "../images/colin_frankel.png";
import dante from "../images/dante.jpg";

import type { Employee } from "./types";

const employees: Array<Employee> = [
  {
    id: 1,
    name: "Brian Mason",
    roles: ["Founder", "Web Dev 1", "Intro to JavaScript", "Advanced CSS"],
    description:
      "I am a junior at Walt Whitman Highschool and have been coding for about six years now. Me and Yixuan won the 2022 Congressional App Challenge a few months back, and I am excited to share what I know! In my free time, I play tennis, read, and run!",
    image: brian,
  },
  {
    id: 2,
    name: "Yixuan Li",
    roles: ["Founder", "Web Dev 1", "Intro to JavaScript", "Advanced CSS"],
    description:
      "I am a junior at Walt Whitman High School. I've been coding for about 4 years and have taught myself programming languages such as Java, Python, JavaScript, and Swift. ",
    image: yixuan,
  },
  {
    id: 3,
    name: "Colin Frankel",
    roles: ["Web Dev 1", "Intro to JavaScript"],
    description:
      "I am a junior at Walt Whitman Highschool. I have been coding for about four years. I started with learning HTML and CSS and then later learned JavaScript to make content dynamic on my websites!",
    image: colin,
  },
  {
    id: 4,
    name: "Dante Suzuki",
    roles: ["Scratch"],
    description:
      "I'm a junior at Walt Whitman High School and have been in computer science for about six years. I have been involved in Java, C++, C#, HTML, Python, and Scratch.",
    image: dante,
  },
];

export default employees;
