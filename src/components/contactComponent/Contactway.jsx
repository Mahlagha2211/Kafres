import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function Contactway() {
  const validation = Yup.object({
    username: Yup.string().required("نام اجباری است"),
    usersirName: Yup.string().required("نام خانوادگی اجباری است"),
    phone: Yup.string()
      .matches(/^09\d{9}$/, "شماره صحیح نیست")
      .required("شماره اجباری است"),
  });

  return (
    <div className="flex flex-col py-28 items-center sm:px-12 p-8  gap-y-14">
      <div className="bg-mainColor py-2 sm:w-96 max-sm:px-12 sm:text-[18px] text-[14px] rounded-full text-center">
        راه ارتباطی مد نظر را انتخاب کنید
      </div>
      <div className="w-full  py-8 px-4 grid lg:grid-cols-3 gap-x-8 gap-y-10">
        <div className="space-y-4 max-lg:w-[80%] max-sm:w-full w-full mx-auto">
          <div className="footerItem">فرم</div>
          <div className="text-justify ">
            <Formik
              initialValues={{
                username: "",
                usersirName: "",
                phone: "",
                message: "",
              }}
              validationSchema={validation}
              onSubmit={(values) => {
                alert("فرم ارسال شد");
              }}
              validateOnBlur={false}
              vali
            >
              {() => (
                <Form className="space-y-4">
                  <div>
                    <Field
                      type="text"
                      name="username"
                      className="form"
                      placeholder="نام"
                    />
                    <ErrorMessage name="username">
                      {(msg) => (
                        <div className="error-message">{msg || " "}</div>
                      )}
                    </ErrorMessage>
                  </div>
                  <div>
                    <Field
                      type="text"
                      name="usersirName"
                      className="form"
                      placeholder="نام خانوادگی"
                    />
                    <ErrorMessage name="usersirName">
                      {(msg) => (
                        <div className="error-message">{msg || " "}</div>
                      )}
                    </ErrorMessage>
                  </div>
                  <div>
                    <Field
                      type="text"
                      name="phone"
                      className="form"
                      placeholder="شماره تلفن"
                    />
                    <ErrorMessage name="phone">
                      {(msg) => (
                        <div className="error-message">{msg || " "}</div>
                      )}
                    </ErrorMessage>
                  </div>
                  <div>
                    <Field
                      as="textarea"
                      name="message"
                      rows={5}
                      placeholder="توضیحات"
                      className="form"
                    />
                  </div>
                  <button
                    type="submit"
                    className="form py-3 px-10 rounded-lg cursor-pointer shadow-[0_0_1px_black]"
                  >
                    ارسال
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <div className="space-y-4 max-lg:w-[80%] max-sm:w-full w-full mx-auto">
          <div className="footerItem">تماس</div>
          <div className="flex justify-between px-6">
            <p className="text-center">989155151515+</p>
            <p className="text-[18px] ">پشتیبانی</p>
          </div>
        </div>
        <div className="space-y-4 max-lg:w-[80%] max-sm:w-full w-full mx-auto">
          <div className="footerItem">شبکه های اجتماعی </div>
          <div className="flex flex-col items-center justify-between h-36 ">
            <a href="" className="flex gap-x-3 items-center">
              <p className="text-[18px]">Kafres_website</p>
              <FaInstagram className="text-2xl" />
            </a>
            <a href="" className="flex gap-x-3 items-center">
              <p className="text-[18px]">Kafres_website</p>
              <FaTelegramPlane className="text-2xl" />
            </a>
            <a href="" className="flex gap-x-3 items-center">
              <p className="text-[18px]">Kafres_website</p>
              <FaYoutube className="text-2xl" />
            </a>
            <a href="" className="flex gap-x-3 items-center">
              <p className="text-[18px]">Kafres_website</p>
              <FaTwitter className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
