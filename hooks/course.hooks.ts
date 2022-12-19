import { Dispatch, SetStateAction } from "react";
import { Course } from "../lib/types/career.type";
import { DataEntry } from "../lib/types/curriculum.type";

export const useHandleSemester = (courses: Course[]) => {
  let coursesAux = courses;
  const data = [];
  let counter = 1;
  while (coursesAux.length > 0) {
    const inCommingCourses = coursesAux.filter(
      (course) => course.semester === counter
    );
    coursesAux = coursesAux.filter(
      (course) => !inCommingCourses.includes(course)
    );

    data.push({
      title: `Semestre ${counter}`,
      courses: inCommingCourses,
    });

    counter++;
  }
  return data;
};

export const useHandleMouseEnterCourse = () => handleMouseEnterCourse;

const handleMouseEnterCourse = (
  value: boolean,
  course: Course,
  coursesState: DataEntry,
  setCoursesState: Dispatch<SetStateAction<DataEntry>>
) => {
  const newState = coursesState.map((item) => {
    const courses = item.courses.map((courseItem) => {
      if (courseItem.predecessors.includes(course.name)) {
        courseItem.isPredecessor = value;
      } else if (courseItem.successors.includes(course.name)) {
        courseItem.isSuccessor = value;
      }
      return courseItem;
    });
    return { ...item, courses };
  });
  setCoursesState(newState);
};
