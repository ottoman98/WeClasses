import { Link } from "react-router-dom";
import logo from "../../assets/logos/Recurso 8@3x.png";

import { classe } from "../../types/classeTypes";
import PayPal from "../../utils/Paypal";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const initialOptions = {
  clientId:
    "AbkOj5FnHZxkpDOwTSU78QD7dwRSFjJC7TniWktQwO4ij9sOS5HP-cVZxS4X6ZqCAlJh-BTzJlRZngTG",
  currency: "",
  intent: "capture",
};

function Resume({ data }: { data: classe }) {
  console.log(data);
  return (
    <>
      <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
        <Link to="/">
          <img className="w-32" src={logo} alt="" />
        </Link>
        <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
          <div className="relative">
            <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
              <li className="flex items-center space-x-3 text-left sm:space-x-4">
                <a
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2"
                  href="#"
                >
                  2
                </a>
                <span className="font-semibold text-gray-900">Payment</span>
              </li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <li className="flex items-center space-x-3 text-left sm:space-x-4">
                <a
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white"
                  href="#"
                >
                  3
                </a>
                <span className="font-semibold text-gray-500">Resume</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div className="px-4 pt-8">
          <p className="text-xl font-medium">Order Summary</p>
          <p className="text-gray-400">Check your items.</p>
          <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
            <div className="flex gap-4">
              <img
                className="w-20"
                src="https://avatars.preply.com/i/logos/i/logos/avatar_tk4lkw3cb3n.jpg"
                alt=""
              />
              <div className="flex flex-col gap-2">
                <span className="text-slate-500">
                  {data.language == "en" ? "English" : "spanish"}
                </span>
                <span className="text-4xl">{data.teacherName}</span>
              </div>
            </div>
            <div className="border-y-2 flex flex-col gap2">
              <span className="font-bold">
                {new Date(data.date).toLocaleDateString() +
                  " " +
                  new Date(data.date).toLocaleTimeString()}
              </span>
              <span className="font-thin">Time is based on your location</span>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="font-bold text-2xl">Your order</h2>
              <ul className="flex flex-col gap-3">
                <li className="flex justify-between">
                  <span>{data.duration} hours lesson</span>
                  <span className="font-bold">{data.price} $</span>
                </li>
                <li className="flex justify-between">
                  <span>Processing fee</span>
                  <span className="font-bold">{data.price * 0.056} $</span>
                </li>
              </ul>
              <li className="flex justify-between">
                <span className="font-bold">Total</span>
                <span className="font-bold">
                  {data.price * 0.056 + data.price} $
                </span>
              </li>
            </div>
          </div>
        </div>
        <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
          <PayPalScriptProvider options={initialOptions}>
            <PayPal price={`${data.price}`} id={data._id} />
          </PayPalScriptProvider>
        </div>
      </div>
    </>
  );
}

export default Resume;
