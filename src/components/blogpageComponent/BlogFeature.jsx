import { useParams } from "react-router-dom";
import Blogs from "../Blogs";

export default function BlogFeature() {
  const { id } = useParams();

  const item = Blogs.find((p) => p.id == id);
  return (
    <div className="sm:px-12 px-8   grid grid-cols-3 max-sm:grid-cols-1 pt-24 pb-16 md:gap-x-10 gap-x-4 gap-y-8">
      <div className="sm:col-span-2 md:h-[500px] sm:h-[400px] h-[300px] bg-maincolor1 rounded-lg shadow-[0_0_10px_gray]"></div>

      <div className="flex flex-col justify-between gap-y-2 sm:col-span-1">
        <div className="bg-maincolor1 text-center py-2 rounded-lg ">
          بلاگ های پرطرفدار
        </div>
        <div className="bg-maincolor1 grow rounded-lg max-sm:h-24"></div>
        <div className="bg-maincolor1 grow rounded-lg max-sm:h-24"></div>
        <div className="bg-maincolor1 grow rounded-lg max-sm:h-24"></div>
      </div>
    </div>
  );
}
