import { useEffect } from "react";
import { initFlowbite } from "flowbite";

export default function Carousel() {
  useEffect(() => {
    initFlowbite(); // این کد باعث میشه کامپوننت هایی که data-attribute دارن دوباره initialize بشن
  }, []);
  return (
    <div className="pt-[80px] px-10 pb-4 ">
      <div
        id="default-carousel"
        className="relative w-[100%] h-[100%] "
        data-carousel="slide"
      >
        {/* Carousel wrapper */}
        <div className="relative overflow-hidden rounded-lg md:h-[420px] sm:h-80 h-72">
          {/* Item 1 */}
          <div
            className="hidden duration-700 ease-in-out "
            data-carousel-item="active"
          >
            <img
              src="./image/carousel-1.svg"
              className="absolute w-full   -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          {/* Item 2 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="./image/carousel-2.svg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          {/* Item 3 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="./image/carousel-3.svg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          {/* Item 4 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="./image/carousel-4.svg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          {/* Item 5 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="./image/carousel-5.svg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
        </div>

        {/* Slider indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3  ">
          {[...Array(5)].map((_, i) => (
            <button
              key={i}
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current={i === 0 ? "true" : "false"}
              aria-label={`Slide ${i + 1}`}
              data-carousel-slide-to={i}
            ></button>
          ))}
        </div>

        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30  ">
            <svg
              className="w-4 h-4 text-white  rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>

        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer "
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 ">
            <svg
              className="w-4 h-4 text-white  rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
}
