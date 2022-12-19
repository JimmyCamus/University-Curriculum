import { Dispatch, SetStateAction } from "react";
import { useHandleMouseEnterCourse } from "../../hooks/course.hooks";
import { Course } from "../../lib/types/career.type";
import { DataEntry } from "../../lib/types/curriculum.type";

const CourseBox = ({
  course,
  setCoursesState,
  coursesState,
}: {
  course: Course;
  setCoursesState: Dispatch<SetStateAction<DataEntry>>;
  coursesState: DataEntry;
}) => {
  const handleMouseEnterCourse = useHandleMouseEnterCourse();
  const handleMouseEnter = (value: boolean) =>
    handleMouseEnterCourse(value, course, coursesState, setCoursesState);

  return (
    <div
      className={`
      hover:bg-neutral-hover
      w-36
      h-20
      flex
      justify-center
      text-center
      my-4
      px-2
      card 
      shadow-xl
      ${
        course.isSuccessor
          ? "bg-predecessor"
          : course.isPredecessor
          ? "bg-successor"
          : "bg-neutral-content"
      }
      `}
      onMouseEnter={() => handleMouseEnter(true)}
      onMouseLeave={() => handleMouseEnter(false)}
    >
      <p>{course.name}</p>
    </div>
  );
};

export default CourseBox;
