import Image from "next/image";
import { getImage } from "../../../api/career.api";
import { Career } from "../../../lib/types/career.type";

const Card = async ({ career }: { career: Career }) => {
  const url = await getImage(career.name);
  return (
    <div className="card md:w-96 bg-base-100 shadow-xl my-2 md:mx-10 hover:bg-[#f5f5f5]">
      <div className="card-body flex justify-center">
        <Image src={url} width="400" height="400" alt="" />
        <h2 className="card-title text-center text-md">{career.name}</h2>
        <div className="card-actions justify-center py-4">
          <a className="btn btn-primary">Ver malla curricular</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
