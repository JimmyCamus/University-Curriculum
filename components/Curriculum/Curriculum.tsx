"use client";
import { useState } from "react";
import { DataEntry } from "../../lib/types/curriculum.type";
import SemesterRow from "../Curriculum/SemesterRow";
import CourseBox from "./Course";
import Explain from "./Explain";

const Curriculum = ({ data }: { data: DataEntry }) => {
  const [coursesState, setCoursesState] = useState(data);
  return (
    <div className="flex flex-col">
      <Explain />
      <div className="flex flex-row">
        {coursesState.map((items, semesterIndex) => {
          return (
            <div className="p-6" key={semesterIndex}>
              <SemesterRow title={items.title} />
              <div className="flex items-center justify-center flex-col">
                {items.courses.map((course, index) => (
                  <CourseBox
                    key={index}
                    course={course}
                    setCoursesState={setCoursesState}
                    coursesState={coursesState}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Curriculum;
