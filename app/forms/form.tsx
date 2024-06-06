"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { FormData } from "../lib/interfaces";
import { useRouter } from "next/navigation";

export default function SendMessageForm() {
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    message: "",
  });

  const handleChange = (
    ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = ev.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    router.push("/thankyou");
  };

  return (
    <div className="border p-5 w-[95%] m-auto md:w-[35%] md:mr-5 lg:mr-40 shadow-xl rounded-xl">
      <form onSubmit={handleSubmit}>
        <div className="lg:flex items-center lg:gap-5">
          <label htmlFor="firstname" className="flex flex-col pt-3">
            First name
            <input
              className="border rounded-xl p-4 md:p-2"
              type="text"
              id="firstname"
              name="firstname"
              placeholder="John"
              required
              value={formData.firstname}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="lastname" className="flex flex-col pt-3">
            Last name
            <input
              className="border rounded-xl p-4 md:p-2"
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Doe"
              required
              value={formData.lastname}
              onChange={handleChange}
            />
          </label>
        </div>

        <label htmlFor="email" className="flex flex-col pt-3">
          Work Email*
          <input
            className="border rounded-xl p-4 md:p-2"
            type="text"
            id="email"
            name="email"
            placeholder="name@yourcompany.co.za"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="phone-number" className="flex flex-col pt-3">
          Phone Number*
          <input
            className="border rounded-xl p-4 md:p-2"
            type="text"
            id="phone-number"
            name="phoneNumber"
            placeholder="+27 12 345 6789"
            required
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="company-name" className="flex flex-col pt-3">
          Company Name*
          <input
            className="border rounded-xl p-4 md:p-2"
            type="text"
            id="company-name"
            name="companyName"
            placeholder="Your Company"
            required
            value={formData.companyName}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="message" className="flex flex-col pt-3">
          Write your message
          <textarea
            name="message"
            id="message"
            className="border rounded-xl p-3"
            placeholder="write us your message here"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </label>
        <button
          type="submit"
          className="p-5 mt-3 w-full md:w-50 lg:w-60 md:hover:opacity-80 bg-customPink rounded-xl text-white text-[20px]"
        >
          send message
        </button>
      </form>
    </div>
  );
}
