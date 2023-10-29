import React from "react";

export default function WelcomeUser() {
  const date = new Date();
  const formattedDate = date
    .toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
    .replace(/ /g, " ");
  console.log(formattedDate);
  return (
    <div className="bg-white pl-[25px] pt-[16px] pb-[17px] rounded-myrounded shadow-myshadow mb-4">
      <div className="text-secondary w-full">{formattedDate}</div>
      <div className="text-icons font-bold text-lg">
        {" "}
        Welcome back, {" "}
        <span className="text-bold text-primary">Sim Sokhen</span> !{" "}
      </div>
    </div>
  );
}
