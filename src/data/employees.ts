import brian from "../images/brian_mason.jpg";
import yixuan from "../images/yixuan_li_2.jpg";
import colin from "../images/colin_frankel.png";
import dante from "../images/dante.jpg";

import type { Employee } from "./types";

const employees: Array<Employee> = [
  {
    id: 1,
    name: "Brian Mason",
    roles: ["Founder", "Private Lessons"],
    description:
      "I am a senior at Walt Whitman Highschool and have been coding for about seven years now! I am most proud of creating a Top 20 Android App! In my free time, I play tennis, read, and run!",
    image: brian,
  },
  {
    id: 2,
    name: "Yixuan Li",
    roles: ["Founder", "Private Lessons", "Advanced CSS"],
    description:
      "I am a senior at Walt Whitman Highschool and have been coding for five years! Brian and I won the 2022 Congressional App Challenge a few months back, and I am excited to share what I know!",
    image: yixuan,
  },
  {
    id: 3,
    name: "Colin Frankel",
    roles: ["Web Dev 1", "Intro to JavaScript"],
    description:
      "I am a senior at Walt Whitman Highschool and have been coding for four years. I am excited to share what I know!",
    image: colin,
  },
  {
    id: 4,
    name: "Dante Suzuki",
    roles: ["Private Lessons"],
    description:
      "I'm a senior at Walt Whitman High School and have been in computer science for about six years. I love to make games in Unity and I teach that skill in private lessons!",
    image: dante,
  },
];

export default employees;
