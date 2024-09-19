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
            We're here to make your fitness journey the absolute best it can be!
          </h1>
          <p className="text-lg text-gray-700">
            365 Fitness has been in the 425 community for over 30 years. As we
            have expanded over the years — from Bothell to Redmond and finally
            Issaquah — our vision has always stayed the same.
          </p>
          <Link href={"/"}>
            <button className="px-8 py-3 bg-indigo-600 text-center text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition duration-300">
              Learn More
            </button>
          </Link>
        </div>

        {/* Equipment Section */}
        <div className="md:col-span-2 bg-[#007874] p-8 rounded-lg shadow-md space-y-6">
          <h1 className="text-4xl font-bold text-white text-center">
            LATEST & GREATEST EQUIPMENT
          </h1>
          <p className="text-lg text-white text-center">
            With a vast array of cutting-edge equipment and technologies
            alongside traditional workout gear, you'll always have full access
            to all the tools you need at any 365 Fitness location.
          </p>
          <ul className="list-none space-y-4 text-center">
            <li className="flex items-center justify-center text-white text-lg">
              <FaCheckCircle className="text-green-400 mr-3" /> Heart-Pumping
              Cardio Machines
            </li>
            <li className="flex items-center justify-center text-white text-lg">
              <FaCheckCircle className="text-green-400 mr-3" /> Strength
              Training Equipment
            </li>
            <li className="flex items-center justify-center text-white text-lg">
              <FaCheckCircle className="text-green-400 mr-3" /> Complete Range
              of Free Weights
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
