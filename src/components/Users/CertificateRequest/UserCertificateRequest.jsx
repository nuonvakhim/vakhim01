import React from "react";
import HeadContent from "./HeadContent";
import ProgressCertificateRequest from "./ProgressCertificateRequest";
import { Outlet } from "react-router-dom";

export default function UserCertificateRequest() {
  return (
    <div>
      <HeadContent />
      <ProgressCertificateRequest />
      <div className="bg-white pl-[25px] pt-[16px] rounded-myrounded shadow-myshadow mb-4 pb-10">
        <Outlet />
      </div>
    </div>
  );
}
