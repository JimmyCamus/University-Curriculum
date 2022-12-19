import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { getCourses } from "../../../api/career.api";
import Curriculum from "../../../components/Curriculum/Curriculum";
import { useHandleSemester } from "../../../hooks/course.hooks";

const CurriculumPage = async ({ params }: { params: Params }) => {
  const { id } = params;
  const courses = await getCourses(id);
  const data = useHandleSemester(courses);
  return (
    <div>
      <Curriculum data={data} />
    </div>
  );
};

export default CurriculumPage;
