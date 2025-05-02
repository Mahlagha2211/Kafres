import Template from "./Template";
import Projects from "../Projects";

export default function Templates() {
  return (
    <div className="flex flex-col py-28 items-center sm:px-12 px-8 gap-y-14">
      <div className="bg-mainColor py-2  text-center   rounded-full sm:w-96 max-sm:px-4 sm:text-[18px] text-[16px]">
        قالب مخصوص خود را انتخاب کنید
      </div>
      <div className=" grid grid-cols-3 max-sm:grid-cols-1 max-lg:grid-cols-2 gap-y-10 gap-x-4 md:gap-10 lg:gap-12 w-full">
        {Projects.map((item) => (
          <Template key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
