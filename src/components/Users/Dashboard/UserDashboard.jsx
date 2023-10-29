import React from "react";
import WelcomeUser from "./WelcomeUser";
import ContentDashboard from "./ContentDashboard";
import { Outlet } from "react-router-dom";

export default function UserDashboard() {
  return (
    <div>
      <WelcomeUser />
      <ContentDashboard />
      <div className="bg-white pt-[16px] pb-[17px] rounded-myrounded shadow-myshadow mb-4 px-8 py-8">
        <Outlet />
      </div>
    </div>
  );
}
