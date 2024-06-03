import React from "react";

export default function SendMessageForm() {
  return (
    <>
      <div className="border p-5 w-[95%] m-auto shadow-xl rounded-xl">
        <form>
          <label htmlFor="firstname" className="flex flex-col pt-5">
            First name
            <input
              className="border rounded-xl p-4"
              type="text"
              id="firstname"
              name="firstname"
              placeholder="John"
              required
            />
          </label>

          <label htmlFor="lastname" className="flex flex-col pt-3">
            Last name
            <input
              className="border rounded-xl p-4"
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Doe"
              required
            />
          </label>

          <label htmlFor="lastname" className="flex flex-col pt-3">
            Work Email*
            <input
              className="border rounded-xl p-4"
              type="text"
              id="lastname"
              name="lastname"
              placeholder="name@yourcompany.co.za"
              required
            />
          </label>

          <label htmlFor="lastname" className="flex flex-col pt-3">
            Phone Number*
            <input
              className="border rounded-xl p-4"
              type="text"
              id="lastname"
              name="lastname"
              placeholder="+27 12 345 6789"
              required
            />
          </label>

          <label htmlFor="lastname" className="flex flex-col pt-3">
            Company Name*
            <input
              className="border rounded-xl p-4"
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Your Company"
              required
            />
          </label>

          <label htmlFor="lastname" className="flex flex-col pt-3">
            Write your message
            <textarea
              name="message"
              id=""
              cols={30}
              rows={10}
              className="border rounded-xl"
              required
            ></textarea>
          </label>
          <button className="p-5 mt-3 w-full bg-customPink rounded-xl text-white text-[20px]">
            send message
          </button>
        </form>
      </div>
    </>
  );
}
