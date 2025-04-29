import { useNavigate } from "react-router-dom";

export default function BlogTemplates({ item }) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center gap-y-7">
      <div className="w-full h-[350px] bg-maincolor1 rounded-lg p-2  "></div>
      <div
        className="bg-mainColor py-3 px-4 rounded-full shadow-[5px_5px_2px_lightgray] cursor-pointer"
        onClick={() => navigate(`/blog/${item.id}`)}
      >
        مشاهده جزئیات
      </div>
    </div>
  );
}
