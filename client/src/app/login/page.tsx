import FormLogin from "@/components/FormLogin";
import React from "react";

function page() {
  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <div className="bg-moonstone-400 rounded-3xl flex flex-col items-center w-80 p-6">
        <span className="bg-pennBlueD-100 p-7 rounded-full mb-5">
          <img src="logo.svg" width={100} height={100} alt="logo" className="translate-y-2"/>
        </span>
        <FormLogin />
      </div>
    </div>
  );
}

export default page;
