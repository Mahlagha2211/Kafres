import { useParams } from "react-router-dom";
import Projects from "../Projects";


export default function Feature() {
  const { id } = useParams();

  const item = Projects.find((p) => p.id == id);

  return (
    <div className="flex flex-col items-center px-20 py-24 gap-y-7">
      <div className="w-[500px] h-80">
        <img
          src={item.image}
          className="w-full h-full  object-cover rounded-lg"
        />
      </div>
      <div className="bg-mainColor py-3 px-4 rounded-full shadow-[5px_5px_2px_lightgray] cursor-pointer">
        نمایش نمونه
      </div>
      <div className="w-full space-y-5 flex flex-col">
        <div className="bg-maincolor1  py-2 px-5 rounded-2xl self-start">
          ویژگی ها
        </div>
        <div className="bg-maincolor1 text-justify p-8 rounded-lg min-h-64 space-y-4">
          <p className="font-bold text-[19px]">{item.title}</p>
          <p>{item.explain}</p>
        </div>
        <div className="bg-mainColor py-3 px-5 rounded-lg self-end cursor-pointer">
          ثبت سفارش
        </div>
      </div>
    </div>
  );
}
