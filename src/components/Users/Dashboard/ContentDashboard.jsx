import { Button } from "antd";
import React from "react";

import VerifiedIcon from "@mui/icons-material/Verified";
import CancelIcon from "@mui/icons-material/Cancel";
import TopicIcon from "@mui/icons-material/Topic";
import ViewListIcon from '@mui/icons-material/ViewList';
import { NavLink, useLocation } from "react-router-dom";

export default function ContentDashboard() {
  const activeTab = useLocation();
  return (
    <div className="w-fit p-2 bg-primary flex gap-5 rounded-myrounded mb-4">
      <NavLink to="">
        <Button
          variant="contained"
          style={{
            backgroundColor: `${
              activeTab.pathname === "/user" ? "white" : "#004461"
            }`,
            color: `${activeTab.pathname === "/user" ? "#004461" : "white"}`,
            width: "8rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <TopicIcon
            className={`${
              activeTab.pathname === "/user" ? "text-primary" : "text-white"
            }`}
            style={{
              width: "15px",
              height: "15px",
            }}
          />
          Total Certificate
        </Button>
      </NavLink>
      <NavLink to="cert-list">
        <Button
          variant="contained"
          style={{
            backgroundColor: `${
              activeTab.pathname === "/user/cert-list" ? "white" : "#004461"
            }`,
            color: `${
              activeTab.pathname === "/user/cert-list" ? "#004461" : "white"
            }`,
            width: "8rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <ViewListIcon
            className={`${
              activeTab.pathname === "/user/cert-list"
                ? "text-primary"
                : "text-white"
            }`}
            style={{
              width: "15px",
              height: "15px",
            }}
          />
          View as list
        </Button>
      </NavLink>
      {/* <NavLink to="rejected">
        <Button
          variant="contained"
          style={{
            backgroundColor: `${
              activeTab.pathname === "/user/rejected" ? "white" : "#004461"
            }`,
            color: `${
              activeTab.pathname === "/user/rejected" ? "#004461" : "white"
            }`,
            width: "8rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <CancelIcon
            className={`${
              activeTab.pathname === "/user/rejected"
                ? "text-primary"
                : "text-white"
            }`}
            style={{
              width: "15px",
              height: "15px",
            }}
          />
          Rejected
        </Button>
      </NavLink> */}
    </div>
  );
}
