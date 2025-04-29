import { useRef, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";

export default function Question() {
  const answerRefs = useRef([]);
  const [openIndex, setOpenIndex] = useState(null);

  const handleQuestions = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const questions = [
    {
      question: "چقدر طول میکشه سایتم آماده بشه؟",
      answer:
        "بستگی بین نوع سایت انتخابیتون و مقدار شخصی سازی که مد نظرتون داره. اما معمولا بین 1 تا 3 هفته",
    },
    {
      question: "قیمت سایت ها چقدره؟",
      answer:
        "یکی از اهداف کافرس همینه که شما چه کسب و کار نوپا باشید چه جا افتاده، بهتون کمک کنه تا وبسایت شخصی خودتون رو داشه باشید. برای همین ما هم قالب های شخصی سازی داریم و هم قالب های اقتصادی که شما با توجه به بودجه ای که دارین میتونید هرکدوم از اونهارو داشته باشید. اما به طور کلی ارزش وبسایت ها از 5 میلیون تومن شروع میشه",
    },
    {
      question: "چرا کافرس رو باید انتخاب کنیم؟",
      answer:
        "کافرس به طور تخصصی تو حوزه طراحی سایت برای کافه و رستوران ها کار میکنه و از ترند های روز در این صنعت خبر داره. همجنین تیمی پر انرژی و جوون داره که آماده کمک بهتونن تا بتونید نیاز های حداقلی تون رو با کمترین هزینه و سزیعترین زمان رفع کنید. هدف اصلی کارفس رضایت شما دوستان عزیزه و تا جایی که میتونه بر این اصل پا بر جاعه.",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center gap-y-16 mb-20  mx-20 ">
      <div className="bg-mainColor w-96 rounded-full text-center font-bold py-2">
        سوالات متداول
      </div>
      <div className="w-[80%] space-y-6">
        {questions.map((item, index) => (
          <div key={index} className="space-y-4">
            <div
              className="questions cursor-pointer p-4 font-bold"
              onClick={() => handleQuestions(index)}
            >
             <span className={`transform transition-transform duration-700 ${openIndex==index? "rotate-180":"rotate-0"}`}> {openIndex == index ? <FaMinus /> : <FaPlus />}</span>
              {item.question}
            </div>
            <div
              ref={(el) => (answerRefs.current[index] = el)}
              style={{
                height:
                  openIndex === index
                    ? `${answerRefs.current[index]?.scrollHeight}px`
                    : "0px",
              }}
              className={`overflow-hidden transition-all duration-700 ease-in-out px-10 text-justify  `}
            >

              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
