export default function Services() {
  return (
    <div className="flex flex-col justify-center items-center my-4">
      <div className="bg-mainColor  rounded-full text-center font-bold py-2 w-44  sm:w-96">
        خدمات کافرس
      </div>
      <div className="grid grid-cols-3 max-sm:grid-cols-1 max-[900px]:grid-cols-2 gap-y-10 gap-x-4 md:gap-10 lg:gap-12 p-8 sm:p-12">
        <div className="services ">
          طراحی وبسایت اختصاصی برای رستوران و کافه شما
        </div>
        <div className="services">
          طراحی وبسایت های اقتصادی برای کسب و کارهای نو ظهور
        </div>
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
