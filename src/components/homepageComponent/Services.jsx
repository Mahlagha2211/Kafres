export default function Services() {
  return (
    <div className="flex flex-col justify-center items-center my-4">
      <div className="bg-mainColor w-96 rounded-full text-center font-bold py-2">
        خدمات کافرس
      </div>
      <div className="grid grid-cols-3 gap-20 p-20">
        <div className="services ">
          طراحی وبسایت اختصاصی برای رستوران و کافه شما
        </div>
        <div className="services">طراحی وبسایت های اقتصادی برای کسب و کارهای نو ظهور</div>
        <div className="services">
          طراحی خلاقانه منو های سفارش متناسب با اسم و ماهیت کسب و کارتان
        </div>
        <div className="services">بلاگ های آموزشی رایگان</div>
        <div className="services">مشاوره مارکتینگ برای رشد کسب و کارتان</div>
        <div className="services">بروز رسانی وبسایت</div>
      </div>
    </div>
  );
}
