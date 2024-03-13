import React from "react";
import Link from "next/link";
const testYourSelf = () => {
  return (
    <div className="text-center">
      <h1 className=" mt-5 text-3xl text-center">Welcome</h1>
      
      <div className="mt-5">
      <Link
        className="mt-5 text-center hover:bg-red-300 border p-4 border-gray-400"
        href="/test"
      >
        Lets Start
      </Link>
      </div>
    </div>
  );
};

export default testYourSelf;
