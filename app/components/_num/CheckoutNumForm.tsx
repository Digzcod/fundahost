import React from "react";
import { useFormik } from "formik";
import { LiaPhoneSolid } from "react-icons/lia";
import { AiOutlineCheck } from "react-icons/ai";
import { FaRegPaperPlane } from "react-icons/fa";
import { BsFileMedical } from "react-icons/bs";
import * as Yup from "yup";
import { useAppDispatch } from "@/app/redux/hook";
import { setFormData } from "@/app/redux/features/verifiedFormSlice";

interface FormValues {
  company: string;
  employeeSize: string;
  name: string;
  residentialType: string;
  country: string;
  address: string;
}

interface PropsHandleSection {
  handleActiveSection: (section: string) => void;
}

const CheckoutNumForm: React.FC<PropsHandleSection> = ({
  handleActiveSection,
}) => {
  const dispatch = useAppDispatch();
  const formik = useFormik<FormValues>({
    initialValues: {
      company: "",
      employeeSize: "",
      name: "",
      residentialType: "",
      country: "",
      address: "",
    },
    validationSchema: Yup.object({
      company: Yup.string().required("Company name is required"),
      employeeSize: Yup.string().required("Please select employee size"),
      name: Yup.string().required("Name is required"),
      residentialType: Yup.string().required("Residential type is required"),
      country: Yup.string().required("Country is required"),
      address: Yup.string().required("Address is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      dispatch(setFormData(values));
      alert(JSON.stringify(values, null, 2));
      handleActiveSection("verifications");
    },
  });

  return (
    <section className="w-full md:h-auto bg-white p-3 rounded-lg shadow-lg space-y-4">
      <div className="flex items-center space-x-2 text-xl font-semibold text-gray-800 mb-3">
        <section className="p-2 sm:p-3 bg-violet-500 bg-opacity-10 rounded-md">
          <LiaPhoneSolid className="text-gray-500" />
        </section>
        <span className=" text-[16px] md:text-[18px] font-semibold">Plan</span>
      </div>

      {/* Plan Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 border rounded-md">
          <section className="flex justify-center">
            <span className=" text-4xl text-violet-700 md:text-5xl my-3">
              <FaRegPaperPlane />
            </span>
          </section>

          <section className="grid justify-items-center mt-2">
            <div className="flex items-baseline space-x-2 my-1">
              <span className="text-[25px] font-semibold">£30</span>
              <span className="text-[15px] font-medium">/Weekly</span>
            </div>
            <section className="flex space-x-1 items-start">
              <span className="p-1 bg-slate-200 rounded-full">
                <AiOutlineCheck className="text-[#6a0dad] text-[10px] font-extrabold" />
              </span>
              <span className="text-sm">
                You&apos;ll experience the convenience of being organized in one
                app.
              </span>
            </section>
          </section>
        </div>

        <div className="relative p-6 bg-violet-700  rounded-lg text-white">
          {/* Special Badge */}
          <span className="absolute top-2 left-2 bg-white text-[13px] text-slate-900 px-3 py-1 rounded-full font-medium">
            Special
          </span>

          {/* Plan Details */}
          <div className="flex flex-col items-center space-y-2">
            <span className=" text-4xl md:text-5xl my-3">🚀</span>{" "}
            {/* Replace with any relevant icon */}
            <section className="flex items-baseline space-x-3">
              <span className="text-[20px] md:text-[25px] font-bold">£24</span>
              <span className="text-[15px] font-medium"> /Weekly</span>
            </section>
            <section className="flex space-x-1 items-start">
              <span className="p-1 bg-slate-200 rounded-full">
                <AiOutlineCheck className="text-[#6a0dad] text-[10px] font-extrabold" />
              </span>
              <span className="text-sm">
                You'll experience the convenience of being organized in one app.
              </span>
            </section>
          </div>
        </div>
      </div>
      <form onSubmit={formik.handleSubmit}>
        {/* Company Details */}
        <div className="mt-[2rem]">
          <section className="flex items-center space-x-1 my-1">
            <span className="p-2 rounded-md bg-violet-100">
              <BsFileMedical />
            </span>
            <span className="text-[14px] md:text-[15px]">Company Details</span>
          </section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="company"
                className="block text-[13px] font-medium"
              >
                Company
              </label>
              <input
                id="company"
                name="company"
                type="text"
                className="w-full p-2 border rounded text-[13px] outline-none"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.company}
              />
              {formik.touched.company && formik.errors.company ? (
                <p className="text-red-600 text-sm">{formik.errors.company}</p>
              ) : null}
            </div>
            <div>
              <label
                htmlFor="employeeSize"
                className="block text-[13px] font-medium outline-none"
              >
                Employee Size
              </label>
              <select
                id="employeeSize"
                name="employeeSize"
                className="w-full p-2 border rounded text-[13px] outline-none"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.employeeSize}
              >
                <option value="">Select</option>
                <option value="1-2">1-2</option>
                <option value="2-3">2-3</option>
                <option value="4-5">4-5</option>
              </select>
              {formik.touched.employeeSize && formik.errors.employeeSize ? (
                <p className="text-red-600 text-sm">
                  {formik.errors.employeeSize}
                </p>
              ) : null}
            </div>
          </div>
        </div>

        {/* Billing Address */}
        <div>
          <section className="flex items-center space-x-1 my-1">
            <span className="p-2 rounded-md bg-violet-100">
              <BsFileMedical />
            </span>
            <span className="text-[14px] md:text-[15px]">Billing Address</span>
          </section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-[13px] font-medium">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="w-full p-2 border rounded text-[13px] outline-none"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name ? (
                <p className="text-red-600 text-sm">{formik.errors.name}</p>
              ) : null}
            </div>
            <div>
              <label
                htmlFor="residentialType"
                className="block text-[13px] font-medium"
              >
                Residential Type
              </label>
              <select
                id="residentialType"
                name="residentialType"
                className="w-full p-2 border rounded text-[13px] outline-none"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.residentialType}
              >
                <option value="">Select</option>
                <option value="House">House</option>
                <option value="Apartment">Apartment</option>
              </select>
              {formik.touched.residentialType &&
              formik.errors.residentialType ? (
                <p className="text-red-600 text-sm">
                  {formik.errors.residentialType}
                </p>
              ) : null}
            </div>
            <div>
              <label
                htmlFor="country"
                className="block text-[13px] font-medium"
              >
                Country
              </label>
              <div className="relative">
                <select
                  id="country"
                  name="country"
                  className="w-full p-2 py-3 border rounded text-[13px] outline-none"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.country}
                >
                  <option value="">Select Country</option>
                  <option value="US"> United States</option>
                  <option value="UK"> United Kingdom</option>
                  <option value="PL"> Poland</option>
                  <option value="ES"> Spain</option>
                </select>
                {formik.touched.country && formik.errors.country ? (
                  <p className="text-red-600 text-sm">
                    {formik.errors.country}
                  </p>
                ) : null}
              </div>
            </div>

            <div>
              <label
                htmlFor="address"
                className="block text-[13px] font-medium"
              >
                Address
              </label>
              <input
                id="address"
                name="address"
                type="text"
                className="w-full p-2 border rounded text-[13px] outline-none"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.address}
              />
              {formik.touched.address && formik.errors.address ? (
                <p className="text-red-600 text-sm">{formik.errors.address}</p>
              ) : null}
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-violet-700 text-white p-2 rounded my-4"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default CheckoutNumForm;
