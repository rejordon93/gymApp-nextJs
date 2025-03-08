import React from "react";
import ProfileInfo from "./components/ProfileInfo";
import ProfileLowerBtn from "./components/ProfileLowerBtns";

export default function GymHomePage() {
  return (
    <div>
      {/* Component to display profile information */}
      <ProfileInfo />
      {/* Lower section buttons for profile actions */}
      <ProfileLowerBtn />
    </div>
  );
}
