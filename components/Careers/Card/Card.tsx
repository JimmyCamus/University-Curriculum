import Image from "next/image";
import Link from "next/link";
import { getImage } from "../../../api/career.api";
import { Career } from "../../../lib/types/career.type";

const Card = async ({ career }: { career: Career }) => {
  const url = await getImage(career.name);
  return (
    <div className="card w-3/4 md:w-96 bg-base-100 shadow-xl my-2 md:mx-10 hover:bg-card-hover">
      <div className="card-body flex justify-center">
        <div className="flex flex-col justify-center items-center">
          <Image src={url} width="400" height="400" alt="" />
          <h2 className="card-title text-center text-md">{career.name}</h2>
        </div>
        <div className="card-actions justify-center py-4">
          <Link href={`/careers/${career.id}`} className="btn btn-primary text-white">Ver malla curricular</Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
