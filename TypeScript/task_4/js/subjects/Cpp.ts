/// <reference path="Teacher.ts" />
/// <reference path="Subject.ts" />

namespace Subjects {
    // Declaration merging to add experienceTeachingC to the Teacher interface
    export interface Teacher {
      experienceTeachingC?: number;
    }
  
    export class Cpp extends Subject {
      getRequirements(): string {
        return "Here is the list of requirements for Cpp";
      }
  
      getAvailableTeacher(teacher: Teacher): string {
        if (teacher.experienceTeachingC && teacher.experienceTeachingC > 0) {
          return `Available Teacher: ${teacher.firstName}`;
        } else {
          return "No available teacher";
        }
      }
    }
  }
  