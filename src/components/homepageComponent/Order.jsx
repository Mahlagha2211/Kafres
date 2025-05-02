export default function Order() {
  return (
    <div className="flex flex-col justify-center items-center gap-y-16 mx-8  sm:mx-12 my-20">
      <div className="bg-mainColor w-52  sm:w-96 rounded-full text-center font-bold py-2">
        چگونه سفارش ثبت کنیم؟
      </div>
      <div className="bg-maincolor1 space-y-6  w-full rounded-lg py-14 px-8 text-justify">
        <p className=" text-[16px] sm:text-[17px] font-bold ">
          نحوه ی ثبت سفارش به شدددددت راحته. کافیه این 3 مرحله رو انجام بدی:
        </p>
        <ol className=" list-inside list-decimal text-[15px] sm:text-[17px] space-y-2 ">
          <li>از قسمت نمونه کارها، اون قالبی که میپسندی رو انتخاب کنی</li>
          <li>روش کلیک کنی و جزئیاتش رو بخونی</li>
          <li>
            بعد از اینکه مطمئن شدی این همون چیزیه که میخوای، مشخصات شخصی سازی
            وبسایت ای که میخوای رو بما بدی تا ما کار رو شروع کنیم. همین 
          </li>
        </ol>
      </div>
    </div>
  );
}
