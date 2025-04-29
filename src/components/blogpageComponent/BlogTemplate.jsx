import Blogs from "../Blogs";
import BlogTemplates from "./BlogTemplates";

export default function BlogTemplate() {
  return (
    <div className="flex flex-col py-28 items-center px-20 gap-y-14">
      <div className="bg-mainColor py-2 px-28 rounded-full text-[18px]">
        بلاگ ها
      </div>
      <div className="grid grid-cols-3 gap-x-16 gap-y-10 w-full">
        {Blogs.map((item) => (
          <BlogTemplates key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
