import React from "react";
import BarOfCreatePlate from "./BarOfCreatePlate";
import TableCreateTemplate from "./TableCreateTemplate";
import { Outlet, useLocation } from "react-router";

function CreateTemplate() {
  const activeTab = useLocation();
  return (
    <div>
      {activeTab.pathname === "/admin/certificate-manage/create-template/" && (
        <BarOfCreatePlate />
      )}
      <Outlet />
    </div>
  );
}

export default CreateTemplate;
