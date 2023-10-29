import React from "react";
import { Button } from "antd";
import { NavLink, useLocation } from "react-router-dom";

export default function ProgressCertificateRequest() {
  const activeTab = useLocation();
  return (
    <div className="w-fit p-2 bg-primary flex gap-5 rounded-myrounded mb-4">
      <NavLink to="all">
        <Button
          variant="contained"
          style={{
            backgroundColor: `${
              activeTab.pathname === "/user/certificate-request/all"
                ? "white"
                : "#004461"
            }`,
            color: `${
              activeTab.pathname === "/user/certificate-request/all"
                ? "#004461"
                : "white"
            }`,
            width: "8rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <div
            className={`w-5 h-5 rounded-full  flex justify-center items-center ${
              activeTab.pathname === "/user/certificate-request/all"
                ? "bg-secondary text-white "
                : "bg-white text-primary"
            }`}
          >
            11
          </div>
          All
        </Button>
      </NavLink>
      <NavLink to="requesting">
        <Button
          variant="contained"
          style={{
            backgroundColor: `${
              activeTab.pathname === "/user/certificate-request/requesting"
                ? "white"
                : "#004461"
            }`,
            color: `${
              activeTab.pathname === "/user/certificate-request/requesting"
                ? "#004461"
                : "white"
            }`,
            width: "8rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <div
            className={`w-5 h-5 rounded-full  flex justify-center items-center ${
              activeTab.pathname === "/user/certificate-request/requesting"
                ? "bg-secondary text-white "
                : "bg-white text-primary"
            }`}
          >
            3
          </div>
          Requesting
        </Button>
      </NavLink>
      <NavLink to="rejected">
        <Button
          variant="contained"
          style={{
            backgroundColor: `${
              activeTab.pathname === "/user/certificate-request/rejected"
                ? "white"
                : "#004461"
            }`,
            color: `${
              activeTab.pathname === "/user/certificate-request/rejected"
                ? "#004461"
                : "white"
            }`,
            width: "8rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <div
            className={`w-5 h-5 rounded-full  flex justify-center items-center ${
              activeTab.pathname === "/user/certificate-request/rejected"
                ? "bg-secondary text-white "
                : "bg-white text-primary"
            }`}
          >
            2
          </div>
          Rejected
        </Button>
      </NavLink>
      <NavLink to="approved">
        <Button
          variant="contained"
          style={{
            backgroundColor: `${
              activeTab.pathname === "/user/certificate-request/approved"
                ? "white"
                : "#004461"
            }`,
            color: `${
              activeTab.pathname === "/user/certificate-request/approved"
                ? "#004461"
                : "white"
            }`,
            width: "8rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <div
            className={`w-5 h-5 rounded-full  flex justify-center items-center ${
              activeTab.pathname === "/user/certificate-request/approved"
                ? "bg-secondary text-white "
                : "bg-white text-primary"
            }`}
          >
            3
          </div>
          Approved
        </Button>
      </NavLink>
      <NavLink to="verified">
        <Button
          variant="contained"
          style={{
            backgroundColor: `${
              activeTab.pathname === "/user/certificate-request/verified"
                ? "white"
                : "#004461"
            }`,
            color: `${
              activeTab.pathname === "/user/certificate-request/verified"
                ? "#004461"
                : "white"
            }`,
            width: "8rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <div
            className={`w-5 h-5 rounded-full  flex justify-center items-center ${
              activeTab.pathname === "/user/certificate-request/verified"
                ? "bg-secondary text-white "
                : "bg-white text-primary"
            }`}
          >
            3
          </div>
          Verified
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
