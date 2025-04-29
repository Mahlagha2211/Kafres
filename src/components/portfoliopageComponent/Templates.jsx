import Template from "./Template";
import Projects from "../Projects";

export default function Templates() {
  return (
    <div className="flex flex-col py-28 items-center px-20 gap-y-14">
      <div className="bg-mainColor py-2 px-28 rounded-full text-[18px]">
        قالب مخصوص خود را انتخاب کنید
      </div>
      <div className="grid grid-cols-3 gap-x-16 gap-y-10 w-full">
        {Projects.map((item) => (
          <Template key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
