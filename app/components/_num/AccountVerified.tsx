import React from 'react';
import { useAppDispatch, useAppSelector } from '@/app/redux/hook';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { setFormData } from '@/app/redux/features/verifiedFormSlice';
import { BiUserCircle } from "react-icons/bi";

const AccountVerified: React.FC = () => {
  const dispatch = useAppDispatch();
  const formData = useAppSelector((store) => store.verifiedForm);

  const formik = useFormik({
    initialValues: formData,
    validationSchema: Yup.object({
      company: Yup.string().required("Company name is required"),
      employeeSize: Yup.string().required("Employee size is required"),
      name: Yup.string().required("Name is required"),
      residentialType: Yup.string().required("Residential type is required"),
      country: Yup.string().required("Country is required"),
      address: Yup.string().required("Address is required"),
    }),
    onSubmit: (values) => {
      dispatch(setFormData(values));
      alert("Account information updated successfully");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="w-full p-6 bg-white rounded-lg shadow space-y-6">
      <section className="flex items-center space-x-3 py-1">
        <div className="p-3 bg-violet-500 bg-opacity-10 rounded-md">
          <BiUserCircle className="text-gray-500 text-lg" />
        </div>
        <span className="text-[16px] sm:text-[20px] font-semibold">Account Verification</span>
      </section>

      {/* Company Details Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-medium text-violet-700 flex items-center">
            <span className="material-icons-outlined">Business</span>
            <span className="ml-2">Company Details</span>
          </h3>
          <div className="mt-4 space-y-4">
            <div>
              <label htmlFor="company" className="block text-sm font-medium">Company</label>
              <input
                id="company"
                name="company"
                type="text"
                className="w-full p-2 border rounded text-sm outline-none"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.company}
              />
              {formik.touched.company && formik.errors.company && (
                <p className="text-red-600 text-xs">{formik.errors.company}</p>
              )}
            </div>
            <div>
              <label htmlFor="employeeSize" className="block text-sm font-medium">Employee Size</label>
              <select
                id="employeeSize"
                name="employeeSize"
                className="w-full p-2 border rounded text-sm outline-none"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.employeeSize}
              >
                <option value="">Select</option>
                Add your employee size options here
                <option value="1-10">1-10</option>
                <option value="11-50">11-50</option>
                <option value="51-200">51-200</option>
              </select>
              {formik.touched.employeeSize && formik.errors.employeeSize && (
                <p className="text-red-600 text-xs">{formik.errors.employeeSize}</p>
              )}
            </div>
          </div>
        </div>

        {/* Billing Address Section */}
        <div>
          <h3 className="text-lg font-medium text-violet-700 flex items-center">
            <span className="material-icons-outlined">Home</span>
            <span className="ml-2">Billing Address</span>
          </h3>
          <div className="mt-4 space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                className="w-full p-2 border rounded text-sm outline-none"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-red-600 text-xs">{formik.errors.name}</p>
              )}
            </div>
            <div>
              <label htmlFor="residentialType" className="block text-sm font-medium">Residential Type</label>
              <select
                id="residentialType"
                name="residentialType"
                className="w-full p-2 border rounded text-sm outline-none"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.residentialType}
              >
                <option value="">Select</option>
                {/* Add your residential type options here */}
                <option value="Apartment">Apartment</option>
                <option value="House">House</option>
              </select>
              {formik.touched.residentialType && formik.errors.residentialType && (
                <p className="text-red-600 text-xs">{formik.errors.residentialType}</p>
              )}
            </div>
            <div>
              <label htmlFor="country" className="block text-[13px] font-medium">Country</label>
              <select
                id="country"
                name="country"
                className="w-full p-2 border rounded text-[13px] outline-none"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.country}
              >
                {/* <option value="">Select Country</option> */}
                {/* Add your country options here */}
                <option value="US">United States</option>
                <option value="UK">United Kingdom</option>
                <option value="PL">Poland</option>
                <option value="ES">Spain</option>
              </select>
              {formik.touched.country && formik.errors.country && (
                <p className="text-red-600 text-xs">{formik.errors.country}</p>
              )}
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium">Address</label>
              <input
                id="address"
                name="address"
                type="text"
                className="w-full p-2 border rounded text-sm outline-none"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.address}
              />
              {formik.touched.address && formik.errors.address && (
                <p className="text-red-600 text-xs">{formik.errors.address}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div>
        <button type="submit" className="w-full md:w-auto bg-violet-700 text-white p-2 rounded text-[15px]">
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default AccountVerified;
