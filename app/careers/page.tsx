import { getCareers } from "../../api/career.api";
import Card from "../../components/Careers/Card";

const Careers = async () => {
  const careers = await getCareers();
  return (
    <div className="flex flex-col md:flex-row py-6">
      {careers.map((career, index) => (
        <Card career={career} key={index} />
      ))}
    </div>
  );
};

export default Careers;
