import { useNavigate } from "react-router-dom";

export default function Template({ item }) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center gap-y-7">
      <div className="w-full h-[350px]  rounded-lg">
        <img
          src={item.image}
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div
        className="bg-mainColor py-3 px-4 rounded-full shadow-[5px_5px_2px_lightgray] cursor-pointer"
        onClick={() => navigate(`/portfolio/${item.id}`)}
      >
        مشاهده جزئیات
      </div>
    </div>
  );
}
