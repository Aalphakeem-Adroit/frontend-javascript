// 5. Advance Types Part 1
// Creating the DirectorInterface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Creating the TeacherInterface
interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

// Creating the Director Class that will implement the DirectorInterface
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Creating the Teacher Class that will implement the TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

//  Creating a function createEmployee
function createEmployee(salary: number | string): Director | Teacher {

    // if (typeof salary === "number" && salary < 500) {
    //     return new Teacher();
    //         } else {
    //             return new Director();
    //         }
    // }

  if (salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// Example usage
const emp1 = createEmployee(200);
const emp2 = createEmployee(1000);
const emp3 = createEmployee("500");

console.log(emp1); // Teacher
console.log(emp2); // Director
console.log(emp3); // Director


// 6. Creating functions specific to employees
// Creating isDrector function
function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

// Creating executeWork function
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// Example usage
console.log(executeWork(createEmployee(200)));   // Getting to work
console.log(executeWork(createEmployee(1000)));  // Getting to director tasks
