import React, { useCallback, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";

const CustomOrder = ({ onClose, data }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    artworkFor: "",
    size: "",
    framed: "framed",
    timeRequired: "3 days",
    investment: "",
    additionalInfo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const makeOrder = useCallback(
    async (orderDetails) => {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      await axios
        .post(
          `${server}/order/custom-order`,
          {
            ...orderDetails,
            toEmail: data?.shop?.email,
          },
          config
        )
        .then((res) => {
          toast.success("Order successful!");
        })
        .catch((e) => {
          toast.error("Sorry Error Occured");
        })
        .finally(onClose());
    },
    [data?.shop?.email, onClose]
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    makeOrder(formData);
    // console.log(formData);
    // // Optionally, close the modal after submission
    // onClose();
  };

  return (
    <div className="bg-[#fff]">
      <div className="fixed w-full h-screen top-0 left-0 bg-[#00000030] z-[100] flex items-center justify-center">
        <div className="w-[90%] 800px:w-[60%] h-[90vh] 800px:h-[75vh] bg-white rounded-md shadow-sm p-4 overflow-y-scroll">
          <div className="my-2">
            <RxCross1
              size={30}
              className="float-right z-50 cursor-pointer"
              onClick={onClose}
            />
          </div>
          <form onSubmit={handleSubmit} className="space-y-4 ">
            <div className="block w-full 800px:flex space-y-4 800px:space-y-0 800px:space-x-4">
              <div className="w-full">
                <label className="block text-sm font-medium">
                  Name: <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border rounded p-2"
                  required
                />
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium">
                  Email: <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border rounded p-2"
                  required
                />
              </div>
            </div>
            <div className="block w-full 800px:flex space-y-4 800px:space-y-0 800px:space-x-4">
              <div className="w-full">
                <label className="block text-sm font-medium">
                  Contact no: <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  className="w-full border rounded p-2"
                  minLength={11}
                  pattern="\d*"
                  required
                />
                {formData.contact.length > 0 &&
                  formData.contact.length < 11 && (
                    <p className="text-red-500 text-sm">
                      Contact number must be at least 11 digits long.
                    </p>
                  )}
              </div>

              <div className="w-full">
                <label className="block text-sm font-medium">
                  Artwork is for: <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="artworkFor"
                  value={formData.artworkFor}
                  onChange={handleChange}
                  className="w-full border rounded p-2"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium">
                Approximate size: (32x32){" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="size"
                value={formData.size}
                onChange={handleChange}
                className="w-full border rounded p-2"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Frame option:</label>
              <div className="flex space-x-4">
                <label>
                  <input
                    type="radio"
                    name="framed"
                    value="framed"
                    checked={formData.framed === "framed"}
                    onChange={handleChange}
                    className="mr-2 text-[#24222a] bg-gray-100 border-gray-300 focus:ring-[#24222a]"
                  />
                  Framed
                </label>
                <label>
                  <input
                    type="radio"
                    name="framed"
                    value="unframed"
                    checked={formData.framed === "unframed"}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Unframed
                </label>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium">
                Time required:
              </label>
              <select
                name="timeRequired"
                value={formData.timeRequired}
                onChange={handleChange}
                className="w-full border rounded p-2"
                required
              >
                <option value="3 days">3 days</option>
                <option value="week">Week</option>
                <option value="10 days">10 days</option>
                <option value="month">Month</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">
                I am looking to invest: (in USD){" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="investment"
                value={formData.investment}
                onChange={handleChange}
                className="w-full border rounded p-2"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">
                Anything else you want to add:
              </label>
              <textarea
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                className="w-full border rounded p-2"
                rows="4"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-[20vw] bg-[#24222a] rounded-md text-white py-2  hover:bg-[#312d3c]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CustomOrder;
