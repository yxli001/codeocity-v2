import employees from "./employees";
import type { Employee } from "./types";

export const checker = (title: string) => {
  const listOfEmployees: Array<Employee> = [];
  employees.forEach((employee) => {
    if (employee.roles.includes(title)) {
      listOfEmployees.push(employee);
    }
  });
  return listOfEmployees;
};
