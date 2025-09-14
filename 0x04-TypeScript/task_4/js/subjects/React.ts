/// <reference path="./Subject.ts" />

namespace Subjects {
  // Declaration merging: add new attribute to Teacher interface
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  // React class extending Subject
  export class React extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for React";
    }

    getAvailableTeacher(): string {
      if (
        !this.teacher ||
        this.teacher.experienceTeachingReact === undefined ||
        this.teacher.experienceTeachingReact <= 0
      ) {
        return "No available teacher";
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
