import React, { useContext, useState } from "react";
import BarChartAdmin from "./Chart/BarChartAdmin";
import OverView from "./OverView";
import TableUserList from "./TableUserList";
import WelcomeBar from "./WelcomeBar";
import profile from "/src/assets/Images/Base.svg";
const AdminDashboard = () => {
  const [data, setData] = useState([
    {
      id: 1,
      fullName: "Sim Sokhen",
      userName: "sokhen70",
      email: "simsokhen70@gmail.com",
      dateOfBrith: "30-09-2023",
      phoneNumber: "012 345 678",
      profile: profile,
    },
    {
      id: 2,
      fullName: "Sim Sokhen",
      userName: "sokhen70",
      email: "simsokhen70@gmail.com",
      phoneNumber: "012 345 678",
      dateOfBrith: "30-09-2023",
      profile: profile,
    },
    {
      id: 3,
      fullName: "Sim Sokhen",
      userName: "sokhen70",
      email: "simsokhen70@gmail.com",
      dateOfBrith: "30-09-2023",
      phoneNumber: "012 345 678",
      profile: profile,
    },
    {
      id: 4,
      fullName: "Sim Sokhen",
      userName: "sokhen70",
      email: "simsokhen70@gmail.com",
      dateOfBrith: "30-09-2023",
      phoneNumber: "012 345 678",
      profile: profile,
    },
    {
      id: 5,
      fullName: "Sim Sokhen",
      userName: "sokhen70",
      email: "simsokhen70@gmail.com",
      dateOfBrith: "30-09-2023",
      phoneNumber: "012 345 678",
      profile: profile,
    },
    {
      id: 6,
      fullName: "Sim Sokhen",
      userName: "sokhen70",
      email: "simsokhen70@gmail.com",
      dateOfBrith: "30-09-2023",
      phoneNumber: "012 345 678",
      profile: profile,
    },
    {
      id: 7,
      fullName: "Sim Sokhen",
      userName: "sokhen70",
      email: "simsokhen70@gmail.com",
      dateOfBrith: "30-09-2023",
      phoneNumber: "012 345 678",
      profile: profile,
    },
  ]);

  return (
    <div className="w-full">
      <WelcomeBar />
      <div className="flex gap-[18px] mt-4 mb-4 ">
        <BarChartAdmin />
        <OverView />
      </div>
      <TableUserList data={data} setData={setData} />
    </div>
  );
};

export default AdminDashboard;
