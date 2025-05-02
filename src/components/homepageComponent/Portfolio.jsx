import Flip from "./Flip";
import Projects from "../Projects";

export default function () {
  return (
    <div className="flex flex-col  items-center  gap-y-16 mb-20  sm:mx-12 mx-8 ">
      <div className="bg-mainColor  rounded-full text-center font-bold py-2  w-44  sm:w-96 ">
        نمونه کارها
      </div>
      <div className="w-full grid grid-cols-3 max-sm:grid-cols-1 max-lg:grid-cols-2 gap-y-10 gap-x-4 md:gap-10 lg:gap-12 ">
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
