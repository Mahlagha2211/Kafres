import Blogs from "../Blogs";
import BlogTemplates from "./BlogTemplates";

export default function BlogTemplate() {
  return (
    <div className="flex flex-col py-28 items-center sm:px-12 px-8 gap-y-14">
      <div className="bg-mainColor py-2  rounded-full text-center sm:w-96 max-sm:px-12 sm:text-[18px] text-[16px]">
        بلاگ ها
      </div>
      <div className="grid grid-cols-3 max-sm:grid-cols-1 max-lg:grid-cols-2 gap-y-10 gap-x-4 md:gap-10 lg:gap-12 w-full">
        {Blogs.map((item) => (
          <BlogTemplates key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
