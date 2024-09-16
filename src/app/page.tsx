import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
            className="rounded-lg object-cover shadow-lg"
            src="https://images.unsplash.com/photo-1579364046732-c21c2177730d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Gym"
          />
          <img
            className="rounded-lg object-cover shadow-lg"
            src="https://images.unsplash.com/photo-1608202409296-a9cad928dd2f?q=80&w=2049&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Gym"
          />
        </div>
      </div>

      {/* Membership Section */}
      <div className="mt-12 text-center">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Memberships</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Membership Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              Union Black Card Classic
            </h2>
            <span className="text-gray-500 text-sm block mb-2">
              Starting at
            </span>
            <p className="text-lg text-gray-600">
              $15.99 / mo - Our standard plan with unlimited access to your home
              gym.
            </p>

            <button className="mt-4 ml-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
              <Link href={"/signup"}>Join Now</Link>
            </button>
          </div>

          {/* Membership Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              Union Red Card
            </h2>
            <span className="text-green-500 text-sm block mb-2">
              Best Value
            </span>
            <span className="text-gray-500 text-sm block mb-2">
              Starting at
            </span>
            <p className="text-lg text-gray-600">
              $29.99 / mo - Access to any of our gyms.
            </p>

            <button className="mt-4 ml-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
              <Link href={"/signup"}>Join Now</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
