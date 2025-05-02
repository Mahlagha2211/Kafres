import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-maincolor1  py-8 px-4 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1    gap-x-8 gap-y-8 max-[400px]:text-[13px]">
      <div className="space-y-4 ">
        <div className="footerItem">ما را در شبکه های اجتماعی دنبال کنید</div>
        <div className="flex flex-col items-center justify-between h-36 ">
          <a href="" className="flex gap-x-3 items-center ">
            <p className="text-[18px] max-[400px]:text-[15px]">
              Kafres_website
            </p>
            <FaInstagram className="text-2xl max-[400px]:text-[20px]" />
          </a>
          <a href="" className="flex gap-x-3 items-center">
            <p className="text-[18px] max-[400px]:text-[15px]">
              Kafres_website
            </p>
            <FaTelegramPlane className="text-2xl max-[400px]:text-[20px]" />
          </a>
          <a href="" className="flex gap-x-3 items-center">
            <p className="text-[18px] max-[400px]:text-[15px]">
              Kafres_website
            </p>
            <FaYoutube className="text-2xl max-[400px]:text-[20px]" />
          </a>
          <a href="" className="flex gap-x-3 items-center">
            <p className="text-[18px] max-[400px]:text-[15px]">
              Kafres_website
            </p>
            <FaTwitter className="text-2xl max-[400px]:text-[20px]" />
          </a>
        </div>
      </div>
      <div className="space-y-4">
        <div className="footerItem">صفحات پربیننده</div>
        <div className="grid grid-cols-2 h-36 ">
          <div className="flex flex-col items-center justify-between">
            <NavLink>قالب ها</NavLink>
            <NavLink>سوالات متداول</NavLink>
            <NavLink>تماس با پشتیبانی</NavLink>
            <NavLink>قوانین و مقررات</NavLink>
            <NavLink>وبلاگ آموزشی</NavLink>
          </div>
          <div className=" flex flex-col items-center justify-between">
            <NavLink>درباره ما</NavLink>
            <NavLink>نظر مشتریان</NavLink>
            <NavLink>تخفیف ها</NavLink>
            <NavLink>موقعیت ها</NavLink>
          </div>
        </div>
      </div>
      <div className="space-y-4 ">
        <div className="footerItem">با کافرس همراه باشید</div>
        <div className="text-justify px-6">
          رویکر و هدف اصلی ما رضایت شما عزیزان است. همواره در تلاشیم تا با کمک
          هرچند کوچک به کسب و کار ها، در مسیر موفقیتشان همراه باشیم و بهترین
          خدمات را ارائه دهیم.
        </div>
      </div>
    </div>
  );
}
