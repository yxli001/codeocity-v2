export type Course = {
  id: number;
  title: string;
  price: number;
  numClasses: number;
  description: string;
  content: Array<string>;
  image: string;
  video: string;
  times: Array<string>;
  teachers: Array<Employee>;
  madeFor: string;
  startsOn: string;
};

export type Employee = {
  id: number;
  name: string;
  roles: Array<string>;
  description: string;
  image: string;
};
