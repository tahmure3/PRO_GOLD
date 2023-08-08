"use client";
import axios from "axios";
import React, { useState } from "react";

export default function FormLogin() {
  // console.log(process.env.BASE_URL);
  const [data, setData] = useState({
    val1: "",
    val2: "",
    val3: "",
  });
  function changeHandler(e: any, id: string) {
    setData((value) => ({ ...value, [e.target.name]: e.target.value }));
    if (e.target.name === "val1" && e.target.value.length === 2) {
      document.getElementById(id)?.focus();
    }
    if (e.target.name === "val2" && e.target.value.length === 3) {
      document.getElementById(id)?.focus();
    }
    if (e.target.name === "val3" && e.target.value.length === 4) {
      document.getElementById(id)?.focus();
    }
  }
  async function submitHandler(e: any) {
    e.preventDefault();
    const mobile = `09${data.val1}${data.val2}${data.val3}`;
    if (mobile.length === 11) {
      console.log(21);
      getOtp({ mobile });
    }
  }
  return (
    <form className="flex flex-col items-center" onSubmit={submitHandler}>
      <label htmlFor="mobile" className="mb-3">
        شماره موبایل
        <span dir="ltr">
          <span>09</span>
          <input
            value={data.val1}
            name="val1"
            type="text"
            maxLength={2}
            className="w-7 mx-1 text-center focus:outline-1 outline-slate-400"
            onChange={(e) => changeHandler(e, "text1")}
          />
          <input
            value={data.val2}
            id="text1"
            name="val2"
            type="text"
            maxLength={3}
            className="w-9 mx-1 text-center focus:outline-1 outline-slate-400"
            onChange={(e) => changeHandler(e, "text2")}
          />
          <input
            value={data.val3}
            id="text2"
            name="val3"
            type="text"
            maxLength={4}
            className="w-11 mx-1 text-center focus:outline-1 outline-slate-400"
            onChange={(e) => changeHandler(e, "btn1")}
          />
        </span>
      </label>
      <button
        id="btn1"
        type="submit"
        className="bg-moonstoneD-400 text-moonstone-200 rounded-lg py-2 w-[calc(100%-40px)]"
      >
        ورود
      </button>
    </form>
  );
}

async function getOtp({ mobile }: { mobile: string }) {
  console.log(22);
  const url = `${process.env.BASE_URL}/viewer/send-otp`;
  const res = await axios.post(url, { mobile });
  console.log(res.data);
}
