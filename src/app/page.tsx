import { FaCheckCircle } from "react-icons/fa"; // Ensure you have react-icons installed
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Large Image */}
        <div className="flex justify-center">
          <img
            className="rounded-lg h-[743px] object-cover shadow-lg"
            src="https://images.unsplash.com/photo-1637430308606-86576d8fef3c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Gym"
          />
        </div>

        {/* Two Smaller Images */}
        <div className="flex flex-col gap-6">
          <img
            className="rounded-lg object-cover shadow-lg h-[360px]"
            src="https://images.unsplash.com/photo-1579364046732-c21c2177730d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Gym"
          />
          <img
            className="rounded-lg object-cover shadow-lg h-[360px]"
            src="https://images.unsplash.com/photo-1608202409296-a9cad928dd2f?q=80&w=2049&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Gym"
          />
        </div>

        {/* Membership Section */}
        <div
          className="md:col-span-2 text-center p-8 rounded-lg shadow-md"
          style={{ backgroundColor: "rgb(0, 120, 114)" }}
        >
          <h1 className="text-3xl font-bold text-white mb-4">
            MONTH-TO-MONTH MEMBERSHIPS, CANCEL ANYTIME
          </h1>
          <Link href={"/signup"}>
            <button className="px-6 py-3 bg-indigo-600 text-white text-lg font-semibold rounded-md shadow-md hover:bg-indigo-700 transition duration-300">
              JOIN NOW
            </button>
          </Link>
        </div>

        {/* Welcome Message Section */}
        <div className="md:col-span-2 bg-white p-8 rounded-lg shadow-md space-y-6">
          <h1 className="text-4xl font-bold text-gray-800">
            Were here to make your fitness journey the absolute best it can be!
          </h1>
          <p className="text-lg text-gray-700">
            365 Fitness has been in the 425 community for over 30 years. As we
            have expanded over the years — from Bothell to Redmond and finally
            Issaquah — our vision has always stayed the same.
          </p>
          {/* Button wrapper for centering */}
          <div className="flex justify-center">
            <Link href={"/"}>
              <button className="px-6 py-3 bg-indigo-600 text-white text-lg font-semibold rounded-md shadow-md hover:bg-indigo-700 transition duration-300">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        {/* Equipment Section */}
        <div className="md:col-span-2 bg-[#007874] p-8 rounded-lg shadow-md space-y-6 flex flex-col md:flex-row items-start">
          <div className="md:w-1/2 space-y-4">
            <h1 className="text-4xl font-bold text-white">
              LATEST & GREATEST EQUIPMENT
            </h1>
            <p className="text-lg text-white max-w-[90%]">
              With a vast array of cutting-edge equipment and technologies
              alongside traditional workout gear, youll always have full access
              to all the tools you need at any 365 Fitness location.
            </p>
          </div>

          {/* Adjusted right section for the list */}
          <div className="md:w-1/2 flex justify-end">
            <ul className="list-none space-y-4 w-full max-w-[80%]">
              <li className="flex items-center text-white text-lg border border-white p-4 rounded-lg w-full transition duration-300 hover:bg-green-500 hover:text-black">
                <FaCheckCircle className="text-green-400 mr-3" />
                <span className="flex-1 text-left">
                  Heart-Pumping Cardio Machines
                </span>
              </li>
              <li className="flex items-center text-white text-lg border border-white p-4 rounded-lg w-full transition duration-300 hover:bg-green-500 hover:text-black">
                <FaCheckCircle className="text-green-400 mr-3" />
                <span className="flex-1 text-left">
                  Strength Training Equipment
                </span>
              </li>
              <li className="flex items-center text-white text-lg border border-white p-4 rounded-lg w-full transition duration-300 hover:bg-green-500 hover:text-black">
                <FaCheckCircle className="text-green-400 mr-3" />
                <span className="flex-1 text-left">
                  Complete Range of Free Weights
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
