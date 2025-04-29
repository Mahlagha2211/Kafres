import Flip from "./Flip";
import Projects from "../Projects";

export default function () {
  return (
    <div className="flex flex-col  items-center  gap-y-16 mb-20  mx-20  ">
      <div className="bg-mainColor  rounded-full text-center font-bold py-2 px-10">
        نمونه کارها
      </div>
      <div className="w-full grid grid-cols-3 gap-x-16 gap-y-10">
        {Projects.map((item) => (
          <Flip
            explain={item.explain}
            image={item.image}
            title={item.title}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
}
