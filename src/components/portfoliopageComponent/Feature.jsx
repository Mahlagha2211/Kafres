import { useParams } from "react-router-dom";
import Projects from "../Projects";

export default function Feature() {
  const { id } = useParams();

  const item = Projects.find((p) => p.id == id);

  return (
    <div className="flex flex-col items-center max-sm:w-[100%] sm:px-12 px-4  py-24 gap-y-7">
      <div className="sm:w-[500px] w-full  h-80 max-sm:h-64">
        <img
          src={item.image}
          className="w-full h-full  object-cover rounded-lg"
        />
      </div>
      <div className="bg-mainColor py-3 px-4 rounded-full shadow-[5px_5px_2px_lightgray] cursor-pointer max-sm:text-[14px]">
        نمایش نمونه
      </div>
      <div className="w-full space-y-5 flex flex-col">
        <div className="bg-maincolor1  py-2 px-5 rounded-2xl self-start max-sm:text-[14px]">
          ویژگی ها
        </div>
        <div className="bg-maincolor1 text-justify p-8 rounded-lg md:min-h-64 space-y-4">
          <p className="font-bold sm:text-[19px] text-[16px]">{item.title}</p>
          <p className="max-sm:text-[14px]">{item.explain}</p>
        </div>
        <div className="bg-mainColor py-3 px-5 rounded-lg self-end cursor-pointer max-sm:text-[14px]">
          ثبت سفارش
        </div>
      </div>
    </div>
  );
}
