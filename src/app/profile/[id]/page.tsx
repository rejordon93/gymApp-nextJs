import React from "react";

type Params = {
  id: number;
};

type UserProfilePageProps = {
  params: Params;
};

export default function UserProfilePage({ params }: UserProfilePageProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <p className="text-4xl">
        Profile page{" "}
        <span className="p-2 rounded bg-orange-500 text-white">
          {params.id}
        </span>
      </p>
    </div>
  );
}
