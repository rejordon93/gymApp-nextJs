export default function Home() {
  return (
    <div className="container mx-auto text-center mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center">
          <img
            className="rounded-lg h-[743px] ml-8"
            src="https://images.unsplash.com/photo-1637430308606-86576d8fef3c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Gym"
          />
        </div>
        <div className="flex flex-col gap-4">
          <img
            className="rounded-lg"
            src="https://images.unsplash.com/photo-1579364046732-c21c2177730d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Gym"
          />
          <img
            className="rounded-lg"
            src="https://images.unsplash.com/photo-1608202409296-a9cad928dd2f?q=80&w=2049&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Gym"
          />
        </div>
      </div>
    </div>
  );
}
