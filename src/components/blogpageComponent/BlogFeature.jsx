import { useParams } from "react-router-dom";
import Blogs from "../Blogs";

export default function BlogFeature() {
  const { id } = useParams();

  const item = Blogs.find((p) => p.id == id);
  return (
    <div className="px-20  grid grid-cols-3 pt-24 pb-16 gap-x-10">
      <div className="col-span-2 h-[500px] bg-maincolor1 rounded-lg shadow-[0_0_10px_gray]"></div>

      <div className="flex flex-col justify-between gap-y-2 col-span-1">
        <div className="bg-maincolor1 text-center py-2 rounded-lg ">
          بلاگ های پرطرفدار
        </div>
        <div className="bg-maincolor1 grow rounded-lg"></div>
        <div className="bg-maincolor1 grow rounded-lg"></div>
        <div className="bg-maincolor1 grow rounded-lg"></div>
      </div>
    </div>
  );
}
